/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QuizQuestion {
  id: string;
  subject: string;
  lesson: string;
  question: string;
  answer: string;
  acceptableKeywords: string[];
  explanation: string;
  hint: string;
}

export interface QuizTopic {
  id: string;
  subject: string;
  lesson: string;
  icon: string;
  color: string;
  description: string;
  questions: QuizQuestion[];
}

/**
 * QUESTIONS OFFICIELLES DU TOURNOI MULTIJOUEUR (1ère L2)
 * Réservées EXCLUSIVEMENT aux défis collectifs en direct.
 * Ne sont JAMAIS posées dans le mode entraînement solo !
 */
export const TOURNAMENT_TOPICS: QuizTopic[] = [
  // 1. SVT (Niveau 1ère L2) : L'organisation de la cellule
  {
    id: 'svt-cellule',
    subject: 'SVT',
    lesson: "L'organisation de la cellule (niveau 1ère L2)",
    icon: '🔬',
    color: 'from-emerald-500 to-teal-600',
    description: 'Ultrastructure cellulaire, membrane plasmique, organites et mitose',
    questions: [
      {
        id: 'tour-svt1',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel organite cellulaire est le siège principal de la synthèse de l'ATP par la respiration cellulaire ?",
        answer: "Mitochondrie",
        acceptableKeywords: ["Mitochondrie", "Les mitochondries", "La mitochondrie"],
        explanation: "La mitochondrie est considérée comme la centrale énergétique de la cellule eucaryote.",
        hint: "Commence par Mito..."
      },
      {
        id: 'tour-svt2',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment appelle-t-on la membrane biologique qui délimite le cytoplasme de la cellule et contrôle les échanges avec l'extérieur ?",
        answer: "Membrane plasmique",
        acceptableKeywords: ["Membrane plasmique", "Membrane cellulaire", "Plasmalemme"],
        explanation: "Constituée d'une bicouche phospholipidique avec des protéines intégrées et périphériques selon le modèle de la mosaïque fluide.",
        hint: "Membrane p..."
      },
      {
        id: 'tour-svt3',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel constituant cellulaire contient le matériel génétique (ADN) chez les organismes eucaryotes ?",
        answer: "Le noyau",
        acceptableKeywords: ["Noyau", "Le noyau", "Noyau cellulaire"],
        explanation: "Le noyau est délimité par une enveloppe nucléaire percée de pores nucléaires.",
        hint: "Organite central des cellules eucaryotes."
      },
      {
        id: 'tour-svt4',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel réseau membranaire granuleux est parsemé de ribosomes et assure la synthèse et maturation des protéines ?",
        answer: "Réticulum endoplasmique granuleux",
        acceptableKeywords: ["Réticulum endoplasmique granuleux", "Reticulum endoplasmique", "REG", "Réticulum rugueux", "RER"],
        explanation: "Le REG (ou ergastoplasme) porte à sa surface des ribosomes qui synthétisent les chaînes polypeptidiques.",
        hint: "Sigle usuel : REG."
      },
      {
        id: 'tour-svt5',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel organite constitué d'un empilement de saccules aplatis (dictyosomes) assure le tri et l'emballage des protéines ?",
        answer: "Appareil de Golgi",
        acceptableKeywords: ["Appareil de Golgi", "Golgi", "Dictyosome"],
        explanation: "L'appareil de Golgi modifie les protéines provenant du REG avant de les expédier par des vésicules.",
        hint: "Nom d'un médecin savant italien (Camillo...)."
      },
      {
        id: 'tour-svt6',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quelle paroi rigide extérieure en cellulose protège la cellule végétale contre la turgescence et la déformation ?",
        answer: "Paroi pectocellulosique",
        acceptableKeywords: ["Paroi pectocellulosique", "Paroi végétale", "Paroi cellulaire", "Paroi de cellulose"],
        explanation: "Spécifique des végétaux, elle est riche en cellulose, pectine et hémicellulose.",
        hint: "Pectocellulosique."
      },
      {
        id: 'tour-svt7',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel compartiment volumineux rempli d'eau et de solutés occupe la majeure partie du volume d'une cellule végétale mature ?",
        answer: "La vacuole",
        acceptableKeywords: ["Vacuole", "La vacuole", "Vacuole centrale"],
        explanation: "La vacuole maintient la turgescence cellulaire et stocke des réserves ou des pigments.",
        hint: "Commence par V."
      },
      {
        id: 'tour-svt8',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment qualifie-t-on une cellule qui ne possède aucun noyau délimité par une membrane (comme les bactéries) ?",
        answer: "Procaryote",
        acceptableKeywords: ["Procaryote", "Cellule procaryote", "Procaryotes"],
        explanation: "Par opposition aux eucaryotes (qui possèdent un vrai noyau et des organites compartimentés).",
        hint: "Pro- (avant) et caryon (noyau)."
      },
      {
        id: 'tour-svt9',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quelle phase de la mitose se caractérise par l'alignement des chromosomes condensés sur la plaque équatoriale ?",
        answer: "Métaphase",
        acceptableKeywords: ["Metaphase", "La metaphase", "Métaphase"],
        explanation: "En métaphase, les chromosomes dupliqués sont parfaitement alignés sur le plan équatorial du fuseau mitotique.",
        hint: "Deuxième grande étape de la mitose."
      },
      {
        id: 'tour-svt10',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quelle phase de la mitose voit la séparation des chromatides sœurs qui migrent chacune vers un pôle opposé de la cellule ?",
        answer: "Anaphase",
        acceptableKeywords: ["Anaphase", "L anaphase", "L'anaphase"],
        explanation: "Le centromère se clive et les microtubules kinétochoriens tractent chaque chromatide vers les pôles cellulaires.",
        hint: "Ana- = vers le haut / retour."
      },
      {
        id: 'tour-svt11',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel microscope utilisant un faisceau d'électrons a permis de découvrir l'ultrastructure fine des organites cellulaires ?",
        answer: "Microscope électronique",
        acceptableKeywords: ["Microscope electronique", "Microscope electronique a transmission", "MET", "MEB"],
        explanation: "Le microscope électronique offre une résolution nanométrique bien supérieure à celle du microscope optique.",
        hint: "Fonctionne avec des électrons."
      },
      {
        id: 'tour-svt12',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel organite cellulaire photosynthétique vert renferme les thylakoïdes et la chlorophylle chez les végétaux ?",
        answer: "Le chloroplaste",
        acceptableKeywords: ["Chloroplaste", "Le chloroplaste", "Chloroplastes"],
        explanation: "Le chloroplaste réalise la photosynthèse en convertissant l'énergie lumineuse en glucides.",
        hint: "Contient la chlorophylle."
      },
      {
        id: 'tour-svt13',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment appelle-t-on la première étape de la mitose où la chromatine se condense en chromosomes visibles ?",
        answer: "Prophase",
        acceptableKeywords: ["Prophase", "La prophase"],
        explanation: "Pendant la prophase, l'enveloppe nucléaire commence à se désagréger et le fuseau mitotique s'installe.",
        hint: "Pro- = premier."
      },
      {
        id: 'tour-svt14',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quelle dernière phase de la mitose voit la reformation des deux enveloppes nucléaires autour des lots de chromosomes décondensés ?",
        answer: "Télophase",
        acceptableKeywords: ["Telophase", "La telophase", "Télophase"],
        explanation: "La télophase clôt la mitose nucléaire et précède la cytocinèse (division du cytoplasme).",
        hint: "Télo- = fin."
      },
      {
        id: 'tour-svt15',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel modèle architectural décrit la membrane plasmique comme fluide et parsemée de protéines mobiles ?",
        answer: "Mosaïque fluide",
        acceptableKeywords: ["Mosaique fluide", "Modele de la mosaique fluide", "Mosaïque fluide"],
        explanation: "Proposé par Singer et Nicolson en 1972, ce modèle explique la dynamique des lipides et protéines membranaires.",
        hint: "Mosaïque f..."
      },
      {
        id: 'tour-svt16',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Comment nomme-t-on les structures cellulaires non membranaires formées d'ARN ribosomique et de protéines qui lisent l'ARNm pour fabriquer les peptides ?",
        answer: "Ribosomes",
        acceptableKeywords: ["Ribosomes", "Le ribosome", "Les ribosomes", "Ribosome"],
        explanation: "Les ribosomes traduisent l'information génétique en séquences d'acides aminés.",
        hint: "Ribo-..."
      },
      {
        id: 'tour-svt17',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quelle structure protéique située au niveau du centromère permet la fixation des microtubules du fuseau sur chaque chromosome ?",
        answer: "Kinétochore",
        acceptableKeywords: ["Kinetochore", "Le kinetochore", "Kinétochores"],
        explanation: "Le kinétochore est le complexe protéique essentiel à la ségrégation équilibrée des chromosomes.",
        hint: "Kinéto..."
      },
      {
        id: 'tour-svt18',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel est l'état d'une cellule végétale gorgée d'eau dont la vacuole pousse fortement le cytoplasme contre la paroi ?",
        answer: "Turgescence",
        acceptableKeywords: ["Turgescence", "Cellule turgescente", "Turgescente"],
        explanation: "La turgescence assure le port dressé des plantes herbacées non lignifiées.",
        hint: "Contraire de la plasmolyse."
      },
      {
        id: 'tour-svt19',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quel phénomène osmotique se produit quand une cellule végétale perd son eau en milieu hypertonique et décolle sa membrane de la paroi ?",
        answer: "Plasmolyse",
        acceptableKeywords: ["Plasmolyse", "La plasmolyse", "Cellule plasmolysée"],
        explanation: "L'eau sort vers le milieu extérieur plus concentré, provoquant le rétrécissement du protoplaste.",
        hint: "Plasmo-..."
      },
      {
        id: 'tour-svt20',
        subject: 'SVT',
        lesson: "L'organisation de la cellule",
        question: "Quelle macromolécule en double hélice porte l'information génétique dans le noyau des cellules ?",
        answer: "ADN",
        acceptableKeywords: ["ADN", "Acide desoxyribonucleique", "Acide désoxyribonucléique", "DNA"],
        explanation: "L'ADN (Acide DésoxyriboNucléique) est composé de nucléotides A, T, C, G.",
        hint: "Acide en trois lettres : A..."
      }
    ]
  },

  // 2. Anglais (Niveau 1ère L2) : Tenses
  {
    id: 'anglais-tenses',
    subject: 'Anglais',
    lesson: 'Tenses (niveau 1ère L2)',
    icon: '🇬🇧',
    color: 'from-blue-500 to-indigo-600',
    description: 'Past, Present, Perfect and Conditional structures in English grammar',
    questions: [
      {
        id: 'tour-ang1',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which tense is used to express habits, general truths, and permanent situations (e.g. 'Water boils at 100°C')?",
        answer: "Present Simple",
        acceptableKeywords: ["Present simple", "Simple present", "Present"],
        explanation: "The Present Simple describes timeless facts, scientific truths, and routine habits.",
        hint: "Present S..."
      },
      {
        id: 'tour-ang2',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the past participle form of the irregular verb 'write'?",
        answer: "Written",
        acceptableKeywords: ["Written", "Write written"],
        explanation: "Write - Wrote - Written (irregular verb forms).",
        hint: "Ends with -en."
      },
      {
        id: 'tour-ang3',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Complete the sentence: 'If I were rich, I _______ travel around the world.'",
        answer: "Would",
        acceptableKeywords: ["Would", "I would", "Could"],
        explanation: "Second conditional formula: If + Past Simple, would + base verb.",
        hint: "Modal verb starting with W."
      },
      {
        id: 'tour-ang4',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which tense is formed with 'had + past participle' and refers to an action completed before another past event?",
        answer: "Past Perfect",
        acceptableKeywords: ["Past perfect", "Past perfect simple", "Pluperfect"],
        explanation: "Example: 'She had already left when I arrived.'",
        hint: "Past P..."
      },
      {
        id: 'tour-ang5',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What tense is used in: 'Look! The students are writing their final exam right now.'?",
        answer: "Present Continuous",
        acceptableKeywords: ["Present continuous", "Present progressive"],
        explanation: "The Present Continuous (am/is/are + verb-ing) describes actions happening at the moment of speech.",
        hint: "Be + -ing form in the present."
      },
      {
        id: 'tour-ang6',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What preposition is used with Present Perfect to indicate a specific starting point in time (e.g. 'I have lived here _______ 2018')?",
        answer: "Since",
        acceptableKeywords: ["Since"],
        explanation: "'Since' introduces a fixed point in time, while 'for' introduces a duration.",
        hint: "Since vs For."
      },
      {
        id: 'tour-ang7',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the past simple form of the irregular verb 'go'?",
        answer: "Went",
        acceptableKeywords: ["Went"],
        explanation: "Go - Went - Gone.",
        hint: "Begins with W."
      },
      {
        id: 'tour-ang8',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which conditional structure expresses real, possible future conditions: 'If it rains, we will stay at home'?",
        answer: "First Conditional",
        acceptableKeywords: ["First conditional", "1st conditional", "Type 1 conditional"],
        explanation: "First conditional: If + present simple, will + base form.",
        hint: "Conditionnel de type 1."
      },
      {
        id: 'tour-ang9',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Complete the sentence with the correct tense: 'While I _______ (read) a book, the lights suddenly went out.'",
        answer: "Was reading",
        acceptableKeywords: ["Was reading", "Past continuous"],
        explanation: "Past Continuous describes an ongoing background action interrupted by a past simple event.",
        hint: "Was + read-ing."
      },
      {
        id: 'tour-ang10',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which tense connects a past action to the present moment using 'have/has + past participle'?",
        answer: "Present Perfect",
        acceptableKeywords: ["Present perfect", "Present perfect simple"],
        explanation: "Used for experiences, recent actions, or uncompleted time periods.",
        hint: "Have + participe passé."
      },
      {
        id: 'tour-ang11',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What auxiliary verb is used to form the future simple tense in formal English (e.g. 'They _______ succeed')?",
        answer: "Will",
        acceptableKeywords: ["Will", "Shall"],
        explanation: "'Will' is the standard modal auxiliary used to express spontaneous decisions and future predictions.",
        hint: "W-i-l-l."
      },
      {
        id: 'tour-ang12',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the past participle form of the irregular verb 'speak'?",
        answer: "Spoken",
        acceptableKeywords: ["Spoken"],
        explanation: "Speak - Spoke - Spoken.",
        hint: "Ends with -en."
      },
      {
        id: 'tour-ang13',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What tense is used to describe two simultaneous continuous actions in the past linked by 'while' (e.g. 'While Dad was cooking, Mom was washing')?",
        answer: "Past Continuous",
        acceptableKeywords: ["Past continuous", "Past progressive"],
        explanation: "Both actions were in progress at the same time in the past.",
        hint: "Past Continuous / Progressive."
      },
      {
        id: 'tour-ang14',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Complete the Third Conditional: 'If they had studied harder, they _______ passed the baccalaureate exam.'",
        answer: "Would have",
        acceptableKeywords: ["Would have", "Could have", "Might have"],
        explanation: "Third conditional formula: If + Past Perfect, would have + past participle.",
        hint: "Would + auxiliary have."
      },
      {
        id: 'tour-ang15',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What time marker adverb is typically used with Present Perfect to indicate an action happened sooner than expected (e.g. 'I have _______ done it')?",
        answer: "Already",
        acceptableKeywords: ["Already"],
        explanation: "'Already' indicates that an action has taken place prior to now.",
        hint: "Opposite of 'yet'."
      },
      {
        id: 'tour-ang16',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the past simple of the verb 'buy'?",
        answer: "Bought",
        acceptableKeywords: ["Bought"],
        explanation: "Buy - Bought - Bought.",
        hint: "Rhymes with caught."
      },
      {
        id: 'tour-ang17',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What semi-modal verbal expression in English describes a past routine that is no longer true today (e.g. 'I _______ play tennis when I was a child')?",
        answer: "Used to",
        acceptableKeywords: ["Used to"],
        explanation: "'Used to + infinitive' refers to past habits or states that have ceased.",
        hint: "Used t..."
      },
      {
        id: 'tour-ang18',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Which tense is used to describe a schedule or timetable in the future (e.g. 'The train leaves at 8:00 AM tomorrow')?",
        answer: "Present Simple",
        acceptableKeywords: ["Present simple", "Simple present"],
        explanation: "Present simple is used for fixed timetables and official schedules.",
        hint: "Simple Present."
      },
      {
        id: 'tour-ang19',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "Complete the question: '_______ you ever visited the monument of African Renaissance in Dakar?'",
        answer: "Have",
        acceptableKeywords: ["Have", "Have you"],
        explanation: "Have + subject + ever + past participle expresses life experience.",
        hint: "Auxiliary verb Have."
      },
      {
        id: 'tour-ang20',
        subject: 'Anglais',
        lesson: 'Tenses',
        question: "What is the negative auxiliary used for the past simple of regular and irregular verbs (e.g. 'She _______ not come')?",
        answer: "Did",
        acceptableKeywords: ["Did", "Didn't", "Did not"],
        explanation: "The past auxiliary is 'did' (did not / didn't) followed by the bare infinitive.",
        hint: "D-i-d."
      }
    ]
  },

  // 3. Français (Niveau 1ère L2) : Versification, Siècle des Lumières, Préromantisme
  {
    id: 'francais-siecle',
    subject: 'Français',
    lesson: 'Versification, le Siècle des Lumières, le Préromantisme',
    icon: '📚',
    color: 'from-amber-500 to-rose-600',
    description: 'Métrique poétique, philosophes du XVIIIe siècle et sensibilité préromantique',
    questions: [
      {
        id: 'tour-fr1',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment appelle-t-on un vers français classique composé de douze syllabes métriques ?",
        answer: "Alexandrin",
        acceptableKeywords: ["Alexandrin", "L alexandrin", "Vers de douze syllabes"],
        explanation: "L'alexandrin est le vers noble de la poésie classique et tragique française.",
        hint: "Nom dérivé du roman médiéval d'Alexandre."
      },
      {
        id: 'tour-fr2',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment nomme-t-on la pause médiane obligatoire qui coupe l'alexandrin classique en deux hémistiches égaux de six syllabes ?",
        answer: "Césure",
        acceptableKeywords: ["Cesure", "La cesure", "Césure"],
        explanation: "La césure à l'hémistiche (6 // 6) rythme l'alexandrin classique (Boileau).",
        hint: "Commence par Cé..."
      },
      {
        id: 'tour-fr3',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment appelle-t-on la moitié d'un vers coupé par la césure ?",
        answer: "Hémistiche",
        acceptableKeywords: ["Hemistiche", "L hemistiche", "Hémistiche"],
        explanation: "Chaque moitié de 6 syllabes dans un alexandrin forme un hémistiche.",
        hint: "Hémi- = demi."
      },
      {
        id: 'tour-fr4',
        subject: 'Français',
        lesson: 'Versification',
        question: "Quelle disposition des rimes suit le schéma ABAB ?",
        answer: "Rimes croisées",
        acceptableKeywords: ["Rimes croisees", "Croisees", "Rime croisee", "Rimes croisées"],
        explanation: "ABAB correspond aux rimes croisées (ou alternées), distinctes de AABB (plates) et ABBA (embrassées).",
        hint: "Rimes c..."
      },
      {
        id: 'tour-fr5',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quel philosophe des Lumières a écrit 'Candide ou l'Optimisme' pour critiquer la philosophie leibnizienne ?",
        answer: "Voltaire",
        acceptableKeywords: ["Voltaire", "Francois-Marie Arouet", "François-Marie Arouet"],
        explanation: "Voltaire dénonce l'illusion du 'meilleur des mondes possibles' à travers les mésaventures de Candide.",
        hint: "Pseudonyme de François-Marie Arouet."
      },
      {
        id: 'tour-fr6',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quel philosophe genevois a rédigé 'Du contrat social' et affirmé que 'L'homme est né libre et partout il est dans les fers' ?",
        answer: "Jean-Jacques Rousseau",
        acceptableKeywords: ["Rousseau", "Jean-Jacques Rousseau", "Jean Jacques Rousseau"],
        explanation: "Rousseau fonde la souveraineté légitime sur la volonté générale du peuple.",
        hint: "Auteur aussi de l'Émile et des Confessions."
      },
      {
        id: 'tour-fr7',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quel penseur bordelais a théorisé la séparation des pouvoirs (législatif, exécutif, judiciaire) dans 'De l'esprit des lois' ?",
        answer: "Montesquieu",
        acceptableKeywords: ["Montesquieu", "Charles de Secondat"],
        explanation: "Montesquieu pose le principe moderne de l'équilibre des pouvoirs pour éviter la tyrannie.",
        hint: "Auteur également des 'Lettres persanes'."
      },
      {
        id: 'tour-fr8',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quelle monumentale œuvre collective dirigée par Diderot et d'Alembert visait à rassembler l'ensemble des connaissances humaines du XVIIIe siècle ?",
        answer: "L'Encyclopédie",
        acceptableKeywords: ["Encyclopedie", "L encyclopedie", "L'Encyclopédie", "Dictionnaire raisonné des sciences"],
        explanation: "L'Encyclopédie est le chef-d'œuvre de diffusion des idées rationnelles des Lumières.",
        hint: "Dictionnaire raisonné des sciences, des arts et des métiers."
      },
      {
        id: 'tour-fr9',
        subject: 'Français',
        lesson: 'Versification',
        question: "Quel procédé rythmique consiste à reporter au début du vers suivant un ou deux mots très courts complétant le sens du vers précédent ?",
        answer: "Rejet",
        acceptableKeywords: ["Rejet", "Le rejet"],
        explanation: "Le rejet met en relief dramatique le mot ou syntagme isolé en début de vers.",
        hint: "Re-jet."
      },
      {
        id: 'tour-fr10',
        subject: 'Français',
        lesson: 'Préromantisme',
        question: "Quel écrivain français, auteur de 'René' et d'Atala', est considéré comme le père du préromantisme et de la mélancolie romantique française ?",
        answer: "Chateaubriand",
        acceptableKeywords: ["Chateaubriand", "Francois-Rene de Chateaubriand", "François-René de Chateaubriand"],
        explanation: "Chateaubriand incarne le 'vague des passions' et la sensibilité mélancolique dans la nature.",
        hint: "Auteur des Mémoires d'outre-tombe."
      },
      {
        id: 'tour-fr11',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment appelle-t-on un poème composé d'exactement deux quatrains et deux tercets (quatorze vers) ?",
        answer: "Sonnet",
        acceptableKeywords: ["Sonnet", "Le sonnet"],
        explanation: "Le sonnet est la forme fixe majeure de la poésie lyrique (Ronsard, Du Bellay, Baudelaire).",
        hint: "14 vers d'origine italienne (Pétrarque)."
      },
      {
        id: 'tour-fr12',
        subject: 'Français',
        lesson: 'Versification',
        question: "Comment qualifie-t-on une strophe de quatre vers ?",
        answer: "Quatrain",
        acceptableKeywords: ["Quatrain", "Un quatrain"],
        explanation: "Le quatrain est la strophe de quatre vers la plus fréquente dans la poésie française.",
        hint: "Racine 'quatre'."
      },
      {
        id: 'tour-fr13',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quel conte philosophique de Voltaire met en scène un Huron naïf confronté aux absurdités de la société et religion françaises ?",
        answer: "L'Ingénu",
        acceptableKeywords: ["L ingenu", "L'Ingénu", "Ingenu"],
        explanation: "L'Ingénu satirise les dérives du pouvoir absolu et de l'intolérance religieuse en France.",
        hint: "L'In-..."
      },
      {
        id: 'tour-fr14',
        subject: 'Français',
        lesson: 'Préromantisme',
        question: "Quelle célèbre notion désigne chez Chateaubriand l'état d'âme inquiet, triste et sans objet précis précédant le plein romantisme ?",
        answer: "Le vague des passions",
        acceptableKeywords: ["Le vague des passions", "Vague des passions", "Mal du siecle", "Mal du siècle"],
        explanation: "Le vague des passions traduit l'ennui profond et le vide existentiel des jeunes générations.",
        hint: "Le v... des passions."
      },
      {
        id: 'tour-fr15',
        subject: 'Français',
        lesson: 'Versification',
        question: "Combien de syllabes compte un vers appelé 'décasyllabe' ?",
        answer: "Dix",
        acceptableKeywords: ["Dix", "10", "10 syllabes"],
        explanation: "Déca- signifie dix en grec (vers de 10 syllabes).",
        hint: "Déca = ..."
      },
      {
        id: 'tour-fr16',
        subject: 'Français',
        lesson: 'Versification',
        question: "Quelle prononciation poétique consiste à séparer deux voyelles consécutives en deux syllabes distinctes au lieu d'une seule diphtongue ?",
        answer: "Diérèse",
        acceptableKeywords: ["Dierese", "La dierese", "Diérèse"],
        explanation: "Exemple: 'li-on' compté pour 2 syllabes au lieu d'une seule diphtongue.",
        hint: "Opposé de la synérèse."
      },
      {
        id: 'tour-fr17',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Quel traité de Voltaire a été rédigé pour réhabiliter la mémoire de Jean Calas et combattre l'intolérance religieuse ?",
        answer: "Traité sur la tolérance",
        acceptableKeywords: ["Traite sur la tolerance", "Traité sur la tolérance", "De la tolerance"],
        explanation: "Publié en 1763, ce plaidoyer universel dénonce le fanatisme et défend la liberté de conscience.",
        hint: "Traité sur la t..."
      },
      {
        id: 'tour-fr18',
        subject: 'Français',
        lesson: 'Versification',
        question: "Quelle disposition des rimes suit le schéma ABBA ?",
        answer: "Rimes embrassées",
        acceptableKeywords: ["Rimes embrassees", "Embrassees", "Rimes embrassées"],
        explanation: "Les rimes extrêmes (A) enserrent ou embrassent les rimes centrales (B).",
        hint: "Rimes e..."
      },
      {
        id: 'tour-fr19',
        subject: 'Français',
        lesson: 'Siècle des Lumières',
        question: "Dans les 'Lettres persanes' de Montesquieu, comment s'appellent les deux voyageurs persans qui visitent Paris et écrivent à leurs amis ?",
        answer: "Usbek et Rica",
        acceptableKeywords: ["Usbek et Rica", "Usbek", "Rica"],
        explanation: "Le regard étonné d'Usbek et Rica permet à Montesquieu de faire une satire acerbe des mœurs françaises.",
        hint: "U... et R..."
      },
      {
        id: 'tour-fr20',
        subject: 'Français',
        lesson: 'Préromantisme',
        question: "Quel roman épistolaire de Jean-Jacques Rousseau a célébré la passion amoureuse pure et la communion contemplative avec la nature suisse ?",
        answer: "Julie ou la Nouvelle Héloïse",
        acceptableKeywords: ["La Nouvelle Heloise", "Julie ou la Nouvelle Heloise", "Nouvelle Héloïse"],
        explanation: "Immense succès d'édition, ce chef-d'œuvre a inauguré le culte des paysages naturels et de l'émotion sincère.",
        hint: "La Nouvelle H..."
      }
    ]
  },

  // 4. Économie (Niveau 1ère L2) : La production (Partie 1)
  {
    id: 'eco-production',
    subject: 'Économie',
    lesson: 'La production (partie 1)',
    icon: '📈',
    color: 'from-amber-500 to-orange-600',
    description: 'Facteurs de production, valeur ajoutée, productivité et combinaison productive',
    questions: [
      {
        id: 'tour-eco1',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quels sont les deux facteurs de production fondamentaux traditionnellement combinés dans l'entreprise pour produire des biens et services ?",
        answer: "Le travail et le capital",
        acceptableKeywords: ["Travail et capital", "Le travail et le capital", "Facteur travail et facteur capital"],
        explanation: "La combinaison productive associe le travail humain (L) et les équipements/capitaux (K).",
        hint: "L'activité humaine et les machines/équipements."
      },
      {
        id: 'tour-eco2',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on le capital constitué par les biens durables utilisés pendant plusieurs cycles de production (bâtiments, machines, camions) ?",
        answer: "Capital fixe",
        acceptableKeywords: ["Capital fixe", "Le capital fixe"],
        explanation: "Le capital fixe s'use ou devient obsolète avec le temps et fait l'objet d'amortissements.",
        hint: "Opposé du capital circulant."
      },
      {
        id: 'tour-eco3',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on le capital constitué des biens transformés ou détruits au cours du processus de production (matières premières, énergie) ?",
        answer: "Capital circulant",
        acceptableKeywords: ["Capital circulant", "Consommations intermediaires", "Consommations intermédiaires"],
        explanation: "Aussi appelé consommations intermédiaires, il disparaît dans le produit final.",
        hint: "Capital c..."
      },
      {
        id: 'tour-eco4',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quelle grandeur économique mesure la richesse réelle créée par une entreprise en calculant : Production (ou Chiffre d'affaires) - Consommations intermédiaires ?",
        answer: "Valeur ajoutée",
        acceptableKeywords: ["Valeur ajoutee", "La valeur ajoutee", "VA", "Valeur ajoutée"],
        explanation: "VA = Chiffre d'affaires - Consommations intermédiaires. C'est la base du partage salaires / profits.",
        hint: "Sigle : VA."
      },
      {
        id: 'tour-eco5',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on le rapport entre le volume de la production obtenue et la quantité de facteurs de production utilisés ?",
        answer: "La productivité",
        acceptableKeywords: ["Productivite", "La productivite", "Productivité"],
        explanation: "La productivité mesure l'efficacité avec laquelle les facteurs de production sont combinés.",
        hint: "Mesure de l'efficacité productive."
      },
      {
        id: 'tour-eco6',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment calcule-t-on le Chiffre d'Affaires (CA) d'une entreprise vendant des marchandises ?",
        answer: "Prix de vente multiplié par les quantités vendues",
        acceptableKeywords: ["Prix x quantite", "Prix multiplie par quantite", "P x Q", "Prix fois quantite"],
        explanation: "CA = Prix unitaire (P) × Quantités vendues (Q).",
        hint: "P × Q."
      },
      {
        id: 'tour-eco7',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment qualifie-t-on deux facteurs de production lorsqu'une machine peut remplacer des travailleurs sans modifier le niveau de production ?",
        answer: "Facteurs substituables",
        acceptableKeywords: ["Substituables", "Facteurs substituables", "Substituabilite"],
        explanation: "À l'inverse, ils sont dits complémentaires si l'utilisation de l'un exige obligatoirement l'autre dans des proportions fixes.",
        hint: "Sub-sti-tuables."
      },
      {
        id: 'tour-eco8',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on la production rémunérée de biens et de services destinés à être vendus sur un marché à un prix économiquement significatif ?",
        answer: "Production marchande",
        acceptableKeywords: ["Production marchande", "Marchande"],
        explanation: "La production marchande vise un prix couvrant plus de 50% des coûts de production.",
        hint: "Opposée à la production non marchande."
      },
      {
        id: 'tour-eco9',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quelle institution produit principalement des services non marchands mis à disposition gratuitement ou quasi-gratuitement (écoles publiques, hôpitaux, police) ?",
        answer: "Les administrations publiques",
        acceptableKeywords: ["Administrations publiques", "L Etat", "L'Etat", "Etat", "Services publics"],
        explanation: "Les administrations publiques (État, collectivités locales, sécurité sociale) financent ces services par les impôts et cotisations.",
        hint: "L'État et ses administrations."
      },
      {
        id: 'tour-eco10',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quelle opération comptable constate la perte de valeur du capital fixe due à l'usure physique ou à l'obsolescence technologique ?",
        answer: "L'amortissement",
        acceptableKeywords: ["Amortissement", "L amortissement", "L'amortissement"],
        explanation: "L'amortissement permet à l'entreprise d'épargner pour renouveler son équipement productif.",
        hint: "Amortir les équipements."
      },
      {
        id: 'tour-eco11',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on le bénéfice brut de l'entreprise obtenu après déduction des rémunérations des salariés et des impôts sur la production ?",
        answer: "Excédent Brut d'Exploitation",
        acceptableKeywords: ["Excedent brut d exploitation", "EBE", "Excédent brut d'exploitation"],
        explanation: "L'EBE mesure le résultat économique généré par l'outil productif de l'entreprise.",
        hint: "Sigle : EBE."
      },
      {
        id: 'tour-eco12',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on l'achat de biens de production durables (capital fixe) effectué par une entreprise pour maintenir ou accroître sa capacité productive ?",
        answer: "L'investissement",
        acceptableKeywords: ["Investissement", "L investissement", "FBCF", "Formation brute de capital fixe"],
        explanation: "En comptabilité nationale, l'investissement matériel est mesuré par la FBCF.",
        hint: "FBCF ou Investissement."
      },
      {
        id: 'tour-eco13',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment qualifie-t-on une combinaison productive qui utilise une proportion très élevée de machines par rapport à la main-d'œuvre humaine ?",
        answer: "Combinaison à forte intensité capitalistique",
        acceptableKeywords: ["Intensite capitalistique", "Capitalistique", "Forte intensite de capital"],
        explanation: "L'intensité capitalistique est le ratio Capital / Travail (K / L).",
        hint: "Intensité c..."
      },
      {
        id: 'tour-eco14',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on le résultat obtenu en soustrayant le total des coûts de production du chiffre d'affaires total ?",
        answer: "Le profit",
        acceptableKeywords: ["Profit", "Le profit", "Benefice", "Bénéfice", "Resultat net"],
        explanation: "Profit = Chiffre d'affaires total - Coûts totaux.",
        hint: "Bénéfice ou profit."
      },
      {
        id: 'tour-eco15',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quelle organisation productive appartient à l'Économie Sociale et Solidaire où les associés possèdent le pouvoir selon le principe 'une personne = une voix' ?",
        answer: "Une coopérative",
        acceptableKeywords: ["Cooperative", "Une cooperative", "Mutuelle", "Coopérative"],
        explanation: "Dans les coopératives et mutuelles, la finalité n'est pas la rémunération exclusive du capital mais le service rendu aux sociétaires.",
        hint: "Coop-..."
      },
      {
        id: 'tour-eco16',
        subject: 'Économie',
        lesson: 'La production',
        question: "Qu'appelle-t-on l'ensemble des connaissances, compétences, qualifications et aptitudes productives accumulées par un travailleur ?",
        answer: "Le capital humain",
        acceptableKeywords: ["Capital humain", "Le capital humain"],
        explanation: "Concept développé par Theodore Schultz et Gary Becker, le capital humain s'enrichit par l'éducation et la formation.",
        hint: "Capital h..."
      },
      {
        id: 'tour-eco17',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on les coûts qui ne varient pas quel que soit le volume de production fabriqué (loyer des hangars, assurances) ?",
        answer: "Coûts fixes",
        acceptableKeywords: ["Couts fixes", "Les couts fixes", "Coûts fixes"],
        explanation: "Les coûts fixes doivent être payés même si la production est nulle.",
        hint: "Coûts f..."
      },
      {
        id: 'tour-eco18',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on la baisse du coût unitaire moyen obtenue lorsqu'une entreprise augmente son volume global de production ?",
        answer: "Économies d'échelle",
        acceptableKeywords: ["Economies d echelle", "Economie d echelle", "Économies d'échelle"],
        explanation: "L'augmentation de l'échelle de production permet d'amortir les coûts fixes sur un plus grand nombre d'unités.",
        hint: "Économies d'é..."
      },
      {
        id: 'tour-eco19',
        subject: 'Économie',
        lesson: 'La production',
        question: "Quel agrégat fondamental de la comptabilité nationale mesure la somme des valeurs ajoutées brutes créées sur le territoire national au cours d'une année ?",
        answer: "Le Produit Intérieur Brut",
        acceptableKeywords: ["PIB", "Produit interieur brut", "Le PIB", "Produit Intérieur Brut"],
        explanation: "Le PIB = Somme des valeurs ajoutées + Impôts sur les produits - Subventions sur les produits.",
        hint: "Sigle : PIB."
      },
      {
        id: 'tour-eco20',
        subject: 'Économie',
        lesson: 'La production',
        question: "Comment appelle-t-on le coût de production d'une unité supplémentaire de bien ou service ?",
        answer: "Le coût marginal",
        acceptableKeywords: ["Cout marginal", "Le cout marginal", "Coût marginal"],
        explanation: "La comparaison du coût marginal avec la recette marginale (prix) détermine le niveau d'équilibre de l'entreprise.",
        hint: "Coût m..."
      }
    ]
  },

  // 5. Mathématiques (Niveau 1ère L2) : Les polynômes
  {
    id: 'math-polynomes',
    subject: 'Mathématiques',
    lesson: 'Les polynômes (niveau 1ère L2)',
    icon: '📐',
    color: 'from-violet-500 to-purple-600',
    description: 'Polynômes du second degré, discriminant delta, racines et factorisation',
    questions: [
      {
        id: 'tour-math1',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Pour un trinôme du second degré ax² + bx + c, quelle lettre grecque et formule définissent le discriminant ?",
        answer: "Delta = b² - 4ac",
        acceptableKeywords: ["b² - 4ac", "b2 - 4ac", "Delta", "Discriminant"],
        explanation: "Le discriminant noté Δ = b² - 4ac détermine l'existence et le nombre de racines réelles.",
        hint: "Symbole Δ, b au carré moins 4ac."
      },
      {
        id: 'tour-math2',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Combien de racines réelles distinctes admet un trinôme du second degré lorsque son discriminant Delta est strictement positif (Delta > 0) ?",
        answer: "Deux racines",
        acceptableKeywords: ["2", "Deux", "2 racines", "Deux racines distinctes"],
        explanation: "Les deux racines réelles sont (-b - √Δ)/(2a) et (-b + √Δ)/(2a).",
        hint: "Nombre entier : 2."
      },
      {
        id: 'tour-math3',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle est la valeur de la racine double d'un trinôme ax² + bx + c lorsque Delta = 0 ?",
        answer: "-b / (2a)",
        acceptableKeywords: ["-b/2a", "-b / 2a", "-b/(2a)", "Moins b sur 2a"],
        explanation: "Lorsque Δ = 0, la racine double est x0 = -b / (2a).",
        hint: "Opposé de b divisé par deux fois a."
      },
      {
        id: 'tour-math4',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Combien de racines réelles possède un trinôme du second degré lorsque Delta est strictement négatif (Delta < 0) ?",
        answer: "Zéro",
        acceptableKeywords: ["Zero", "0", "Aucune", "Aucune racine", "Zéro"],
        explanation: "Dans l'ensemble des réels R, la racine carrée d'un nombre négatif n'existe pas.",
        hint: "Aucune racine réelle."
      },
      {
        id: 'tour-math5',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Comment appelle-t-on la courbe géométrique représentative d'une fonction polynôme du second degré f(x) = ax² + bx + c ?",
        answer: "Parabole",
        acceptableKeywords: ["Parabole", "Une parabole"],
        explanation: "La parabole admet un sommet S(-b/2a ; f(-b/2a)) et un axe de symétrie vertical.",
        hint: "Forme géométrique en U ou en cloche."
      },
      {
        id: 'tour-math6',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quel est le degré du polynôme P(x) = 5x⁴ - 3x² + 7x - 9 ?",
        answer: "4",
        acceptableKeywords: ["4", "Quatre", "Degre 4", "Degré 4"],
        explanation: "Le degré correspond au plus grand exposant de la variable x avec un coefficient non nul.",
        hint: "Regardez la plus haute puissance de x."
      },
      {
        id: 'tour-math7',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle est la valeur de la somme S = x1 + x2 des racines d'un trinôme ax² + bx + c ayant deux racines ?",
        answer: "-b / a",
        acceptableKeywords: ["-b/a", "-b / a", "Moins b sur a"],
        explanation: "D'après les relations de Viète, la somme des racines est S = -b/a.",
        hint: "Moins b sur a."
      },
      {
        id: 'tour-math8',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle est la valeur du produit P = x1 × x2 des racines d'un trinôme ax² + bx + c ayant deux racines ?",
        answer: "c / a",
        acceptableKeywords: ["c/a", "c / a", "c sur a"],
        explanation: "D'après les relations de Viète, le produit des racines est P = c/a.",
        hint: "c divisé par a."
      },
      {
        id: 'tour-math9',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Comment appelle-t-on la forme a(x - alpha)² + beta d'un trinôme du second degré ?",
        answer: "Forme canonique",
        acceptableKeywords: ["Forme canonique", "Canonique"],
        explanation: "La forme canonique permet de lire directement les coordonnées du sommet de la parabole.",
        hint: "Forme c..."
      },
      {
        id: 'tour-math10',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Si alpha est une racine du polynôme P(x), par quel binôme de degré 1 le polynôme P(x) est-il nécessairement factorisable ?",
        answer: "(x - alpha)",
        acceptableKeywords: ["x - alpha", "(x - alpha)", "x-alpha"],
        explanation: "Si P(α) = 0, alors P(x) = (x - α) · Q(x) avec deg(Q) = deg(P) - 1.",
        hint: "x moins la racine."
      },
      {
        id: 'tour-math11',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Vers où sont orientées les branches infinies d'une parabole lorsque le coefficient 'a' est strictement positif (a > 0) ?",
        answer: "Vers le haut",
        acceptableKeywords: ["Vers le haut", "Haut", "Positives"],
        explanation: "Si a > 0, la parabole est 'souriante' et son sommet est un minimum absolu.",
        hint: "Vers le h..."
      },
      {
        id: 'tour-math12',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle est la racine évidente du polynôme P(x) = 2x² - 5x + 3 sachant que la somme des coefficients 2 - 5 + 3 = 0 ?",
        answer: "1",
        acceptableKeywords: ["1", "Un", "x = 1"],
        explanation: "Si la somme des coefficients d'un polynôme est égale à 0, alors 1 est racine évidente.",
        hint: "Le chiffre 1."
      },
      {
        id: 'tour-math13',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Calculez le discriminant Delta du trinôme x² - 6x + 9.",
        answer: "0",
        acceptableKeywords: ["0", "Zero", "Zéro"],
        explanation: "Δ = (-6)² - 4(1)(9) = 36 - 36 = 0. Il admet une racine double x = 3.",
        hint: "36 moins 36."
      },
      {
        id: 'tour-math14',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle identité remarquable factorise la différence de deux carrés a² - b² ?",
        answer: "(a - b)(a + b)",
        acceptableKeywords: ["(a - b)(a + b)", "(a+b)(a-b)", "(a - b) * (a + b)"],
        explanation: "a² - b² = (a - b)(a + b) est une identité fondamentale pour factoriser les polynômes.",
        hint: "Produit de la somme par la différence."
      },
      {
        id: 'tour-math15',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle est l'abscisse de l'axe de symétrie vertical de la parabole y = ax² + bx + c ?",
        answer: "x = -b / (2a)",
        acceptableKeywords: ["-b/2a", "-b / 2a", "-b/(2a)", "x = -b/2a"],
        explanation: "L'axe vertical d'équation x = -b/(2a) coupe la parabole en son sommet.",
        hint: "Même abscisse que le sommet."
      },
      {
        id: 'tour-math16',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Comment qualifie-t-on le signe d'un trinôme ax² + bx + c sur tout R lorsque Delta < 0 ?",
        answer: "Du signe de a",
        acceptableKeywords: ["Signe de a", "Toujours du signe de a", "Meme signe que a"],
        explanation: "Quand Δ < 0, le trinôme ne s'annule jamais et conserve partout le signe de son coefficient dominant a.",
        hint: "Il prend toujours le signe de son coefficient principal."
      },
      {
        id: 'tour-math17',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelle est la forme factorisée du trinôme ax² + bx + c quand il admet deux racines réelles x1 et x2 ?",
        answer: "a(x - x1)(x - x2)",
        acceptableKeywords: ["a(x - x1)(x - x2)", "a(x-x1)(x-x2)"],
        explanation: "Ne jamais oublier le coefficient a devant le produit des facteurs.",
        hint: "a multiplié par (x - x1)(x - x2)."
      },
      {
        id: 'tour-math18',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quel est le degré d'une constante réelle non nulle comme le polynôme P(x) = 7 ?",
        answer: "0",
        acceptableKeywords: ["0", "Zero", "Degre 0", "Degré 0"],
        explanation: "P(x) = 7x⁰, son degré est 0.",
        hint: "Zéro."
      },
      {
        id: 'tour-math19',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Quelles sont les deux solutions de l'équation x² - 16 = 0 ?",
        answer: "4 et -4",
        acceptableKeywords: ["4 et -4", "-4 et 4", "4, -4"],
        explanation: "x² = 16 équivaut à x = √16 = 4 ou x = -4.",
        hint: "Racines carrées de 16."
      },
      {
        id: 'tour-math20',
        subject: 'Mathématiques',
        lesson: 'Les polynômes',
        question: "Comment appelle-t-on le terme 'c' sans variable dans le trinôme ax² + bx + c ?",
        answer: "Terme constant",
        acceptableKeywords: ["Terme constant", "Le terme constant", "Constante"],
        explanation: "Le terme constant c donne l'ordonnée à l'origine où la parabole coupe l'axe vertical (y = c).",
        hint: "Terme c..."
      }
    ]
  },

  // 6. Histoire (Niveau 1ère L2) : La révolution industrielle (Genèse et manifestations)
  {
    id: 'hist-revolution',
    subject: 'Histoire',
    lesson: 'La révolution industrielle : genèse et manifestations',
    icon: '🏭',
    color: 'from-amber-600 to-red-700',
    description: 'Machine à vapeur, essor de la métallurgie, chemins de fer et mutations sociales',
    questions: [
      {
        id: 'tour-hist1',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel pays européen a été le berceau et pionnier de la première révolution industrielle au milieu du XVIIIe siècle ?",
        answer: "Royaume-Uni",
        acceptableKeywords: ["Angleterre", "Grande-Bretagne", "Royaume-Uni", "La Grande Bretagne"],
        explanation: "L'Angleterre disposait de gisements de charbon abondants, de capitaux coloniaux et d'innovations techniques.",
        hint: "Grande-Bretagne."
      },
      {
        id: 'tour-hist2',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel inventeur écossais a perfectionné en 1769 la machine à vapeur avec un condenseur séparé ?",
        answer: "James Watt",
        acceptableKeywords: ["James Watt", "Watt"],
        explanation: "La machine à vapeur de James Watt a fourni une énergie mécanique autonome indépendante de la force animale ou hydraulique.",
        hint: "Son nom a donné l'unité de puissance électrique."
      },
      {
        id: 'tour-hist3',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel combustible fossile noir extrait des mines a constitué l'énergie motrice essentielle de la 1ère révolution industrielle ?",
        answer: "Le charbon",
        acceptableKeywords: ["Charbon", "La houille", "Houille", "Le charbon de terre"],
        explanation: "Le charbon de terre (houille) alimentait les foyers des machines à vapeur et les hauts-fourneaux métallurgiques.",
        hint: "Combustible extrait des mines."
      },
      {
        id: 'tour-hist4',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle invention révolutionnaire des transports terrestres a été développée par George Stephenson avec la locomotive 'Rocket' ?",
        answer: "Le chemin de fer",
        acceptableKeywords: ["Chemin de fer", "Le chemin de fer", "Train", "Locomotive"],
        explanation: "Le chemin de fer a permis le transport rapide et massif des pondéreux (charbon, fer) et des personnes.",
        hint: "Trains sur rails."
      },
      {
        id: 'tour-hist5',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle nouvelle classe sociale urbaine et exploitée, ne possédant que sa force de travail vendue contre un salaire misérable, est née de la révolution industrielle ?",
        answer: "Le prolétariat",
        acceptableKeywords: ["Proletariat", "Le proletariat", "Classe ouvriere", "Les ouvriers", "Prolétariat"],
        explanation: "Karl Marx et Friedrich Engels ont théorisé l'antagonisme entre la bourgeoisie capitaliste et le prolétariat.",
        hint: "Les prolétaires."
      },
      {
        id: 'tour-hist6',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle classe sociale détentrice des capitaux, des usines, des banques et des moyens de production a pris la tête de la société industrielle ?",
        answer: "La bourgeoisie",
        acceptableKeywords: ["Bourgeoisie", "La bourgeoisie", "Bourgeoisie industrielle", "Capitalistes"],
        explanation: "La grande bourgeoisie industrielle et financière supplante l'ancienne aristocratie terrienne.",
        hint: "La b..."
      },
      {
        id: 'tour-hist7',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel secteur industriel léger a été le tout premier à s'automatiser avec les machines à filer (Spinning Jenny, Mule) ?",
        answer: "L'industrie textile",
        acceptableKeywords: ["Textile", "Industrie textile", "Le textile", "Le coton"],
        explanation: "Le tissage et la filature mécanique du coton ont inauguré la mécanisation industrielle en Angleterre.",
        hint: "Tissus et filatures."
      },
      {
        id: 'tour-hist8',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Comment appelle-t-on le phénomène massif de déplacement des populations quittant les campagnes pour venir s'installer dans les villes industrielles ?",
        answer: "L'exode rural",
        acceptableKeywords: ["Exode rural", "L exode rural", "L'exode rural"],
        explanation: "L'exode rural a nourri l'urbanisation galopante et fourni la main-d'œuvre nécessaire aux usines.",
        hint: "Exode r..."
      },
      {
        id: 'tour-hist9',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle industrie lourde spécialisée dans la fabrication de la fonte, du fer et de l'acier a connu un essor foudroyant grâce au charbon de coke ?",
        answer: "La sidérurgie",
        acceptableKeywords: ["Siderurgie", "La siderurgie", "Metallurgie", "La métallurgie", "Sidérurgie"],
        explanation: "La sidérurgie fournit les rails de chemin de fer, les coques de navires et les machines-outils.",
        hint: "Industrie du fer et de l'acier."
      },
      {
        id: 'tour-hist10',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle doctrine économique prônée par Adam Smith préconise la non-intervention de l'État dans l'économie et le libre jeu du marché ?",
        answer: "Le libéralisme",
        acceptableKeywords: ["Liberalisme", "Le liberalisme", "Capitalisme liberal", "Libéralisme"],
        explanation: "Le libéralisme classique repose sur le principe du 'laisser-faire, laisser-passer' et la 'main invisible'.",
        hint: "Libéral..."
      },
      {
        id: 'tour-hist11',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelles organisations créées par les ouvriers pour défendre leurs droits et salaires ont été progressivement légalisées au XIXe siècle ?",
        answer: "Les syndicats",
        acceptableKeywords: ["Syndicats", "Les syndicats", "Trade unions"],
        explanation: "Les syndicats ouvriers (Trade Unions en Angleterre) ont conquis des avancées comme la réduction du temps de travail.",
        hint: "Trade Unions ou S..."
      },
      {
        id: 'tour-hist12',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel moyen d'action collective des ouvriers consiste en un arrêt concerté et volontaire du travail pour exiger de meilleures conditions ?",
        answer: "La grève",
        acceptableKeywords: ["Greve", "La greve", "Droit de greve", "La grève"],
        explanation: "Le droit de grève a été arraché de haute lutte par les travailleurs tout au long du XIXe siècle.",
        hint: "Faire la g..."
      },
      {
        id: 'tour-hist13',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle loi agraire en Grande-Bretagne a clôturé les communaux, forçant les petits paysans ruinés à partir vers les usines urbaines ?",
        answer: "Loi des clôtures",
        acceptableKeywords: ["Enclosure acts", "Enclosures", "Loi des clotures", "Lois des enclos", "Clôtures"],
        explanation: "Le mouvement des enclosures a concentré les terres agricoles et libéré une abondante main-d'œuvre bon marché.",
        hint: "Enclosure acts en anglais."
      },
      {
        id: 'tour-hist14',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle nouvelle source d'énergie et moteur ont caractérisé la seconde révolution industrielle à partir de 1870 aux côtés du pétrole ?",
        answer: "L'électricité",
        acceptableKeywords: ["Electricite", "L electricite", "L'électricité"],
        explanation: "L'électricité (dynamo de Gramme, ampoule d'Edison) a transformé l'éclairage et les usines modernes.",
        hint: "Courant électrique."
      },
      {
        id: 'tour-hist15',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Comment appelle-t-on le mode d'organisation du travail en usine caractérisé par la parcellisation des tâches et le travail à la chaîne ?",
        answer: "Le taylorisme",
        acceptableKeywords: ["Taylorisme", "Fordisme", "Organisation scientifique du travail", "OST"],
        explanation: "Théorisé par Frederick Winslow Taylor (OST), il a été perfectionné par Henry Ford avec la chaîne d'assemblage.",
        hint: "Nom dérivé de l'ingénieur Taylor."
      },
      {
        id: 'tour-hist16',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel grand philosophe allemand a publié 'Le Capital' et le 'Manifeste du Parti communiste' avec Friedrich Engels ?",
        answer: "Karl Marx",
        acceptableKeywords: ["Karl Marx", "Marx"],
        explanation: "Karl Marx a théorisé la lutte des classes comme moteur principal de l'Histoire humaine.",
        hint: "Père du marxisme."
      },
      {
        id: 'tour-hist17',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel moyen de communication instantanée utilisant le courant électrique et un code de points et traits a été inventé par Samuel Morse ?",
        answer: "Le télégraphe",
        acceptableKeywords: ["Telegraphe", "Le telegraphe", "Telegraphe electrique", "Télégraphe"],
        explanation: "Le télégraphe électrique a permis de relier les continents et bourses mondiales en quelques secondes.",
        hint: "Télégraphe Morse."
      },
      {
        id: 'tour-hist18',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Comment nomme-t-on la transformation des ateliers artisanaux dispersés en gigantesques usines concentrant des centaines d'ouvriers sous une discipline sévère ?",
        answer: "Le factory system",
        acceptableKeywords: ["Factory system", "Le factory system", "Systeme de l usine", "Usine concentree"],
        explanation: "Le Factory System remplace l'artisanat domestique (putting-out system) par la manufacture mécanisée.",
        hint: "Factory s..."
      },
      {
        id: 'tour-hist19',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quelle catégorie vulnérable de la population était massivement employée pour un salaire dérisoire dans les filatures et galeries étroites de mines au XIXe siècle ?",
        answer: "Les enfants",
        acceptableKeywords: ["Enfants", "Les enfants", "Travail des enfants"],
        explanation: "Le travail précoce des enfants dès l'âge de 6 ans a fait l'objet de dénonciations conduisant aux premières lois sociales.",
        hint: "Les très jeunes travailleurs."
      },
      {
        id: 'tour-hist20',
        subject: 'Histoire',
        lesson: 'La révolution industrielle',
        question: "Quel canal interocéanique inauguré en 1869 a raccourci de façon spectaculaire la route maritime entre l'Europe et l'Asie ?",
        answer: "Le canal de Suez",
        acceptableKeywords: ["Canal de Suez", "Suez"],
        explanation: "Percé par Ferdinand de Lesseps en Égypte, le canal de Suez a accéléré le commerce impérial mondial.",
        hint: "Canal de S..."
      }
    ]
  },

  // 7. Géographie (Niveau 1ère L2) : Les inégalités de développement
  {
    id: 'geo-inegalites',
    subject: 'Géographie',
    lesson: 'Les inégalités de développement (niveau 1ère L2)',
    icon: '🌍',
    color: 'from-emerald-600 to-teal-700',
    description: 'Indicateurs de développement, disparités Nord/Sud, IDH et pays émergents',
    questions: [
      {
        id: 'tour-geo1',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel indicateur composite créé par le PNUD évalue le niveau de développement humain sur une échelle variant de 0 à 1 ?",
        answer: "L'IDH",
        acceptableKeywords: ["IDH", "Indicateur de developpement humain", "L IDH", "Indice de développement humain"],
        explanation: "L'IDH combine l'espérance de vie, le niveau d'instruction et le RNB par habitant.",
        hint: "Sigle en 3 lettres : I-D-H."
      },
      {
        id: 'tour-geo2',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quelle agence de l'Organisation des Nations Unies calcule et publie chaque année le Rapport Mondial sur le Développement Humain ?",
        answer: "Le PNUD",
        acceptableKeywords: ["PNUD", "Programme des Nations Unies pour le developpement", "UNDP"],
        explanation: "Programme des Nations Unies pour le Développement (créé en 1965).",
        hint: "Sigle : P-N-U-D."
      },
      {
        id: 'tour-geo3',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quelles sont les trois composantes fondamentales utilisées pour calculer l'Indicateur de Développement Humain (IDH) ?",
        answer: "Santé, éducation et niveau de vie",
        acceptableKeywords: ["Sante, education, revenu", "Sante, education et niveau de vie", "Esperance de vie, instruction, revenu"],
        explanation: "Mesuré par la longévité/santé (espérance de vie), le savoir (durée de scolarisation) et le revenu décent (RNB/hab).",
        hint: "Santé / longévité, Savoir / éducation, Richesse / niveau de vie."
      },
      {
        id: 'tour-geo4',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quelle ligne imaginaire géopolitique sépare traditionnellement sur les cartes les pays développés et les pays en développement ?",
        answer: "La limite Nord-Sud",
        acceptableKeywords: ["Limite Nord-Sud", "Ligne Brandt", "Frontiere Nord Sud", "Nord Sud"],
        explanation: "Tracée par Willy Brandt en 1980, cette ligne symbolique intègre l'Australie et la Nouvelle-Zélande au Nord.",
        hint: "Ligne Brandt ou limite N...-S..."
      },
      {
        id: 'tour-geo5',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel coefficient compris entre 0 (égalité parfaite) et 1 (inégalité totale) mesure la distribution des revenus dans une population ?",
        answer: "Le coefficient de Gini",
        acceptableKeywords: ["Coefficient de Gini", "Indice de Gini", "Gini"],
        explanation: "Plus l'indice de Gini est proche de 1, plus les inégalités de revenus au sein du pays sont fortes.",
        hint: "Nom du statisticien italien Corrado Gini."
      },
      {
        id: 'tour-geo6',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quelle catégorie regroupe les pays les plus défavorisés de la planète caractérisés par une pauvreté endémique et un faible IDH ?",
        answer: "Les PMA",
        acceptableKeywords: ["PMA", "Pays les moins avances", "Pays les moins avancés"],
        explanation: "PMA = Pays les Moins Avancés (terme officiel de l'ONU).",
        hint: "Sigle : P-M-A."
      },
      {
        id: 'tour-geo7',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel acronyme désigne les grands pays émergents : Brésil, Russie, Inde, Chine et Afrique du Sud ?",
        answer: "BRICS",
        acceptableKeywords: ["BRICS", "Les BRICS", "BRIC"],
        explanation: "Ces pays émergents bousculent la hiérarchie économique mondiale traditionnelle.",
        hint: "Cinq lettres formant BRICS."
      },
      {
        id: 'tour-geo8',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel seuil de revenus journalier par personne est fixé par la Banque Mondiale pour définir la pauvreté extrême absolue ?",
        answer: "2,15 dollars par jour",
        acceptableKeywords: ["2,15 dollars", "2.15 dollars", "2 dollars", "2 dollars par jour"],
        explanation: "Fixé à 2,15 $ par jour en parité de pouvoir d'achat (mise à jour 2022).",
        hint: "Environ 2 dollars par jour."
      },
      {
        id: 'tour-geo9',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quelle phase de transition caractérisée par une baisse rapide de la mortalité puis de la natalité explique l'explosion démographique des pays du Sud ?",
        answer: "La transition démographique",
        acceptableKeywords: ["Transition demographique", "La transition demographique", "Transition démographique"],
        explanation: "Le décalage temporel entre la baisse de la mortalité et celle de la natalité engendre un accroissement naturel très élevé.",
        hint: "Transition d..."
      },
      {
        id: 'tour-geo10',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment appelle-t-on le phénomène d'émigration des élites diplômées, médecins et ingénieurs des pays en développement vers les pays riches ?",
        answer: "La fuite des cerveaux",
        acceptableKeywords: ["Fuite des cerveaux", "Brain drain", "Exode des competences"],
        explanation: "Aussi appelée 'brain drain', cette fuite prive les pays du Sud de compétences cruciales.",
        hint: "Brain drain en français."
      },
      {
        id: 'tour-geo11',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment nomme-t-on les quartiers d'habitat spontané, précaires et insalubres dans les métropoles des pays du Sud (ex: favelas au Brésil) ?",
        answer: "Les bidonvilles",
        acceptableKeywords: ["Bidonvilles", "Bidonville", "Favelas", "Habitats spontanes"],
        explanation: "Les bidonvilles concentrent les populations exclues des infrastructures urbaines de base (eau, assainissement).",
        hint: "Bidon..."
      },
      {
        id: 'tour-geo12',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quelle organisation internationale siégeant à Genève régule le commerce mondial et arbitre les différends commerciaux entre États ?",
        answer: "L'OMC",
        acceptableKeywords: ["OMC", "Organisation mondiale du commerce", "L OMC"],
        explanation: "L'Organisation Mondiale du Commerce a succédé au GATT en 1995.",
        hint: "Sigle : O-M-C."
      },
      {
        id: 'tour-geo13',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment appelle-t-on l'aide financière et technique accordée par les pays développés aux pays du Sud pour soutenir leur développement économique ?",
        answer: "L'Aide Publique au Développement",
        acceptableKeywords: ["APD", "Aide publique au developpement", "Aide publique au développement"],
        explanation: "L'ONU recommande aux pays riches de consacrer 0,7% de leur RNB à l'APD.",
        hint: "Sigle usuel : APD."
      },
      {
        id: 'tour-geo14',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quelle région du monde compte la plus forte concentration de Pays les Moins Avancés (PMA) ?",
        answer: "L'Afrique subsaharienne",
        acceptableKeywords: ["Afrique subsaharienne", "Afrique", "L Afrique subsaharienne"],
        explanation: "Plus de 30 des 46 PMA recensés par l'ONU se situent en Afrique subsaharienne.",
        hint: "L'Afrique au sud du Sahara."
      },
      {
        id: 'tour-geo15',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel terme désigne les inégalités d'accès aux technologies de l'information, aux ordinateurs et à internet entre populations riches et pauvres ?",
        answer: "La fracture numérique",
        acceptableKeywords: ["Fracture numerique", "La fracture numerique", "Digital divide", "Fracture numérique"],
        explanation: "La fracture numérique renforce l'exclusion économique et éducative.",
        hint: "Fracture n..."
      },
      {
        id: 'tour-geo16',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel ratio de mortalité mesurant le nombre de décès d'enfants de moins d'un an pour 1 000 naissances vivantes est un indicateur clé de santé publique ?",
        answer: "Taux de mortalité infantile",
        acceptableKeywords: ["Mortalite infantile", "Taux de mortalite infantile", "TMI"],
        explanation: "Très faible dans les pays du Nord (< 4‰), il peut dépasser 60‰ dans certains PMA.",
        hint: "Mortalité des nourrissons."
      },
      {
        id: 'tour-geo17',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quel indicateur de l'ONU mesure les pertes de développement humain dues aux inégalités entre hommes et femmes ?",
        answer: "L'Indice d'inégalité de genre",
        acceptableKeywords: ["Indice d inegalite de genre", "IIG", "Inegalite de genre"],
        explanation: "L'IIG évalue la santé reproductive, l'autonomisation politique et la participation au marché du travail.",
        hint: "Sigle : IIG."
      },
      {
        id: 'tour-geo18',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment appelle-t-on les transferts financiers envoyés par les travailleurs émigrés restés à l'étranger vers leurs familles au pays d'origine ?",
        answer: "Les remises migratoires",
        acceptableKeywords: ["Remises migratoires", "Transferts de fonds", "Remises", "Envois de fonds"],
        explanation: "Ces transferts dépassent souvent l'aide publique au développement et soutiennent directement le pouvoir d'achat des familles.",
        hint: "Remises ou transferts de fonds des migrants."
      },
      {
        id: 'tour-geo19',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Comment nomme-t-on le phénomène d'intégration croissante des économies du monde entier par le commerce, les capitaux et les télécommunications ?",
        answer: "La mondialisation",
        acceptableKeywords: ["Mondialisation", "La mondialisation", "Globalisation"],
        explanation: "La mondialisation engendre à la fois des opportunités de croissance et une accentuation des inégalités spatiales.",
        hint: "Mondial..."
      },
      {
        id: 'tour-geo20',
        subject: 'Géographie',
        lesson: 'Les inégalités de développement',
        question: "Quels sont les 17 objectifs universels adoptés par l'ONU en 2015 à atteindre d'ici 2030 pour éliminer la pauvreté et protéger la planète ?",
        answer: "Les Objectifs de Développement Durable",
        acceptableKeywords: ["ODD", "Objectifs de developpement durable", "Les ODD", "Objectifs de Développement Durable"],
        explanation: "Les 17 ODD ont succédé aux Objectifs du Millénaire pour le Développement (OMD).",
        hint: "Sigle : O-D-D."
      }
    ]
  },

  // 8. Physique-Chimie (Niveau 1ère L2) : Solutions aqueuses, mouvements et énergies
  {
    id: 'pc-solutions',
    subject: 'Physique-Chimie',
    lesson: 'Solutions aqueuses, mouvements et énergies',
    icon: '⚡',
    color: 'from-cyan-500 to-blue-600',
    description: 'Concentration massique, pH, forces mécaniques et énergie cinétique',
    questions: [
      {
        id: 'tour-pc1',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Comment appelle-t-on le liquide (majoritaire) dans lequel on dissout un composé chimique pour former une solution aqueuse ?",
        answer: "Le solvant",
        acceptableKeywords: ["Solvant", "Le solvant", "L eau"],
        explanation: "Dans une solution aqueuse, le solvant est obligatoirement l'eau.",
        hint: "L'eau joue le rôle de s..."
      },
      {
        id: 'tour-pc2',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Comment appelle-t-on l'espèce chimique solide, liquide ou gazeuse dissoute dans le solvant ?",
        answer: "Le soluté",
        acceptableKeywords: ["Solute", "Le solute", "Soluté"],
        explanation: "Le soluté est l'espèce dispersée dans le solvant.",
        hint: "So-lu-té."
      },
      {
        id: 'tour-pc3',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quelle est la formule de la concentration massique Cm d'une solution en fonction de la masse m et du volume V ?",
        answer: "Cm = m / V",
        acceptableKeywords: ["m/V", "m / V", "mase sur volume", "m divisé par V"],
        explanation: "Cm = m / V (en g/L ou g·L⁻¹).",
        hint: "Masse m divisée par le volume V."
      },
      {
        id: 'tour-pc4',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Comment appelle-t-on l'opération consistant à ajouter de l'eau distillée à une solution concentrée pour diminuer sa concentration ?",
        answer: "La dilution",
        acceptableKeywords: ["Dilution", "La dilution"],
        explanation: "Lors d'une dilution, la quantité de matière et la masse de soluté se conservent : m0 = m1.",
        hint: "Di-lu-tion."
      },
      {
        id: 'tour-pc5',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quelle est la valeur du pH de l'eau pure à 25 °C marquant la neutralité chimique ?",
        answer: "7",
        acceptableKeywords: ["7", "Sept", "pH 7"],
        explanation: "À 25°C, un pH < 7 est acide, un pH = 7 est neutre, un pH > 7 est basique.",
        hint: "Chiffre 7."
      },
      {
        id: 'tour-pc6',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quelle est la formule de l'énergie cinétique Ec d'un objet de masse m animé d'une vitesse v ?",
        answer: "Ec = 1/2 m v²",
        acceptableKeywords: ["1/2 m v²", "1/2 mv2", "0.5 m v^2", "1/2 mv²"],
        explanation: "L'énergie cinétique dépend de la masse et du carré de la vitesse de l'objet.",
        hint: "Un demi de m fois v au carré."
      },
      {
        id: 'tour-pc7',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quelle est l'unité légale de l'énergie et du travail dans le Système International d'unités ?",
        answer: "Le Joule",
        acceptableKeywords: ["Joule", "Le joule", "J", "Joules"],
        explanation: "Symbole J, en hommage au physicien James Prescott Joule.",
        hint: "Commence par J."
      },
      {
        id: 'tour-pc8',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Comment qualifie-t-on le mouvement d'un mobile dont la trajectoire est une ligne droite et dont la vitesse reste rigoureusement constante ?",
        answer: "Mouvement rectiligne uniforme",
        acceptableKeywords: ["Rectiligne uniforme", "Mouvement rectiligne uniforme", "MRU"],
        explanation: "Rectiligne = ligne droite ; uniforme = vitesse constante au cours du temps.",
        hint: "MRU (Rectiligne Uniforme)."
      },
      {
        id: 'tour-pc9',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quelle est l'unité légale internationale de la force mesurée avec un dynamomètre ?",
        answer: "Le Newton",
        acceptableKeywords: ["Newton", "Le newton", "N", "Newtons"],
        explanation: "Symbole N, en l'honneur d'Isaac Newton.",
        hint: "Symbole N."
      },
      {
        id: 'tour-pc10',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quelle énergie possède un corps du seul fait de son altitude h au-dessus du sol dans le champ de pesanteur terrestre (Ep = m·g·h) ?",
        answer: "Énergie potentielle de pesanteur",
        acceptableKeywords: ["Energie potentielle", "Energie potentielle de pesanteur", "Énergie potentielle"],
        explanation: "Ep = m × g × h (en Joules).",
        hint: "Énergie potentielle."
      },
      {
        id: 'tour-pc11',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quelle est la somme Em de l'énergie cinétique et de l'énergie potentielle d'un système ?",
        answer: "Énergie mécanique",
        acceptableKeywords: ["Energie mecanique", "L energie mecanique", "Énergie mécanique", "Em"],
        explanation: "Em = Ec + Ep. En l'absence de frottements dissipatifs, l'énergie mécanique se conserve intégralement.",
        hint: "Énergie m..."
      },
      {
        id: 'tour-pc12',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quel instrument de verrerie jaugée de grande précision à col étroit et trait de jauge utilise-t-on pour préparer une solution par dissolution ou dilution ?",
        answer: "Fiole jaugée",
        acceptableKeywords: ["Fiole jaugee", "Une fiole jaugee", "Fiole jaugée"],
        explanation: "La fiole jaugée permet de mesurer un volume précis avec une très grande exactitude.",
        hint: "Fiole j..."
      },
      {
        id: 'tour-pc13',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Comment qualifie-t-on une solution dans laquelle le solvant ne peut plus dissoudre de soluté supplémentaire à une température donnée ?",
        answer: "Solution saturée",
        acceptableKeywords: ["Solution saturee", "Saturee", "Solution saturée"],
        explanation: "Au-delà de la solubilité maximale, un dépôt de solide non dissous se forme au fond du récipient.",
        hint: "Sa-tu-rée."
      },
      {
        id: 'tour-pc14',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quelle est la plage de valeurs d'un pH pour une solution dite acide à 25 °C ?",
        answer: "Inférieur à 7",
        acceptableKeywords: ["Inferieur a 7", "Moins de 7", "< 7", "Entre 0 et 7"],
        explanation: "Une solution est acide si son pH est strictement inférieur à 7.",
        hint: "Moins de 7."
      },
      {
        id: 'tour-pc15',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quelle est la plage de valeurs d'un pH pour une solution dite basique à 25 °C ?",
        answer: "Supérieur à 7",
        acceptableKeywords: ["Superieur a 7", "Plus de 7", "> 7", "Entre 7 et 14"],
        explanation: "Une solution est basique si son pH est strictement supérieur à 7.",
        hint: "Plus de 7."
      },
      {
        id: 'tour-pc16',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quelle formule relie la vitesse moyenne v, la distance parcourue d et la durée du parcours t ?",
        answer: "v = d / t",
        acceptableKeywords: ["v = d/t", "d/t", "d / t", "distance sur temps"],
        explanation: "v = d / t (en m/s ou km/h).",
        hint: "Distance divisée par le temps."
      },
      {
        id: 'tour-pc17',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quel ion est responsable de l'acidité d'une solution aqueuse ?",
        answer: "Ion hydrogène",
        acceptableKeywords: ["Ion hydrogene", "H+", "Ion oxonium", "H3O+", "Ion hydronium", "Ion hydrogène"],
        explanation: "L'ion H+ (ou hydronium H3O+) caractérise les solutions acides.",
        hint: "Ion H+."
      },
      {
        id: 'tour-pc18',
        subject: 'Physique-Chimie',
        lesson: 'Solutions aqueuses',
        question: "Quel ion hydroxyde de formule HO- est responsable du caractère basique d'une solution aqueuse ?",
        answer: "Ion hydroxyde",
        acceptableKeywords: ["Ion hydroxyde", "HO-", "OH-", "Hydroxyde"],
        explanation: "Dans une solution basique, la concentration en ions HO- est supérieure à celle en ions H+.",
        hint: "Formule HO- ou OH-."
      },
      {
        id: 'tour-pc19',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quelle force attractive exercée par la Terre sur tout corps massif est calculée par la formule P = m × g ?",
        answer: "Le poids",
        acceptableKeywords: ["Poids", "Le poids", "Force de pesanteur"],
        explanation: "Le poids est une force mesurée en newtons (N), différente de la masse mesurée en kilogrammes (kg).",
        hint: "P = m × g."
      },
      {
        id: 'tour-pc20',
        subject: 'Physique-Chimie',
        lesson: 'Mouvements et énergies',
        question: "Quel appareil de mesure gradué en newtons utilise l'allongement d'un ressort élastique pour mesurer l'intensité d'une force ?",
        answer: "Le dynamomètre",
        acceptableKeywords: ["Dynamometre", "Le dynamometre", "Dynamomètre"],
        explanation: "Le dynamomètre mesure la force en newtons (N) grâce à la loi de Hooke sur l'allongement du ressort.",
        hint: "Dynamo-mètre."
      }
    ]
  }
];

export function getTournamentQuestionsForSubject(subjectOrId: string, count = 20): QuizQuestion[] {
  const clean = (subjectOrId || '').toLowerCase().trim();
  const matched = TOURNAMENT_TOPICS.find(
    (t) =>
      t.id.toLowerCase() === clean ||
      t.subject.toLowerCase() === clean ||
      t.subject.toLowerCase().includes(clean) ||
      t.lesson.toLowerCase().includes(clean)
  );

  const pool = matched ? matched.questions : TOURNAMENT_TOPICS[0].questions;
  return pool.slice(0, count);
}
