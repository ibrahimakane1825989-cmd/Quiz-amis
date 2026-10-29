/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuizQuestion, QuizTopic } from './tournamentQuestions';

/**
 * QUESTIONS D'ENTRAÎNEMENT SOLO (1ère L2)
 * Strictly distinct from Tournament questions!
 * "Les questions solo ne doivent pas être les mêmes questions qui seront posée au au tournement ensemble."
 * Elles permettent aux élèves de s'entraîner en autonomie sans spoiler les questions du tournoi multijoueur.
 */
export const SOLO_TOPICS: QuizTopic[] = [
  // 1. SVT (Niveau 1ère L2) : L'organisation de la cellule (Questions Solo exclusives)
  {
    id: 'svt-cellule',
    subject: 'SVT',
    lesson: "L'organisation de la cellule (niveau 1ère L2)",
    icon: '🔬',
    color: 'from-emerald-500 to-teal-600',
    description: "Entraînement solo : lysosomes, centrosome, transport membranaire, réplication et ultrastructure",
    questions: [
      {
        id: 'solo-svt1',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel organite cellulaire vésiculaire riche en enzymes hydrolitiques acides est responsable de la digestion intracellulaire et de l'autophagie ?",
        answer: "Le lysosome",
        acceptableKeywords: ["Lysosome", "Le lysosome", "Lysosomes"],
        explanation: "Le lysosome dégrade les macromolécules, les organites usagés et les particules phagocytées à pH acide.",
        hint: "Organite 'éboueur' de la cellule (débute par Lyso...)."
      },
      {
        id: 'solo-svt2',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel centre organisateur des microtubules (MTOC) constitué de deux centrioles perpendiculaires dirige le fuseau mitotique chez les cellules animales ?",
        answer: "Le centrosome",
        acceptableKeywords: ["Centrosome", "Le centrosome", "Centriole", "Centrioles"],
        explanation: "Le centrosome organise les microtubules du fuseau achromatique lors de la division cellulaire.",
        hint: "Composé de centrioles, commence par Centro..."
      },
      {
        id: 'solo-svt3',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment appelle-t-on la phase liquide translucide et gélatineuse du cytoplasme, hors des organites membranaires ?",
        answer: "Le cytosol",
        acceptableKeywords: ["Cytosol", "Le cytosol", "Hyaloplasme", "Le hyaloplasme"],
        explanation: "Le cytosol (ou hyaloplasme) est le liquide intracellulaire où se déroulent de nombreuses réactions métaboliques comme la glycolyse.",
        hint: "Aussi appelé hyaloplasme."
      },
      {
        id: 'solo-svt4',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quelle sous-structure dense visible dans le noyau est le site exclusif de la transcription de l'ARN ribosomique et de l'assemblage des ribosomes ?",
        answer: "Le nucléole",
        acceptableKeywords: ["Nucleole", "Le nucleole", "Nucléole"],
        explanation: "Le nucléole est une région intranucléaire dense non délimitée par une membrane, active dans la biogenèse des ribosomes.",
        hint: "Nucléo-..."
      },
      {
        id: 'solo-svt5',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment appelle-t-on le complexe associant l'ADN nucléaire décondensé et les protéines basiques appelées histones ?",
        answer: "La chromatine",
        acceptableKeywords: ["Chromatine", "La chromatine", "Nucleosome", "Nucléosome"],
        explanation: "La chromatine s'enroule et se condense fortement pendant la prophase pour former les chromosomes individualisés.",
        hint: "Chroma-..."
      },
      {
        id: 'solo-svt6',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel type de transport passif à travers la membrane plasmique utilise des protéines canaux ou perméases sans consommer d'énergie ATP ?",
        answer: "Diffusion facilitée",
        acceptableKeywords: ["Diffusion facilitee", "La diffusion facilitee", "Diffusion facilitée", "Transport passif facilite"],
        explanation: "La diffusion facilitée permet le passage de molécules polaires (glucose, ions) dans le sens de leur gradient de concentration.",
        hint: "Diffusion f..."
      },
      {
        id: 'solo-svt7',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment appelle-t-on le transport membranaire qui fait passer des molécules contre leur gradient de concentration en consommant de l'ATP (ex: pompe Na+/K+) ?",
        answer: "Transport actif",
        acceptableKeywords: ["Transport actif", "Le transport actif", "Pompe active"],
        explanation: "Le transport actif utilise des protéines porteuses et hydrolyse l'ATP pour maintenir les gradients ioniques.",
        hint: "Transport a..."
      },
      {
        id: 'solo-svt8',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment nomme-t-on les minuscules canaux cytoplasmiques traversant la paroi végétale reliant directement les cellules voisines ?",
        answer: "Plasmodesmes",
        acceptableKeywords: ["Plasmodesmes", "Les plasmodesmes", "Plasmodesme"],
        explanation: "Les plasmodesmes permettent la communication intercellulaire et la circulation de sève élaborée dans le symplasme.",
        hint: "Plasmo-..."
      },
      {
        id: 'solo-svt9',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel processus cellulaire consiste en l'expulsion de substances hors de la cellule par fusion d'une vésicule avec la membrane plasmique ?",
        answer: "Exocytose",
        acceptableKeywords: ["Exocytose", "L exocytose", "L'exocytose"],
        explanation: "L'exocytose permet de sécréter des hormones, des neurotransmetteurs ou des enzymes digestives dans le milieu extracellulaire.",
        hint: "Exo- (vers l'extérieur) + cytose."
      },
      {
        id: 'solo-svt10',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel processus inverse permet à une cellule d'ingérer de grosses particules en repliant sa membrane plasmique ?",
        answer: "Endocytose",
        acceptableKeywords: ["Endocytose", "L endocytose", "Phagocytose", "Pinocytose", "L'endocytose"],
        explanation: "L'endocytose englobe la phagocytose (particules solides) et la pinocytose (gouttelettes liquides).",
        hint: "Endo- (vers l'intérieur)."
      },
      {
        id: 'solo-svt11',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment nomme-t-on la membrane unitaire qui entoure la vacuole dans une cellule végétale ?",
        answer: "Le tonoplaste",
        hint: "Tono-...",
        acceptableKeywords: ["Tonoplaste", "Le tonoplaste"],
        explanation: "Le tonoplaste régule les flux d'eau et de solutés entre le cytosol et le suc vacuolaire."
      },
      {
        id: 'solo-svt12',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel organite cellulaire détoxifiant contient de la catalase pour décomposer le peroxyde d'hydrogène toxique (eau oxygénée H2O2) ?",
        answer: "Le peroxysome",
        acceptableKeywords: ["Peroxysome", "Le peroxysome", "Peroxysomes"],
        explanation: "Les peroxysomes protègent la cellule en détoxifiant les dérivés réactifs de l'oxygène et oxydent les acides gras.",
        hint: "Péroxy-..."
      },
      {
        id: 'solo-svt13',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment appelle-t-on la division effective du cytoplasme qui sépare les deux cellules filles à la suite de la mitose ?",
        answer: "La cytocinèse",
        acceptableKeywords: ["Cytocinese", "La cytocinese", "Cytodiérèse", "Cytodierese", "Cytocinèse"],
        explanation: "La cytocinèse s'opère par un anneau contractile chez les animaux ou par un phragmoplaste chez les végétaux.",
        hint: "Cytocinèse ou cytodiérèse."
      },
      {
        id: 'solo-svt14',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quelles protéines principales forment les microtubules du cytosquelette et du fuseau mitotique ?",
        answer: "La tubuline",
        acceptableKeywords: ["Tubuline", "Tubulines", "Alpha et beta tubuline"],
        explanation: "Les dimères d'alpha et bêta-tubuline polymérisent pour former les cylindres creux des microtubules.",
        hint: "Tubu-..."
      },
      {
        id: 'solo-svt15',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment appelle-t-on la représentation ordonnée de l'ensemble des chromosomes d'un individu classés par paires et par taille ?",
        answer: "Le caryotype",
        acceptableKeywords: ["Caryotype", "Le caryotype"],
        explanation: "Chez l'espèce humaine, le caryotype comprend 46 chromosomes (23 paires dont une paire sexuelle).",
        hint: "Caryo-type."
      },
      {
        id: 'solo-svt16',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Pendant quelle étape du cycle cellulaire (dans l'interphase) la quantité d'ADN est-elle dupliquée par réplication semi-conservative ?",
        answer: "La phase S",
        acceptableKeywords: ["Phase S", "La phase S", "Periode de synthese", "Synthese"],
        explanation: "L'interphase comprend G1 (croissance), S (Synthèse/réplication de l'ADN) et G2 (préparation mitotique).",
        hint: "Lettre S pour Synthèse."
      },
      {
        id: 'solo-svt17',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quelle zone rétrécie du chromosome relie les deux chromatides sœurs et porte les kinétochores ?",
        answer: "Le centromère",
        acceptableKeywords: ["Centromere", "Le centromere", "Centromère"],
        explanation: "Le centromère maintient ensemble les deux copies d'ADN jusqu'au déclenchement de l'anaphase.",
        hint: "Centro-mère."
      },
      {
        id: 'solo-svt18',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel réseau membranaire lisse est spécialisé dans la synthèse des lipides, hormones stéroïdes et la détoxication ?",
        answer: "Réticulum endoplasmique lisse",
        acceptableKeywords: ["Reticulum endoplasmique lisse", "REL", "Réticulum lisse"],
        explanation: "Contrairement au REG, le REL est dépourvu de ribosomes et produit les phospholipides et stéroïdes.",
        hint: "Sigle : REL."
      },
      {
        id: 'solo-svt19',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment qualifie-t-on une solution dont la concentration en solutés est rigoureusement identique à celle du milieu intracellulaire ?",
        answer: "Isotonique",
        acceptableKeywords: ["Isotonique", "Solution isotonique", "Iso-osmotique"],
        explanation: "Dans un milieu isotonique, les flux entrants et sortants d'eau s'équilibrent, préservant la morphologie cellulaire.",
        hint: "Iso- = égal."
      },
      {
        id: 'solo-svt20',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quels pores protéiques membranaires découverts par Peter Agre permettent le passage ultra-rapide et sélectif de l'eau par osmose ?",
        answer: "Les aquaporines",
        acceptableKeywords: ["Aquaporines", "Aquaporine", "Les aquaporines"],
        explanation: "Les aquaporines facilitent le transport transmembranaire massif de l'eau dans les hématies et les tubules rénaux.",
        hint: "Aqua (eau) + porines."
      }
    ]
  },

  // 2. Anglais (Niveau 1ère L2) : Tenses (Questions Solo exclusives)
  {
    id: 'anglais-tenses',
    subject: 'Anglais',
    lesson: 'Tenses (niveau 1ère L2)',
    icon: '🇬🇧',
    color: 'from-blue-500 to-indigo-600',
    description: "Entraînement solo : Future continuous, Present perfect continuous, Zero & Mixed conditionals, Passive tenses",
    questions: [
      {
        id: 'solo-ang1',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which tense is used to emphasize the continuous duration of an action that started in the past and is still ongoing right now (e.g. 'I have been waiting for two hours')?",
        answer: "Present Perfect Continuous",
        acceptableKeywords: ["Present perfect continuous", "Present perfect progressive"],
        explanation: "Formed with have/has been + verb-ing, it highlights uninterrupted duration.",
        hint: "Have/has been + ing."
      },
      {
        id: 'solo-ang2',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which conditional type is used for universal scientific facts and inevitable results: 'If you heat ice, it melts'?",
        answer: "Zero Conditional",
        acceptableKeywords: ["Zero conditional", "Conditionnel zero", "Type 0"],
        explanation: "Zero conditional uses: If + Present Simple, Present Simple.",
        hint: "Numbered 'Zero'."
      },
      {
        id: 'solo-ang3',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Complete the sentence with the Future Continuous: 'This time tomorrow, we _______ (fly) over the Atlantic Ocean.'",
        answer: "Will be flying",
        acceptableKeywords: ["Will be flying", "Shall be flying"],
        explanation: "Future Continuous (will be + verb-ing) describes an action in progress at a specific future moment.",
        hint: "Will be + flying."
      },
      {
        id: 'solo-ang4',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the past participle of the irregular verb 'begin'?",
        answer: "Begun",
        acceptableKeywords: ["Begun"],
        explanation: "Begin - Began - Begun.",
        hint: "Ends in -un."
      },
      {
        id: 'solo-ang5',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which tense is formed with 'had been + verb-ing' and expresses an ongoing past activity before another past point?",
        answer: "Past Perfect Continuous",
        acceptableKeywords: ["Past perfect continuous", "Past perfect progressive"],
        explanation: "Example: 'The ground was wet because it had been raining all night.'",
        hint: "Had been + ing."
      },
      {
        id: 'solo-ang6',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What modal verb replaces 'if' in formal inversion for 1st conditional: '_______ you need help, please call the teacher.'?",
        answer: "Should",
        acceptableKeywords: ["Should"],
        explanation: "Formal inversion: 'Should you need help' = 'If you need help'.",
        hint: "Modal starting with S."
      },
      {
        id: 'solo-ang7',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the past simple of the irregular verb 'freeze'?",
        answer: "Froze",
        acceptableKeywords: ["Froze"],
        explanation: "Freeze - Froze - Frozen.",
        hint: "F-r-o-z-e."
      },
      {
        id: 'solo-ang8',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which future construction expresses prior plans and firm intentions: 'Look at those dark clouds! It _______ rain.'?",
        answer: "Is going to",
        acceptableKeywords: ["Going to", "Is going to", "Be going to"],
        explanation: "'Be going to' expresses immediate predictions based on present physical evidence.",
        hint: "Going to."
      },
      {
        id: 'solo-ang9',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the passive voice form in Past Simple for: 'They built the hospital in 2020'?",
        answer: "Was built",
        acceptableKeywords: ["The hospital was built", "Was built"],
        explanation: "Passive past simple = was/were + past participle (built).",
        hint: "Was + past participle."
      },
      {
        id: 'solo-ang10',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Complete the sentence: 'By the year 2030, scientists _______ (discover) new renewable energies.'",
        answer: "Will have discovered",
        acceptableKeywords: ["Will have discovered", "Future perfect"],
        explanation: "Future Perfect (will have + past participle) refers to an action that will be completed by a deadline.",
        hint: "Will have + past participle."
      },
      {
        id: 'solo-ang11',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the past participle of the irregular verb 'swim'?",
        answer: "Swum",
        acceptableKeywords: ["Swum"],
        explanation: "Swim - Swam - Swum.",
        hint: "S-w-u-m."
      },
      {
        id: 'solo-ang12',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which modal past construction expresses logical certainty about a past event: 'He _______ (be) exhausted after running 42 km'?",
        answer: "Must have been",
        acceptableKeywords: ["Must have been", "Must have"],
        explanation: "'Must have + past participle' expresses strong deduction about past events.",
        hint: "Must have been."
      },
      {
        id: 'solo-ang13',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What time conjunction meaning 'as soon as' triggers Present Simple instead of will in future time clauses: 'I will call you _______ I arrive'?",
        answer: "When",
        acceptableKeywords: ["When", "As soon as"],
        explanation: "In time clauses introduced by when, as soon as, once, we use Present Simple for future meanings.",
        hint: "When / As soon as."
      },
      {
        id: 'solo-ang14',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the past simple of the irregular verb 'catch'?",
        answer: "Caught",
        acceptableKeywords: ["Caught"],
        explanation: "Catch - Caught - Caught.",
        hint: "C-a-u-g-h-t."
      },
      {
        id: 'solo-ang15',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Complete the regret structure: 'I wish I _______ (know) the correct answer yesterday.'",
        answer: "Had known",
        acceptableKeywords: ["Had known"],
        explanation: "Wish + Past Perfect expresses regret about past events that cannot be changed.",
        hint: "Had + known."
      },
      {
        id: 'solo-ang16',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the past participle of the irregular verb 'fall'?",
        answer: "Fallen",
        acceptableKeywords: ["Fallen"],
        explanation: "Fall - Fell - Fallen.",
        hint: "Ends in -en."
      },
      {
        id: 'solo-ang17',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What negative word is used at the end of negative and interrogative Present Perfect sentences (e.g. 'Have you finished _______?')?",
        answer: "Yet",
        acceptableKeywords: ["Yet"],
        explanation: "'Yet' indicates an action expected to happen, positioned at the end of clauses.",
        hint: "Three letters : Y-e-t."
      },
      {
        id: 'solo-ang18',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the past simple of the verb 'tear'?",
        answer: "Tore",
        acceptableKeywords: ["Tore"],
        explanation: "Tear - Tore - Torn.",
        hint: "T-o-r-e."
      },
      {
        id: 'solo-ang19',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which tense is used with 'just' to state an action completed moments ago (e.g. 'I have just eaten')?",
        answer: "Present Perfect",
        acceptableKeywords: ["Present perfect", "Present perfect simple"],
        explanation: "Present Perfect with 'just' highlights immediate past relevance.",
        hint: "Have + just + participe."
      },
      {
        id: 'solo-ang20',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What modal verb in the past expresses regret or advice not followed: 'You _______ studied more for the exam'?",
        answer: "Should have",
        acceptableKeywords: ["Should have", "Ought to have"],
        explanation: "Should have + past participle expresses reproach or unfulfilled moral duty in the past.",
        hint: "Should have."
      }
    ]
  },

  // 3. Français (Niveau 1ère L2) : Versification, Lumières, Préromantisme (Questions Solo exclusives)
  {
    id: 'francais-siecle',
    subject: 'Français',
    lesson: 'Versification, le Siècle des Lumières, le Préromantisme',
    icon: '📚',
    color: 'from-amber-500 to-rose-600',
    description: "Entraînement solo : Synérèse, rimes plates, De l'Allemagne, Lettres persanes, René et Chateaubriand",
    questions: [
      {
        id: 'solo-fr1',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment appelle-t-on le phénomène poétique inverse de la diérèse, où deux voyelles en contact sont prononcées en une seule syllabe (ex: 'hier') ?",
        answer: "La synérèse",
        acceptableKeywords: ["Synérèse", "Synérese", "Synérèse", "La synérèse"],
        explanation: "La synérèse contracte deux sons vocaliques contigus en une seule émission de voix.",
        hint: "Syn-érèse."
      },
      {
        id: 'solo-fr2',
        subject: 'Français',
        lesson: 'Versification',
        question: "Quelle disposition des rimes suit le schéma consécutif AABB ?",
        answer: "Rimes suivies ou plates",
        acceptableKeywords: ["Rimes plates", "Rimes suivies", "Plates", "Suivies"],
        explanation: "Les rimes suivies (ou plates) s'enchaînent par paires de vers consécutifs.",
        hint: "Rimes plates ou suivies."
      },
      {
        id: 'solo-fr3',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment nomme-t-on la figure rythmique qui consiste à commencer une proposition à la fin d'un vers pour la développer dans le vers suivant ?",
        answer: "Le contre-rejet",
        acceptableKeywords: ["Contre-rejet", "Le contre-rejet", "Contre rejet"],
        explanation: "Le contre-rejet amorce la phrase au bout du premier vers et crée une attente suspensive.",
        hint: "Contre-r..."
      },
      {
        id: 'solo-fr4',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment qualifie-t-on une rime qui comporte trois sons identiques ou plus (ex: 'élégance' / 'arrogance') ?",
        answer: "Rime riche",
        acceptableKeywords: ["Rime riche", "Riche", "Rimes riches"],
        explanation: "Une rime est pauvre avec 1 son commun, suffisante avec 2 sons, et riche dès 3 sons communs.",
        hint: "Rime r..."
      },
      {
        id: 'solo-fr5',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Dans quel ouvrage majeur Montesquieu analyse-t-il la tyrannie, la monarchie et la république sous l'angle des climats et des lois ?",
        answer: "De l'esprit des lois",
        acceptableKeywords: ["L esprit des lois", "De l esprit des lois", "De l'esprit des lois", "Esprit des lois"],
        explanation: "Publié en 1748, 'De l'esprit des lois' est le fondement de la sociologie politique moderne.",
        hint: "De l'e... des lois."
      },
      {
        id: 'solo-fr6',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quel mathématicien et philosophe a rédigé le célèbre 'Discours préliminaire' de l'Encyclopédie aux côtés de Denis Diderot ?",
        answer: "Jean Le Rond d'Alembert",
        acceptableKeywords: ["d Alembert", "D'Alembert", "Jean d'Alembert"],
        explanation: "D'Alembert a structuré la classification méthodique des sciences dans l'Encyclopédie.",
        hint: "D'A..."
      },
      {
        id: 'solo-fr7',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quel traité de Jean-Jacques Rousseau propose une éducation idéale et naturelle pour l'enfant, loin de la corruption sociale ?",
        answer: "Émile ou De l'éducation",
        acceptableKeywords: ["Emile", "L Emile", "Emile ou de l education", "Émile"],
        explanation: "L'Émile fonde la pédagogie moderne basée sur le respect des étapes de développement de l'enfant.",
        hint: "Prénom débutant par E."
      },
      {
        id: 'solo-fr8',
        subject: 'Français',
        lesson: 'Préromantisme',
        question: "Quelle femme de lettres a fait découvrir le romantisme allemand en France avec son célèbre essai 'De l'Allemagne' (1813) ?",
        answer: "Madame de Staël",
        acceptableKeywords: ["Madame de Stael", "Mme de Stael", "Madame de Staël", "Germaine de Stael"],
        explanation: "Madame de Staël a popularisé le terme 'romantique' et défendu la liberté créatrice contre le carcan classique.",
        hint: "Madame de S..."
      },
      {
        id: 'solo-fr9',
        subject: 'Français',
        lesson: 'Préromantisme',
        question: "Quel roman exotique de Bernardin de Saint-Pierre raconte le destin tragique et innocent de deux enfants élevés sur l'île de France (Maurice) ?",
        answer: "Paul et Virginie",
        acceptableKeywords: ["Paul et Virginie"],
        explanation: "Paul et Virginie incarne l'idylle pastorale préromantique brisée par la civilisation corruptrice.",
        hint: "Deux prénoms unis par 'et'."
      },
      {
        id: 'solo-fr10',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment appelle-t-on la répétition expressive d'une même consonne dans un vers poétique (ex: 'Pour qui sont ces serpents qui sifflent sur vos têtes') ?",
        answer: "Allitération",
        acceptableKeywords: ["Alliteration", "Une alliteration", "Allitération"],
        explanation: "L'allitération imite ou évoque un son par la répétition concertée de consonnes.",
        hint: "Alli-..."
      },
      {
        id: 'solo-fr11',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment nomme-t-on la répétition concertée d'un même son voyelle dans un groupe de mots ou un vers ?",
        answer: "Assonance",
        acceptableKeywords: ["Assonance", "Une assonance"],
        explanation: "L'assonance crée une harmonie vocalique interne au vers poétique.",
        hint: "Asso-..."
      },
      {
        id: 'solo-fr12',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quel genre littéraire argumentatif en prose fictive Voltaire a-t-il immortalisé pour diffuser ses idées critiques sans censure directe ?",
        answer: "Le conte philosophique",
        acceptableKeywords: ["Conte philosophique", "Le conte philosophique"],
        explanation: "Le conte philosophique allie fantaisie narrative, ironie et critique rationnelle des dogmes.",
        hint: "Conte p..."
      },
      {
        id: 'solo-fr13',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quel célèbre salon parisien tenu par une femme a réuni d'Alembert, Turgot et les grands Encyclopédistes au XVIIIe siècle ?",
        answer: "Le salon de Madame Geoffrin",
        acceptableKeywords: ["Salon de Madame Geoffrin", "Madame Geoffrin", "Geoffrin", "Salon litteraire", "Salon littéraire"],
        explanation: "Les salons littéraires tenus par des femmes de cour ont été les foyers essentiels du débat des Lumières.",
        hint: "Salon littéraire / Mme Geoffrin."
      },
      {
        id: 'solo-fr14',
        subject: 'Français',
        lesson: 'Préromantisme',
        question: "Quel dernier ouvrage inachevé et introspectif de Jean-Jacques Rousseau décrit ses promenades solitaires en communion avec la flore et la méditation ?",
        answer: "Les Rêveries du promeneur solitaire",
        acceptableKeywords: ["Les Reveries du promeneur solitaire", "Reveries du promeneur solitaire", "Les Rêveries"],
        explanation: "Rousseau y fait l'éloge du sentiment de l'existence et annonce la sensibilité romantique du XIXe.",
        hint: "Les Rêveries du p..."
      },
      {
        id: 'solo-fr15',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment appelle-t-on un vers de huit syllabes métriques en poésie française ?",
        answer: "Octosyllabe",
        acceptableKeywords: ["Octosyllabe", "L octosyllabe", "Octosyllabes"],
        explanation: "L'octosyllabe est un vers court, rapide et très chantant, fréquent chez les romantiques et fabulistes.",
        hint: "Octo- = 8."
      },
      {
        id: 'solo-fr16',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quelle arme rhétorique et satirique favorite de Voltaire consiste à dire le contraire de ce que l'on pense pour ridiculiser l'adversaire ?",
        answer: "L'ironie",
        acceptableKeywords: ["Ironie", "L ironie", "L'ironie"],
        explanation: "L'ironie voltairienne utilise l'antiphrase, la fausse naïveté et l'hyperbole satirique.",
        hint: "I-ro-nie."
      },
      {
        id: 'solo-fr17',
        subject: 'Français',
        lesson: 'Préromantisme',
        question: "Quel court roman de Chateaubriand raconte la passion incestueuse et coupable de René pour sa sœur Amélie ?",
        answer: "René",
        acceptableKeywords: ["Rene", "René"],
        explanation: "René est le héros mélancolique par excellence, en proie au mal du siècle et à la solitude.",
        hint: "Prénom de 4 lettres : R-e-n-é."
      },
      {
        id: 'solo-fr18',
        subject: 'Français',
        lesson: 'Versification',
        question: "Dans le décompte classique des syllabes en versification française, quelle voyelle muette finale ne se prononce pas lorsqu'elle est suivie d'une voyelle ?",
        answer: "Le e muet",
        acceptableKeywords: ["E muet", "Le e muet", "E", "Élision du e"],
        explanation: "Le 'e' caduc s'élide devant une voyelle ou un 'h' muet, mais se compte devant une consonne.",
        hint: "Le 'e' muet."
      },
      {
        id: 'solo-fr19',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quel écrivain et dramaturge des Lumières a écrit 'Le Mariage de Figaro' pour dénoncer les privilèges injustes de la noblesse de naissance ?",
        answer: "Beaumarchais",
        acceptableKeywords: ["Beaumarchais", "Pierre-Augustin Caron de Beaumarchais"],
        explanation: "Figaro lance à son maître aristocrate : 'Vous vous êtes donné la peine de naître, et rien de plus !'",
        hint: "Beau-mar-chais."
      },
      {
        id: 'solo-fr20',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment appelle-t-on une strophe de trois vers en poésie classique, que l'on retrouve notamment dans la seconde partie du sonnet ?",
        answer: "Tercet",
        acceptableKeywords: ["Tercet", "Un tercet"],
        explanation: "Le sonnet régulier comprend deux quatrains suivis de deux tercets.",
        hint: "Racine 'trois'."
      }
    ]
  },

  // 4. Économie (Niveau 1ère L2) : La production (Partie 1) (Questions Solo exclusives)
  {
    id: 'eco-production',
    subject: 'Économie',
    lesson: 'La production (partie 1)',
    icon: '📈',
    color: 'from-amber-500 to-orange-600',
    description: "Entraînement solo : Rendements décroissants, coûts fixes/variables, Cobb-Douglas, gains de productivité et investissements",
    questions: [
      {
        id: 'solo-eco1',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quelle célèbre loi économique formulée par David Ricardo et Turgot affirme qu'au-delà d'un certain seuil, l'ajout d'une unité de facteur variable rapporte de moins en moins de production ?",
        answer: "Loi des rendements décroissants",
        acceptableKeywords: ["Loi des rendements decroissants", "Rendements decroissants", "Loi des rendements décroissants"],
        explanation: "La productivité marginale du facteur variable finit par diminuer à cause de l'encombrement du facteur fixe.",
        hint: "Rendements d..."
      },
      {
        id: 'solo-eco2',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on l'investissement matériel qui vise spécifiquement à accroître le volume total des capacités de production d'une entreprise ?",
        answer: "Investissement de capacité",
        acceptableKeywords: ["Investissement de capacite", "Investissement d extension", "Investissement de capacité"],
        explanation: "L'investissement de capacité achète des équipements additionnels pour produire davantage en réponse à une hausse de la demande.",
        hint: "Investissement de c..."
      },
      {
        id: 'solo-eco3',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment nomme-t-on l'investissement destiné à remplacer des machines par des modèles plus modernes et performants pour réduire les coûts unitaires ?",
        answer: "Investissement de productivité",
        acceptableKeywords: ["Investissement de productivite", "Investissement de modernisation", "Investissement de productivité"],
        explanation: "Aussi appelé investissement de rationalisation, il permet d'économiser sur les coûts de main-d'œuvre.",
        hint: "Investissement de p..."
      },
      {
        id: 'solo-eco4',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on les coûts de production qui varient directement en fonction des quantités de biens fabriqués (matières premières, énergie) ?",
        answer: "Coûts variables",
        acceptableKeywords: ["Couts variables", "Les couts variables", "Coûts variables"],
        explanation: "Coût Total = Coûts Fixes + Coûts Variables.",
        hint: "Coûts v..."
      },
      {
        id: 'solo-eco5',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on le niveau de production ou chiffre d'affaires pour lequel une entreprise ne réalise ni gain ni perte (résultat nul) ?",
        answer: "Le seuil de rentabilité",
        acceptableKeywords: ["Seuil de rentabilite", "Point mort", "Le seuil de rentabilité"],
        explanation: "Au seuil de rentabilité (ou point mort), la marge sur coûts variables couvre exactement les coûts fixes.",
        hint: "Seuil de r... ou point mort."
      },
      {
        id: 'solo-eco6',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quelle célèbre fonction mathématique de production modélise la production Q en fonction de K et L sous la forme Q = A · K^alpha · L^beta ?",
        answer: "Fonction Cobb-Douglas",
        acceptableKeywords: ["Cobb Douglas", "Fonction de Cobb Douglas", "Cobb-Douglas"],
        explanation: "La fonction de Cobb-Douglas est très utilisée pour analyser les rendements d'échelle et l'élasticité de substitution.",
        hint: "Noms des économistes Cobb et Douglas."
      },
      {
        id: 'solo-eco7',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on la conséquence involontaire de l'activité d'un agent économique sur le bien-être d'un tiers sans compensation marchande (ex: pollution) ?",
        answer: "Externalité négative",
        acceptableKeywords: ["Externalite", "Externalites", "Externalite negative", "Effet externe", "Externalité"],
        explanation: "Théorisées par Arthur Pigou, les externalités révèlent une défaillance de marché nécessitant parfois une taxe.",
        hint: "Externalité ou effet externe."
      },
      {
        id: 'solo-eco8',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on la mesure de l'efficacité globale obtenue en divisant la valeur ajoutée par le nombre d'heures travaillées par les salariés ?",
        answer: "Productivité horaire du travail",
        acceptableKeywords: ["Productivite horaire", "Productivite horaire du travail", "Productivité horaire"],
        explanation: "Productivité horaire = Valeur Ajoutée / Nombre total d'heures de travail effectuées.",
        hint: "Productivité h..."
      },
      {
        id: 'solo-eco9',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on le supplément de richesse distribué entre hausses de salaires, baisse des prix pour les consommateurs et dividendes grâce à l'efficacité accrue ?",
        answer: "Gains de productivité",
        acceptableKeywords: ["Gains de productivite", "Le gain de productivite", "Gains de productivité"],
        explanation: "Les gains de productivité sont le moteur historique de la croissance économique et du pouvoir d'achat.",
        hint: "Gains de p..."
      },
      {
        id: 'solo-eco10',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quelle catégorie regroupe les entreprises appartenant à une seule personne physique qui en assume l'entière responsabilité ?",
        answer: "Entreprise individuelle",
        acceptableKeywords: ["Entreprise individuelle", "EI", "Auto entrepreneur"],
        explanation: "Dans l'entreprise individuelle, le patrimoine personnel et professionnel peut être juridiquement engagé.",
        hint: "Entreprise i..."
      },
      {
        id: 'solo-eco11',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quelle forme de société de capitaux permet de diviser son capital en actions négociables sur les marchés financiers ?",
        answer: "Société Anonyme",
        acceptableKeywords: ["Societe Anonyme", "SA", "Société anonyme"],
        explanation: "Dans une SA, la responsabilité des actionnaires est limitée au montant de leurs apports.",
        hint: "Sigle usuel : SA."
      },
      {
        id: 'solo-eco12',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on l'ensemble des biens naturels (terres arables, minerais, pétrole, eau) utilisés comme ressources productives ?",
        answer: "Facteur terre ou ressources naturelles",
        acceptableKeywords: ["Facteur terre", "Ressources naturelles", "Facteur naturel", "La terre"],
        explanation: "Historiquement identifié par les physiocrates et économistes classiques comme troisième facteur de production.",
        hint: "Facteur terre ou ressources naturelles."
      },
      {
        id: 'solo-eco13',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment qualifie-t-on des rendements d'échelle lorsque doubler tous les facteurs de production fait exactement doubler la production ?",
        answer: "Rendements d'échelle constants",
        acceptableKeywords: ["Rendements constants", "Constants", "Rendements d echelle constants"],
        explanation: "La production est homogène de degré 1 : f(2K, 2L) = 2 f(K, L).",
        hint: "Rendements c..."
      },
      {
        id: 'solo-eco14',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quel économiste autrichien a théorisé le rôle clé de l'entrepreneur innovateur et le processus de 'destruction créatrice' ?",
        answer: "Joseph Schumpeter",
        acceptableKeywords: ["Schumpeter", "Joseph Schumpeter"],
        explanation: "Schumpeter montre que les innovations majeures (produits, procédés, marchés) bouleversent périodiquement l'économie.",
        hint: "Auteur de 'Capitalisme, Socialisme et Démocratie'."
      },
      {
        id: 'solo-eco15',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on la production de biens ou services réalisée au sein des ménages pour leur propre consommation sans passer par le marché ?",
        answer: "Production domestique",
        acceptableKeywords: ["Production domestique", "Travail domestique", "Auto production"],
        explanation: "La production domestique (ménage, cuisine familiale, bricolage) n'est pas comptabilisée dans le calcul officiel du PIB.",
        hint: "Production d..."
      },
      {
        id: 'solo-eco16',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on le ratio obtenu en divisant le coût total par le nombre d'unités produites Q ?",
        answer: "Coût moyen",
        acceptableKeywords: ["Cout moyen", "Le cout moyen", "Coût moyen unitaire", "Coût moyen"],
        explanation: "Coût Moyen (CM) = Coût Total / Quantité produite.",
        hint: "Coût unitaire ou moyen."
      },
      {
        id: 'solo-eco17',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quelle forme de capital incorporel englobe les brevets, les logiciels, les marques déposées et les bases de données d'une entreprise ?",
        answer: "Capital immatériel",
        acceptableKeywords: ["Capital immateriel", "Investissement immateriel", "Capital immatériel"],
        explanation: "Le capital immatériel prend une place prépondérante dans l'économie moderne du savoir.",
        hint: "Capital i..."
      },
      {
        id: 'solo-eco18',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quelle part de la valeur ajoutée sert à payer les cotisations de sécurité sociale et les impôts finançant les biens publics ?",
        answer: "Les prélèvements obligatoires",
        acceptableKeywords: ["Prelevements obligatoires", "Impots et cotisations", "Impôts", "Prélèvements obligatoires"],
        explanation: "L'État prélève impôts et taxes sur la production et la valeur ajoutée pour financer les infrastructures.",
        hint: "Prélèvements obligatoires."
      },
      {
        id: 'solo-eco19',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on la part des bénéfices nets distribuée chaque année aux actionnaires détenteurs du capital ?",
        answer: "Les dividendes",
        acceptableKeywords: ["Dividendes", "Les dividendes", "Dividende"],
        explanation: "Les dividendes rémunèrent l'apport en capital et la prise de risque de l'actionnaire.",
        hint: "Di-vi-dendes."
      },
      {
        id: 'solo-eco20',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment qualifie-t-on le financement d'un nouvel investissement réalisé exclusivement grâce aux profits mis en réserve par l'entreprise sans emprunt bancaire ?",
        answer: "L'autofinancement",
        acceptableKeywords: ["Autofinancement", "L autofinancement", "L'autofinancement"],
        explanation: "L'autofinancement préserve l'indépendance financière de l'entreprise vis-à-vis des créanciers bancaires.",
        hint: "Auto-financement."
      }
    ]
  },

  // 5. Mathématiques (Niveau 1ère L2) : Les polynômes (Questions Solo exclusives)
  {
    id: 'math-polynomes',
    subject: 'Mathématiques',
    lesson: 'Les polynômes (niveau 1ère L2)',
    icon: '📐',
    color: 'from-violet-500 to-purple-600',
    description: "Entraînement solo : Racines évidentes, Horner, signe de ax²+bx+c, extrémums et polynômes de degré 3",
    questions: [
      {
        id: 'solo-math1',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelles sont les coordonnées (x ; y) du sommet S de la parabole représentant le trinôme f(x) = ax² + bx + c ?",
        answer: "(-b / 2a ; f(-b / 2a))",
        acceptableKeywords: ["-b/2a", "(-b/2a ; f(-b/2a))", "-b/2a et f(-b/2a)"],
        explanation: "Le sommet S a pour abscisse x = -b / (2a) et pour ordonnée y = -Δ / (4a) = f(-b / 2a).",
        hint: "L'abscisse vaut -b/(2a)."
      },
      {
        id: 'solo-math2',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Si pour un polynôme P(x) = ax² + bx + c, on a a - b + c = 0, quelle est alors la racine évidente ?",
        answer: "-1",
        acceptableKeywords: ["-1", "Moins 1", "x = -1"],
        explanation: "En posant x = -1, P(-1) = a(-1)² + b(-1) + c = a - b + c = 0.",
        hint: "Le nombre -1."
      },
      {
        id: 'solo-math3',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quel est le nombre maximal de racines réelles que peut posséder un polynôme de degré 3 ?",
        answer: "3",
        acceptableKeywords: ["3", "Trois", "Trois racines", "3 racines"],
        explanation: "D'après le théorème fondamental de l'algèbre, un polynôme de degré n admet au maximum n racines réelles.",
        hint: "Chiffre 3."
      },
      {
        id: 'solo-math4',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle méthode algorithmique sur tableau à deux lignes permet d'effectuer rapidement la division euclidienne d'un polynôme par (x - a) ?",
        answer: "Schéma de Horner",
        acceptableKeywords: ["Horner", "Schema de Horner", "Methode de Horner", "Schéma de Horner"],
        explanation: "Le schéma de Horner permet de calculer la valeur P(a) et de factoriser simultanément le polynôme.",
        hint: "Nom du mathématicien Horner."
      },
      {
        id: 'solo-math5',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quel est le discriminant réduit Delta' d'un trinôme lorsque b = 2b' (coefficient du premier degré pair) ?",
        answer: "b'² - ac",
        acceptableKeywords: ["b'² - ac", "b'2 - ac", "b'^2 - ac"],
        explanation: "Δ' = (b/2)² - ac = b'² - ac, et les racines s'écrivent (-b' ± √Δ') / a.",
        hint: "b' au carré moins a × c."
      },
      {
        id: 'solo-math6',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Comment appelle-t-on le coefficient du terme ayant la plus haute puissance dans un polynôme ?",
        answer: "Coefficient dominant",
        acceptableKeywords: ["Coefficient dominant", "Dominant", "Coefficient principal"],
        explanation: "Pour ax^n + ..., a est le coefficient dominant.",
        hint: "Coefficient d... ou principal."
      },
      {
        id: 'solo-math7',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quel est le signe du trinôme ax² + bx + c à l'extérieur des deux racines x1 et x2 quand Delta > 0 ?",
        answer: "Du signe de a",
        acceptableKeywords: ["Signe de a", "Meme signe que a", "Du signe de a"],
        explanation: "Un trinôme est du signe de 'a' à l'extérieur des racines et du signe de '-a' entre les racines.",
        hint: "Toujours du signe de a à l'extérieur."
      },
      {
        id: 'solo-math8',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quel est le discriminant Delta du trinôme 2x² - 4x + 2 ?",
        answer: "0",
        acceptableKeywords: ["0", "Zero", "Zéro"],
        explanation: "Δ = (-4)² - 4(2)(2) = 16 - 16 = 0. Le trinôme s'écrit 2(x - 1)².",
        hint: "16 moins 16."
      },
      {
        id: 'solo-math9',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle transformation de variable X = x² permet de résoudre une équation bicarrée du type ax⁴ + bx² + c = 0 ?",
        answer: "Changement de variable X = x²",
        acceptableKeywords: ["Changement de variable", "X = x²", "X = x2", "Poser X = x²"],
        explanation: "En posant X = x² avec X ≥ 0, l'équation devient un trinôme classique aX² + bX + c = 0.",
        hint: "Poser une grande variable X égale à x au carré."
      },
      {
        id: 'solo-math10',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Vers où sont tournées les branches d'une parabole dont le coefficient 'a' est négatif (a < 0) ?",
        answer: "Vers le bas",
        acceptableKeywords: ["Vers le bas", "Bas", "Negatives"],
        explanation: "Si a < 0, la parabole est 'triste' et son sommet correspond à un maximum absolu.",
        hint: "Vers le b..."
      },
      {
        id: 'solo-math11',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle est la valeur de la racine évidente de x³ - 8 = 0 ?",
        answer: "2",
        acceptableKeywords: ["2", "Deux", "x = 2"],
        explanation: "2³ = 8, donc 2 est la racine réelle de x³ - 8.",
        hint: "2 au cube vaut 8."
      },
      {
        id: 'solo-math12',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Si le polynôme nul P(x) = 0 n'a aucun terme, quelle convention donne-t-on traditionnellement à son degré ?",
        answer: "Moins l'infini",
        acceptableKeywords: ["Moins l infini", "-infini", "- l'infini", "Non defini"],
        explanation: "Par convention algébrique, deg(0) = -∞ pour vérifier deg(P·Q) = deg(P) + deg(Q).",
        hint: "Moins l'infini (-∞)."
      },
      {
        id: 'solo-math13',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Développez l'identité remarquable (a + b)³.",
        answer: "a³ + 3a²b + 3ab² + b³",
        acceptableKeywords: ["a3 + 3a2b + 3ab2 + b3", "a^3 + 3a^2b + 3ab^2 + b^3"],
        explanation: "Le cube d'une somme utilise les coefficients binomiaux du triangle de Pascal : 1, 3, 3, 1.",
        hint: "a³ + 3a²b + 3ab² + b³."
      },
      {
        id: 'solo-math14',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle est la somme des coefficients du polynôme développé P(x) = (2x - 1)⁵ ?",
        answer: "1",
        acceptableKeywords: ["1", "Un"],
        explanation: "La somme des coefficients s'obtient en évaluant P(1) : (2(1) - 1)⁵ = 1⁵ = 1.",
        hint: "Calculez P(1)."
      },
      {
        id: 'solo-math15',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quel est le reste de la division euclidienne du polynôme P(x) par (x - 3) ?",
        answer: "P(3)",
        acceptableKeywords: ["P(3)", "La valeur en 3"],
        explanation: "D'après le théorème du reste, la division par (x - a) donne un reste constant égal à P(a).",
        hint: "Évaluation de P en 3."
      },
      {
        id: 'solo-math16',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Combien de sommets possède la courbe d'une parabole ?",
        answer: "Un seul sommet",
        acceptableKeywords: ["1", "Un", "Un seul"],
        explanation: "La parabole admet un unique extrémum local et global qui est son sommet.",
        hint: "Nombre : 1."
      },
      {
        id: 'solo-math17',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle est la factorisation de x² - 25 ?",
        answer: "(x - 5)(x + 5)",
        acceptableKeywords: ["(x - 5)(x + 5)", "(x+5)(x-5)"],
        explanation: "Identité remarquable a² - b² avec a = x et b = 5.",
        hint: "(x - 5)(x + 5)."
      },
      {
        id: 'solo-math18',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Résolvez l'inéquation x² ≤ 0 dans R.",
        answer: "x = 0",
        acceptableKeywords: ["0", "x = 0", "{0}"],
        explanation: "Un carré étant toujours positif ou nul, la seule valeur vérifiant x² ≤ 0 est x = 0.",
        hint: "Uniquement 0."
      },
      {
        id: 'solo-math19',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Si x1 et x2 sont racines de x² - 7x + 12 = 0, que vaut leur produit ?",
        answer: "12",
        acceptableKeywords: ["12", "Douze"],
        explanation: "P = c / a = 12 / 1 = 12 (les racines sont 3 et 4 car 3 × 4 = 12 et 3 + 4 = 7).",
        hint: "Le terme constant c."
      },
      {
        id: 'solo-math20',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Comment appelle-t-on un polynôme composé d'un unique terme de la forme a·x^k ?",
        answer: "Un monôme",
        acceptableKeywords: ["Monome", "Un monome", "Monôme"],
        explanation: "Un monôme a un seul terme, un binôme en a deux, un trinôme trois.",
        hint: "Mono-..."
      }
    ]
  },

  // 6. Histoire (Niveau 1ère L2) : La révolution industrielle (Questions Solo exclusives)
  {
    id: 'hist-revolution',
    subject: 'Histoire',
    lesson: 'La révolution industrielle : genèse et manifestations',
    icon: '🏭',
    color: 'from-amber-600 to-red-700',
    description: "Entraînement solo : Bessemer, trusts, navigation à vapeur, fordisme et transformations urbaines",
    questions: [
      {
        id: 'solo-hist1',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel inventeur britannique a mis au point en 1856 un convertisseur permettant la production industrielle et bon marché de l'acier en grande quantité ?",
        answer: "Henry Bessemer",
        acceptableKeywords: ["Bessemer", "Henry Bessemer", "Convertisseur Bessemer"],
        explanation: "Le convertisseur Bessemer a transformé la fonte liquide en acier en y insufflant de l'air comprimé.",
        hint: "Bessemer."
      },
      {
        id: 'solo-hist2',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel inventeur américain a développé le premier bateau à vapeur commercial (le 'Clermont') en 1807 ?",
        answer: "Robert Fulton",
        acceptableKeywords: ["Fulton", "Robert Fulton"],
        explanation: "Robert Fulton a inauguré la navigation commerciale à vapeur sur le fleuve Hudson.",
        hint: "Fulton."
      },
      {
        id: 'solo-hist3',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel industriel américain a révolutionné l'industrie automobile en introduisant la chaîne de montage mobile et le salaire journalier à 5 dollars ?",
        answer: "Henry Ford",
        acceptableKeywords: ["Henry Ford", "Ford"],
        explanation: "Le fordisme combine le travail à la chaîne de la Ford T et la hausse des salaires pour créer des débouchés de masse.",
        hint: "Constructeur de la Ford T."
      },
      {
        id: 'solo-hist4',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel ingénieur britannique a inventé en 1785 le premier métier à tisser mécanique mû par la force hydraulique puis à vapeur ?",
        answer: "Edmund Cartwright",
        acceptableKeywords: ["Cartwright", "Edmund Cartwright"],
        explanation: "Le métier à tisser de Cartwright a automatisé le tissage et décuplé la productivité textile.",
        hint: "Cartwright."
      },
      {
        id: 'solo-hist5',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Comment appelait-on l'explosion redoutée provoquée par l'inflammation des poches de gaz méthane dans les galeries souterraines de mines de charbon ?",
        answer: "Coup de grisou",
        acceptableKeywords: ["Coup de grisou", "Grisou", "Explosion de grisou"],
        explanation: "Le coup de grisou était la hantise des mineurs de fond et a causé des tragédies comme celle de Courrières (1906).",
        hint: "Coup de g..."
      },
      {
        id: 'solo-hist6',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle lampe de sécurité pour mineurs munie d'un tamis métallique isolant la flamme a été inventée en 1815 pour éviter les explosions de grisou ?",
        answer: "Lampe Davy",
        acceptableKeywords: ["Lampe Davy", "Humphry Davy", "Davy"],
        explanation: "Inventée par le chimiste Humphry Davy, elle a sauvé des milliers de mineurs dans toute l'Europe.",
        hint: "Lampe D..."
      },
      {
        id: 'solo-hist7',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Comment appelle-t-on les regroupements ou fusions de grandes entreprises monopolistiques apparus aux États-Unis à la fin du XIXe siècle (ex: Standard Oil) ?",
        answer: "Les trusts",
        acceptableKeywords: ["Trusts", "Trust", "Les trusts", "Cartels", "Monopoles"],
        explanation: "Les trusts contrôlaient des secteurs entiers (pétrole, acier), conduisant au vote des premières lois antitrust (Sherman Act en 1890).",
        hint: "Mot d'origine anglaise : T-r-u-s-t."
      },
      {
        id: 'solo-hist8',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle grande voie de chemin de fer russe construite entre 1891 et 1916 a relié Moscou à Vladivostok sur plus de 9 000 kilomètres ?",
        answer: "Le Transsibérien",
        acceptableKeywords: ["Transsiberien", "Le Transsiberien", "Transsibérien"],
        explanation: "Le Transsibérien a permis le désenclavement et la colonisation économique de la Sibérie.",
        hint: "Trans-sibérien."
      },
      {
        id: 'solo-hist9',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel inventeur américain a breveté le phonographe et la lampe à incandescence électrique durable en 1879 ?",
        answer: "Thomas Edison",
        acceptableKeywords: ["Edison", "Thomas Edison", "Thomas Alva Edison"],
        explanation: "Edison a fondé le premier laboratoire de recherche industrielle moderne à Menlo Park.",
        hint: "Thomas E..."
      },
      {
        id: 'solo-hist10',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel terme péjoratif désignait les ouvriers briseurs de machines textiles en Angleterre qui accusaient la mécanisation de voler leurs emplois ?",
        answer: "Les luddites",
        acceptableKeywords: ["Luddites", "Le luddisme", "Luddisme"],
        explanation: "Le mouvement luddite (1811-1812) mené par le mythique 'général Ned Ludd' a détruit des centaines de métiers mécaniques.",
        hint: "Le luddisme."
      },
      {
        id: 'solo-hist11',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle forme de carburant raffiné issu de l'or noir a permis le développement des premiers moteurs à combustion interne ?",
        answer: "Le pétrole",
        acceptableKeywords: ["Petrole", "Le petrole", "Pétrole", "Essence"],
        explanation: "Le forage d'Edwin Drake en 1859 à Titusville marque le début de l'ère pétrolière.",
        hint: "L'or noir."
      },
      {
        id: 'solo-hist12',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel banquier et financier new-yorkais a créé la gigantesque société US Steel en 1901 en rachetant les aciéries d'Andrew Carnegie ?",
        answer: "J.P. Morgan",
        acceptableKeywords: ["JP Morgan", "J.P. Morgan", "Morgan", "John Pierpont Morgan"],
        explanation: "J.P. Morgan symbolise le capitalisme financier et le rôle des banques d'affaires.",
        hint: "Initiales J.P. M..."
      },
      {
        id: 'solo-hist13',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Comment appelle-t-on le combustible solide obtenu par pyrolyse de la houille pour éliminer les impuretés et utilisé dans les hauts-fourneaux ?",
        answer: "Le coke",
        acceptableKeywords: ["Coke", "Le coke", "Charbon de coke"],
        explanation: "Abraham Darby a réussi en 1709 la première fonte au coke, libérant la métallurgie de la dépendance au bois.",
        hint: "Quatre lettres : C-o-k-e."
      },
      {
        id: 'solo-hist14',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle doctrine politique prônant l'abolition immédiate de l'État et de toute autorité hiérarchique au profit de communes libres a été défendue par Bakounine ?",
        answer: "L'anarchisme",
        acceptableKeywords: ["Anarchisme", "L anarchisme", "Anarcho syndicalisme", "L'anarchisme"],
        explanation: "Mikhaïl Bakounine s'opposait violemment à Karl Marx sur la question du maintien transitoire d'un État prolétarien.",
        hint: "An-ar-chisme."
      },
      {
        id: 'solo-hist15',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle grande exposition universelle organisée à Londres en 1851 a célébré la suprématie industrielle britannique sous le Crystal Palace ?",
        answer: "L'Exposition universelle de 1851",
        acceptableKeywords: ["Exposition de 1851", "Exposition universelle", "Great Exhibition"],
        explanation: "Le Crystal Palace de Joseph Paxton illustrait les prouesses de l'architecture de fer et de verre.",
        hint: "Exposition universelle de Londres."
      },
      {
        id: 'solo-hist16',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel ingénieur et industriel allemand a inventé en 1897 un moteur thermique à combustion interne sans bougie allumé par forte compression ?",
        answer: "Rudolf Diesel",
        acceptableKeywords: ["Diesel", "Rudolf Diesel"],
        explanation: "Le moteur Diesel fonctionne avec des fiouls lourds et équipe locomotives, navires et camions.",
        hint: "A donné son nom au carburant diesel."
      },
      {
        id: 'solo-hist17',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Comment appelle-t-on les habitations ouvrières mitoyennes identiques construites par les patrons autour des mines ou usines pour loger leurs employés ?",
        answer: "Les corons",
        acceptableKeywords: ["Corons", "Le coron", "Les cites ouvrieres", "Cités ouvrières"],
        explanation: "Les corons (immortalisés par Zola dans 'Germinal') illustraient le paternalisme industriel patronal.",
        hint: "Chanté par Pierre Bachelet (les c...)."
      },
      {
        id: 'solo-hist18',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel inventeur écossais-américain a déposé en 1876 le brevet du premier téléphone opérationnel ?",
        answer: "Alexander Graham Bell",
        acceptableKeywords: ["Graham Bell", "Bell", "Alexander Graham Bell"],
        explanation: "Le téléphone a révolutionné les communications vocales instantanées à distance.",
        hint: "Graham B..."
      },
      {
        id: 'solo-hist19',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel terme désigne la politique patronale fournissant logements, dispensaires et écoles aux ouvriers pour s'assurer leur fidélité et limiter les grèves ?",
        answer: "Le paternalisme",
        acceptableKeywords: ["Paternalisme", "Le paternalisme patronal"],
        explanation: "Pratiqué notamment par Schneider au Creusot ou Michelin à Clermont-Ferrand.",
        hint: "Pater-nalisme."
      },
      {
        id: 'solo-hist20',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle encyclique papale publiée par Léon XIII en 1891 a inauguré la doctrine sociale de l'Église face à la misère ouvrière ?",
        answer: "Rerum Novarum",
        acceptableKeywords: ["Rerum Novarum", "Rerum novarum"],
        explanation: "Léon XIII y défend le juste salaire et le droit d'association tout en rejetant le socialisme révolutionnaire.",
        hint: "Titre latin en deux mots : Rerum N..."
      }
    ]
  },

  // 7. Géographie (Niveau 1ère L2) : Les inégalités de développement (Questions Solo exclusives)
  {
    id: 'geo-inegalites',
    subject: 'Géographie',
    lesson: 'Les inégalités de développement (niveau 1ère L2)',
    icon: '🌍',
    color: 'from-emerald-600 to-teal-700',
    description: "Entraînement solo : IPM, transition urbaine, Triade, malnutrition, aide internationale et disparités régionales",
    questions: [
      {
        id: 'solo-geo1',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel indice composite développé par l'Université d'Oxford et le PNUD mesure la pauvreté à travers 10 privations concrètes vécues par les ménages ?",
        answer: "L'Indice de Pauvreté Multidimensionnelle",
        acceptableKeywords: ["IPM", "Indice de pauvrete multidimensionnelle", "MPI", "Indice de Pauvreté Multidimensionnelle"],
        explanation: "L'IPM prend en compte l'électricité, l'eau potable, l'assainissement, les combustibles et la scolarisation.",
        hint: "Sigle : I-P-M."
      },
      {
        id: 'solo-geo2',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel concept géographique désigne les trois pôles qui ont dominé l'économie mondiale : Amérique du Nord, Europe occidentale et Asie orientale (Japon) ?",
        answer: "La Triade",
        acceptableKeywords: ["Triade", "La triade"],
        explanation: "Théorisée par Kenichi Ohmae en 1985, la Triade concentrait l'essentiel du commerce et des sièges de multinationales.",
        hint: "La T-r-i-a-d-e."
      },
      {
        id: 'solo-geo3',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment appelle-t-on le phénomène où les activités économiques, les richesses et la population se concentrent massivement sur les zones côtières ?",
        answer: "La littoralisation",
        acceptableKeywords: ["Littoralisation", "La littoralisation"],
        explanation: "La littoralisation favorise l'insertion dans la mondialisation maritime au détriment des régions de l'intérieur.",
        hint: "Littoral-isation."
      },
      {
        id: 'solo-geo4',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel économiste indien a reçu le prix Nobel en 1998 pour ses travaux sur les famines, la pauvreté et le concept de 'capabilités' ?",
        answer: "Amartya Sen",
        acceptableKeywords: ["Amartya Sen", "Sen"],
        explanation: "Amartya Sen est le père intellectuel de l'IDH aux côtés de Mahbub ul Haq.",
        hint: "Prénom Amartya."
      },
      {
        id: 'solo-geo5',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment appelle-t-on l'état d'une personne dont l'apport calorique journalier est insuffisant pour maintenir une vie saine et active ?",
        answer: "La sous-alimentation",
        acceptableKeywords: ["Sous-alimentation", "Sous alimentation", "Malnutrition", "Faim"],
        explanation: "La FAO suit chaque année le nombre de personnes en état de sous-alimentation chronique dans le monde.",
        hint: "Sous-al..."
      },
      {
        id: 'solo-geo6',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quelle agence de l'ONU siégeant à Rome est spécifiquement chargée de la lutte contre la faim et du développement agricole ?",
        answer: "La FAO",
        acceptableKeywords: ["FAO", "La FAO", "Food and Agriculture Organization"],
        explanation: "Organisation des Nations Unies pour l'alimentation et l'agriculture.",
        hint: "Sigle en 3 lettres : F-A-O."
      },
      {
        id: 'solo-geo7',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment appelle-t-on la transformation où la population d'un pays devient majoritairement citadine plutôt que rurale ?",
        answer: "La transition urbaine",
        acceptableKeywords: ["Transition urbaine", "La transition urbaine", "Urbanisation"],
        explanation: "Le monde a franchi le cap des 50% d'urbains en 2008.",
        hint: "Transition u..."
      },
      {
        id: 'solo-geo8',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel indicateur compare la valeur monétaire des biens et services en neutralisant les différences de niveaux de prix entre pays ?",
        answer: "Parité de Pouvoir d'Achat",
        acceptableKeywords: ["PPA", "Parite de pouvoir d achat", "Parité de pouvoir d'achat"],
        explanation: "Le PIB en PPA permet une comparaison internationale plus juste du niveau de vie réel des habitants.",
        hint: "Sigle : P-P-A."
      },
      {
        id: 'solo-geo9',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment appelle-t-on le secteur économique qui regroupe les activités non déclarées à l'État, sans contrats formels ni protection sociale ?",
        answer: "Le secteur informel",
        acceptableKeywords: ["Secteur informel", "Economie informelle", "Informel", "Secteur non structure"],
        explanation: "Dans de nombreux pays du Sud, le secteur informel représente plus de 60% des emplois urbains.",
        hint: "Secteur i..."
      },
      {
        id: 'solo-geo10',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quelle institution financière multilatérale siégeant à Washington accorde des prêts à taux réduit pour des projets d'infrastructures dans les pays en développement ?",
        answer: "La Banque Mondiale",
        acceptableKeywords: ["Banque mondiale", "La Banque Mondiale", "World Bank"],
        explanation: "Créée aux accords de Bretton Woods en 1944 pour financer le développement économique.",
        hint: "Banque M..."
      },
      {
        id: 'solo-geo11',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quelle institution internationale voisine intervient en urgence pour accorder des prêts de stabilisation financière aux États en crise de balance des paiements ?",
        answer: "Le FMI",
        acceptableKeywords: ["FMI", "Le FMI", "Fonds monétaire international", "Fonds monetaire international"],
        explanation: "Fonds Monétaire International.",
        hint: "Sigle : F-M-I."
      },
      {
        id: 'solo-geo12',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment nomme-t-on les pays pétroliers du Golfe Persique ayant un PIB par habitant très élevé mais un développement démocratique et social parfois inégal ?",
        answer: "Pays rentiers",
        acceptableKeywords: ["Pays rentiers", "Economies de rente", "Etats rentiers"],
        explanation: "Leur modèle économique repose presque exclusivement sur la rente des hydrocarbures.",
        hint: "Économies ou pays r..."
      },
      {
        id: 'solo-geo13',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel terme désigne la concentration excessive des pouvoirs administratifs, économiques et démographiques dans la capitale d'un pays au détriment des provinces ?",
        answer: "La macrocéphalie urbaine",
        acceptableKeywords: ["Macrocephalie", "Macrocephalie urbaine", "Macrocéphalie"],
        explanation: "Exemple : Dakar au Sénégal regroupe une immense part de la richesse et des emplois du pays.",
        hint: "Macro-céphalie (grosse tête)."
      },
      {
        id: 'solo-geo14',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel accord commercial ou label garantit aux petits producteurs du Sud un prix d'achat rémunérateur stable et respectueux de l'environnement ?",
        answer: "Le commerce équitable",
        acceptableKeywords: ["Commerce equitable", "Le commerce equitable", "Commerce équitable", "Fair trade"],
        explanation: "Le commerce équitable évite les intermédiaires spéculatifs (café, cacao, coton).",
        hint: "Commerce é..."
      },
      {
        id: 'solo-geo15',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel pourcentage du RNB les pays donateurs membres de l'OCDE s'étaient-ils engagés à consacrer à l'Aide Publique au Développement (APD) ?",
        answer: "0,7%",
        acceptableKeywords: ["0,7%", "0.7%", "0,7", "0.7 pour cent"],
        explanation: "Seuls quelques rares pays scandinaves et le Luxembourg atteignent régulièrement cet objectif de 0,7%.",
        hint: "Zéro virgule sept pour cent."
      },
      {
        id: 'solo-geo16',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment appelle-t-on les investissements financiers directs réalisés par des firmes multinationales pour ouvrir des filiales à l'étranger ?",
        answer: "Les IDE",
        acceptableKeywords: ["IDE", "Investissements directs a l etranger", "Investissements directs étrangers"],
        explanation: "Investissements Directs à l'Étranger.",
        hint: "Sigle : I-D-E."
      },
      {
        id: 'solo-geo17',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel pourcentage de la population mondiale adulte ne sait ni lire ni écrire, avec une majorité touchant les femmes du Sud ?",
        answer: "Taux d'analphabétisme",
        acceptableKeywords: ["Analphabetisme", "Taux d analphabetisme", "Analphabétisme"],
        explanation: "L'alphabétisation universelle est l'une des cibles majeures de l'ODD n°4.",
        hint: "An-alpha-bétisme."
      },
      {
        id: 'solo-geo18',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment qualifie-t-on le phénomène où les pays riches s'accaparent des millions d'hectares de terres arables dans les pays du Sud pour assurer leur sécurité alimentaire ?",
        answer: "Accaparement des terres",
        acceptableKeywords: ["Accaparement des terres", "Land grabbing"],
        explanation: "Aussi appelé 'land grabbing', il prive les paysans locaux de terres nourricières.",
        hint: "Accaparement des t..."
      },
      {
        id: 'solo-geo19',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment appelle-t-on les microcrédits sans garanties matérielles accordés aux femmes pauvres pour développer une activité génératrice de revenus (initié par Muhammad Yunus) ?",
        answer: "La microfinance",
        acceptableKeywords: ["Microfinance", "Microcredit", "Le microcredit", "Micro-crédit"],
        explanation: "Muhammad Yunus et la Grameen Bank au Bangladesh ont reçu le prix Nobel de la paix pour cette innovation.",
        hint: "Micro-crédit ou micro-finance."
      },
      {
        id: 'solo-geo20',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel indice écologique mesure la surface terrestre et aquatique biologiquement productive nécessaire pour subvenir à la consommation d'une population et absorber ses déchets ?",
        answer: "L'empreinte écologique",
        acceptableKeywords: ["Empreinte ecologique", "L empreinte ecologique", "Empreinte écologique"],
        explanation: "L'empreinte écologique moyenne d'un habitant du Nord est 5 à 10 fois plus élevée que celle d'un habitant d'un PMA.",
        hint: "Empreinte é..."
      }
    ]
  },

  // 8. Physique-Chimie (Niveau 1ère L2) : Solutions aqueuses, mouvements et énergies (Questions Solo exclusives)
  {
    id: 'pc-solutions',
    subject: 'Physique-Chimie',
    lesson: 'Solutions aqueuses, mouvements et énergies',
    icon: '⚡',
    color: 'from-cyan-500 to-blue-600',
    description: "Entraînement solo : Concentration molaire, principe d'inertie, force de frottement, dilution et pH-mètre",
    questions: [
      {
        id: 'solo-pc1',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quelle est la formule de la concentration molaire C d'une espèce en solution en fonction de la quantité de matière n et du volume V ?",
        answer: "C = n / V",
        acceptableKeywords: ["n/V", "n / V", "quantite sur volume", "n divise par V"],
        explanation: "La concentration molaire s'exprime en mol/L (ou mol·L⁻¹).",
        hint: "n divisé par V."
      },
      {
        id: 'solo-pc2',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quelle relation relie la concentration massique Cm, la concentration molaire C et la masse molaire M du soluté ?",
        answer: "Cm = C × M",
        acceptableKeywords: ["Cm = C x M", "C x M", "Cm = C*M", "C fois M"],
        explanation: "Comme n = m / M, on a Cm = m/V = (n·M)/V = C × M.",
        hint: "C multiplié par la masse molaire M."
      },
      {
        id: 'solo-pc3',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Comment appelle-t-on le rapport F = C0 / C1 = V1 / V0 mesurant combien de fois une solution mère a été diluée pour donner la solution fille ?",
        answer: "Le facteur de dilution",
        acceptableKeywords: ["Facteur de dilution", "Le facteur de dilution", "Facteur F"],
        explanation: "F est un nombre sans unité supérieur à 1 (ex: dilution au dixième, F = 10).",
        hint: "Facteur de d..."
      },
      {
        id: 'solo-pc4',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quel instrument de laboratoire précis muni d'une poire aspirante ou propipette prélève le volume exact de solution mère lors d'une dilution ?",
        answer: "La pipette jaugée",
        acceptableKeywords: ["Pipette jaugee", "Une pipette jaugee", "Pipette jaugée"],
        explanation: "La pipette jaugée à un ou deux traits est l'instrument le plus précis pour prélever des volumes étalons.",
        hint: "Pipette j..."
      },
      {
        id: 'solo-pc5',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quel appareil électronique précis mesure directement le pH d'une solution grâce à une électrode combinée en verre ?",
        answer: "Le pH-mètre",
        acceptableKeywords: ["pH metre", "pH-metre", "pH-mètre", "Le pH-mètre"],
        explanation: "Le pH-mètre offre une mesure continue beaucoup plus précise que le papier indicateur de pH.",
        hint: "pH-mètre."
      },
      {
        id: 'solo-pc6',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quel premier principe de Newton affirme qu'un corps persévère dans son état de repos ou de mouvement rectiligne uniforme si la somme des forces s'exerçant sur lui est nulle ?",
        answer: "Le principe d'inertie",
        acceptableKeywords: ["Principe d inertie", "Principe d'inertie", "Premiere loi de Newton", "Loi d inertie"],
        explanation: "Si ΣF = 0, le vecteur vitesse reste rigoureusement constant au cours du temps.",
        hint: "Principe d'i..."
      },
      {
        id: 'solo-pc7',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quelle force s'oppose au glissement ou au déplacement d'un objet en contact avec une surface rugueuse ou un fluide ?",
        answer: "La force de frottement",
        acceptableKeywords: ["Frottement", "Force de frottement", "Frottements"],
        explanation: "Les frottements dissipent une partie de l'énergie mécanique sous forme d'énergie thermique (chaleur).",
        hint: "Fro-tte-ment."
      },
      {
        id: 'solo-pc8',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quel point matériel particulier d'un système solide se déplace comme si toute la masse y était concentrée et où s'applique le poids ?",
        answer: "Le centre de gravité",
        acceptableKeywords: ["Centre de gravite", "Centre d inertie", "Centre de masse", "Centre de gravité"],
        explanation: "Le centre de gravité G (ou centre d'inertie) décrit la trajectoire parabolique globale.",
        hint: "Centre de g..."
      },
      {
        id: 'solo-pc9',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Comment appelle-t-on une substance solide ionique ou moléculaire qui, dissoute dans l'eau, conduit le courant électrique grâce à la présence d'ions libres ?",
        answer: "Un électrolyte",
        acceptableKeywords: ["Electrolyte", "Un electrolyte", "Électrolyte"],
        explanation: "Le chlorure de sodium (NaCl) dissous dans l'eau est un électrolyte fort dissocié en Na+ et Cl-.",
        hint: "Électro-lyte."
      },
      {
        id: 'solo-pc10',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Dans le mouvement de chute libre sans frottement d'une balle lâchée du haut d'un toit, quelle énergie se transforme progressivement en énergie cinétique ?",
        answer: "L'énergie potentielle de pesanteur",
        acceptableKeywords: ["Energie potentielle", "Energie potentielle de pesanteur", "Énergie potentielle"],
        explanation: "À mesure que l'altitude diminue, l'énergie potentielle diminue et se convertit en énergie cinétique.",
        hint: "Énergie potentielle."
      },
      {
        id: 'solo-pc11',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Comment appelle-t-on la courbe d'eau concave à la surface d'un liquide dans un tube étroit dont le bas doit affleurer le trait de jauge ?",
        answer: "Le ménisque",
        acceptableKeywords: ["Menisque", "Le menisque", "Ménisque"],
        explanation: "Pour une lecture correcte du volume, l'œil doit être placé au niveau de la base du ménisque.",
        hint: "Mé-nisque."
      },
      {
        id: 'solo-pc12',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Comment qualifie-t-on une réaction de dissolution qui s'accompagne d'un dégagement de chaleur réchauffant le récipient ?",
        answer: "Exothermique",
        acceptableKeywords: ["Exothermique", "Reaction exothermique", "Dissolution exothermique"],
        explanation: "Exothermique = libère de la chaleur ; endothermique = absorbe de la chaleur.",
        hint: "Exo-thermique."
      },
      {
        id: 'solo-pc13',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quel objet ou système de référence par rapport auquel on étudie la position et le mouvement d'un mobile est indispensable en mécanique ?",
        answer: "Le référentiel",
        acceptableKeywords: ["Referentiel", "Le referentiel", "Référentiel"],
        explanation: "Le mouvement est relatif : il dépend du choix du référentiel (terrestre, géocentrique, héliocentrique).",
        hint: "Réfé-ren-tiel."
      },
      {
        id: 'solo-pc14',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quelle est la valeur de la masse volumique de l'eau liquide pure à 4 °C en g/mL ou kg/L ?",
        answer: "1",
        acceptableKeywords: ["1", "1 g/mL", "1 kg/L", "1000 kg/m3"],
        explanation: "1 litre d'eau pure pèse exactement 1 kilogramme à 4°C.",
        hint: "Le chiffre 1."
      },
      {
        id: 'solo-pc15',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quelle unité du Système International mesure la vitesse légale (mètres par seconde) ?",
        answer: "m/s",
        acceptableKeywords: ["m/s", "Metre par seconde", "Metres par seconde", "m.s-1"],
        explanation: "Pour convertir des m/s en km/h, on multiplie par 3,6.",
        hint: "m/s ou mètre par seconde."
      },
      {
        id: 'solo-pc16',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quel papier imprégné d'un mélange de colorants prend une couleur différente selon le pH de la solution testée ?",
        answer: "Papier pH",
        acceptableKeywords: ["Papier pH", "Papier indicateur de pH", "Papier tournesol"],
        explanation: "Le papier pH permet une estimation rapide du pH par comparaison avec un nuancier de couleurs.",
        hint: "Papier p..."
      },
      {
        id: 'solo-pc17',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Comment appelle-t-on le travail d'une force dont le point d'application se déplace dans le sens contraire du mouvement, diminuant la vitesse du mobile ?",
        answer: "Travail résistant",
        acceptableKeywords: ["Travail resistant", "Resistant", "Travail résistant"],
        explanation: "Si l'angle entre la force et le déplacement est supérieur à 90°, le travail est négatif (résistant).",
        hint: "Travail r... (contraire de travail moteur)."
      },
      {
        id: 'solo-pc18',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Comment appelle-t-on le travail d'une force qui favorise le mouvement et augmente l'énergie cinétique du système ?",
        answer: "Travail moteur",
        acceptableKeywords: ["Travail moteur", "Moteur"],
        explanation: "Si l'angle entre la force et le vecteur déplacement est inférieur à 90°, le travail est positif (moteur).",
        hint: "Travail m..."
      },
      {
        id: 'solo-pc19',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quel instrument cylindrique gradué en verre permet de mesurer rapidement des volumes de liquides avec une précision moyenne ?",
        answer: "Éprouvette graduée",
        acceptableKeywords: ["Eprouvette graduee", "Eprouvette", "Éprouvette graduée"],
        explanation: "Moins précise qu'une fiole ou pipette jaugée, l'éprouvette sert aux mesures courantes.",
        hint: "Éprouvette g..."
      },
      {
        id: 'solo-pc20',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quelle grandeur physique vectorielle a pour caractéristiques : point d'application, direction, sens et norme en newtons ?",
        answer: "Une force",
        acceptableKeywords: ["Force", "Une force", "Vecteur force"],
        explanation: "Une force modélise une action mécanique exercée par un objet sur un autre.",
        hint: "Le vecteur f..."
      }
    ]
  }
];

export function getSoloQuestionsForSubject(subjectOrId: string, count = 20): QuizQuestion[] {
  const clean = (subjectOrId || '').toLowerCase().trim();
  const matched = SOLO_TOPICS.find(
    (t) =>
      t.id.toLowerCase() === clean ||
      t.subject.toLowerCase() === clean ||
      t.subject.toLowerCase().includes(clean) ||
      t.lesson.toLowerCase().includes(clean)
  );

  const pool = matched ? matched.questions : SOLO_TOPICS[0].questions;
  return pool.slice(0, count);
}
