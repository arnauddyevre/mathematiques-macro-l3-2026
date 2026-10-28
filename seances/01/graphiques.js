/* Graphiques de la séance 1. Données, commandes et états imprimables locaux.
   Réutilise Charts et Deck sans modifier leur moteur. Aucun accès réseau. */
(function () {
  'use strict';
  const C = window.Charts;
  const instances = new Map();
  const modes = ['Niveaux', 'Échelle logarithmique', 'ln(y)'];
  const fmt = (value, digits = 2) => C.fmt(value, digits);
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const clone = value => JSON.parse(JSON.stringify(value));
  const sample = (start, end, count, fn) => Array.from({length: count + 1}, (_, index) => {
    const x = start + (end - start) * index / count;
    return [x, fn(x)];
  });
  const integerPoints = (last, fn) => Array.from({length:last + 1}, (_, n) => [n, fn(n)]);
  const range = (id, label, min, max, step, unit = '', digits = 1) => ({id, label, min, max, step, unit, digits});
  const choice = (id, label, values) => ({id, label, values});
  const rate = value => Number(value) / 100;
  let printing = false;
  let savedPrint = null;
  let savedReading = null;
  let snapshots = null;
  let serial = 0;

  function legend(view, entries) {
    view.legend.replaceChildren();
    entries.forEach(([label, color, dash]) => {
      const item = document.createElement('span');
      const line = document.createElement('i');
      line.style.borderColor = C.col(color);
      if (dash) line.style.borderStyle = 'dashed';
      item.append(line, document.createTextNode(label));
      view.legend.append(item);
    });
  }

  function line(view, options) {
    const opts = {...options, width: view.width, height: view.height,
      animate: false, legend: false, hover: !view.static,
      margin: {l: 82, r: 36, t: 48, b: 64, ...options.margin}};
    for (const series of opts.series) {
      if (!series.data.length || series.data.some(([x, y]) => !Number.isFinite(x) || !Number.isFinite(y))) {
        throw new Error('Le graphique exige des observations finies et non vides.');
      }
      if (opts.y && opts.y.log && series.data.some(([, y]) => y <= 0)) {
        throw new Error('L’échelle logarithmique exige des niveaux strictement positifs.');
      }
    }
    const result = C.line(view.canvas, opts);
    // Une suite est représentée par ses points, sans relier artificiellement les rangs.
    const paths = [...result.svg.querySelectorAll('.ch-line')];
    opts.series.forEach((series, index) => { if (series.pointOnly) paths[index]?.remove(); });
    view.canvas.setAttribute('aria-label', opts.aria || opts.yTitle || 'Graphique interactif');
    const readout = view.canvas.querySelector('.ch-readout');
    if (readout) { readout.setAttribute('role', 'status'); readout.setAttribute('aria-live', 'polite'); }
    return result;
  }

  function quantities(view, pairs) {
    view.summary.innerHTML = pairs.map(([label, value]) =>
      '<span><span class="mg-value-label">' + esc(label) + '</span><strong>' + esc(value) + '</strong></span>'
    ).join('');
  }

  function logGaps(chart, factor) {
    const ns='http://www.w3.org/2000/svg';
    const group=document.createElementNS(ns,'g');group.setAttribute('pointer-events','none');group.setAttribute('aria-hidden','true');
    [[50,'blue'],[100,'amber']].forEach(([start,color])=>{
      const x0=chart.S.X(start),x=chart.S.X(start*factor),y0=chart.S.Y(Math.log(start)),y1=chart.S.Y(Math.log(start*factor));
      const add=(attrs)=>{const element=document.createElementNS(ns,'line');Object.entries(attrs).forEach(([key,value])=>element.setAttribute(key,value));group.append(element);};
      add({x1:x0,y1:y0,x2:x,y2:y0,stroke:C.col(color),'stroke-width':1.5,'stroke-dasharray':'4 5',opacity:.55});
      add({x1:x,y1:y0,x2:x,y2:y1,stroke:C.col(color),'stroke-width':2.2});
      for(const [y,direction] of [[y0,-1],[y1,1]])for(const side of [-1,1])add({x1:x,y1:y,x2:x+side*5,y2:y+direction*7,stroke:C.col(color),'stroke-width':2.2});
    });
    chart.svg.append(group);
  }

  function growthSeries(state, last = 30) {
    const r = rate(state.r);
    if (r <= -1) throw new Error('Le taux ordinaire doit être supérieur à −100 %.');
    const g = Math.log1p(r);
    return {r, g, annual: integerPoints(last, n => 100 * (1 + r) ** n),
      continuous: sample(0, last, last * 8, t => 100 * Math.exp(g * t))};
  }

  function levelMode(view, series, mode, options = {}) {
    const transformed = mode === 'ln(y)';
    const logarithmic = mode === 'Échelle logarithmique';
    const values = series.flatMap(item => item.data.map(([, y]) => y));
    if (!values.length || values.some(y => !Number.isFinite(y) || y <= 0)) {
      throw new Error('Les trois représentations utilisent les mêmes niveaux strictement positifs.');
    }
    const data = series.map(item => ({...item,
      data: item.data.map(([x, y]) => [x, transformed ? Math.log(y) : y]),
      format: y => fmt(y, transformed ? 3 : options.levelDigits ?? 1)
    }));
    const ys = data.flatMap(item => item.data.map(([, y]) => y));
    const lo = Math.min(...ys), hi = Math.max(...ys), span = hi - lo;
    const pad = span > 0 ? span * .12 : Math.max(Math.abs(hi) * .08, .1);
    const xs = data.flatMap(item => item.data.map(([x]) => x));
    let y;
    if (logarithmic) {
      y = {log:true, min:Math.min(...values) * .85, max:Math.max(...values) * 1.15, digits:0};
      if(y.max/y.min<10)y.ticks=C.niceTicks(y.min,y.max,6).filter(tick=>tick>=y.min&&tick<=y.max);
    }
    else y = {min:transformed ? lo - pad : Math.max(0, lo - pad), max:hi + pad, digits:transformed ? 2 : 0};
    const result = line(view, {
      x:{min:Math.min(...xs), max:Math.max(...xs), ticks:options.ticks || [0,10,20,30,40,50], hoverFormat:x=>options.calendar ? String(x) : fmt(x, 1) + ' ans'},
      y, xTitle:options.calendar ? 'Année' : 'Temps (années)',
      yTitle:transformed ? 'ln(y)' : options.unit || 'Niveau y (indice)', series:data,
      aria:mode + '. ' + (options.description || 'Même trajectoire, mêmes paramètres.')
    });
    legend(view, series.map(item => [item.name, item.color, item.dash]));
    return result;
  }

  const definitions = {
    variations: {
      defaults:{step:0}, height:310,
      controls:[],
      draw(view, state) {
        const levels = [100,80,96], labels = ['Départ','Après −20 %','Puis +20 %'];
        const step = Math.max(0,Math.min(2,state.step));
        C.bars(view.canvas, {width:view.width, height:view.height, animate:false,
          y:{min:0,max:110,ticks:[0,20,40,60,80,100]}, yTitle:'Indice de production',
          margin:{l:70,r:24,t:48,b:56},
          data:levels.slice(0,step+1).map((value,index)=>({label:labels[index],value,color:index===step?'amber':'blue'}))});
        legend(view, []);
        quantities(view, [['Niveau',fmt(levels[step],0)],['Écart au départ',fmt(levels[step]-100,0)+' %']]);
        view.note.textContent = ['On part de 100.','100 × 0,80 = 80.','80 × 1,20 = 96. La hausse ne compense pas la baisse.'][step];
      }
    },
    addition: {
      defaults:{increment:2,r:2},
      controls:[range('increment','Ajout chaque année',0,10,.5,' unités',1),range('r','Taux ordinaire annuel',0,10,.5,' %',1)],
      draw(view,state) {
        const added=integerPoints(30,n=>100+state.increment*n),multiplied=integerPoints(30,n=>100*(1+rate(state.r))**n);
        line(view,{x:{min:0,max:30,ticks:[0,10,20,30]},y:{min:0,max:Math.max(added[30][1],multiplied[30][1])*1.12},
          xTitle:'Temps (années)',yTitle:'Indice de production',
          series:[{name:'Ajout constant',data:added,color:'amber',dash:'7 5',format:y=>fmt(y,2)},
            {name:'Facteur constant',data:multiplied,color:'blue',format:y=>fmt(y,2)}]});
        legend(view,[['Ajout constant','amber',true],['Facteur constant','blue']]);
        quantities(view,[['Après 30 ans · ajout',fmt(added[30][1],2)],['Après 30 ans · facteur',fmt(multiplied[30][1],2)]]);
        view.note.textContent='Départ 100 : ajout de '+fmt(state.increment,1)+' unités ou multiplication par '+fmt(1+rate(state.r),3)+' chaque année.';
      }
    },
    inverse: {
      defaults:{a:2}, controls:[range('a','Valeur positive x',.25,3.5,.05,'',2)],
      draw(view,state) {
        const a=state.a,l=Math.log(a);
        line(view,{x:{min:-2,max:4,ticks:[-2,-1,0,1,2,3,4]},y:{min:-2,max:4,ticks:[-2,-1,0,1,2,3,4]},
          xTitle:'Entrée',yTitle:'Sortie',
          series:[{name:'ln(x)',data:sample(Math.exp(-2),4,180,Math.log),color:'blue',format:y=>fmt(y,3)},
            {name:'exp(x)',data:sample(-2,Math.log(4),180,Math.exp),color:'amber',format:y=>fmt(y,3)},
            {name:'y = x',data:[[-2,-2],[4,4]],color:'slate',dash:'5 6',format:y=>fmt(y,3)}],
          markers:[{x:a,y:l,color:'blue'},{x:l,y:a,color:'amber'}]});
        legend(view,[['ln(x)','blue'],['exp(x)','amber'],['y = x','slate',true]]);
        quantities(view,[['x',fmt(a,2)],['ln(x)',fmt(l,4)],['exp(ln(x))',fmt(Math.exp(l),2)]]);
        view.note.textContent='Les coordonnées des deux points s’échangent.';
      }
    },
    'log-ratios': {
      defaults:{factor:2},controls:[range('factor','Facteur commun',1.2,3,.1,'',1)],
      draw(view,state) {
        const q=state.factor;
        const chart=line(view,{x:{min:25,max:320,ticks:[50,100,150,200,250,300]},y:{min:3.2,max:5.9,ticks:[3.5,4,4.5,5,5.5],digits:1},
          xTitle:'Niveau y',yTitle:'ln(y)',
          series:[{name:'ln(y)',data:sample(25,320,200,Math.log),color:'blue',format:y=>fmt(y,4)}],
          markers:[[50,'blue'],[50*q,'blue'],[100,'amber'],[100*q,'amber']].map(([x,color])=>({x,y:Math.log(x),color}))});
        logGaps(chart,q);
        legend(view,[['Départ 50','blue'],['Départ 100','amber']]);
        quantities(view,[['50 → '+fmt(50*q,0),'Δln(y) = '+fmt(Math.log(q),4)],['100 → '+fmt(100*q,0),'Δln(y) = '+fmt(Math.log(q),4)]]);
        view.note.textContent='Un même rapport donne deux écarts logarithmiques de même hauteur.';
      }
    },
    'log-approx': {
      defaults:{u:.05},controls:[range('u','Variation relative u',-.5,.5,.01,'',2)],
      draw(view,state) {
        const u=state.u,l=Math.log1p(u);
        line(view,{x:{min:-.5,max:.5,ticks:[-.5,-.25,0,.25,.5],format:x=>fmt(x,2)},
          y:{min:-.75,max:.6,ticks:[-.5,-.25,0,.25,.5],digits:2},xTitle:'u (en décimal)',yTitle:'Valeur',
          series:[{name:'ln(1 + u)',data:sample(-.5,.5,200,Math.log1p),color:'blue',format:y=>fmt(y,4)},
            {name:'u',data:[[-.5,-.5],[.5,.5]],color:'amber',dash:'7 5',format:y=>fmt(y,4)}],
          markers:[{x:u,y:l,color:'blue'},{x:u,y:u,color:'amber'}]});
        legend(view,[['ln(1 + u)','blue'],['Approximation u','amber',true]]);
        quantities(view,[['u',fmt(u,2)],['ln(1 + u)',fmt(l,5)],['Erreur absolue',fmt(Math.abs(l-u),5)]]);
        view.note.textContent='Ici u = '+fmt(100*u,0)+' %, avec ln(1 + u) ≈ u seulement près de zéro.';
      }
    },
    tangent: {
      defaults:{x0:2,h:1},controls:[range('x0','Point x₀',1,4,.1,'',1),range('h','Déplacement h',-.5,1,.05,'',2)],
      draw(view,state) {
        const x=state.x0,h=state.h,tangent=t=>x*x+2*x*(t-x),secant=t=>x*x+(2*x+h)*(t-x);
        const lo=Math.max(0,x-1.4),hi=x+1.4;
        const series=[{name:'x²',data:sample(lo,hi,140,t=>t*t),color:'blue',format:y=>fmt(y,3)}];
        if(Math.abs(h)>1e-10)series.push({name:'Sécante',data:sample(lo,hi,40,secant),color:'amber',format:y=>fmt(y,3)});
        series.push({name:'Tangente',data:sample(lo,hi,40,tangent),color:'slate',dash:'7 5',format:y=>fmt(y,3)});
        const all=series.flatMap(s=>s.data.map(([,y])=>y));
        line(view,{x:{min:lo,max:hi,format:t=>fmt(t,1)},y:{min:Math.min(0,...all),max:Math.max(...all)*1.06,format:y=>fmt(y,Number.isInteger(y)?0:1)},
          xTitle:'x',yTitle:'f(x) = x²',series,
          markers:[{x,y:x*x,color:'blue'},...(Math.abs(h)>1e-10?[{x:x+h,y:(x+h)**2,color:'amber'}]:[])]});
        legend(view,series.map(s=>[s.name,s.color,s.dash]));
        quantities(view,[['Δf',fmt(2*x*h+h*h,3)],['Pente sécante',Math.abs(h)<1e-10?'— (h = 0)':fmt(2*x+h,3)],['Dérivée f′(x₀)',fmt(2*x,2)]]);
        view.note.textContent=Math.abs(h)<1e-10?'À h = 0, seule la tangente est définie, sans quotient 0/0.':'Quand h tend vers zéro, la pente de la sécante tend vers '+fmt(2*x,2)+'.';
      }
    },
    growth: {
      defaults:{r:2,view:'Comparer',n:0},height:300,
      controls:[choice('view','Représentation',['Points annuels','Trajectoire continue','Comparer']),range('r','Taux ordinaire annuel r',-5,10,.5,' %',1),range('n','Année atteinte',0,30,1,'',0)],
      draw(view,state) {
        const d=growthSeries(state),series=[];
        if(state.view!=='Points annuels')series.push({name:'Continue',data:d.continuous.filter(([t])=>t<=state.n),color:'blue',points:state.n===0,format:y=>fmt(y,3)});
        if(state.view!=='Trajectoire continue')series.push({name:'Annuelle',data:d.annual.slice(0,state.n+1),color:'amber',points:true,pointOnly:true,format:y=>fmt(y,3)});
        const values=d.annual.map(([,y])=>y),lo=Math.min(...values),hi=Math.max(...values);
        line(view,{x:{min:0,max:30,ticks:[0,10,20,30],hoverFormat:t=>fmt(t,2)+' ans'},
          y:{min:Math.max(0,lo*.9),max:hi*1.12},xTitle:'Temps (années)',yTitle:'Indice de production',series});
        legend(view,series.map(s=>[s.name+(s.pointOnly?' · points':' · courbe'),s.color]));
        quantities(view,[['r annuel',fmt(100*d.r,2)+' %'],['g = ln(1 + r)',fmt(100*d.g,4)+' % par an'],['Année '+state.n,fmt(d.annual[state.n][1],2)]]);
        view.note.textContent='La suite 100(1 + r)ⁿ et la courbe 100 exp(gt) coïncident aux années entières.';
      }
    },
    'log-modes': {
      defaults:{r:2,mode:'Niveaux'},
      controls:[choice('mode','Représentation',modes),range('r','Taux ordinaire annuel r',-5,10,.5,' %',1)],
      draw(view,state) {
        const d=growthSeries(state,50);
        levelMode(view,[{name:'Production fictive',data:d.annual,color:'blue',points:true}],state.mode);
        quantities(view,[['r annuel',fmt(100*d.r,2)+' %'],['g instantané',fmt(100*d.g,4)+' % par an'],['y(50)',fmt(d.annual[50][1],2)]]);
        view.note.textContent=state.mode==='ln(y)'?'Les points représentent ln(y), dans l’unité fixe de l’indice.':state.mode==='Échelle logarithmique'?'Les graduations indiquent les niveaux d’origine, avec un espacement logarithmique.':'Les niveaux y sont tracés sur un axe linéaire, avec y₀ = 100.';
      }
    },
    doubling: {
      defaults:{value:2,convention:'Taux instantané g'},controls:[choice('convention','Convention du taux',['Taux instantané g','Taux annuel r']),range('value','Taux instantané g',.5,10,.5,' %',1)],
      draw(view,state) {
        const annual=state.convention==='Taux annuel r',g=annual?Math.log1p(rate(state.value)):rate(state.value),T=Math.log(2)/g,approx=.7/g,last=Math.ceil(T*1.25);
        const trajectory=sample(0,last,180,t=>100*Math.exp(g*t));
        line(view,{x:{min:0,max:last,ticks:[0,T,last],format:t=>fmt(t,t===0||t===last?0:2),hoverFormat:t=>fmt(t,2)+' ans'},
          y:{min:80,max:Math.max(220,trajectory.at(-1)[1]*1.08),ticks:[100,150,200,250]},xTitle:'Temps (années)',yTitle:'Indice de production',
          series:[{name:'Production',data:trajectory,color:'blue',format:y=>fmt(y,2)}],
          refLines:[{y:200,color:'amber'}],markers:[{x:T,y:200,color:'amber'}]});
        legend(view,[['Trajectoire','blue'],['Niveau doublé : 200','amber',true]]);
        quantities(view,[['T = ln(2) / g',fmt(T,3)+' ans'],['70 / g en %',fmt(approx,2)+' ans'],['g instantané',fmt(100*g,4)+' % par an']]);
        view.note.textContent=annual?'Employer 70 / r en % ajoute l’approximation g ≈ r.':'La règle de 70 remplace 100 ln(2) ≈ 69,315 par 70.';
      }
    },
    pwt: {
      defaults:{mode:'Niveaux'},height:320,
      controls:[choice('mode','Représentation',modes)],
      draw(view,state) {
        const data=window.MATHS_PWT;
        if(!data||!Array.isArray(data.series)||!data.series.length)throw new Error('Les données France–États-Unis ne sont pas chargées.');
        const series=data.series.map((s,index)=>({name:s.name,data:s.data.map(([year,y])=>[year,y]),color:index?'amber':'blue',dash:index?'8 5':null,points:true}));
        levelMode(view,series,state.mode,{calendar:true,ticks:[2000,2005,2010,2015,2020,2023],levelDigits:0,
          unit:'PIB réel par habitant',description:'France et États-Unis, 2000–2023. Niveaux absolus, sans rebasage.'});
        quantities(view,series.map(s=>[s.name+' · 2023',fmt(s.data[s.data.length-1][1],0)]));
        const unit=typeof data.unit==='string'?data.unit:'Dollars internationaux constants de 2021, ancrage PPA de 2021';
        view.note.textContent=(state.mode==='ln(y)'?'ln(y), pour y en ':'')+unit+'.';
        view.source.innerHTML='<a href="https://www.rug.nl/ggdc/productivity/pwt/" target="_blank" rel="noopener noreferrer">Source : Penn World Table 11.0</a> · 2000–2023.';
      }
    }
  };

  function makeView(container, key, staticView = false) {
    const view={container,key,static:staticView,width:700,height:definitions[key].height||320};
    for(const [property,tag,cls] of [['plot','div','mg-plot'],['legend','div','mg-legend'],['summary','div','mg-summary'],['note','p','mg-note'],['source','p','mg-source']]){
      view[property]=document.createElement(tag);view[property].className=cls;container.append(view[property]);
    }
    view.summary.setAttribute('role','status');view.summary.setAttribute('aria-live',staticView?'off':'polite');
    return view;
  }

  function draw(instance, state = instance.state) {
    const {view,key}=instance;
    const focused=!!view.plot.contains(document.activeElement);
    const width=view.container.clientWidth;
    view.width=width>0?Math.min(700,width):700;
    // Le conteneur de Charts est neuf à chaque tracé. Ses écouteurs ne s’accumulent pas.
    view.canvas=document.createElement('div');view.canvas.className='mg-canvas';
    view.plot.replaceChildren(view.canvas);view.plot.style.height=view.height+'px';
    view.source.textContent='';
    definitions[key].draw(view,state);
    if(focused&&!view.static)view.canvas.focus({preventScroll:true});
    syncControls(instance);
  }

  function syncControls(instance) {
    if(!instance.controls)return;
    for(const control of definitions[instance.key].controls){
      if(control.values){
        instance.controls.querySelectorAll('[data-control="'+control.id+'"]').forEach(button=>button.setAttribute('aria-pressed',String(instance.state[control.id]===button.value)));
      }else{
        const input=instance.controls.querySelector('input[data-control="'+control.id+'"]');
        if(input)input.value=instance.state[control.id];
        const output=instance.controls.querySelector('output[data-value="'+control.id+'"]');
        if(output)output.textContent=fmt(instance.state[control.id],control.digits)+control.unit;
      }
    }
    if(instance.key==='variations'){
      instance.controls.querySelector('[data-action="next"]').disabled=instance.state.step>=2;
      instance.controls.querySelector('[data-action="prev"]').disabled=instance.state.step<=0;
    }
    if(instance.key==='growth')instance.controls.querySelector('[data-action="year"]').disabled=instance.state.n>=30;
    if(instance.key==='doubling')instance.controls.querySelector('label').textContent=instance.state.convention;
  }

  function makeControls(instance) {
    const controls=document.createElement('div');controls.className='mg-controls';instance.controls=controls;
    const unique='mg-'+(++serial);
    for(const control of definitions[instance.key].controls){
      const row=document.createElement('div');row.className='mg-control';
      if(control.values){
        row.classList.add('mg-mode-row');row.setAttribute('role','group');row.setAttribute('aria-label',control.label);
        control.values.forEach(value=>{const button=document.createElement('button');button.type='button';button.dataset.control=control.id;button.value=value;button.textContent=value;row.append(button);});
      }else{
        const id=unique+'-'+control.id;
        const label=document.createElement('label');label.htmlFor=id;label.textContent=control.label;
        const input=document.createElement('input');Object.assign(input,{id,type:'range',min:control.min,max:control.max,step:control.step,value:instance.state[control.id]});input.dataset.control=control.id;
        const output=document.createElement('output');output.htmlFor=id;output.dataset.value=control.id;
        row.append(label,input,output);
      }
      controls.append(row);
    }
    const actions=document.createElement('div');actions.className='mg-actions';
    const button=(action,label)=>{const el=document.createElement('button');el.type='button';el.dataset.action=action;el.textContent=label;actions.append(el);};
    if(instance.key==='variations'){button('prev','Étape précédente');button('next','Étape suivante');}
    if(instance.key==='growth'){button('year','+1 an');button('all-years','Voir 30 ans');}
    if(instance.key==='tangent')button('tangent','Tangente : h = 0');
    button('reset','Réinitialiser');controls.append(actions);
    controls.addEventListener('input',event=>{
      const input=event.target.closest('input[data-control]');if(!input)return;
      instance.state[input.dataset.control]=Number(input.value);draw(instance);
    });
    controls.addEventListener('click',event=>{
      const button=event.target.closest('button');if(!button)return;
      if(button.dataset.control)instance.state[button.dataset.control]=button.value;
      if(button.dataset.action==='reset')instance.state=clone(definitions[instance.key].defaults);
      if(button.dataset.action==='next')instance.state.step=Math.min(2,instance.state.step+1);
      if(button.dataset.action==='prev')instance.state.step=Math.max(0,instance.state.step-1);
      if(button.dataset.action==='tangent')instance.state.h=0;
      if(button.dataset.action==='year')instance.state.n=Math.min(30,instance.state.n+1);
      if(button.dataset.action==='all-years')instance.state.n=30;
      draw(instance);
    });
    return controls;
  }

  function initAll() {
    if(!C||!window.Deck)return;
    document.querySelectorAll('[data-math-chart]').forEach(container=>{
      if(instances.has(container))return;
      const key=container.dataset.mathChart;if(!definitions[key])throw new Error('Graphique inconnu : '+key);
      const instance={key,container,state:clone(definitions[key].defaults),slideId:container.closest('.slide')?.id};
      if(key==='variations'&&document.body.classList.contains('reading'))instance.state.step=2;
      if(key==='growth'&&document.body.classList.contains('reading'))instance.state.n=30;
      container.replaceChildren();container.classList.add('mg-widget');container.append(makeControls(instance));
      instance.view=makeView(container,key);instances.set(container,instance);draw(instance);
    });
  }

  function renderDefaults() {
    initAll();for(const instance of instances.values()){instance.state=clone(definitions[instance.key].defaults);draw(instance);}
  }

  function comparisonSnapshots() {
    snapshots?.remove();snapshots=document.createElement('div');snapshots.className='math-print-comparisons';
    for(const key of ['log-modes','pwt']){
      if(![...instances.values()].some(instance=>instance.key===key))continue;
      for(const [second,suffix] of [['Échelle logarithmique','levels-log'],['ln(y)','levels-ln']]){
        const section=document.createElement('section');section.className='math-print-snapshot';section.dataset.mathSnapshot=key+'-'+suffix;
        const title=document.createElement('h1');title.textContent=(key==='pwt'?'France–États-Unis':'Une même trajectoire')+' · Niveaux et '+second;
        const pair=document.createElement('div');pair.className='math-print-pair';section.append(title,pair);
        for(const mode of ['Niveaux',second]){
          const figure=document.createElement('figure'),caption=document.createElement('figcaption');caption.textContent=mode;figure.append(caption);
          const body=document.createElement('div');body.className='mg-snapshot-body';figure.append(body);pair.append(figure);
          const instance={key,state:{...clone(definitions[key].defaults),mode},view:makeView(body,key,true)};
          draw(instance);
        }
        snapshots.append(section);
      }
    }
    (document.getElementById('stage')||document.body).append(snapshots);
  }

  function preparePrint() {
    if(printing)return;
    initAll();printing=true;savedPrint=new Map();
    for(const instance of instances.values()){
      savedPrint.set(instance,clone(instance.state));instance.state=clone(definitions[instance.key].defaults);
      if(instance.key==='variations')instance.state.step=2;
      if(instance.key==='growth')instance.state.n=30;
      draw(instance);
    }
    comparisonSnapshots();
  }

  function restoreAfterPrint() {
    if(!printing)return;
    printing=false;
    for(const [instance,state] of savedPrint||[]) {instance.state=state;draw(instance);}
    savedPrint=null;snapshots?.remove();snapshots=null;
  }

  function readingChanged() {
    if(printing)return;
    const reading=document.body.classList.contains('reading');
    if(reading&&!savedReading){
      initAll();savedReading=new Map();
      for(const instance of instances.values())if(instance.key==='variations'||instance.key==='growth'){
        savedReading.set(instance,clone(instance.state));
        if(instance.key==='variations')instance.state.step=2;
        else instance.state.n=30;
        draw(instance);
      }
    }else if(!reading&&savedReading){
      for(const [instance,state]of savedReading){instance.state=state;draw(instance);}savedReading=null;
    }
  }

  document.addEventListener('deck:enter',initAll);
  document.addEventListener('deck:change',event=>{
    initAll();if(printing)return;
    for(const instance of instances.values())if(instance.key==='variations'&&instance.slideId===event.detail.id){
      instance.state.step=document.body.classList.contains('reading')?2:Math.max(0,Math.min(2,event.detail.step||0));draw(instance);
    }
  });
  window.addEventListener('beforeprint',preparePrint);
  window.addEventListener('afterprint',restoreAfterPrint);
  const observe=()=>{initAll();new MutationObserver(readingChanged).observe(document.body,{attributes:true,attributeFilter:['class']});readingChanged();};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',observe,{once:true});else observe();
  window.MathGraphs={initAll,renderDefaults,preparePrint,restoreAfterPrint,
    getStates:()=>[...instances.values()].map(instance=>({key:instance.key,slideId:instance.slideId,state:clone(instance.state)}))};
})();
