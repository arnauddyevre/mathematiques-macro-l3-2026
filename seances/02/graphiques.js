/* Diagramme natif Charts : géométrie normalisée, sans calibration économique.
   Coordonnées internes z=k/k*, flux divisés par δk*. α=1/3 fixe la courbure illustrative.
   Les axes et messages présentent les objets symboliques du modèle. */
(function () {
  'use strict';
  const alpha = 1/3;
  let position = 1, root, printPosition, typographyObserver;
  // Charts produit du texte brut. Balisage local des symboles, sans toucher au moteur.
  function italicizeLabels(element) {
    const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    const symbols=/(?<![\p{L}\p{N}])(?:sAkᵅ|[02]?(?:δ)?k\*?)(?![\p{L}\p{N}])/gu;
    for(const node of nodes){
      if(node.parentElement.closest('[data-math-symbol]'))continue;
      const matches=[...node.nodeValue.matchAll(symbols)];if(!matches.length)continue;
      const fragment=document.createDocumentFragment();let offset=0;
      for(const match of matches){
        fragment.append(document.createTextNode(node.nodeValue.slice(offset,match.index)));
        const svg=node.parentElement.namespaceURI==='http://www.w3.org/2000/svg';
        const symbol=svg?document.createElementNS('http://www.w3.org/2000/svg','tspan'):document.createElement('span');
        symbol.setAttribute('data-math-symbol','');symbol.style.fontStyle='italic';symbol.textContent=match[0];fragment.append(symbol);
        offset=match.index+match[0].length;
      }
      fragment.append(document.createTextNode(node.nodeValue.slice(offset)));node.replaceWith(fragment);
    }
  }
  function draw(z=position) {
    if (!root) return;
    // Remplacer le nœud retire les anciens gestionnaires de survol et de clavier de Charts.
    if(typographyObserver)typographyObserver.disconnect();
    const previous=root.querySelector('#solow-chart');
    const hadFocus=document.activeElement===previous;
    const container=previous.cloneNode(false);
    previous.replaceWith(container);
    const state=z < .999 ? 'k < k* : investissement > dépréciation ; le capital augmente.' : z > 1.001 ? 'k > k* : investissement < dépréciation ; le capital diminue.' : 'k = k* : investissement = dépréciation ; le capital reste constant.';
    const xLabel = x => x===0 ? '0' : x===1 ? 'k*' : x===2 ? '2k*' : (x<1 ? 'k < k*' : 'k > k*');
    const sample=fn => Array.from({length:201},(_,i)=>[i/100,fn(i/100)]);
    const chart=Charts.line(container,{
      width:770,height:430,animate:false,legend:true,
      margin:{l:90,r:38,t:55,b:62},
      x:{min:0,max:2,ticks:[0,1,2],format:xLabel},
      y:{min:0,max:2.1,ticks:[0,1,2],format:x=>x===0?'0':x===1?'δk*':'2δk*'},
      xTitle:'Capital par travailleur k',yTitle:'Flux par travailleur',
      series:[
        {name:'Investissement sAkᵅ',color:'blue',data:sample(x=>x**alpha),format:x=>x<.999?'inférieur à δk*':x>1.001?'supérieur à δk*':'δk*'},
        {name:'Dépréciation δk',color:'amber',data:sample(x=>x),format:x=>x<.999?'inférieure à δk*':x>1.001?'supérieure à δk*':'δk*'}
      ],
      markers:[{x:1,y:1,color:'blue',label:'État stationnaire',dy:-22},
        {x:z,y:z**alpha,color:'blue',r:6},{x:z,y:z,color:'amber',r:6}]
    });
    const ns='http://www.w3.org/2000/svg';
    const guide=document.createElementNS(ns,'line');
    Object.entries({x1:chart.S.X(z),x2:chart.S.X(z),y1:chart.S.Y(0),y2:chart.S.Y(Math.max(z,z**alpha)),stroke:'#536078','stroke-width':2,'stroke-dasharray':'5 6'}).forEach(([key,value])=>guide.setAttribute(key,value));
    guide.setAttribute('pointer-events','none');chart.svg.append(guide);
    if(hadFocus)container.focus({preventScroll:true});
    root.querySelector('#capital-reading').textContent=state;
    root.querySelector('#capital-position').setAttribute('aria-valuetext',state);
    italicizeLabels(container);
    italicizeLabels(root.querySelector('#capital-reading'));
    // Les infobulles sont recréées au survol ou au clavier.
    typographyObserver=new MutationObserver(()=>{
      typographyObserver.disconnect();italicizeLabels(container);
      typographyObserver.observe(container,{childList:true,subtree:true,characterData:true});
    });
    typographyObserver.observe(container,{childList:true,subtree:true,characterData:true});
  }
  const diagram={
    enter(el){
      root=el;
      if(!el.dataset.chartBound){
        el.dataset.chartBound='true';
        el.querySelector('#capital-position').addEventListener('input',e=>{position=Number(e.target.value)/100;draw();});
        el.querySelector('#capital-reset').addEventListener('click',()=>{position=1;el.querySelector('#capital-position').value=100;draw();});
      }
      draw();
    }
  };
  Deck.on('diagramme-stationnaire',diagram);
  // Le moteur peut avoir déjà ouvert le fragment avant le chargement de ce module.
  const opened=Deck.slideEl('diagramme-stationnaire');
  if(opened?.classList.contains('is-active'))diagram.enter(opened);
  window.addEventListener('beforeprint',()=>{printPosition=position;draw(1);});
  window.addEventListener('afterprint',()=>{if(printPosition!==undefined){position=printPosition;draw();printPosition=undefined;}});
})();
