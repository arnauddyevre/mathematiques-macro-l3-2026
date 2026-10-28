/* Contenu étudiant avec solutions pédagogiques. Généré par build_support.cjs. */
window.COURSE = {
  "title": "Logarithmes et croissance",
  "chapter": "Mathématiques · Soutien",
  "author": "Arnaud Dyèvre",
  "session": 1,
  "date": "2026-10-29",
  "dateLabel": "Jeudi 29 octobre 2026",
  "startsAt": "2026-10-29T08:00:00+01:00",
  "endsAt": "2026-10-29T09:30:00+01:00",
  "timezone": "Europe/Paris"
};
window.MATHS_PLAN = [
  "Pourcentages et puissances",
  "Logarithmes",
  "Dérivées",
  "Croissance et suites géométriques",
  "Doublement et application"
];
window.SLIDES = [
  {
    "id": "couverture",
    "title": "Logarithmes et croissance",
    "layout": "cover",
    "html": "<div class=\"math-cover\">\n          <p class=\"cover-label\">Mathématiques · Soutien · Séance 1</p>\n          <h1>Logarithmes et croissance</h1>\n          <div class=\"cover-details\">\n            <p class=\"cover-author\">Arnaud Dyèvre</p>\n            <p class=\"cover-date\"><time datetime=\"2026-10-29\">Jeudi 29 octobre 2026</time></p>\n            <p class=\"cover-time\">8 h – 9 h 30 · Heure de Paris</p>\n          </div>\n        <p class=\"public-support-link\"><a href=\"https://arnauddyevre.github.io/mathematiques-macro-l3-2026/seances/01/\">Ouvrir la version interactive du support</a></p></div>"
  },
  {
    "id": "partie-1",
    "title": "Pourcentages et puissances",
    "part": "Pourcentages et puissances",
    "layout": "section",
    "appendix": false,
    "html": "<div class=\"math-plan\"><ol><li class=\"active\">Pourcentages et puissances</li><li>Logarithmes</li><li>Dérivées</li><li>Croissance et suites géométriques</li><li>Doublement et application</li></ol></div>"
  },
  {
    "id": "variation-mesure",
    "title": "Une variation, deux mesures",
    "part": "Pourcentages et puissances",
    "html": "<div class=\"math-copy\"><table class=\"math-reference\"><tbody><tr><td>Variation absolue</td><td><div class=\"math-formula\">Δ<i>x</i> = <i>x</i><sub>1</sub> − <i>x</i><sub>0</sub></div></td></tr><tr><td>Variation relative</td><td><div class=\"math-formula\"><i>r</i> = <span class=\"frac\"><span><i>x</i><sub>1</sub> − <i>x</i><sub>0</sub></span><span><i>x</i><sub>0</sub></span></span></div></td></tr><tr><td>Coefficient multiplicateur</td><td><div class=\"math-formula\"><i>x</i><sub>1</sub> = (1 + <i>r</i>)<i>x</i><sub>0</sub></div></td></tr></tbody></table><ul class=\"math-list\"><li>Un taux de 2 % s’écrit <strong>0,02</strong> dans les formules.</li><li>Exemple : 100 → 102, soit +2 unités et +2 %.</li></ul></div>"
  },
  {
    "id": "variations-exercice",
    "title": "−20 %, puis +20 % : retour au départ ?",
    "part": "Pourcentages et puissances",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><ul class=\"math-list\"><li>Point de départ : <strong>100</strong>.</li><li>Appliquer successivement les deux variations.</li></ul><div class=\"math-solutions\" data-solution-for=\"variations-exercice\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\">100 × 0,80 = 80</div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\">80 × 1,20 = 96</div><p>0,80 × 1,20 = 0,96, soit <strong>−4 %</strong>.</p></div></div></div><div class=\"math-visual\" data-math-chart=\"variations\"></div></div>",
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "addition-ou-croissance",
    "title": "Ajouter 2 ou augmenter de 2 % ?",
    "part": "Pourcentages et puissances",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><div class=\"math-formula\"><i>x</i><sub>t</sub> = 100 + 2<i>t</i></div><div class=\"math-formula\"><i>y</i><sub>t</sub> = 100 × 1,02<sup><i>t</i></sup></div><ul class=\"math-list\"><li>Exemple initial : même hausse la première année.</li><li>Ensuite, 2 % d’un niveau qui augmente.</li></ul></div><div class=\"math-visual\" data-math-chart=\"addition\"></div></div>"
  },
  {
    "id": "puissances",
    "title": "Les puissances : multiplier plusieurs fois",
    "part": "Pourcentages et puissances",
    "html": "<div class=\"math-copy\"><table class=\"math-reference\"><tbody><tr><td><div class=\"math-formula\"><i>a</i><sup>3</sup> = <i>a</i> × <i>a</i> × <i>a</i></div></td><td><div class=\"math-formula\"><i>a</i><sup>0</sup> = 1</div></td></tr><tr><td><div class=\"math-formula\"><i>a</i><sup><i>m</i></sup><i>a</i><sup><i>n</i></sup> = <i>a</i><sup><i>m</i>+<i>n</i></sup></div></td><td><div class=\"math-formula\">(<i>a</i><sup><i>m</i></sup>)<sup><i>n</i></sup> = <i>a</i><sup><i>mn</i></sup></div></td></tr><tr><td><div class=\"math-formula\"><i>a</i><sup>−<i>n</i></sup> = <span class=\"frac\"><span>1</span><span><i>a</i><sup><i>n</i></sup></span></span></div></td><td><div class=\"math-formula\"><i>a</i><sup>1/2</sup> = √<i>a</i></div></td></tr></tbody></table><ul class=\"math-list\"><li>Ici, <i>a</i> &gt; 0.</li><li>Deux hausses de 2 % multiplient le niveau par 1,02<sup>2</sup>.</li></ul></div>"
  },
  {
    "id": "exponentielle",
    "title": "L’exponentielle prolonge les puissances",
    "part": "Pourcentages et puissances",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><div class=\"math-formula\">exp(<i>x</i>) = <i>e</i><sup><i>x</i></sup></div><table class=\"math-reference\"><tbody><tr><td><div class=\"math-formula\"><i>e</i> ≈ 2,718</div></td><td><div class=\"math-formula\"><i>e</i><sup>0</sup> = 1</div></td></tr><tr><td><div class=\"math-formula\"><i>e</i><sup><i>x</i>+<i>y</i></sup> = <i>e</i><sup><i>x</i></sup><i>e</i><sup><i>y</i></sup></div></td><td><div class=\"math-formula\"><i>e</i><sup>−<i>x</i></sup> = <span class=\"frac\"><span>1</span><span><i>e</i><sup><i>x</i></sup></span></span></div></td></tr></tbody></table><ul class=\"math-list\"><li><i>x</i> peut être n’importe quel nombre réel.</li><li><i>e</i><sup><i>x</i></sup> est toujours strictement positif.</li></ul></div><aside class=\"math-box exponential-definition\" aria-label=\"Définition du nombre e\"><h2>Pourquoi <i>e</i> ≈ 2,718 ?</h2><p>Les gains produisent eux-mêmes de nouveaux gains, <strong>en temps continu</strong>.</p><p>En partant de <strong>1</strong>, avec un taux instantané constant de <strong>100 % par unité de temps</strong>, on obtient <strong><i>e</i> ≈ 2,718</strong> après une unité de temps.</p><p class=\"math-condition\">On approche cette croissance avec <i>n</i> étapes de plus en plus courtes sur la même durée :</p><div class=\"math-formula\"><i>e</i> = <span class=\"math-limit\">lim<span><i>n</i> → ∞</span></span> (1 + <span class=\"frac\"><span>1</span><span><i>n</i></span></span>)<sup><i>n</i></sup></div></aside></div>"
  },
  {
    "id": "exponentielle-convergence",
    "title": "Une simulation : se rapprocher de e",
    "part": "Pourcentages et puissances",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><ul class=\"math-list\"><li>Départ : 1. Durée : 1 unité.</li><li>Les gains sont réinvestis à chaque étape.</li></ul><div class=\"math-formula\"><i>u</i><sub><i>n</i></sub> = (1 + <span class=\"frac\"><span>1</span><span><i>n</i></span></span>)<sup><i>n</i></sup> → <i>e</i></div><table class=\"math-convergence-values\"><thead><tr><th>Nombre d’étapes <i>n</i></th><th>Niveau final</th></tr></thead><tbody><tr><td>1</td><td>2,000000</td></tr><tr><td>2</td><td>2,250000</td></tr><tr><td>10</td><td>≈ 2,593742</td></tr><tr><td>100</td><td>≈ 2,704814</td></tr><tr><td>1 000</td><td>≈ 2,716924</td></tr></tbody></table></div><div class=\"math-visual\" data-math-chart=\"e-convergence\"></div></div>"
  },
  {
    "id": "partie-2",
    "title": "Logarithmes",
    "part": "Logarithmes",
    "layout": "section",
    "appendix": false,
    "html": "<div class=\"math-plan\"><ol><li>Pourcentages et puissances</li><li class=\"active\">Logarithmes</li><li>Dérivées</li><li>Croissance et suites géométriques</li><li>Doublement et application</li></ol></div>"
  },
  {
    "id": "log-inverse",
    "title": "Le logarithme défait l’exponentielle",
    "part": "Logarithmes",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><div class=\"math-formula\"><i>y</i> = <i>e</i><sup><i>x</i></sup> ⇔ <i>x</i> = ln(<i>y</i>)</div><div class=\"math-formula\">ln(<i>e</i><sup><i>x</i></sup>) = <i>x</i></div><div class=\"math-formula\"><i>e</i><sup>ln(<i>y</i>)</sup> = <i>y</i></div><ul class=\"math-list\"><li>ln(<i>y</i>) exige <i>y</i> &gt; 0.</li><li>ln(1) = 0 et ln(<i>e</i>) = 1.</li></ul></div><div class=\"math-visual\" data-math-chart=\"inverse\"></div></div>"
  },
  {
    "id": "log-proprietes",
    "title": "Propriétés du logarithme",
    "part": "Logarithmes",
    "html": "<div class=\"math-copy\"><ul class=\"math-list\"><li><div class=\"math-formula\">ln(<i>ab</i>) = ln(<i>a</i>) + ln(<i>b</i>)</div></li><li><div class=\"math-formula\">ln(<span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span>) = ln(<i>a</i>) − ln(<i>b</i>)</div></li><li><div class=\"math-formula\">ln(<i>a</i><sup>α</sup>) = α ln(<i>a</i>)</div></li></ul><p class=\"math-condition\"><i>a</i>, <i>b</i> &gt; 0. L’exposant α peut être réel.</p></div>"
  },
  {
    "id": "log-rapports",
    "title": "Un même rapport, un même écart logarithmique",
    "part": "Logarithmes",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><div class=\"math-formula\">ln(100) − ln(50) = ln(2)</div><div class=\"math-formula\">ln(200) − ln(100) = ln(2)</div><ul class=\"math-list\"><li>Exemple initial : deux doublements.</li><li>Des hausses en niveau différentes.</li></ul></div><div class=\"math-visual\" data-math-chart=\"log-ratios\"></div></div>"
  },
  {
    "id": "log-exercice",
    "title": "Simplifier avec les logarithmes",
    "part": "Logarithmes",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\">1. ln(<span class=\"frac\"><span><i>a</i><sup>2</sup></span><span><i>b</i></span></span>)</div><div class=\"math-formula\">2. ln(4<i>a</i>) − ln(2<i>a</i>)</div><div class=\"math-formula\">3. <i>e</i><sup>ln(<i>a</i>)+ln(<i>b</i>)</sup></div><p><i>a</i>, <i>b</i> &gt; 0.</p><div class=\"math-solutions\" data-solution-for=\"log-exercice\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\">1. 2 ln <i>a</i> − ln <i>b</i></div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\">2. ln(<span class=\"frac\"><span>4<i>a</i></span><span>2<i>a</i></span></span>) = ln 2</div></div><div class=\"math-solution\" data-step=\"3\"><div class=\"math-formula\">3. <i>e</i><sup>ln(<i>ab</i>)</sup> = <i>ab</i></div></div></div></div>",
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "log-approximation",
    "title": "Petite variation : ln(1 + r) ≈ r",
    "part": "Logarithmes",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><div class=\"math-formula\">ln(1 + <i>r</i>) ≈ <i>r</i></div><ul class=\"math-list\"><li>Si |<i>r</i>| est petit, avec <i>r</i> &gt; −1.</li><li>Exemple : ln(1,05) ≈ 0,04879, proche de 0,05.</li><li>Une approximation, pas une identité.</li></ul></div><div class=\"math-visual\" data-math-chart=\"log-approx\"></div></div>"
  },
  {
    "id": "partie-3",
    "title": "Dérivées",
    "part": "Dérivées",
    "layout": "section",
    "appendix": false,
    "html": "<div class=\"math-plan\"><ol><li>Pourcentages et puissances</li><li>Logarithmes</li><li class=\"active\">Dérivées</li><li>Croissance et suites géométriques</li><li>Doublement et application</li></ol></div>"
  },
  {
    "id": "derivee-tangente",
    "title": "D’une sécante à une tangente",
    "part": "Dérivées",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><div class=\"math-formula\"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup></div><div class=\"math-formula\">Pente = <span class=\"frac\"><span><i>f</i>(<i>x</i><sub>0</sub> + <i>h</i>) − <i>f</i>(<i>x</i><sub>0</sub>)</span><span><i>h</i></span></span></div><ul class=\"math-list\"><li>Pour <i>h</i> ≠ 0, rapprocher les deux points.</li><li>Que devient la pente ?</li></ul></div><div class=\"math-visual\" data-math-chart=\"tangent\"></div></div>"
  },
  {
    "id": "derivee-definition",
    "title": "La dérivée mesure une variation locale",
    "part": "Dérivées",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><i>f</i>′(<i>x</i>) = lim<sub><i>h</i>→0</sub> <span class=\"frac\"><span><i>f</i>(<i>x</i> + <i>h</i>) − <i>f</i>(<i>x</i>)</span><span><i>h</i></span></span></div><div class=\"math-formula\">Δ<i>f</i> ≈ <i>f</i>′(<i>x</i>) Δ<i>x</i></div><ul class=\"math-list\"><li>La pente de la tangente.</li><li>Son unité : unités de <i>f</i> par unité de <i>x</i>.</li></ul></div>"
  },
  {
    "id": "derivees-usuelles",
    "title": "Les dérivées usuelles",
    "part": "Dérivées",
    "html": "<div class=\"math-copy\"><table class=\"math-reference\"><tbody><tr><td><div class=\"math-formula\">(<i>c</i>)′ = 0</div></td><td><div class=\"math-formula\">(<i>ax</i> + <i>b</i>)′ = <i>a</i></div></td></tr><tr><td><div class=\"math-formula\">(<i>x</i><sup>α</sup>)′ = α<i>x</i><sup>α−1</sup></div></td><td><div class=\"math-formula\">(<span class=\"frac\"><span>1</span><span><i>x</i></span></span>)′ = −<span class=\"frac\"><span>1</span><span><i>x</i><sup>2</sup></span></span></div></td></tr><tr><td><div class=\"math-formula\">(√<i>x</i>)′ = <span class=\"frac\"><span>1</span><span>2√<i>x</i></span></span></div></td><td><div class=\"math-formula\">(ln <i>x</i>)′ = <span class=\"frac\"><span>1</span><span><i>x</i></span></span></div></td></tr><tr><td><div class=\"math-formula\">(<i>e</i><sup><i>x</i></sup>)′ = <i>e</i><sup><i>x</i></sup></div></td><td><div class=\"math-formula\">(<i>e</i><sup><i>ax</i></sup>)′ = <i>a e</i><sup><i>ax</i></sup></div></td></tr></tbody></table><p><i>a</i>, <i>b</i>, <i>c</i> constants. Ici, <i>x</i> &gt; 0.</p></div>"
  },
  {
    "id": "derivees-regles",
    "title": "Somme, produit, quotient, composition",
    "part": "Dérivées",
    "html": "<div class=\"math-copy\"><table class=\"math-reference\"><tbody><tr><td>Somme</td><td><div class=\"math-formula\">(<i>u</i> + <i>v</i>)′ = <i>u</i>′ + <i>v</i>′</div></td></tr><tr><td>Produit</td><td><div class=\"math-formula\">(<i>uv</i>)′ = <i>u</i>′<i>v</i> + <i>uv</i>′</div></td></tr><tr><td>Quotient</td><td><div class=\"math-formula\">(<span class=\"frac\"><span><i>u</i></span><span><i>v</i></span></span>)′ = <span class=\"frac\"><span><i>u</i>′<i>v</i> − <i>uv</i>′</span><span><i>v</i><sup>2</sup></span></span></div></td></tr><tr><td>Composition</td><td><div class=\"math-formula\">(<i>f</i>(<i>u</i>))′ = <i>f</i>′(<i>u</i>)<i>u</i>′</div></td></tr></tbody></table><p>Fonctions dérivables. Pour le quotient, <i>v</i> ≠ 0.</p></div>"
  },
  {
    "id": "derivees-exercice",
    "title": "Quelle règle utiliser ?",
    "part": "Dérivées",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\">(<i>x</i> + 1)<i>e</i><sup><i>x</i></sup> &emsp; <span class=\"frac\"><span><i>x</i></span><span>1 + <i>x</i></span></span> &emsp; ln(1 + <i>x</i><sup>2</sup>)</div><ul class=\"math-list\"><li>Identifier la règle, puis dériver.</li></ul><div class=\"math-solutions\" data-solution-for=\"derivees-exercice\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\">Produit : <i>e</i><sup><i>x</i></sup> + (<i>x</i> + 1)<i>e</i><sup><i>x</i></sup> = (<i>x</i> + 2)<i>e</i><sup><i>x</i></sup></div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\">Quotient : <span class=\"frac\"><span>(1 + <i>x</i>) − <i>x</i></span><span>(1 + <i>x</i>)<sup>2</sup></span></span> = <span class=\"frac\"><span>1</span><span>(1 + <i>x</i>)<sup>2</sup></span></span></div><p><i>x</i> ≠ −1.</p></div><div class=\"math-solution\" data-step=\"3\"><div class=\"math-formula\">Composition : <span class=\"frac\"><span>1</span><span>1 + <i>x</i><sup>2</sup></span></span> × 2<i>x</i> = <span class=\"frac\"><span>2<i>x</i></span><span>1 + <i>x</i><sup>2</sup></span></span></div></div></div></div>",
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "derivee-logarithme",
    "title": "La dérivée d’un logarithme composé",
    "part": "Dérivées",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\">(<i>f</i>(<i>u</i>(<i>x</i>)))′ = <i>f</i>′(<i>u</i>(<i>x</i>)) × <i>u</i>′(<i>x</i>)</div><div class=\"math-formula\"><span class=\"frac\"><span>d ln <i>u</i>(<i>x</i>)</span><span>d<i>x</i></span></span> = <span class=\"frac\"><span>1</span><span><i>u</i>(<i>x</i>)</span></span> × <i>u</i>′(<i>x</i>) = <span class=\"frac\"><span><i>u</i>′(<i>x</i>)</span><span><i>u</i>(<i>x</i>)</span></span></div><ul class=\"math-list\"><li><i>u</i> dérivable et strictement positive.</li><li>La dérivée intérieure ne doit pas être oubliée.</li></ul></div>"
  },
  {
    "id": "partie-4",
    "title": "Croissance et suites géométriques",
    "part": "Croissance et suites géométriques",
    "layout": "section",
    "appendix": false,
    "html": "<div class=\"math-plan\"><ol><li>Pourcentages et puissances</li><li>Logarithmes</li><li>Dérivées</li><li class=\"active\">Croissance et suites géométriques</li><li>Doublement et application</li></ol></div>"
  },
  {
    "id": "suite-geometrique",
    "title": "Un taux constant : une suite géométrique",
    "part": "Croissance et suites géométriques",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><div class=\"math-formula\"><i>x</i><sub>n+1</sub> = (1 + <i>r</i>)<i>x</i><sub>n</sub></div><div class=\"math-formula\"><i>x</i><sub>n</sub> = <i>x</i><sub>0</sub>(1 + <i>r</i>)<sup><i>n</i></sup></div><ul class=\"math-list\"><li><i>n</i> compte les années entières.</li><li><i>r</i> est un taux annuel ordinaire constant.</li><li><i>x</i><sub>0</sub> &gt; 0 et <i>r</i> &gt; −1.</li></ul></div><div class=\"math-visual\" data-math-chart=\"growth\"></div></div>"
  },
  {
    "id": "suite-exercice",
    "title": "Écrire les premiers termes",
    "part": "Croissance et suites géométriques",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><i>x</i><sub>0</sub> = 100 &emsp; <i>r</i> = 2 %</div><ul class=\"math-list\"><li>Calculer <i>x</i><sub>1</sub> et <i>x</i><sub>2</sub>.</li><li>Écrire <i>x</i><sub>n</sub>.</li></ul><div class=\"math-solutions\" data-solution-for=\"suite-exercice\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\"><i>x</i><sub>1</sub> = 100 × 1,02 = 102</div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\"><i>x</i><sub>2</sub> = 100 × 1,02<sup>2</sup> = 104,04</div></div><div class=\"math-solution\" data-step=\"3\"><div class=\"math-formula\"><i>x</i><sub>n</sub> = 100 × 1,02<sup><i>n</i></sup></div></div></div></div>",
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "taux-instantane",
    "title": "Une variation en niveau ou en proportion ?",
    "part": "Croissance et suites géométriques",
    "html": "<div class=\"math-copy\"><table class=\"math-reference\"><tbody><tr><td>Variation instantanée</td><td><div class=\"math-formula\"><i>ẋ</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>x</i>(<i>t</i>)</span><span>d<i>t</i></span></span></div></td></tr><tr><td>Taux instantané</td><td><div class=\"math-formula\"><i>g</i><sub>x</sub>(<i>t</i>) = <span class=\"frac\"><span><i>ẋ</i>(<i>t</i>)</span><span><i>x</i>(<i>t</i>)</span></span></div></td></tr></tbody></table><div class=\"math-formula\"><span class=\"frac\"><span>d ln <i>x</i>(<i>t</i>)</span><span>d<i>t</i></span></span> = <i>g</i><sub>x</sub>(<i>t</i>)</div><ul class=\"math-list\"><li><i>x</i>(<i>t</i>) &gt; 0, dérivable. Le temps est mesuré en années.</li></ul></div>"
  },
  {
    "id": "croissance-continue",
    "title": "Un taux constant donne une exponentielle",
    "part": "Croissance et suites géométriques",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><span class=\"frac\"><span>d ln <i>x</i>(<i>t</i>)</span><span>d<i>t</i></span></span> = <i>g</i> constant</div><div data-step=\"1\"><div class=\"math-formula\">ln <i>x</i>(<i>t</i>) = ln <i>x</i><sub>0</sub> + <i>gt</i></div></div><div data-step=\"2\"><div class=\"math-formula\"><i>x</i>(<i>t</i>) = <i>x</i><sub>0</sub><i>e</i><sup><i>gt</i></sup></div></div><p>Rappel : <i>F</i>′(<i>t</i>) = <i>g</i> constant ⇒ <i>F</i>(<i>t</i>) = <i>F</i>(0) + <i>gt</i>.</p></div>"
  },
  {
    "id": "taux-exacts-exercice",
    "title": "Relier exactement les deux taux",
    "part": "Croissance et suites géométriques",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><i>x</i><sub>n</sub> = <i>x</i><sub>0</sub>(1 + <i>r</i>)<sup><i>n</i></sup></div><div class=\"math-formula\"><i>x</i>(<i>t</i>) = <i>x</i><sub>0</sub><i>e</i><sup><i>gt</i></sup></div><ul class=\"math-list\"><li>Même niveau initial. Même niveau après un an.</li><li>Quelle relation entre <i>g</i> et <i>r</i> ?</li></ul><div class=\"math-solutions\" data-solution-for=\"taux-exacts-exercice\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\"><i>x</i><sub>0</sub>(1 + <i>r</i>) = <i>x</i><sub>0</sub><i>e</i><sup><i>g</i></sup></div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\"><i>g</i> = ln(1 + <i>r</i>) &emsp; <i>r</i> = <i>e</i><sup><i>g</i></sup> − 1</div></div><div class=\"math-solution\" data-step=\"3\"><p>Pour de petits taux, <i>g</i> ≈ <i>r</i>.</p></div></div></div>",
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "trois-representations",
    "title": "Une trajectoire, trois représentations",
    "part": "Croissance et suites géométriques",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><ul class=\"math-list\"><li><strong>Niveaux</strong> : axe vertical linéaire.</li><li><strong>Échelle logarithmique</strong> : graduations en niveaux.</li><li><strong>ln(y)</strong> : logarithmes sur un axe linéaire.</li></ul><div class=\"math-formula\">ln <i>y</i>(<i>t</i>) = ln <i>y</i><sub>0</sub> + <i>gt</i></div></div><div class=\"math-visual\" data-math-chart=\"log-modes\"></div></div>"
  },
  {
    "id": "pib-habitant-exercice",
    "title": "Produire plus… par habitant ?",
    "part": "Croissance et suites géométriques",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><i>y</i> = <span class=\"frac\"><span><i>Y</i></span><span><i>N</i></span></span></div><ul class=\"math-list\"><li><i>Y</i> : PIB réel. <i>N</i> : population.</li><li>Prendre les logarithmes, puis dériver.</li><li>Si <i>Y</i> et <i>N</i> doublent ensemble ?</li></ul><div class=\"math-solutions\" data-solution-for=\"pib-habitant-exercice\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\">ln <i>y</i> = ln <i>Y</i> − ln <i>N</i></div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\"><i>g</i><sub>y</sub> = <i>g</i><sub>Y</sub> − <i>g</i><sub>N</sub></div></div><div class=\"math-solution\" data-step=\"3\"><div class=\"math-formula\"><span class=\"frac\"><span>2<i>Y</i></span><span>2<i>N</i></span></span> = <span class=\"frac\"><span><i>Y</i></span><span><i>N</i></span></span></div><p>Le PIB réel par habitant reste constant.</p></div></div></div>",
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "partie-5",
    "title": "Doublement et application",
    "part": "Doublement et application",
    "layout": "section",
    "appendix": false,
    "html": "<div class=\"math-plan\"><ol><li>Pourcentages et puissances</li><li>Logarithmes</li><li>Dérivées</li><li>Croissance et suites géométriques</li><li class=\"active\">Doublement et application</li></ol></div>"
  },
  {
    "id": "doublement-exercice",
    "title": "Combien de temps pour doubler ?",
    "part": "Doublement et application",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><div class=\"math-formula\"><i>y</i>(<i>t</i>) = <i>y</i><sub>0</sub><i>e</i><sup><i>gt</i></sup></div><ul class=\"math-list\"><li><i>y</i><sub>0</sub> &gt; 0. <i>g</i> &gt; 0, constant.</li><li>Chercher <i>T</i> tel que <i>y</i>(<i>T</i>) = 2<i>y</i><sub>0</sub>.</li></ul><div class=\"math-solutions\" data-solution-for=\"doublement-exercice\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\">2<i>y</i><sub>0</sub> = <i>y</i><sub>0</sub><i>e</i><sup><i>gT</i></sup></div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\">ln 2 = <i>gT</i> &emsp; <i>T</i> = <span class=\"frac\"><span>ln 2</span><span><i>g</i></span></span></div></div></div></div><div class=\"math-visual\" data-math-chart=\"doubling\"></div></div>",
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "regle-70",
    "title": "La règle des 70",
    "part": "Doublement et application",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><i>T</i> = <span class=\"frac\"><span>ln 2</span><span><i>g</i></span></span> = <span class=\"frac\"><span>100 ln 2</span><span><i>g</i><sub>%</sub></span></span> ≈ <span class=\"frac\"><span>70</span><span><i>g</i><sub>%</sub></span></span></div><table class=\"math-reference\"><tbody><tr><td>Taux instantané <i>g</i> = 2 %</td><td><div class=\"math-formula\"><i>T</i> ≈ 34,66 ans</div></td></tr><tr><td>Règle des 70</td><td><div class=\"math-formula\"><i>T</i> ≈ 70 / 2 = 35 ans</div></td></tr></tbody></table><ul class=\"math-list\"><li><i>g</i><sub>%</sub> = 100<i>g</i>.</li><li>L’approximation est 100 ln 2 ≈ 70.</li></ul></div>"
  },
  {
    "id": "france-usa",
    "title": "France et États-Unis : niveaux et croissance",
    "part": "Doublement et application",
    "html": "<div class=\"math-columns\"><div class=\"math-copy\"><ul class=\"math-list\"><li>Comparer les niveaux.</li><li>Comparer les pentes dans les trois modes.</li><li>Une pente plus forte en niveau suffit-elle à conclure ?</li></ul><p>PIB réel par habitant, 2000–2023.<br>Dollars internationaux de 2021, à PPA.</p></div><div class=\"math-visual\" data-math-chart=\"pwt\"></div></div>"
  },
  {
    "id": "trois-liens",
    "title": "Trois liens à garder en tête",
    "part": "Doublement et application",
    "html": "<div class=\"math-copy\"><table class=\"math-reference\"><tbody><tr><td>Logarithme et produit</td><td><div class=\"math-formula\">ln(<i>ab</i>) = ln <i>a</i> + ln <i>b</i></div></td></tr><tr><td>Logarithme et croissance</td><td><div class=\"math-formula\"><span class=\"frac\"><span>d ln <i>x</i></span><span>d<i>t</i></span></span> = <span class=\"frac\"><span><i>ẋ</i></span><span><i>x</i></span></span></div></td></tr><tr><td>Temps discret et continu</td><td><div class=\"math-formula\"><i>g</i> = ln(1 + <i>r</i>)</div></td></tr></tbody></table><ul class=\"math-list\"><li>Taux ordinaires et variations logarithmiques sont proches pour de petits taux.</li></ul></div>"
  },
  {
    "id": "ressources",
    "title": "Pour relire et prolonger la séance",
    "part": "Doublement et application",
    "html": "<div class=\"math-copy\"><ul class=\"math-list\"><li>Revoir ce support et l’enregistrement.</li><li>Exercice du cours : « D’où vient la croissance du niveau de vie ? »</li></ul><p><a href=\"https://arnauddyevre.github.io/macroeconomie-l3-2026/chapitre-1/exercices/niveau_vie_exercice_etudiant.pdf\">Énoncé PDF</a> &emsp; <a href=\"https://arnauddyevre.github.io/macroeconomie-l3-2026/supports-enseignant-362f9e78756efc9147313d8e/session-1/exercices/niveau_vie_exercice_corrige.pdf\">Exercice et solutions PDF</a></p><p><a href=\"https://arnauddyevre.github.io/macroeconomie-l3-2026/chapitre-1/#exercice-niveau-vie-1\">Diapositives de macroéconomie · version étudiante</a></p></div>"
  },
  {
    "id": "reserve",
    "title": "Réserve",
    "part": "Réserve",
    "layout": "section",
    "appendix": true,
    "html": "<div class=\"math-plan\"><ol><li>Pourcentages et puissances</li><li>Logarithmes</li><li>Dérivées</li><li>Croissance et suites géométriques</li><li>Doublement et application</li></ol><p class=\"active\">Réserve</p></div>"
  },
  {
    "id": "reserve-log-erreurs",
    "title": "Trois erreurs à repérer",
    "part": "Réserve",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\">ln(<i>a</i> + <i>b</i>) = ln <i>a</i> + ln <i>b</i> ?</div><div class=\"math-formula\">(ln <i>x</i>)′ = <span class=\"frac\"><span>1</span><span><i>x</i>′</span></span> ?</div><div class=\"math-formula\">−20 % puis +20 % = 0 % ?</div><div class=\"math-solutions\" data-solution-for=\"reserve-log-erreurs\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><p>ln(1 + 1) = ln 2 ≠ ln 1 + ln 1 = 0.</p></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\">(ln <i>x</i>)′ = <span class=\"frac\"><span>1</span><span><i>x</i></span></span> pour <i>x</i> &gt; 0.</div></div><div class=\"math-solution\" data-step=\"3\"><p>0,80 × 1,20 = 0,96, soit −4 %.</p></div></div></div>",
    "appendix": true,
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "reserve-tangente-calcul",
    "title": "Calculer la pente de la sécante",
    "part": "Réserve",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> &emsp; <i>x</i><sub>0</sub> = 2</div><div class=\"math-formula\"><span class=\"frac\"><span>(2 + <i>h</i>)<sup>2</sup> − 4</span><span><i>h</i></span></span> = ?</div><ul class=\"math-list\"><li>Calculer pour <i>h</i> ≠ 0, puis faire tendre <i>h</i> vers 0.</li><li>Estimer <i>f</i>(2,1) avec la tangente.</li></ul><div class=\"math-solutions\" data-solution-for=\"reserve-tangente-calcul\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\"><span class=\"frac\"><span>4 + 4<i>h</i> + <i>h</i><sup>2</sup> − 4</span><span><i>h</i></span></span> = 4 + <i>h</i> → 4</div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\"><i>f</i>(2,1) ≈ 4 + 4 × 0,1 = 4,4</div><p>Valeur exacte : 4,41.</p></div></div></div>",
    "appendix": true,
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "reserve-taux-exemple",
    "title": "Dérivée et taux : un exemple",
    "part": "Réserve",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><i>x</i>(<i>t</i>) = 100<i>e</i><sup>0,02<i>t</i></sup></div><ul class=\"math-list\"><li>Calculer <i>ẋ</i>(<i>t</i>), puis <i>g</i><sub>x</sub>(<i>t</i>).</li></ul><div class=\"math-solutions\" data-solution-for=\"reserve-taux-exemple\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\"><i>ẋ</i>(<i>t</i>) = 2<i>e</i><sup>0,02<i>t</i></sup></div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\"><i>g</i><sub>x</sub>(<i>t</i>) = <span class=\"frac\"><span>2<i>e</i><sup>0,02<i>t</i></sup></span><span>100<i>e</i><sup>0,02<i>t</i></sup></span></span> = 0,02</div></div></div></div>",
    "appendix": true,
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "reserve-decomposition",
    "title": "Productivité, heures et emploi",
    "part": "Réserve",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><span class=\"frac\"><span><i>Y</i></span><span><i>N</i></span></span> = <span class=\"frac\"><span><i>Y</i></span><span><i>H</i></span></span> × <span class=\"frac\"><span><i>H</i></span><span><i>L</i></span></span> × <span class=\"frac\"><span><i>L</i></span><span><i>N</i></span></span></div><ul class=\"math-list\"><li><i>H</i> : heures travaillées. <i>L</i> : personnes en emploi.</li><li>Prendre les logarithmes, puis dériver.</li></ul><div class=\"math-solutions\" data-solution-for=\"reserve-decomposition\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\">ln <span class=\"frac\"><span><i>Y</i></span><span><i>N</i></span></span> = ln <span class=\"frac\"><span><i>Y</i></span><span><i>H</i></span></span> + ln <span class=\"frac\"><span><i>H</i></span><span><i>L</i></span></span> + ln <span class=\"frac\"><span><i>L</i></span><span><i>N</i></span></span></div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\"><i>g</i><sub>Y/N</sub> = <i>g</i><sub>Y/H</sub> + <i>g</i><sub>H/L</sub> + <i>g</i><sub>L/N</sub></div></div></div></div>",
    "appendix": true,
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "reserve-inflation",
    "title": "Du PIB nominal au PIB réel",
    "part": "Réserve",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><i>Y</i><sup>nom</sup> = <i>P Y</i></div><ul class=\"math-list\"><li><i>P</i> : déflateur du PIB. <i>Y</i> : PIB réel.</li><li>Relier les taux de croissance.</li></ul><div class=\"math-solutions\" data-solution-for=\"reserve-inflation\" data-diffusion=\"apres-seance\"><div class=\"math-solution\" data-step=\"1\"><div class=\"math-formula\">ln <i>Y</i><sup>nom</sup> = ln <i>P</i> + ln <i>Y</i></div></div><div class=\"math-solution\" data-step=\"2\"><div class=\"math-formula\"><i>g</i><sub>Y<sup>nom</sup></sub> = π + <i>g</i><sub>Y</sub> &emsp; π = <span class=\"frac\"><span><i>Ṗ</i></span><span><i>P</i></span></span></div><p>L’inflation est la dérivée <strong>relative</strong> de l’indice.</p></div></div></div>",
    "appendix": true,
    "exercise": true,
    "cls": "exercise"
  },
  {
    "id": "reserve-taux-moyen",
    "title": "Un taux moyen sur plusieurs années",
    "part": "Réserve",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><i>x</i><sub>0</sub> → <i>x</i><sub><i>n</i></sub></div><table class=\"math-reference\"><tbody><tr><td>Taux ordinaire composé</td><td><div class=\"math-formula\">1 + <i>r̄</i> = (<span class=\"frac\"><span><i>x</i><sub><i>n</i></sub></span><span><i>x</i><sub>0</sub></span></span>)<sup>1/<i>n</i></sup></div></td></tr><tr><td>Variation logarithmique annuelle moyenne</td><td><div class=\"math-formula\"><i>ḡ</i> = <span class=\"frac\"><span>ln <i>x</i><sub><i>n</i></sub> − ln <i>x</i><sub>0</sub></span><span><i>n</i></span></span></div></td></tr></tbody></table><div class=\"math-formula\"><i>ḡ</i> = ln(1 + <i>r̄</i>)</div><ul class=\"math-list\"><li><i>x</i><sub>0</sub>, <i>x</i><sub>n</sub> &gt; 0 et <i>n</i> ≥ 1.</li><li>La moyenne arithmétique des taux ordinaires n’est pas, en général, le taux composé.</li></ul></div>",
    "appendix": true
  },
  {
    "id": "reserve-doublement-discret",
    "title": "Si le taux donné est un taux annuel",
    "part": "Réserve",
    "html": "<div class=\"math-copy\"><div class=\"math-formula\"><i>r</i> = 2 % &emsp; <i>g</i> = ln(1,02) ≈ 0,019803</div><div class=\"math-formula\"><i>T</i> = <span class=\"frac\"><span>ln 2</span><span>ln(1 + <i>r</i>)</span></span> ≈ 35,003 ans</div><ul class=\"math-list\"><li>À la fin de l’année 35, le niveau est encore légèrement inférieur au double.</li><li>Première fin d’année au moins doublée : année 36.</li></ul></div>",
    "appendix": true
  },
  {
    "id": "reserve-exact-approche",
    "title": "Deux « 2 % » ne donnent pas la même courbe",
    "part": "Réserve",
    "html": "<div class=\"math-copy\"><table class=\"math-reference\"><tbody><tr><td>Taux annuel ordinaire <i>r</i> = 2 %</td><td><div class=\"math-formula\"><i>x</i><sub>10</sub> = 100 × 1,02<sup>10</sup> ≈ 121,90</div></td></tr><tr><td>Taux instantané <i>g</i> = 2 %</td><td><div class=\"math-formula\"><i>x</i>(10) = 100<i>e</i><sup>0,02×10</sup> ≈ 122,14</div></td></tr></tbody></table><ul class=\"math-list\"><li>Pour une même trajectoire, imposer <i>g</i> = ln(1 + <i>r</i>).</li></ul></div>",
    "appendix": true
  }
];
