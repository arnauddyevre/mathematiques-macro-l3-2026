/* Contenu étudiant avec solutions pédagogiques. Généré par build_support.cjs. */
window.COURSE = {
  "title": "Résoudre un modèle économique: équilibre et optimisation",
  "chapter": "Mathématiques · Soutien",
  "author": "Arnaud Dyèvre",
  "session": 2,
  "date": "2026-11-12",
  "dateLabel": "Jeudi 12 novembre 2026",
  "startsAt": "2026-11-12T08:00:00+01:00",
  "endsAt": "2026-11-12T09:30:00+01:00",
  "timezone": "Europe/Paris"
};
window.MATHS_PLAN = [];
window.SLIDES = [
  {
    "id": "couverture",
    "title": "Résoudre un modèle économique: équilibre et optimisation",
    "layout": "cover",
    "html": "<div class=\"math-cover\">\n          <p class=\"cover-label\">Mathématiques · Soutien · Séance 2</p>\n          <h1>Résoudre un modèle économique: équilibre et optimisation</h1>\n          <div class=\"cover-details\">\n            <p class=\"cover-author\">Arnaud Dyèvre</p>\n            <p class=\"cover-date\"><time datetime=\"2026-11-12\">Jeudi 12 novembre 2026</time></p>\n            <p class=\"cover-time\">8 h – 9 h 30 · Heure de Paris</p>\n          </div>\n        <p class=\"public-support-link\"><a href=\"https://arnauddyevre.github.io/mathematiques-macro-l3-2026/seances/02/\">Ouvrir la version interactive du support</a></p></div>"
  },
  {
    "id": "objectif",
    "title": "Notre objectif : trouver <i>k</i>*, <i>y</i>*, <i>w</i>* et <i>r</i>*",
    "part": "Lire le modèle",
    "html": "<p class=\"objective-intro\">Nous cherchons à résoudre le <strong>modèle de Solow à son état stationnaire</strong> : toutes les variables sont à leur valeur d’équilibre et ne varient plus. La PGF est constante ; nous la ferons croître plus tard.</p><p class=\"objective-notation\">On note <i>k</i>* la valeur de la variable <i>k</i> à l’équilibre.</p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><i>k</i>*, <i>y</i>*</div><div class=\"explanation\"><p><strong>Le capital et la production stationnaires</strong><br>Les niveaux par travailleur qui restent constants au cours du temps.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>w</i>*, <i>r</i>*</div><div class=\"explanation\"><p><strong>Les rémunérations à cet état stationnaire</strong><br>Le salaire et le prix de location du capital.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\">Choix → prix<br>Accumulation → niveaux</div><div class=\"explanation\"><p><strong>Comment résoudre le modèle de Solow (= trouver l’équilibre)</strong><br>D’abord le profit des entreprises détermine les prix du travail et du capital, ensuite l’accumulation du capital détermine sa quantité stationnaire. Enfin, on réunit les résultats pour obtenir <i>k</i>* puis <i>y</i>*.</p></div></div></div>",
    "cls": "solow-maths "
  },
  {
    "id": "objets",
    "title": "Notre économie : variables et hypothèses",
    "part": "Lire le modèle",
    "html": "<div class=\"sf-economy\">\n    <section class=\"g-panel\"><h2>Quantités</h2><table class=\"sf-vars\">\n      <tr><td><i>Y, C, I</i></td><td>Production, consommation, investissement</td></tr>\n      <tr><td><i>K</i></td><td>Capital productif</td></tr>\n      <tr><td><i>L</i></td><td>Personnes en emploi</td></tr>\n      <tr><td><i>A</i></td><td>Productivité globale des facteurs</td></tr>\n      <tr><td><i>N</i></td><td>Population</td></tr>\n    </table></section>\n    <section class=\"g-panel\" data-step=\"1\"><h2>Paramètres</h2><table class=\"sf-vars\">\n      <tr><td><i>α</i></td><td>Élasticité au capital</td></tr>\n      <tr><td><i>s</i></td><td>Taux d’épargne</td></tr>\n      <tr><td><i>δ</i></td><td>Dépréciation</td></tr>\n      <tr><td><i>n</i></td><td>Croissance de l’emploi</td></tr>\n      <tr><td><i>γ</i></td><td>Croissance de la PGF</td></tr>\n    </table></section>\n    <section class=\"g-panel\" data-step=\"2\"><h2>Prix des facteurs</h2><table class=\"sf-vars\">\n      <tr><td><i>w</i></td><td>Salaire réel par travailleur</td></tr>\n      <tr><td><i>r</i></td><td>Prix de location du capital, avant dépréciation</td></tr>\n    </table></section>\n    <section class=\"g-panel sf-hypotheses\" data-step=\"3\"><h2>Hypothèses</h2><ul>\n      <li>Économie fermée à un bien</li>\n      <li>Concurrence parfaite. Prix du bien unique : <i>1</i> (un <em>numéraire</em>).</li>\n      <li>Travail offert = travail employé.</li>\n      <li><i>L/N</i> constant</li>\n    </ul></section>\n  </div><p class=\"economy-scope\">Dans cette séance : <i>n</i> = <i>γ</i> = 0. L’emploi <i>L</i> et la PGF <i>A</i> restent constants.</p>",
    "cls": "solow-maths "
  },
  {
    "id": "relations",
    "title": "Les relations dont nous avons besoin",
    "part": "Lire le modèle",
    "html": "<div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><i>Y</i> = <i>A</i><i>K</i><sup><i>α</i></sup><i>L</i><sup>1−<i>α</i></sup></div><div class=\"explanation\"><p><strong>Produire</strong><br><i>K</i> : capital ; <i>L</i> : travail ; <i>A</i> : productivité globale des facteurs (PGF). Le prix du bien produit vaut 1.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>π</i> = <i>Y</i> − <i>r</i><i>K</i> − <i>w</i><i>L</i></div><div class=\"explanation\"><p><strong>Calculer le profit</strong><br><i>π</i> : profit ; <i>r</i> : prix de location d’une unité de capital ; <i>w</i> : salaire par travailleur.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"overdot\"><i>K</i></span> = <i>s</i><i>Y</i> − <i>δ</i><i>K</i></div><div class=\"explanation\"><p><strong>Accumuler le capital</strong><br>L’investissement <i>sY</i> ajoute du capital ; la dépréciation <i>δ</i><i>K</i> en retire. Le point indique la variation instantanée.</p></div></div></div>",
    "cls": "solow-maths "
  },
  {
    "id": "profit",
    "title": "Étape 1 : résoudre le problème de l’entreprise (1)",
    "part": "Optimiser le profit",
    "html": "<p class=\"enterprise-intro\">Écrire ce que l’entreprise maximise</p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><span class=\"max-operator\">max<sub><i>K</i>,<i>L</i></sub></span> <i>π</i> = <i>A</i><i>K</i><sup><i>α</i></sup><i>L</i><sup>1−<i>α</i></sup> − <i>r</i><i>K</i> − <i>w</i><i>L</i></div><div class=\"explanation\"><p><strong>La fonction objective</strong><br>Le profit est la recette de production moins le coût des deux facteurs.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>K</i>, <i>L</i></div><div class=\"explanation\"><p><strong>Les variables de choix</strong><br>L’entreprise choisit les quantités de capital et de travail qu’elle demande.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><i>A</i>, <i>α</i>, <i>r</i>, <i>w</i></div><div class=\"explanation\"><p><strong>Les grandeurs prises comme données</strong><br>Pendant ce calcul, la technologie et les prix des facteurs ne changent pas.</p></div></div></div>",
    "cls": "solow-maths profit-slide enterprise-step"
  },
  {
    "id": "recette-optimisation",
    "title": "Étape 1 : résoudre le problème de l’entreprise (2)",
    "part": "Optimiser le profit",
    "html": "<p class=\"enterprise-intro\">La recette en quatre opérations</p><ol class=\"recipe\"><li>Choisir la variable par rapport à laquelle dériver.</li><li data-step=\"1\">Dériver la fonction objective en gardant les autres termes constants.</li><li data-step=\"2\">Poser la dérivée égale à zéro.</li><li data-step=\"3\">Isoler l’inconnue recherchée dans l’équation obtenue.</li></ol>",
    "cls": "solow-maths  enterprise-step"
  },
  {
    "id": "constantes-capital",
    "title": "Étape 1 : résoudre le problème de l’entreprise (3)",
    "part": "Optimiser le profit",
    "html": "<p class=\"enterprise-intro\">Dériver par rapport à <i>K</i> : que garder constant ?</p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><i>Y</i> = <i>A</i><i>L</i><sup>1−<i>α</i></sup><i>K</i><sup><i>α</i></sup></div><div class=\"explanation\"><p><strong>Une constante multipliée par une puissance</strong><br>Pour la dérivée par rapport à <i>K</i>, <i>A</i>, <i>α</i> et <i>L</i> sont constants.</p><aside class=\"derivative-note\"><p><strong>d</strong> : dérivée d’une fonction d’une seule variable.</p><p><strong>∂</strong> : dérivée partielle ; une variable varie, les autres restent constantes.</p><p><strong><i>δ</i></strong> : taux de dépréciation dans Solow.</p></aside></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><span class=\"frac\"><span>d<i>x</i><sup><i>a</i></sup></span><span>d<i>x</i></span></span> = <i>a</i><i>x</i><sup><i>a</i>−1</sup></div><div class=\"explanation\"><p><strong>La règle des puissances</strong><br>L’exposant descend devant ; on retire 1 à l’exposant. Ici, <i>a</i> = <i>α</i>.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"frac\"><span>d<i>c</i></span><span>d<i>x</i></span></span> = 0</div><div class=\"explanation\"><p><strong>La règle des constantes</strong><br>Une quantité qui ne dépend pas de la variable choisie a une dérivée nulle.</p></div></div></div>",
    "cls": "solow-maths  enterprise-step"
  },
  {
    "id": "derivee-capital",
    "title": "Étape 1 : résoudre le problème de l’entreprise (4)",
    "part": "Optimiser le profit",
    "html": "<p class=\"enterprise-intro\">Dériver le profit terme par terme</p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><span class=\"frac\"><span>∂<i>A</i><i>K</i><sup><i>α</i></sup><i>L</i><sup>1−<i>α</i></sup></span><span>∂<i>K</i></span></span> = <i>α</i><i>A</i><i>K</i><sup><i>α</i>−1</sup><i>L</i><sup>1−<i>α</i></sup></div><div class=\"explanation\"><p><strong>La production</strong><br>Le facteur constant <i>AL</i><sup>1−<i>α</i></sup> reste en place. Seule la puissance de <i>K</i> change.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><span class=\"frac\"><span>∂(−<i>r</i><i>K</i>)</span><span>∂<i>K</i></span></span> = −<i>r</i></div><div class=\"explanation\"><p><strong>Le coût du capital</strong><br><i>r</i> est constant ; la dérivée de <i>K</i> par rapport à <i>K</i> vaut 1.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"frac\"><span>∂(−<i>w</i><i>L</i>)</span><span>∂<i>K</i></span></span> = 0</div><div class=\"explanation\"><p><strong>Le coût du travail</strong><br>Ni <i>w</i> ni <i>L</i> ne varie dans cette dérivée.</p></div></div><div class=\"derivation-row\" data-step=\"3\"><div class=\"equation\"><span class=\"result\"><span class=\"frac\"><span>∂<i>π</i></span><span>∂<i>K</i></span></span> = <i>α</i><i>A</i><i>K</i><sup><i>α</i>−1</sup><i>L</i><sup>1−<i>α</i></sup> − <i>r</i></span></div><div class=\"explanation\"><p><strong>Assembler les trois termes</strong><br>La dérivée d’une somme est la somme des dérivées.</p></div></div></div>",
    "cls": "solow-maths four-rows enterprise-step"
  },
  {
    "id": "prix-capital",
    "title": "Étape 1 : résoudre le problème de l’entreprise (5)",
    "part": "Optimiser le profit",
    "html": "<p class=\"enterprise-intro\">Annuler la dérivée, puis isoler <i>r</i></p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><span class=\"frac\"><span>∂<i>π</i></span><span>∂<i>K</i></span></span> = 0<br><i>α</i><i>A</i><i>K</i><sup><i>α</i>−1</sup><i>L</i><sup>1−<i>α</i></sup> − <i>r</i> = 0</div><div class=\"explanation\"><p><strong>La condition de choix</strong><br>Poser la dérivée du profit par rapport au capital égale à zéro.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>r</i> = <i>α</i><span class=\"frac\"><span><i>A</i><i>K</i><sup><i>α</i></sup><i>L</i><sup>1−<i>α</i></sup></span><span><i>K</i></span></span></div><div class=\"explanation\"><p><strong>Reconnaître une division par <i>K</i></strong><br><i>K</i><sup><i>α</i>−1</sup> = <i>K</i><sup><i>α</i></sup>/<i>K</i>. On ajoute <i>r</i> aux deux membres, puis on réécrit la puissance.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"result\"><i>r</i> = <i>α</i><span class=\"frac\"><span><i>Y</i></span><span><i>K</i></span></span></span></div><div class=\"explanation\"><p><strong>Remplacer la production</strong><br>Le numérateur <i>AK</i><sup><i>α</i></sup><i>L</i><sup>1−<i>α</i></sup> est exactement <i>Y</i>.</p></div></div></div>",
    "cls": "solow-maths  enterprise-step"
  },
  {
    "id": "derivee-travail",
    "title": "Étape 1 : résoudre le problème de l’entreprise (6)",
    "part": "Optimiser le profit",
    "html": "<p class=\"enterprise-intro\">Reprendre la recette pour <i>L</i></p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><i>Y</i> = (<i>A</i><i>K</i><sup><i>α</i></sup>)<i>L</i><sup>1−<i>α</i></sup></div><div class=\"explanation\"><p><strong>Changer de variable</strong><br>Cette fois, <i>A</i>, <i>α</i> et <i>K</i> restent constants. On dérive par rapport à <i>L</i>.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\">(1−<i>α</i>)−1 = −<i>α</i><br><span class=\"frac\"><span>∂<i>Y</i></span><span>∂<i>L</i></span></span> = (1−<i>α</i>)<i>A</i><i>K</i><sup><i>α</i></sup><i>L</i><sup>−<i>α</i></sup></div><div class=\"explanation\"><p><strong>Appliquer la règle des puissances</strong><br>L’exposant 1−<i>α</i> descend devant. Le nouvel exposant est −<i>α</i>.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"frac\"><span>∂(−<i>r</i><i>K</i>)</span><span>∂<i>L</i></span></span> = 0 &emsp; <span class=\"frac\"><span>∂(−<i>w</i><i>L</i>)</span><span>∂<i>L</i></span></span> = −<i>w</i></div><div class=\"explanation\"><p><strong>Dériver les coûts</strong><br>Le coût du capital est constant ; le coût du travail a pour dérivée −<i>w</i>.</p></div></div><div class=\"derivation-row\" data-step=\"3\"><div class=\"equation\"><span class=\"result\"><span class=\"frac\"><span>∂<i>π</i></span><span>∂<i>L</i></span></span> = (1−<i>α</i>)<i>A</i><i>K</i><sup><i>α</i></sup><i>L</i><sup>−<i>α</i></sup> − <i>w</i></span></div><div class=\"explanation\"><p><strong>Assembler</strong><br>Additionner les dérivées de la production et des coûts.</p></div></div></div>",
    "cls": "solow-maths four-rows enterprise-step"
  },
  {
    "id": "salaire",
    "title": "Étape 1 : résoudre le problème de l’entreprise (7)",
    "part": "Optimiser le profit",
    "html": "<p class=\"enterprise-intro\">Annuler la dérivée, puis isoler <i>w</i></p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><span class=\"frac\"><span>∂<i>π</i></span><span>∂<i>L</i></span></span> = 0<br>(1−<i>α</i>)<i>A</i><i>K</i><sup><i>α</i></sup><i>L</i><sup>−<i>α</i></sup> − <i>w</i> = 0</div><div class=\"explanation\"><p><strong>La condition de choix</strong><br>Poser la dérivée du profit par rapport au travail égale à zéro.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>w</i> = (1−<i>α</i>)<span class=\"frac\"><span><i>A</i><i>K</i><sup><i>α</i></sup><i>L</i><sup>1−<i>α</i></sup></span><span><i>L</i></span></span></div><div class=\"explanation\"><p><strong>Reconnaître une division par <i>L</i></strong><br><i>L</i><sup>−<i>α</i></sup> = <i>L</i><sup>1−<i>α</i></sup>/<i>L</i>. On ajoute <i>w</i> aux deux membres et on réécrit la puissance.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"result\"><i>w</i> = (1−<i>α</i>)<span class=\"frac\"><span><i>Y</i></span><span><i>L</i></span></span></span></div><div class=\"explanation\"><p><strong>Remplacer la production</strong><br>Le numérateur est <i>Y</i>. Le salaire est une fraction de la production moyenne par travailleur.</p></div></div></div>",
    "cls": "solow-maths  enterprise-step"
  },
  {
    "id": "equilibre-facteurs",
    "title": "Étape 1 : résoudre le problème de l’entreprise (8)",
    "part": "Optimiser le profit",
    "html": "<p class=\"enterprise-intro\">Ce que les deux équations donnent à l’équilibre</p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><i>K</i><sup><i>d</i></sup> = <i>K</i><br><i>L</i><sup><i>d</i></sup> = <i>L</i></div><div class=\"explanation\"><p><strong>Les demandes rencontrent les quantités disponibles</strong><br>À l’équilibre, les entreprises utilisent le capital disponible et le travail offert. L’exposant <i>d</i> signifie « demandé ».</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>r</i> = <i>α</i><span class=\"frac\"><span><i>Y</i></span><span><i>K</i></span></span><br><i>w</i> = (1−<i>α</i>)<span class=\"frac\"><span><i>Y</i></span><span><i>L</i></span></span></div><div class=\"explanation\"><p><strong>Les rémunérations compatibles avec ces quantités</strong><br>Les conditions de choix des entreprises donnent les prix des facteurs.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"overdot\"><i>K</i></span> = <i>s</i><i>Y</i> − <i>δ</i><i>K</i></div><div class=\"explanation\"><p><strong>Il reste à déterminer le capital stationnaire</strong><br>Les prix sont compatibles avec l’équilibre à une date. Le capital peut encore augmenter ou diminuer.</p></div></div></div>",
    "cls": "solow-maths  enterprise-step"
  },
  {
    "id": "par-travailleur",
    "title": "Étape 2 : trouver la valeur stationnaire du capital par travailleur (1)",
    "part": "Trouver le capital stationnaire",
    "html": "<p class=\"stationary-intro\">Passer aux grandeurs par travailleur</p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><i>k</i> = <span class=\"frac\"><span><i>K</i></span><span><i>L</i></span></span></div><div class=\"explanation\"><p><strong>Le capital par travailleur</strong><br>Diviser le capital total par le nombre de travailleurs.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>y</i> = <span class=\"frac\"><span><i>Y</i></span><span><i>L</i></span></span></div><div class=\"explanation\"><p><strong>La production par travailleur</strong><br>Appliquer la même opération à la production.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"frac\"><span><i>Y</i></span><span><i>N</i></span></span> = <span class=\"frac\"><span><i>L</i></span><span><i>N</i></span></span><i>y</i></div><div class=\"explanation\"><p><strong>Travailleur et habitant</strong><br><i>N</i> est la population totale. <i>Y</i>/<i>L</i> et <i>Y</i>/<i>N</i> ne sont pas identiques si le nombre de travailleurs diffère du nombre d’habitants.</p></div></div></div>",
    "cls": "solow-maths  stationary-step"
  },
  {
    "id": "production-intensive",
    "title": "Étape 2 : trouver la valeur stationnaire du capital par travailleur (2)",
    "part": "Trouver le capital stationnaire",
    "html": "<p class=\"stationary-intro\">Transformer la fonction de production</p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><span class=\"frac\"><span><i>Y</i></span><span><i>L</i></span></span> = <span class=\"frac\"><span><i>A</i><i>K</i><sup><i>α</i></sup><i>L</i><sup>1−<i>α</i></sup></span><span><i>L</i></span></span></div><div class=\"explanation\"><p><strong>Diviser les deux membres par <i>L</i></strong><br>Partir de la fonction de production totale.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>y</i> = <i>A</i><i>K</i><sup><i>α</i></sup><i>L</i><sup>−<i>α</i></sup></div><div class=\"explanation\"><p><strong>Soustraire les exposants de <i>L</i></strong><br><i>L</i><sup>1−<i>α</i></sup>/<i>L</i> = <i>L</i><sup>(1−<i>α</i>)−1</sup> = <i>L</i><sup>−<i>α</i></sup>.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><i>y</i> = <i>A</i><span class=\"frac\"><span><i>K</i><sup><i>α</i></sup></span><span><i>L</i><sup><i>α</i></sup></span></span> = <i>A</i>(<span class=\"frac\"><span><i>K</i></span><span><i>L</i></span></span>)<sup><i>α</i></sup></div><div class=\"explanation\"><p><strong>Regrouper sous une même puissance</strong><br><i>K</i><sup><i>α</i></sup>/<i>L</i><sup><i>α</i></sup> = (<i>K</i>/<i>L</i>)<sup><i>α</i></sup>.</p></div></div><div class=\"derivation-row\" data-step=\"3\"><div class=\"equation\"><span class=\"result\"><i>y</i> = <i>A</i><i>k</i><sup><i>α</i></sup></span></div><div class=\"explanation\"><p><strong>Substituer la définition de <i>k</i></strong><br>Remplacer <i>K</i>/<i>L</i> par <i>k</i>.</p></div></div></div>",
    "cls": "solow-maths four-rows stationary-step"
  },
  {
    "id": "accumulation-intensive",
    "title": "Étape 2 : trouver la valeur stationnaire du capital par travailleur (3)",
    "part": "Trouver le capital stationnaire",
    "html": "<p class=\"stationary-intro\">Transformer l’équation d’accumulation</p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><span class=\"overdot\"><i>k</i></span> = <span class=\"frac\"><span><span class=\"overdot\"><i>K</i></span></span><span><i>L</i></span></span></div><div class=\"explanation\"><p><strong><i>L</i> est constant</strong><br>La dérivée de <i>K</i>/<i>L</i> est donc la dérivée de <i>K</i> divisée par <i>L</i>.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><span class=\"overdot\"><i>k</i></span> = <span class=\"frac\"><span><i>s</i><i>Y</i>−<i>δ</i><i>K</i></span><span><i>L</i></span></span><br>= <i>s</i><span class=\"frac\"><span><i>Y</i></span><span><i>L</i></span></span> − <i>δ</i><span class=\"frac\"><span><i>K</i></span><span><i>L</i></span></span></div><div class=\"explanation\"><p><strong>Substituer la loi d’accumulation</strong><br>Remplacer la variation du capital total, puis distribuer la division par <i>L</i>.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"overdot\"><i>k</i></span> = <i>s</i><i>y</i> − <i>δ</i><i>k</i></div><div class=\"explanation\"><p><strong>Remplacer les rapports</strong><br><i>Y</i>/<i>L</i> devient <i>y</i> ; <i>K</i>/<i>L</i> devient <i>k</i>.</p></div></div><div class=\"derivation-row\" data-step=\"3\"><div class=\"equation\"><span class=\"result\"><span class=\"overdot\"><i>k</i></span> = <i>s</i><i>A</i><i>k</i><sup><i>α</i></sup> − <i>δ</i><i>k</i></span></div><div class=\"explanation\"><p><strong>Substituer la production par travailleur</strong><br>Utiliser <i>y</i> = <i>Ak</i><sup><i>α</i></sup>.</p></div></div></div>",
    "cls": "solow-maths four-rows stationary-step"
  },
  {
    "id": "definition-stationnaire",
    "title": "Étape 2 : trouver la valeur stationnaire du capital par travailleur (4)",
    "part": "Trouver le capital stationnaire",
    "html": "<p class=\"stationary-intro\">Définir l’état stationnaire</p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><span class=\"result\"><span class=\"overdot\"><i>k</i></span> = 0</span></div><div class=\"explanation\"><p><strong>Le capital par travailleur ne varie plus</strong><br>Son niveau reste constant au cours du temps. On le note <i>k*</i> à l’état stationnaire.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><span class=\"overdot\"><i>k</i></span> = <span class=\"frac\"><span>d<i>k</i></span><span>d<i>t</i></span></span></div><div class=\"explanation\"><p><strong>Une dérivée par rapport au temps</strong><br>On cherche un niveau qui annule la variation du capital.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"frac\"><span>∂<i>π</i></span><span>∂<i>K</i></span></span> = 0</div><div class=\"explanation\"><p><strong>Un autre problème que la maximisation</strong><br>Pour le profit, on annule une dérivée par rapport à un choix. Un état stationnaire n’est pas nécessairement un optimum.</p></div></div></div>",
    "cls": "solow-maths  stationary-step"
  },
  {
    "id": "diagramme-stationnaire",
    "title": "Étape 2 : trouver la valeur stationnaire du capital par travailleur (5)",
    "part": "Trouver le capital stationnaire",
    "html": "<p class=\"stationary-intro\">Écrire l’équation à résoudre</p><div class=\"diagram-layout\"><div class=\"diagram-copy\"><div class=\"equation\"><i>s</i><i>A</i>(<i>k</i>*)<sup><i>α</i></sup> − <i>δ</i><i>k</i>* = 0</div><p>À l’état stationnaire, la variation du capital est nulle.</p><div data-step=\"1\"><div class=\"equation\"><span class=\"result\"><i>s</i><i>A</i>(<i>k</i>*)<sup><i>α</i></sup> = <i>δ</i><i>k</i>*</span></div><p>Ajouter <i>δ</i><i>k*</i> aux deux membres : l’investissement remplace exactement le capital déprécié.</p></div><p class=\"diagram-reading\">Pour <i>k</i> positif :<br><i>k</i> &lt; <i>k*</i> : le capital augmente.<br><i>k</i> &gt; <i>k*</i> : le capital diminue.</p></div><div class=\"diagram-panel\"><div id=\"solow-chart\" aria-label=\"Investissement et dépréciation par travailleur\"></div><div class=\"chart-controls\"><label for=\"capital-position\">Déplacer le capital</label><input id=\"capital-position\" type=\"range\" min=\"20\" max=\"180\" step=\"1\" value=\"100\"><button type=\"button\" id=\"capital-reset\">Revenir à <i>k*</i></button></div><p id=\"capital-reading\" aria-live=\"polite\"></p><p class=\"print-reading\">À <i>k*</i>, investissement = dépréciation. L’intersection positive définit le capital stationnaire.</p></div></div>",
    "cls": "solow-maths  stationary-step"
  },
  {
    "id": "isoler-puissance",
    "title": "Étape 2 : trouver la valeur stationnaire du capital par travailleur (6)",
    "part": "Trouver le capital stationnaire",
    "html": "<p class=\"stationary-intro\">Isoler la puissance de <i>k*</i></p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><i>s</i><i>A</i>(<i>k</i>*)<sup><i>α</i></sup> = <i>δ</i><i>k</i>*</div><div class=\"explanation\"><p><strong>Chercher le niveau positif</strong><br>Nous cherchons <i>k*</i> &gt; 0. Zéro est aussi stationnaire, mais ce n’est pas le niveau recherché ici.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>s</i><i>A</i> = <i>δ</i><span class=\"frac\"><span><i>k</i>*</span><span>(<i>k</i>*)<sup><i>α</i></sup></span></span></div><div class=\"explanation\"><p><strong>Diviser par (<i>k*</i>)<sup><i>α</i></sup></strong><br>Le facteur est positif : on peut diviser les deux membres par ce même terme.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><i>s</i><i>A</i> = <i>δ</i>(<i>k</i>*)<sup>1−<i>α</i></sup></div><div class=\"explanation\"><p><strong>Soustraire les exposants</strong><br><i>k*</i>/(<i>k*</i>)<sup><i>α</i></sup> = (<i>k*</i>)<sup>1−<i>α</i></sup>.</p></div></div><div class=\"derivation-row\" data-step=\"3\"><div class=\"equation\"><span class=\"result\">(<i>k</i>*)<sup>1−<i>α</i></sup> = <span class=\"frac\"><span><i>s</i><i>A</i></span><span><i>δ</i></span></span></span></div><div class=\"explanation\"><p><strong>Diviser par <i>δ</i></strong><br><i>δ</i> est strictement positif. La puissance de <i>k*</i> est maintenant isolée.</p></div></div></div>",
    "cls": "solow-maths four-rows stationary-step"
  },
  {
    "id": "capital-stationnaire",
    "title": "Étape 2 : trouver la valeur stationnaire du capital par travailleur (7)",
    "part": "Trouver le capital stationnaire",
    "html": "<p class=\"stationary-intro\">Isoler <i>k*</i> : appliquer la puissance inverse</p><div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><i>z</i><sup><i>a</i></sup> = <i>b</i> &ensp; ⇒ &ensp; <i>z</i> = <i>b</i><sup>1/<i>a</i></sup></div><div class=\"explanation\"><p><strong>La règle à utiliser</strong><br>Pour <i>z</i> et <i>b</i> positifs et <i>a</i> non nul, appliquer la puissance 1/<i>a</i> aux deux membres.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\">((<i>k</i>*)<sup>1−<i>α</i></sup>)<sup><span class=\"frac\"><span>1</span><span>1−<i>α</i></span></span></sup> = (<span class=\"frac\"><span><i>s</i><i>A</i></span><span><i>δ</i></span></span>)<sup><span class=\"frac\"><span>1</span><span>1−<i>α</i></span></span></sup></div><div class=\"explanation\"><p><strong>Ici, l’exposant est 1−<i>α</i></strong><br>On applique donc la puissance 1/(1−<i>α</i>). Les exposants se multiplient et leur produit vaut 1.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"result\"><i>k</i>* = (<span class=\"frac\"><span><i>s</i><i>A</i></span><span><i>δ</i></span></span>)<sup><span class=\"frac\"><span>1</span><span>1−<i>α</i></span></span></sup></span></div><div class=\"explanation\"><p><strong>Le capital stationnaire positif</strong><br>L’inconnue est isolée : le résultat dépend seulement des paramètres.</p></div></div></div>",
    "cls": "solow-maths  stationary-step"
  },
  {
    "id": "production-stationnaire",
    "title": "Étape 3 : trouver la production depuis la valeur de <i>k*</i>",
    "part": "Calculer les autres résultats",
    "html": "<div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><i>y</i>* = <i>A</i>(<i>k</i>*)<sup><i>α</i></sup></div><div class=\"explanation\"><p><strong>Partir de la relation connue</strong><br>La fonction de production reste valable à l’état stationnaire.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>y</i>* = <i>A</i>[(<span class=\"frac\"><span><i>s</i><i>A</i></span><span><i>δ</i></span></span>)<sup><span class=\"frac\"><span>1</span><span>1−<i>α</i></span></span></sup>]<sup><i>α</i></sup></div><div class=\"explanation\"><p><strong>Remplacer <i>k*</i> par sa formule</strong><br>Conserver les parenthèses : la puissance <i>α</i> porte sur toute l’expression de <i>k*</i>.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><span class=\"result\"><i>y</i>* = <i>A</i>(<span class=\"frac\"><span><i>s</i><i>A</i></span><span><i>δ</i></span></span>)<sup><span class=\"frac\"><span><i>α</i></span><span>1−<i>α</i></span></span></sup></span></div><div class=\"explanation\"><p><strong>Multiplier les exposants</strong><br>Une puissance élevée à une puissance multiplie les exposants : <i>α</i> × 1/(1−<i>α</i>) = <i>α</i>/(1−<i>α</i>).</p></div></div></div>",
    "cls": "solow-maths "
  },
  {
    "id": "remunerations-stationnaires",
    "title": "Revenir aux rémunérations",
    "part": "Calculer les autres résultats",
    "html": "<div class=\"derivation\"><div class=\"derivation-row\"><div class=\"equation\"><span class=\"result\"><i>w</i>* = (1−<i>α</i>)<i>y</i>*</span></div><div class=\"explanation\"><p><strong>Le salaire stationnaire</strong><br>Reprendre <i>w</i> = (1−<i>α</i>)<i>Y</i>/<i>L</i> et remplacer <i>Y</i>/<i>L</i> par <i>y*</i>.</p></div></div><div class=\"derivation-row\" data-step=\"1\"><div class=\"equation\"><i>r</i>* = <i>α</i><span class=\"frac\"><span><i>y</i>*</span><span><i>k</i>*</span></span></div><div class=\"explanation\"><p><strong>Le prix de location du capital</strong><br><i>Y</i>/<i>K</i> = (<i>Y</i>/<i>L</i>)/(<i>K</i>/<i>L</i>) = <i>y</i>/<i>k</i>. Évaluer ce rapport à l’état stationnaire.</p></div></div><div class=\"derivation-row\" data-step=\"2\"><div class=\"equation\"><i>s</i><i>y</i>* = <i>δ</i><i>k</i>*<br><span class=\"frac\"><span><i>y</i>*</span><span><i>k</i>*</span></span> = <span class=\"frac\"><span><i>δ</i></span><span><i>s</i></span></span></div><div class=\"explanation\"><p><strong>Utiliser la condition stationnaire</strong><br>Diviser <i>sy*</i> = <i>δ</i><i>k*</i> par <i>sk*</i>. Cette égalité simplifie le calcul.</p></div></div><div class=\"derivation-row\" data-step=\"3\"><div class=\"equation\"><span class=\"result\"><i>r</i>* = <span class=\"frac\"><span><i>α</i><i>δ</i></span><span><i>s</i></span></span></span></div><div class=\"explanation\"><p><strong>Substituer le rapport</strong><br>Le prix de location est brut de dépréciation. Il ne s’agit pas d’un taux de croissance.</p></div></div></div>",
    "cls": "solow-maths four-rows"
  },
  {
    "id": "recette-complete",
    "title": "La recette complète",
    "part": "Calculer les autres résultats",
    "html": "<div class=\"summary-columns\"><div><h2>Optimisation</h2><ol><li>Écrire le profit.</li><li>Identifier les variables de choix.</li><li>Dériver par rapport à chaque choix.</li><li>Poser chaque dérivée égale à zéro.</li><li>Isoler les rémunérations.</li></ol><div class=\"equation\"><i>r</i>=<i>α</i><span class=\"frac\"><span><i>Y</i></span><span><i>K</i></span></span> &emsp; <i>w</i>=(1−<i>α</i>)<span class=\"frac\"><span><i>Y</i></span><span><i>L</i></span></span></div></div><div data-step=\"1\"><h2>État stationnaire</h2><ol><li>Écrire la dynamique par travailleur.</li><li>Poser la variation égale à zéro.</li><li>Isoler la puissance du capital.</li><li>Appliquer la puissance inverse.</li><li>Substituer pour obtenir <i>y*</i>, <i>w*</i>, <i>r*</i>.</li></ol><div class=\"equation\"><i>k</i>* = (<span class=\"frac\"><span><i>s</i><i>A</i></span><span><i>δ</i></span></span>)<sup><span class=\"frac\"><span>1</span><span>1−<i>α</i></span></span></sup></div></div></div>",
    "cls": "solow-maths "
  }
];
