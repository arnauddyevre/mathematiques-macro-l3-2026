/* Séance 3 — ratio de dette stationnaire d* = (b − τ)/(g − (i − π)), graphique natif Charts.
   Point de départ : France 2019 du chapitre 3 de macro (écart de 1,6 point, déficit primaire de 0,9 % du PIB).
   La tangente montre ce que donne la dérivée ; la courbe donne la valeur exacte. */
(function () {
  'use strict';
  const REF = { gap: 1.6, deficit: 0.9 }, XMIN = -0.6, XMAX = 3, YMAX = 250;
  const NB = ' ', NS = 'http://www.w3.org/2000/svg';
  let gap = REF.gap, deficit = REF.deficit, root, saved, observer;
  const fr = (x, n = 1) => Math.abs(x).toLocaleString('fr-FR', { minimumFractionDigits: n, maximumFractionDigits: n }).replace(/\s/g, NB);
  const signed = (x, n = 0) => (x < 0 ? '−' : '') + fr(x, n);
  const unit = (x, word) => word + (Math.abs(x) >= 2 ? 's' : '');

  // Charts produit du texte brut : les symboles mathématiques sont mis en italique ensuite,
  // avec les couleurs des grandeurs du chapitre 3 de macro.
  const COULEURS = { g: '#001F5F', i: '#B45309', 'π': '#B0285A', b: '#2E7D5B', 'τ': '#7A3E9D' };
  function italicize(element) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    const symbols = /(?<![\p{L}\p{N}])(?:d\*|[giπbτ])(?![\p{L}\p{N}])/gu;
    for (const node of nodes) {
      if (node.parentElement.closest('[data-math-symbol]')) continue;
      const matches = [...node.nodeValue.matchAll(symbols)]; if (!matches.length) continue;
      const fragment = document.createDocumentFragment(); let offset = 0;
      for (const match of matches) {
        fragment.append(document.createTextNode(node.nodeValue.slice(offset, match.index)));
        const inSvg = node.parentElement.namespaceURI === NS;
        const symbol = inSvg ? document.createElementNS(NS, 'tspan') : document.createElement('span');
        symbol.setAttribute('data-math-symbol', ''); symbol.style.fontStyle = 'italic'; symbol.textContent = match[0];
        const couleur = COULEURS[match[0]];
        if (couleur) { symbol.style.fontWeight = '650'; if (inSvg) symbol.style.fill = couleur; else symbol.style.color = couleur; }
        fragment.append(symbol); offset = match.index + match[0].length;
      }
      fragment.append(document.createTextNode(node.nodeValue.slice(offset))); node.replaceWith(fragment);
    }
  }

  function draw(state = { gap, deficit }) {
    if (!root) return;
    if (observer) observer.disconnect();
    // Remplacer le nœud retire les anciens gestionnaires de survol et de clavier de Charts.
    const previous = root.querySelector('#dette-chart');
    const hadFocus = document.activeElement === previous;
    const container = previous.cloneNode(false); previous.replaceWith(container);
    const value = x => 100 * state.deficit / x;
    const start = Math.max(0.03, 100 * state.deficit / YMAX);
    const curve = Array.from({ length: 241 }, (_, j) => { const x = start + (XMAX - start) * Math.pow(j / 240, 1.6); return [x, value(x)]; });
    const x0 = state.gap, y0 = value(x0), slope = -y0 / x0, inside = y0 <= YMAX;
    const tangent = [];
    for (let j = 0; j <= 80; j++) {
      const x = x0 - 1.1 + 2.2 * j / 80, y = y0 + slope * (x - x0);
      if (x > 0.02 && y >= 0 && y <= YMAX) tangent.push([x, y]);
    }
    const percent = y => fr(y, 0) + NB + '%';
    const chart = Charts.line(container, {
      width: 820, height: 450, animate: false, legend: true,
      margin: { l: 92, r: 40, t: 46, b: 72 },
      x: { min: XMIN, max: XMAX, ticks: [-0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3], format: x => signed(x, 1) },
      y: { min: 0, max: YMAX, ticks: [0, 50, 100, 150, 200, 250], format: percent },
      xTitle: 'Écart g − (i − π), en points', yTitle: 'Ratio stationnaire d*, en % du PIB',
      bands: [{ x0: XMIN, x1: 0, color: '#EDEAE3' }],
      series: [
        { name: 'Ratio stationnaire d*', color: 'blue', data: curve, format: percent },
        { name: 'Tangente', color: 'amber', width: 3, dash: '8 7', data: tangent, format: percent }
      ],
      markers: inside ? [{ x: x0, y: y0, color: 'blue', label: 'd* ≈ ' + percent(y0), dx: 14, dy: -20, anchor: 'start' }] : []
    });
    // Repère de 2025 : l’écart est négatif, la dette ne converge vers aucun ratio stationnaire.
    const S = chart.S, guide = document.createElementNS(NS, 'line');
    Object.entries({ x1: S.X(-0.1), x2: S.X(-0.1), y1: S.Y(YMAX * 0.6), y2: S.Y(YMAX * 0.88), stroke: '#536078', 'stroke-width': 2, 'stroke-dasharray': '5 6' })
      .forEach(([key, val]) => guide.setAttribute(key, val));
    guide.setAttribute('pointer-events', 'none'); chart.svg.append(guide);
    Charts.txt(chart.svg, S.X(-0.1), S.Y(YMAX * 0.88) - 10, '2025', 'ch-tick', { 'text-anchor': 'middle' });
    Charts.txt(chart.svg, S.X(-0.3), S.Y(YMAX * 0.4), 'g < i − π', 'ch-tick', { 'text-anchor': 'middle' });
    if (hadFocus) container.focus({ preventScroll: true });
    const level = inside ? 'd* ≈ ' + percent(y0) : 'd* ≈ ' + percent(y0) + ', hors du graphique';
    const reading = `Écart de ${fr(x0, 1)} ${unit(x0, 'point')}, déficit primaire de ${fr(state.deficit, 1)}${NB}% du PIB : ${level}. ` +
      `Pente de la tangente : ${signed(slope, 0)} points de d* par point d’écart.`;
    const out = root.querySelector('#dette-reading');
    out.textContent = reading; italicize(out); italicize(container);
    // Les infobulles sont recréées au survol ou au clavier.
    observer = new MutationObserver(() => {
      observer.disconnect(); italicize(container);
      observer.observe(container, { childList: true, subtree: true, characterData: true });
    });
    observer.observe(container, { childList: true, subtree: true, characterData: true });
  }

  const diagram = {
    enter(el) {
      root = el;
      if (!el.dataset.chartBound) {
        el.dataset.chartBound = 'true';
        const gapInput = el.querySelector('#ecart-dette'), deficitInput = el.querySelector('#deficit-primaire');
        gapInput.addEventListener('input', e => { gap = Number(e.target.value); draw(); });
        deficitInput.addEventListener('input', e => { deficit = Number(e.target.value); draw(); });
        el.querySelector('#dette-reset').addEventListener('click', () => {
          gap = REF.gap; deficit = REF.deficit; gapInput.value = REF.gap; deficitInput.value = REF.deficit; draw();
        });
      }
      draw();
    }
  };
  Deck.on('dette-graphique', diagram);
  // Le moteur peut avoir déjà ouvert la diapositive avant le chargement de ce module.
  const opened = Deck.slideEl('dette-graphique');
  if (opened?.classList.contains('is-active')) diagram.enter(opened);
  window.addEventListener('beforeprint', () => { saved = { gap, deficit }; draw(REF); });
  window.addEventListener('afterprint', () => { if (saved) { draw(saved); saved = undefined; } });
})();
