import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    questionText: "Complétez les paroles de la Marseillaise \"Allons enfants de la patrie...\"",
    answers: [
      { id: 'a', text: "Le temps de la victoire est proche" },
      { id: 'b', text: "Le jour de gloire est arrivé" },
      { id: 'c', text: "L'heure de la liberté est venue" },
      { id: 'd', text: "Le moment de justice approche" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 2,
    questionText: "Dans le cadre d'un entretien d'embauche, que peut-on demander au candidat ?",
    answers: [
      { id: 'a', text: "Sa religion" },
      { id: 'b', text: "Son orientation sexuelle" },
      { id: 'c', text: "Sa situation familiale" },
      { id: 'd', text: "Ses compétences professionnelles" },
    ],
    correctAnswerId: 'd',
    category: 'I'
  },
  {
    id: 3,
    questionText: "Déclarer ses revenus aux services fiscaux est :",
    answers: [
      { id: 'a', text: "Facultatif" },
      { id: 'b', text: "Obligatoire" },
      { id: 'c', text: "Réservé aux hauts revenus" },
      { id: 'd', text: "Recommandé mais pas obligatoire" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 4,
    questionText: "En France, les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    answers: [
      { id: 'a', text: "Les impôts financent uniquement l'armée" },
      { id: 'b', text: "Les impôts financent les services publics comme l'éducation, la santé et la sécurité" },
      { id: 'c', text: "Les impôts servent uniquement à payer la dette publique" },
      { id: 'd', text: "Les impôts financent seulement les routes et les transports" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 5,
    questionText: "La liberté d'association est :",
    answers: [
      { id: 'a', text: "Interdite en France" },
      { id: 'b', text: "Réservée aux citoyens français uniquement" },
      { id: 'c', text: "Un droit garanti par la Constitution" },
      { id: 'd', text: "Autorisée seulement pour les partis politiques" },
    ],
    correctAnswerId: 'c',
    category: 'I'
  },
  {
    id: 6,
    questionText: "La liberté d'expression sur les réseaux sociaux en France est :",
    answers: [
      { id: 'a', text: "Totale et sans limites" },
      { id: 'b', text: "Interdite" },
      { id: 'c', text: "Encadrée par la loi avec certaines limites" },
      { id: 'd', text: "Réservée aux journalistes" },
    ],
    correctAnswerId: 'c',
    category: 'I'
  },
  {
    id: 7,
    questionText: "Lequel de ces prénoms évoque un symbole de la République ?",
    answers: [
      { id: 'a', text: "Marianne" },
      { id: 'b', text: "Catherine" },
      { id: 'c', text: "Sophie" },
      { id: 'd', text: "Jeanne" },
    ],
    correctAnswerId: 'a',
    category: 'I'
  },
  {
    id: 8,
    questionText: "Lequel de ces symboles représente la République française ?",
    answers: [
      { id: 'a', text: "Le drapeau tricolore bleu, blanc, rouge" },
      { id: 'b', text: "Le drapeau rouge et blanc" },
      { id: 'c', text: "Une fleur de lys" },
      { id: 'd', text: "Un aigle" },
    ],
    correctAnswerId: 'a',
    category: 'I'
  },
  {
    id: 9,
    questionText: "Où peut-on voir la devise de la République ?",
    answers: [
      { id: 'a', text: "Sur les bâtiments publics" },
      { id: 'b', text: "Seulement à Paris" },
      { id: 'c', text: "Dans les églises" },
      { id: 'd', text: "Sur les drapeaux étrangers" },
    ],
    correctAnswerId: 'a',
    category: 'I'
  },
  {
    id: 10,
    questionText: "Lesquels sont des symboles officiels de la République française ?",
    answers: [
      { id: 'a', text: "Le drapeau tricolore, la Marseillaise, Marianne et la devise Liberté, Égalité, Fraternité" },
      { id: 'b', text: "La Tour Eiffel et le coq gaulois" },
      { id: 'c', text: "Le baguette et le béret" },
      { id: 'd', text: "Le camembert et le vin" },
    ],
    correctAnswerId: 'a',
    category: 'I'
  },
  {
    id: 11,
    questionText: "Peut-on brûler publiquement un drapeau français ?",
    answers: [
      { id: 'a', text: "Oui, c'est un droit absolu" },
      { id: 'b', text: "Non, c'est interdit et puni par la loi" },
      { id: 'c', text: "Oui, mais seulement lors de manifestations" },
      { id: 'd', text: "Oui, si on a l'autorisation de la mairie" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 12,
    questionText: "Quand la sécurité sociale a-t-elle été établie en France ?",
    answers: [
      { id: 'a', text: "En 1789" },
      { id: 'b', text: "En 1905" },
      { id: 'c', text: "En 1945" },
      { id: 'd', text: "En 1958" },
    ],
    correctAnswerId: 'c',
    category: 'I'
  },
  {
    id: 13,
    questionText: "Que commémore la fête nationale ?",
    answers: [
      { id: 'a', text: "La prise de la Bastille et la fête de la Fédération" },
      { id: 'b', text: "L'armistice de 1918" },
      { id: 'c', text: "La libération de Paris" },
      { id: 'd', text: "La victoire de 1945" },
    ],
    correctAnswerId: 'a',
    category: 'I'
  },
  {
    id: 14,
    questionText: "Que porte Marianne sur la tête ?",
    answers: [
      { id: 'a', text: "Une couronne" },
      { id: 'b', text: "Un voile" },
      { id: 'c', text: "Un bonnet phrygien" },
      { id: 'd', text: "Un chapeau" },
    ],
    correctAnswerId: 'c',
    category: 'I'
  },
  {
    id: 15,
    questionText: "Que signifie le mot \"fraternité\" dans la devise française ?",
    answers: [
      { id: 'a', text: "L'obligation de payer des impôts" },
      { id: 'b', text: "La solidarité entre les citoyens" },
      { id: 'c', text: "Le respect de la religion" },
      { id: 'd', text: "L'obéissance aux lois" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 16,
    questionText: "Quel symbole de la République peut-on voir sur les maillots de l'équipe de France de football ?",
    answers: [
      { id: 'a', text: "Le drapeau tricolore" },
      { id: 'b', text: "Le coq" },
      { id: 'c', text: "Marianne" },
      { id: 'd', text: "La Tour Eiffel" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 17,
    questionText: "Quelle est la devise de la République française ?",
    answers: [
      { id: 'a', text: "Travail, Famille, Patrie" },
      { id: 'b', text: "Honneur et Patrie" },
      { id: 'c', text: "Liberté, Égalité, Fraternité" },
      { id: 'd', text: "Unité et Indivisibilité" },
    ],
    correctAnswerId: 'c',
    category: 'I'
  },
  {
    id: 18,
    questionText: "Qu'est-ce que la liberté d'association ?",
    answers: [
      { id: 'a', text: "Le droit de se réunir et de créer des associations" },
      { id: 'b', text: "L'obligation de rejoindre un syndicat" },
      { id: 'c', text: "L'interdiction de manifester" },
      { id: 'd', text: "Le droit de travailler sans contrat" },
    ],
    correctAnswerId: 'a',
    category: 'I'
  },
  {
    id: 19,
    questionText: "Qu'est-ce qu'une liberté ?",
    answers: [
      { id: 'a', text: "Le droit de faire tout ce que l'on veut sans limites" },
      { id: 'b', text: "Le droit de faire tout ce qui ne nuit pas à autrui" },
      { id: 'c', text: "L'obligation de suivre toutes les règles" },
      { id: 'd', text: "Le privilège réservé aux citoyens" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 20,
    questionText: "Selon la Constitution, la France est une République...",
    answers: [
      { id: 'a', text: "Royale et religieuse" },
      { id: 'b', text: "Indivisible, laïque, démocratique et sociale" },
      { id: 'c', text: "Fédérale et catholique" },
      { id: 'd', text: "Monarchique et parlementaire" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 21,
    questionText: "Sur quel document peut-on voir Marianne ?",
    answers: [
      { id: 'a', text: "Sur les timbres et les mairies" },
      { id: 'b', text: "Sur les passeports uniquement" },
      { id: 'c', text: "Sur les billets d'avion" },
      { id: 'd', text: "Sur les cartes bancaires" },
    ],
    correctAnswerId: 'a',
    category: 'I'
  },
  {
    id: 22,
    questionText: "Une des valeurs de la devise républicaine est l'Égalité. Qu'est-ce que cela signifie ?",
    answers: [
      { id: 'a', text: "Tout le monde doit avoir les mêmes revenus" },
      { id: 'b', text: "Tous les citoyens sont égaux devant la loi" },
      { id: 'c', text: "Les hommes et les femmes doivent avoir les mêmes emplois" },
      { id: 'd', text: "Chacun doit avoir la même opinion" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 23,
    questionText: "Une personne peut-elle changer librement de religion en France ?",
    answers: [
      { id: 'a', text: "Non, c'est interdit" },
      { id: 'b', text: "Oui, la liberté de conscience est garantie" },
      { id: 'c', text: "Oui, mais avec l'autorisation du préfet" },
      { id: 'd', text: "Non, sauf permission de la mairie" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 24,
    questionText: "Selon le principe de laïcité, que signifie la neutralité de l'État ?",
    answers: [
      { id: 'a', text: "L'État interdit toutes les religions" },
      { id: 'b', text: "L'État ne reconnaît ni ne finance aucun culte" },
      { id: 'c', text: "L'État favorise une religion" },
      { id: 'd', text: "L'État oblige tout le monde à être athée" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 25,
    questionText: "Que peut faire un usager du service public dans une mairie ?",
    answers: [
      { id: 'a', text: "Exiger un traitement privilégié" },
      { id: 'b', text: "Demander des informations et des services administratifs" },
      { id: 'c', text: "Refuser de payer les taxes" },
      { id: 'd', text: "Imposer ses convictions religieuses" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 26,
    questionText: "En France, il est possible pour l'État de financer :",
    answers: [
      { id: 'a', text: "Des églises" },
      { id: 'b', text: "Des mosquées" },
      { id: 'c', text: "Des synagogues" },
      { id: 'd', text: "Des services publics comme l'éducation et la santé" },
    ],
    correctAnswerId: 'd',
    category: 'I'
  },
  {
    id: 27,
    questionText: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    answers: [
      { id: 'a', text: "En 1789" },
      { id: 'b', text: "En 1881" },
      { id: 'c', text: "En 1905" },
      { id: 'd', text: "En 1946" },
    ],
    correctAnswerId: 'c',
    category: 'I'
  },
  {
    id: 28,
    questionText: "Que dit la loi de 1905 ?",
    answers: [
      { id: 'a', text: "Elle instaure le droit de vote des femmes" },
      { id: 'b', text: "Elle sépare les Églises et l'État" },
      { id: 'c', text: "Elle abolit l'esclavage" },
      { id: 'd', text: "Elle crée la sécurité sociale" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 29,
    questionText: "Que garantit le principe de laïcité ?",
    answers: [
      { id: 'a', text: "L'interdiction de toutes les religions" },
      { id: 'b', text: "La liberté de conscience et de culte" },
      { id: 'c', text: "L'obligation d'être catholique" },
      { id: 'd', text: "Le financement des religions par l'État" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 30,
    questionText: "Quel jour célèbre-t-on officiellement la laïcité en France ?",
    answers: [
      { id: 'a', text: "Le 14 juillet" },
      { id: 'b', text: "Le 1er mai" },
      { id: 'c', text: "Le 9 décembre" },
      { id: 'd', text: "Le 11 novembre" },
    ],
    correctAnswerId: 'c',
    category: 'I'
  },
  {
    id: 31,
    questionText: "Quel symbole religieux peut être porté dans une école publique dans le respect de la laïcité ?",
    answers: [
      { id: 'a', text: "Un signe religieux discret sous les vêtements" },
      { id: 'b', text: "Un voile couvrant le visage" },
      { id: 'c', text: "Une grande croix sur les vêtements" },
      { id: 'd', text: "Aucun symbole religieux n'est autorisé" },
    ],
    correctAnswerId: 'a',
    category: 'I'
  },
  {
    id: 32,
    questionText: "Quel terme désigne précisément la haine ou les préjugés contre les Juifs ?",
    answers: [
      { id: 'a', text: "Le racisme" },
      { id: 'b', text: "L'antisémitisme" },
      { id: 'c', text: "La xénophobie" },
      { id: 'd', text: "L'islamophobie" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 33,
    questionText: "Quel texte est considéré comme le texte fondateur de la laïcité ?",
    answers: [
      { id: 'a', text: "La Déclaration des droits de l'homme de 1789" },
      { id: 'b', text: "La loi de 1905" },
      { id: 'c', text: "La Constitution de 1958" },
      { id: 'd', text: "Le Code civil" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 34,
    questionText: "Quelle institution française doit rester neutre en matière de religion ?",
    answers: [
      { id: 'a', text: "Les entreprises privées" },
      { id: 'b', text: "Les services publics" },
      { id: 'c', text: "Les clubs sportifs" },
      { id: 'd', text: "Les associations culturelles" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 35,
    questionText: "Qu'est-ce que la laïcité ?",
    answers: [
      { id: 'a', text: "L'interdiction des religions" },
      { id: 'b', text: "La séparation des Églises et de l'État et la neutralité de l'État en matière religieuse" },
      { id: 'c', text: "L'obligation d'être athée" },
      { id: 'd', text: "La promotion d'une religion officielle" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 36,
    questionText: "À l'école, la charte de la laïcité permet de :",
    answers: [
      { id: 'a', text: "Interdire toute expression religieuse" },
      { id: 'b', text: "Garantir la neutralité de l'enseignement public" },
      { id: 'c', text: "Obliger les élèves à être athées" },
      { id: 'd', text: "Favoriser une religion" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 37,
    questionText: "Qui doit respecter et veiller à la neutralité religieuse dans les services publics ?",
    answers: [
      { id: 'a', text: "Seulement les enseignants" },
      { id: 'b', text: "Tous les agents du service public" },
      { id: 'c', text: "Uniquement les policiers" },
      { id: 'd', text: "Seulement les médecins" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 38,
    questionText: "Une personne déclare ne croire en aucun dieu. On peut dire :",
    answers: [
      { id: 'a', text: "Qu'elle est catholique" },
      { id: 'b', text: "Qu'elle est athée" },
      { id: 'c', text: "Qu'elle est musulmane" },
      { id: 'd', text: "Qu'elle est protestante" },
    ],
    correctAnswerId: 'b',
    category: 'I'
  },
  {
    id: 39,
    questionText: "Comment est désigné le Premier ministre ?",
    answers: [
      { id: 'a', text: "Il est élu par les citoyens" },
      { id: 'b', text: "Il est nommé par le Président de la République" },
      { id: 'c', text: "Il est désigné par l'Assemblée nationale" },
      { id: 'd', text: "Il est choisi par le Sénat" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 40,
    questionText: "Qui peut se présenter aux élections présidentielles ?",
    answers: [
      { id: 'a', text: "Tout citoyen français majeur avec 500 parrainages d'élus" },
      { id: 'b', text: "Seulement les députés" },
      { id: 'c', text: "Uniquement les ministres" },
      { id: 'd', text: "Seulement les maires" },
    ],
    correctAnswerId: 'a',
    category: 'II'
  },
  {
    id: 41,
    questionText: "À qui appartient la souveraineté nationale ?",
    answers: [
      { id: 'a', text: "Au Président de la République" },
      { id: 'b', text: "Au gouvernement" },
      { id: 'c', text: "Au peuple" },
      { id: 'd', text: "Aux députés" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 42,
    questionText: "Qui est élu lors des élections municipales ?",
    answers: [
      { id: 'a', text: "Le Président de la République" },
      { id: 'b', text: "Les députés" },
      { id: 'c', text: "Les conseillers municipaux" },
      { id: 'd', text: "Les sénateurs" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 43,
    questionText: "L'inscription sur les listes électorales est :",
    answers: [
      { id: 'a', text: "Automatique" },
      { id: 'b', text: "Facultative" },
      { id: 'c', text: "Obligatoire pour voter" },
      { id: 'd', text: "Réservée aux propriétaires" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 44,
    questionText: "Quelle condition est nécessaire pour voter aux élections présidentielles ?",
    answers: [
      { id: 'a', text: "Avoir 21 ans" },
      { id: 'b', text: "Avoir 18 ans et être inscrit sur les listes électorales" },
      { id: 'c', text: "Avoir 16 ans" },
      { id: 'd', text: "Être propriétaire" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 45,
    questionText: "Quelle condition faut-il remplir pour être candidat aux élections municipales ?",
    answers: [
      { id: 'a', text: "Avoir 25 ans" },
      { id: 'b', text: "Être citoyen français ou européen et être inscrit sur les listes électorales" },
      { id: 'c', text: "Être propriétaire dans la commune" },
      { id: 'd', text: "Avoir un diplôme universitaire" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 46,
    questionText: "Parmi ces autorités, laquelle est élue ?",
    answers: [
      { id: 'a', text: "Le préfet" },
      { id: 'b', text: "Le maire" },
      { id: 'c', text: "Le commissaire de police" },
      { id: 'd', text: "Le directeur d'hôpital" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 47,
    questionText: "Quelles sont les fonctions du maire ?",
    answers: [
      { id: 'a', text: "Voter les lois nationales" },
      { id: 'b', text: "Gérer la commune et représenter l'État dans la commune" },
      { id: 'c', text: "Juger les infractions" },
      { id: 'd', text: "Commander l'armée" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 48,
    questionText: "Une personne, n'ayant pas d'accès à internet, veut s'inscrire sur les listes électorales... Où peut-elle s'inscrire ?",
    answers: [
      { id: 'a', text: "À la mairie" },
      { id: 'b', text: "À la poste" },
      { id: 'c', text: "Au commissariat" },
      { id: 'd', text: "À la banque" },
    ],
    correctAnswerId: 'a',
    category: 'II'
  },
  {
    id: 49,
    questionText: "À quel âge peut-on devenir électeur ?",
    answers: [
      { id: 'a', text: "À 16 ans" },
      { id: 'b', text: "À 18 ans" },
      { id: 'c', text: "À 21 ans" },
      { id: 'd', text: "À 25 ans" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 50,
    questionText: "En France, est-ce obligatoire de voter ?",
    answers: [
      { id: 'a', text: "Oui, c'est obligatoire" },
      { id: 'b', text: "Non, c'est un droit mais pas une obligation" },
      { id: 'c', text: "Oui, sous peine d'amende" },
      { id: 'd', text: "Oui, mais seulement pour les élections présidentielles" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 51,
    questionText: "A-t-on le droit de ne pas respecter une loi ?",
    answers: [
      { id: 'a', text: "Oui, si on n'est pas d'accord" },
      { id: 'b', text: "Non, les lois s'imposent à tous" },
      { id: 'c', text: "Oui, si la majorité est d'accord" },
      { id: 'd', text: "Non, sauf autorisation du préfet" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 52,
    questionText: "Comment sont désignés les députés ?",
    answers: [
      { id: 'a', text: "Ils sont nommés par le Président" },
      { id: 'b', text: "Ils sont élus au suffrage universel direct" },
      { id: 'c', text: "Ils sont désignés par les maires" },
      { id: 'd', text: "Ils sont choisis par le gouvernement" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 53,
    questionText: "Qui vote les lois ?",
    answers: [
      { id: 'a', text: "Le Président de la République" },
      { id: 'b', text: "Le gouvernement" },
      { id: 'c', text: "Le Parlement (Assemblée nationale et Sénat)" },
      { id: 'd', text: "Les préfets" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 54,
    questionText: "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    answers: [
      { id: 'a', text: "Le pouvoir royal, militaire et religieux" },
      { id: 'b', text: "Le pouvoir législatif, exécutif et judiciaire" },
      { id: 'c', text: "Le pouvoir national, régional et local" },
      { id: 'd', text: "Le pouvoir économique, social et culturel" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 55,
    questionText: "Qu'est-ce que l'État de droit ?",
    answers: [
      { id: 'a', text: "Un État où le Président décide de tout" },
      { id: 'b', text: "Un État où la loi s'applique à tous, y compris aux gouvernants" },
      { id: 'c', text: "Un État sans lois" },
      { id: 'd', text: "Un État gouverné par l'armée" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 56,
    questionText: "Quelles sont les durées du mandat du conseil municipal et du maire ?",
    answers: [
      { id: 'a', text: "4 ans" },
      { id: 'b', text: "5 ans" },
      { id: 'c', text: "6 ans" },
      { id: 'd', text: "7 ans" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 57,
    questionText: "Qui est élu lors des élections législatives ?",
    answers: [
      { id: 'a', text: "Le Président de la République" },
      { id: 'b', text: "Les députés" },
      { id: 'c', text: "Les maires" },
      { id: 'd', text: "Les conseillers régionaux" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 58,
    questionText: "Quelle est la durée du mandat du Président de la République française ?",
    answers: [
      { id: 'a', text: "4 ans" },
      { id: 'b', text: "5 ans" },
      { id: 'c', text: "7 ans" },
      { id: 'd', text: "10 ans" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 59,
    questionText: "Quelle est la durée du mandat des députés ?",
    answers: [
      { id: 'a', text: "4 ans" },
      { id: 'b', text: "5 ans" },
      { id: 'c', text: "6 ans" },
      { id: 'd', text: "7 ans" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 60,
    questionText: "Quelle est la durée du mandat des sénateurs ?",
    answers: [
      { id: 'a', text: "4 ans" },
      { id: 'b', text: "5 ans" },
      { id: 'c', text: "6 ans" },
      { id: 'd', text: "9 ans" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 61,
    questionText: "Qui dirige l'action du gouvernement ?",
    answers: [
      { id: 'a', text: "Le Président de la République" },
      { id: 'b', text: "Le Premier ministre" },
      { id: 'c', text: "Le ministre de l'Intérieur" },
      { id: 'd', text: "Le Président de l'Assemblée nationale" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 62,
    questionText: "En France, est-ce possible d'adhérer à un parti politique ?",
    answers: [
      { id: 'a', text: "Non, c'est interdit" },
      { id: 'b', text: "Oui, c'est un droit garanti" },
      { id: 'c', text: "Oui, mais seulement pour les Français de naissance" },
      { id: 'd', text: "Non, sauf autorisation préfectorale" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 63,
    questionText: "Qui sanctionne l'auteur d'un vol ?",
    answers: [
      { id: 'a', text: "La police" },
      { id: 'b', text: "Le maire" },
      { id: 'c', text: "Le juge" },
      { id: 'd', text: "Le préfet" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 64,
    questionText: "Qui gère les collèges publics ?",
    answers: [
      { id: 'a', text: "Les communes" },
      { id: 'b', text: "Les départements" },
      { id: 'c', text: "Les régions" },
      { id: 'd', text: "L'État" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 65,
    questionText: "Qui gère les écoles primaires et maternelles publiques ?",
    answers: [
      { id: 'a', text: "Les communes" },
      { id: 'b', text: "Les départements" },
      { id: 'c', text: "Les régions" },
      { id: 'd', text: "L'État directement" },
    ],
    correctAnswerId: 'a',
    category: 'II'
  },
  {
    id: 66,
    questionText: "Comment sont désignés les maires ?",
    answers: [
      { id: 'a', text: "Ils sont nommés par le préfet" },
      { id: 'b', text: "Ils sont élus par le conseil municipal" },
      { id: 'c', text: "Ils sont élus directement par les citoyens" },
      { id: 'd', text: "Ils sont désignés par le Président" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 67,
    questionText: "Quelle collectivité territoriale est responsable des transports régionaux ?",
    answers: [
      { id: 'a', text: "Les communes" },
      { id: 'b', text: "Les départements" },
      { id: 'c', text: "Les régions" },
      { id: 'd', text: "L'État" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 68,
    questionText: "Quelle est l'une des voies possibles pour modifier la Constitution ?",
    answers: [
      { id: 'a', text: "Un décret présidentiel" },
      { id: 'b', text: "Un référendum" },
      { id: 'c', text: "Une ordonnance" },
      { id: 'd', text: "Un arrêté municipal" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 69,
    questionText: "Qui assure l'intérim du président de la République en cas de décès ?",
    answers: [
      { id: 'a', text: "Le Premier ministre" },
      { id: 'b', text: "Le Président du Sénat" },
      { id: 'c', text: "Le Président de l'Assemblée nationale" },
      { id: 'd', text: "Le ministre de l'Intérieur" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 70,
    questionText: "Quel est le rôle du Conseil constitutionnel ?",
    answers: [
      { id: 'a', text: "Voter les lois" },
      { id: 'b', text: "Vérifier la conformité des lois à la Constitution" },
      { id: 'c', text: "Juger les crimes" },
      { id: 'd', text: "Diriger le gouvernement" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 71,
    questionText: "Combien y a-t-il de départements en France ?",
    answers: [
      { id: 'a', text: "95" },
      { id: 'b', text: "101" },
      { id: 'c', text: "105" },
      { id: 'd', text: "110" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 72,
    questionText: "Comment est organisé le découpage administratif de la France ?",
    answers: [
      { id: 'a', text: "En provinces et duchés" },
      { id: 'b', text: "En communes, départements et régions" },
      { id: 'c', text: "En cantons uniquement" },
      { id: 'd', text: "En districts et arrondissements" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 73,
    questionText: "Qui représente l'État dans un département ?",
    answers: [
      { id: 'a', text: "Le maire" },
      { id: 'b', text: "Le président du conseil départemental" },
      { id: 'c', text: "Le préfet" },
      { id: 'd', text: "Le député" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 74,
    questionText: "Quel est le rôle du Président de la République ?",
    answers: [
      { id: 'a', text: "Voter les lois" },
      { id: 'b', text: "Chef de l'État et garant de la Constitution" },
      { id: 'c', text: "Juger les crimes" },
      { id: 'd', text: "Gérer les communes" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 75,
    questionText: "Quel est le rôle du Premier ministre ?",
    answers: [
      { id: 'a', text: "Représenter la France à l'étranger" },
      { id: 'b', text: "Diriger l'action du gouvernement" },
      { id: 'c', text: "Voter les lois" },
      { id: 'd', text: "Commander l'armée" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 76,
    questionText: "Quel est le rôle du Défenseur des droits ?",
    answers: [
      { id: 'a', text: "Commander la police" },
      { id: 'b', text: "Défendre les droits et libertés des citoyens face aux administrations" },
      { id: 'c', text: "Voter les lois" },
      { id: 'd', text: "Juger les criminels" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 77,
    questionText: "En quelle année la citoyenneté européenne a-t-elle été créée ?",
    answers: [
      { id: 'a', text: "En 1957" },
      { id: 'b', text: "En 1992" },
      { id: 'c', text: "En 2000" },
      { id: 'd', text: "En 2007" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 78,
    questionText: "Quel est le dernier État à avoir intégré l'Union Européenne en 2013 ?",
    answers: [
      { id: 'a', text: "La Bulgarie" },
      { id: 'b', text: "La Roumanie" },
      { id: 'c', text: "La Croatie" },
      { id: 'd', text: "La Slovénie" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 79,
    questionText: "Qui a composé l'hymne de l'Union européenne ?",
    answers: [
      { id: 'a', text: "Mozart" },
      { id: 'b', text: "Beethoven" },
      { id: 'c', text: "Bach" },
      { id: 'd', text: "Verdi" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 80,
    questionText: "Quand est célébrée la journée de l'Europe ?",
    answers: [
      { id: 'a', text: "Le 1er janvier" },
      { id: 'b', text: "Le 9 mai" },
      { id: 'c', text: "Le 14 juillet" },
      { id: 'd', text: "Le 25 décembre" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 81,
    questionText: "Où est le siège de la Banque centrale européenne ?",
    answers: [
      { id: 'a', text: "À Paris" },
      { id: 'b', text: "À Bruxelles" },
      { id: 'c', text: "À Francfort" },
      { id: 'd', text: "À Luxembourg" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 82,
    questionText: "Où est le siège de la Commission européenne ?",
    answers: [
      { id: 'a', text: "À Paris" },
      { id: 'b', text: "À Bruxelles" },
      { id: 'c', text: "À Strasbourg" },
      { id: 'd', text: "À Luxembourg" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 83,
    questionText: "Qui siège au Parlement européen ?",
    answers: [
      { id: 'a', text: "Les chefs d'État" },
      { id: 'b', text: "Les députés européens" },
      { id: 'c', text: "Les ministres" },
      { id: 'd', text: "Les préfets" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 84,
    questionText: "Les citoyens de l'Union européenne peuvent-ils voter aux élections locales dans un autre État de l'Union ?",
    answers: [
      { id: 'a', text: "Non, jamais" },
      { id: 'b', text: "Oui, aux élections municipales et européennes" },
      { id: 'c', text: "Oui, mais seulement aux élections nationales" },
      { id: 'd', text: "Non, sauf autorisation spéciale" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 85,
    questionText: "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?",
    answers: [
      { id: 'a', text: "25" },
      { id: 'b', text: "27" },
      { id: 'c', text: "28" },
      { id: 'd', text: "30" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 86,
    questionText: "En quelle année le traité de Maastricht a-t-il été signé ?",
    answers: [
      { id: 'a', text: "En 1957" },
      { id: 'b', text: "En 1986" },
      { id: 'c', text: "En 1992" },
      { id: 'd', text: "En 2000" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 87,
    questionText: "Quel traité concerne la construction de l'Union européenne ?",
    answers: [
      { id: 'a', text: "Le traité de Versailles" },
      { id: 'b', text: "Le traité de Rome et le traité de Maastricht" },
      { id: 'c', text: "Le traité de Paris de 1763" },
      { id: 'd', text: "Le traité de Tordesillas" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 88,
    questionText: "Quel État a quitté l'Union Européenne en 2020 ?",
    answers: [
      { id: 'a', text: "La Norvège" },
      { id: 'b', text: "La Suisse" },
      { id: 'c', text: "Le Royaume-Uni" },
      { id: 'd', text: "L'Islande" },
    ],
    correctAnswerId: 'c',
    category: 'II'
  },
  {
    id: 89,
    questionText: "Quelle est la devise de l'Union européenne ?",
    answers: [
      { id: 'a', text: "Liberté, Égalité, Fraternité" },
      { id: 'b', text: "Unie dans la diversité" },
      { id: 'c', text: "Paix et Prospérité" },
      { id: 'd', text: "Force et Honneur" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 90,
    questionText: "Quel est l'hymne de l'Union Européenne ?",
    answers: [
      { id: 'a', text: "La Marseillaise" },
      { id: 'b', text: "L'Ode à la joie de Beethoven" },
      { id: 'c', text: "God Save the King" },
      { id: 'd', text: "La Symphonie du Nouveau Monde" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 91,
    questionText: "De quoi est composé le drapeau européen ?",
    answers: [
      { id: 'a', text: "De 27 étoiles jaunes sur fond bleu" },
      { id: 'b', text: "De 12 étoiles jaunes sur fond bleu" },
      { id: 'c', text: "De 15 étoiles blanches sur fond rouge" },
      { id: 'd', text: "De 28 étoiles dorées sur fond vert" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 92,
    questionText: "Qui élit les députés européens ?",
    answers: [
      { id: 'a', text: "Les chefs d'État" },
      { id: 'b', text: "Les citoyens de l'Union européenne" },
      { id: 'c', text: "Les parlements nationaux" },
      { id: 'd', text: "La Commission européenne" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 93,
    questionText: "Où est le siège du Parlement européen ?",
    answers: [
      { id: 'a', text: "À Paris" },
      { id: 'b', text: "À Bruxelles et Strasbourg" },
      { id: 'c', text: "À Berlin" },
      { id: 'd', text: "À Rome" },
    ],
    correctAnswerId: 'b',
    category: 'II'
  },
  {
    id: 94,
    questionText: "À quoi sert le droit de grève ?",
    answers: [
      { id: 'a', text: "À ne pas travailler sans raison" },
      { id: 'b', text: "À défendre les intérêts professionnels des travailleurs" },
      { id: 'c', text: "À manifester contre le gouvernement" },
      { id: 'd', text: "À obtenir des congés supplémentaires" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 95,
    questionText: "Au nom de quoi l'État justifie-t-il la restriction des droits ?",
    answers: [
      { id: 'a', text: "De la tradition" },
      { id: 'b', text: "De l'ordre public et de la sécurité" },
      { id: 'c', text: "De la religion" },
      { id: 'd', text: "De l'économie" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 96,
    questionText: "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'Homme et du Citoyen de 1789 ?",
    answers: [
      { id: 'a', text: "Tous pour un, un pour tous" },
      { id: 'b', text: "Les hommes naissent et demeurent libres et égaux en droits" },
      { id: 'c', text: "La liberté ou la mort" },
      { id: 'd', text: "Un pour tous, tous pour un" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 97,
    questionText: "L'article 4 de la Déclaration... \"la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui\". Qu'est-ce que cela signifie ?",
    answers: [
      { id: 'a', text: "On peut tout faire" },
      { id: 'b', text: "La liberté de chacun s'arrête où commence celle des autres" },
      { id: 'c', text: "On ne peut rien faire" },
      { id: 'd', text: "Seul l'État décide de tout" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 98,
    questionText: "Que dit l'article 1er de la Constitution française ?",
    answers: [
      { id: 'a', text: "La France est une monarchie" },
      { id: 'b', text: "La France est une République indivisible, laïque, démocratique et sociale" },
      { id: 'c', text: "La France est un État fédéral" },
      { id: 'd', text: "La France est un empire" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 99,
    questionText: "Que garantit la liberté de la presse ?",
    answers: [
      { id: 'a', text: "Le droit de publier n'importe quoi" },
      { id: 'b', text: "Le droit d'informer librement dans le respect de la loi" },
      { id: 'c', text: "L'interdiction de critiquer le gouvernement" },
      { id: 'd', text: "Le monopole de l'État sur l'information" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 100,
    questionText: "Que permet la liberté de circulation ?",
    answers: [
      { id: 'a', text: "De conduire sans permis" },
      { id: 'b', text: "De se déplacer librement sur le territoire" },
      { id: 'c', text: "De traverser les frontières sans contrôle" },
      { id: 'd', text: "De voyager gratuitement" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 101,
    questionText: "Que signifie être citoyen d'un État ?",
    answers: [
      { id: 'a', text: "Être riche" },
      { id: 'b', text: "Avoir des droits et des devoirs dans cet État" },
      { id: 'c', text: "Être né dans cet État" },
      { id: 'd', text: "Payer beaucoup d'impôts" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 102,
    questionText: "Quels sont les droits fondamentaux ?",
    answers: [
      { id: 'a', text: "Le droit au luxe" },
      { id: 'b', text: "Le droit à la liberté, à l'égalité, à la sûreté et à la propriété" },
      { id: 'c', text: "Le droit de commander" },
      { id: 'd', text: "Le droit d'ignorer les lois" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 103,
    questionText: "Quel droit protège une personne contre une arrestation arbitraire ?",
    answers: [
      { id: 'a', text: "Le droit de propriété" },
      { id: 'b', text: "Le droit à la sûreté" },
      { id: 'c', text: "Le droit de vote" },
      { id: 'd', text: "Le droit d'association" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 104,
    questionText: "Quel est le texte fondateur établissant les droits et les devoirs de chaque citoyen ?",
    answers: [
      { id: 'a', text: "Le Code civil" },
      { id: 'b', text: "La Déclaration des droits de l'homme et du citoyen de 1789" },
      { id: 'c', text: "Le Code pénal" },
      { id: 'd', text: "Le règlement intérieur" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 105,
    questionText: "Quel texte affirme que tous les hommes naissent libres et égaux en droits ?",
    answers: [
      { id: 'a', text: "La Bible" },
      { id: 'b', text: "La Déclaration des droits de l'homme et du citoyen de 1789" },
      { id: 'c', text: "Le Code de la route" },
      { id: 'd', text: "Le règlement européen" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 106,
    questionText: "Quelle situation est une atteinte à la dignité humaine ?",
    answers: [
      { id: 'a', text: "Le travail" },
      { id: 'b', text: "L'esclavage et la torture" },
      { id: 'c', text: "L'éducation" },
      { id: 'd', text: "Le vote" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 107,
    questionText: "Qu'est-ce que la liberté d'expression ?",
    answers: [
      { id: 'a', text: "Le droit de dire tout ce qu'on veut sans limites" },
      { id: 'b', text: "Le droit d'exprimer ses opinions dans le respect de la loi" },
      { id: 'c', text: "L'obligation de tout dire" },
      { id: 'd', text: "L'interdiction de critiquer" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 108,
    questionText: "Suite à une interpellation par la police, il est possible de :",
    answers: [
      { id: 'a', text: "Refuser de donner son identité" },
      { id: 'b', text: "Contacter un avocat" },
      { id: 'c', text: "Fuir" },
      { id: 'd', text: "Agresser les policiers" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 109,
    questionText: "Tous les citoyens français ont-ils une religion ?",
    answers: [
      { id: 'a', text: "Oui, obligatoirement" },
      { id: 'b', text: "Non, chacun est libre de croire ou de ne pas croire" },
      { id: 'c', text: "Oui, tous sont catholiques" },
      { id: 'd', text: "Non, la religion est interdite" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 110,
    questionText: "À quel âge est la majorité numérique en France ?",
    answers: [
      { id: 'a', text: "À 13 ans" },
      { id: 'b', text: "À 15 ans" },
      { id: 'c', text: "À 16 ans" },
      { id: 'd', text: "À 18 ans" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 111,
    questionText: "Dans lequel de ces endroits est-on autorisé à fumer ?",
    answers: [
      { id: 'a', text: "Dans les restaurants" },
      { id: 'b', text: "Dans les écoles" },
      { id: 'c', text: "Chez soi" },
      { id: 'd', text: "Dans les transports en commun" },
    ],
    correctAnswerId: 'c',
    category: 'III'
  },
  {
    id: 112,
    questionText: "En France, la conduite sans permis d'une moto est :",
    answers: [
      { id: 'a', text: "Autorisée" },
      { id: 'b', text: "Interdite et sanctionnée" },
      { id: 'c', text: "Autorisée avec l'accord des parents" },
      { id: 'd', text: "Autorisée pour les petites motos" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 113,
    questionText: "En quoi consiste le devoir de solidarité ?",
    answers: [
      { id: 'a', text: "À payer des impôts uniquement" },
      { id: 'b', text: "À contribuer au bien commun et aider les personnes en difficulté" },
      { id: 'c', text: "À travailler gratuitement" },
      { id: 'd', text: "À donner tout son argent" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 114,
    questionText: "Est-ce légal d'être marié à plusieurs personnes en même temps ?",
    answers: [
      { id: 'a', text: "Oui, si les époux sont d'accord" },
      { id: 'b', text: "Non, la polygamie est interdite en France" },
      { id: 'c', text: "Oui, pour les hommes uniquement" },
      { id: 'd', text: "Oui, avec autorisation du maire" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 115,
    questionText: "Est-ce obligatoire de déclarer ses impôts chaque année en France ?",
    answers: [
      { id: 'a', text: "Non, c'est facultatif" },
      { id: 'b', text: "Oui, c'est une obligation" },
      { id: 'c', text: "Seulement si on gagne beaucoup" },
      { id: 'd', text: "Non, sauf demande de l'administration" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 116,
    questionText: "Est-il obligatoire de porter secours à une personne en danger ?",
    answers: [
      { id: 'a', text: "Non, ce n'est pas obligatoire" },
      { id: 'b', text: "Oui, c'est une obligation légale" },
      { id: 'c', text: "Seulement si on est médecin" },
      { id: 'd', text: "Non, sauf si on le souhaite" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 117,
    questionText: "Être juré d'assises est :",
    answers: [
      { id: 'a', text: "Un privilège réservé aux juges" },
      { id: 'b', text: "Un devoir citoyen" },
      { id: 'c', text: "Une punition" },
      { id: 'd', text: "Facultatif" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 118,
    questionText: "La vente d'alcool en France est interdite aux personnes de moins de :",
    answers: [
      { id: 'a', text: "16 ans" },
      { id: 'b', text: "18 ans" },
      { id: 'c', text: "21 ans" },
      { id: 'd', text: "25 ans" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 119,
    questionText: "Le non-respect du code de la route est :",
    answers: [
      { id: 'a', text: "Sans conséquence" },
      { id: 'b', text: "Puni par la loi" },
      { id: 'c', text: "Autorisé en cas d'urgence personnelle" },
      { id: 'd', text: "Toléré" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 120,
    questionText: "Lequel de ces crimes ou délits peut entrainer la privation des droits civils et politiques par un juge ?",
    answers: [
      { id: 'a', text: "Un retard de paiement" },
      { id: 'b', text: "Un crime grave comme le terrorisme" },
      { id: 'c', text: "Une contravention" },
      { id: 'd', text: "Un oubli administratif" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 121,
    questionText: "Pour obtenir une carte d'identité, il faut :",
    answers: [
      { id: 'a', text: "Être riche" },
      { id: 'b', text: "Faire une demande à la mairie avec des justificatifs" },
      { id: 'c', text: "Avoir un passeport" },
      { id: 'd', text: "Être marié" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 122,
    questionText: "Pour quel motif peut-on limiter la liberté d'expression ?",
    answers: [
      { id: 'a', text: "Pour protéger le gouvernement" },
      { id: 'b', text: "Pour prévenir la diffamation, l'incitation à la haine ou la violence" },
      { id: 'c', text: "Pour empêcher toute critique" },
      { id: 'd', text: "Pour favoriser une opinion" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 123,
    questionText: "Que doit faire un citoyen s'il est appelé à être juré dans un procès d'assises ?",
    answers: [
      { id: 'a', text: "Refuser" },
      { id: 'b', text: "Répondre à cette convocation, sauf motif légitime" },
      { id: 'c', text: "Ignorer la convocation" },
      { id: 'd', text: "Demander une rémunération élevée" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 124,
    questionText: "Quel est l'âge de la majorité civile en France ?",
    answers: [
      { id: 'a', text: "16 ans" },
      { id: 'b', text: "18 ans" },
      { id: 'c', text: "21 ans" },
      { id: 'd', text: "25 ans" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 125,
    questionText: "Quel est l'un des devoirs principaux d'un citoyen français ?",
    answers: [
      { id: 'a', text: "Voyager à l'étranger" },
      { id: 'b', text: "Respecter les lois et payer ses impôts" },
      { id: 'c', text: "Posséder une voiture" },
      { id: 'd', text: "Appartenir à un parti politique" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 126,
    questionText: "Quelle est l'infraction la plus grave ?",
    answers: [
      { id: 'a', text: "Une contravention" },
      { id: 'b', text: "Un délit" },
      { id: 'c', text: "Un crime" },
      { id: 'd', text: "Une incivilité" },
    ],
    correctAnswerId: 'c',
    category: 'III'
  },
  {
    id: 127,
    questionText: "Qu'est-ce que la citoyenneté numérique ?",
    answers: [
      { id: 'a', text: "L'interdiction d'utiliser internet" },
      { id: 'b', text: "L'ensemble des droits et devoirs des citoyens sur internet" },
      { id: 'c', text: "Un nouveau type de nationalité" },
      { id: 'd', text: "Un service administratif en ligne" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 128,
    questionText: "Qu'est-ce que le devoir de mémoire ?",
    answers: [
      { id: 'a', text: "Apprendre par cœur" },
      { id: 'b', text: "Se souvenir et transmettre l'histoire, notamment des tragédies" },
      { id: 'c', text: "Oublier le passé" },
      { id: 'd', text: "Célébrer uniquement les victoires" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 129,
    questionText: "Qui peut être appelé à faire partie d'un jury d'assises en France ?",
    answers: [
      { id: 'a', text: "Seulement les avocats" },
      { id: 'b', text: "Tout citoyen français inscrit sur les listes électorales" },
      { id: 'c', text: "Uniquement les juges" },
      { id: 'd', text: "Seulement les policiers" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 130,
    questionText: "Une personne est privée de ses droits civiques pendant 5 ans. Que ne peut-elle pas faire ?",
    answers: [
      { id: 'a', text: "Travailler" },
      { id: 'b', text: "Voter et être élu" },
      { id: 'c', text: "Se marier" },
      { id: 'd', text: "Voyager" },
    ],
    correctAnswerId: 'b',
    category: 'III'
  },
  {
    id: 131,
    questionText: "Parmi ces textes, lequel a été adopté sous Napoléon Ier ?",
    answers: [
      { id: 'a', text: "La Déclaration des droits de l'homme" },
      { id: 'b', text: "Le Code civil" },
      { id: 'c', text: "La Constitution de 1958" },
      { id: 'd', text: "La loi de 1905" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 132,
    questionText: "Qui a été président de la Ve République ?",
    answers: [
      { id: 'a', text: "Napoléon Bonaparte" },
      { id: 'b', text: "Charles de Gaulle" },
      { id: 'c', text: "Louis XVI" },
      { id: 'd', text: "Victor Hugo" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 133,
    questionText: "Quel est l'objectif des lois scolaires de la IIIe République ?",
    answers: [
      { id: 'a', text: "Interdire l'école" },
      { id: 'b', text: "Rendre l'école gratuite, laïque et obligatoire" },
      { id: 'c', text: "Réserver l'école aux riches" },
      { id: 'd', text: "Supprimer l'enseignement primaire" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 134,
    questionText: "Que signifie la date du 14 juillet pour les Français ?",
    answers: [
      { id: 'a', text: "La fin de la Seconde Guerre mondiale" },
      { id: 'b', text: "La prise de la Bastille et la fête de la Fédération" },
      { id: 'c', text: "L'armistice de 1918" },
      { id: 'd', text: "La création de l'Union européenne" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 135,
    questionText: "Pourquoi l'année 1958 est importante pour la France ?",
    answers: [
      { id: 'a', text: "C'est la fin de la monarchie" },
      { id: 'b', text: "C'est la création de la Ve République" },
      { id: 'c', text: "C'est l'abolition de l'esclavage" },
      { id: 'd', text: "C'est la libération de Paris" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 136,
    questionText: "Lequel de ces pays est un pays fondateur de l'Union Européenne ?",
    answers: [
      { id: 'a', text: "Le Royaume-Uni" },
      { id: 'b', text: "La France" },
      { id: 'c', text: "L'Espagne" },
      { id: 'd', text: "La Suède" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 137,
    questionText: "Simone Veil est une figure importante. Elle a notamment :",
    answers: [
      { id: 'a', text: "Dirigé l'armée française" },
      { id: 'b', text: "Fait adopter la loi sur l'IVG et été présidente du Parlement européen" },
      { id: 'c', text: "Écrit la Constitution de 1958" },
      { id: 'd', text: "Découvert la pénicilline" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 138,
    questionText: "Dans quelle région est située une partie des plages du débarquement ?",
    answers: [
      { id: 'a', text: "En Bretagne" },
      { id: 'b', text: "En Normandie" },
      { id: 'c', text: "En Provence" },
      { id: 'd', text: "En Corse" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 139,
    questionText: "Dans quelle ville les rois de France étaient-ils couronnés ?",
    answers: [
      { id: 'a', text: "Paris" },
      { id: 'b', text: "Versailles" },
      { id: 'c', text: "Reims" },
      { id: 'd', text: "Lyon" },
    ],
    correctAnswerId: 'c',
    category: 'IV'
  },
  {
    id: 140,
    questionText: "Quel roi de France a été guillotiné pendant la Révolution française ?",
    answers: [
      { id: 'a', text: "Louis XIV" },
      { id: 'b', text: "Louis XV" },
      { id: 'c', text: "Louis XVI" },
      { id: 'd', text: "Charles X" },
    ],
    correctAnswerId: 'c',
    category: 'IV'
  },
  {
    id: 141,
    questionText: "En quelle année a débuté la Révolution française ?",
    answers: [
      { id: 'a', text: "En 1789" },
      { id: 'b', text: "En 1792" },
      { id: 'c', text: "En 1804" },
      { id: 'd', text: "En 1815" },
    ],
    correctAnswerId: 'a',
    category: 'IV'
  },
  {
    id: 142,
    questionText: "En quelle année Napoléon Ier est-il devenu empereur ?",
    answers: [
      { id: 'a', text: "En 1789" },
      { id: 'b', text: "En 1799" },
      { id: 'c', text: "En 1804" },
      { id: 'd', text: "En 1815" },
    ],
    correctAnswerId: 'c',
    category: 'IV'
  },
  {
    id: 143,
    questionText: "Lequel de ces personnages a un lien avec la République française ?",
    answers: [
      { id: 'a', text: "Louis XIV" },
      { id: 'b', text: "Marianne" },
      { id: 'c', text: "Jeanne d'Arc" },
      { id: 'd', text: "Charlemagne" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 144,
    questionText: "De quand date l'appel à la résistance du général de Gaulle ?",
    answers: [
      { id: 'a', text: "Du 14 juillet 1789" },
      { id: 'b', text: "Du 18 juin 1940" },
      { id: 'c', text: "Du 8 mai 1945" },
      { id: 'd', text: "Du 11 novembre 1918" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 145,
    questionText: "Qu'est-ce que la Shoah ?",
    answers: [
      { id: 'a', text: "Une bataille de la Première Guerre mondiale" },
      { id: 'b', text: "Le génocide des Juifs pendant la Seconde Guerre mondiale" },
      { id: 'c', text: "Une révolution industrielle" },
      { id: 'd', text: "Un traité de paix" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 146,
    questionText: "Quel pays a été une colonie française ?",
    answers: [
      { id: 'a', text: "L'Espagne" },
      { id: 'b', text: "L'Algérie" },
      { id: 'c', text: "Le Brésil" },
      { id: 'd', text: "L'Australie" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 147,
    questionText: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
    answers: [
      { id: 'a', text: "Napoléon Ier" },
      { id: 'b', text: "Jules Ferry" },
      { id: 'c', text: "Victor Hugo" },
      { id: 'd', text: "Louis XIV" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 148,
    questionText: "Depuis quand les Français élisent-ils le président au suffrage universel direct ?",
    answers: [
      { id: 'a', text: "Depuis 1789" },
      { id: 'b', text: "Depuis 1848" },
      { id: 'c', text: "Depuis 1962" },
      { id: 'd', text: "Depuis 2000" },
    ],
    correctAnswerId: 'c',
    category: 'IV'
  },
  {
    id: 149,
    questionText: "En quelle année l'Union européenne a-t-elle été fondée ?",
    answers: [
      { id: 'a', text: "En 1945" },
      { id: 'b', text: "En 1957" },
      { id: 'c', text: "En 1992" },
      { id: 'd', text: "En 2000" },
    ],
    correctAnswerId: 'c',
    category: 'IV'
  },
  {
    id: 150,
    questionText: "Quand a eu lieu la Seconde guerre mondiale ?",
    answers: [
      { id: 'a', text: "1914-1918" },
      { id: 'b', text: "1939-1945" },
      { id: 'c', text: "1939-1950" },
      { id: 'd', text: "1941-1945" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 151,
    questionText: "Quand a eu lieu la Première guerre mondiale ?",
    answers: [
      { id: 'a', text: "1870-1871" },
      { id: 'b', text: "1914-1918" },
      { id: 'c', text: "1939-1945" },
      { id: 'd', text: "1899-1902" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 152,
    questionText: "Sous quel président a été abolie la peine de mort en France ?",
    answers: [
      { id: 'a', text: "Charles de Gaulle" },
      { id: 'b', text: "Georges Pompidou" },
      { id: 'c', text: "François Mitterrand" },
      { id: 'd', text: "Jacques Chirac" },
    ],
    correctAnswerId: 'c',
    category: 'IV'
  },
  {
    id: 153,
    questionText: "Que célèbre-t-on le 8 mai ?",
    answers: [
      { id: 'a', text: "La prise de la Bastille" },
      { id: 'b', text: "La victoire des Alliés en 1945" },
      { id: 'c', text: "L'armistice de 1918" },
      { id: 'd', text: "La libération de Paris" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 154,
    questionText: "Quelle est la première étape de la construction européenne en 1951 ?",
    answers: [
      { id: 'a', text: "La création de l'euro" },
      { id: 'b', text: "La CECA (Communauté européenne du charbon et de l'acier)" },
      { id: 'c', text: "Le traité de Maastricht" },
      { id: 'd', text: "L'espace Schengen" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 155,
    questionText: "Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?",
    answers: [
      { id: 'a', text: "Napoléon" },
      { id: 'b', text: "Jean Moulin" },
      { id: 'c', text: "Louis XVI" },
      { id: 'd', text: "Jules Ferry" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 156,
    questionText: "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    answers: [
      { id: 'a', text: "La fin de la Seconde Guerre mondiale" },
      { id: 'b', text: "L'armistice de 1918" },
      { id: 'c', text: "La prise de la Bastille" },
      { id: 'd', text: "La libération de Paris" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 157,
    questionText: "Depuis quand l'esclavage a-t-il été aboli en France ?",
    answers: [
      { id: 'a', text: "En 1789" },
      { id: 'b', text: "En 1794 puis définitivement en 1848" },
      { id: 'c', text: "En 1905" },
      { id: 'd', text: "En 1945" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 158,
    questionText: "Qui a aboli l'esclavage en France ?",
    answers: [
      { id: 'a', text: "Napoléon Bonaparte" },
      { id: 'b', text: "Victor Schœlcher" },
      { id: 'c', text: "Jules Ferry" },
      { id: 'd', text: "Charles de Gaulle" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 159,
    questionText: "Depuis quelle année l'école publique est-elle gratuite ?",
    answers: [
      { id: 'a', text: "En 1789" },
      { id: 'b', text: "En 1881" },
      { id: 'c', text: "En 1905" },
      { id: 'd', text: "En 1945" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 160,
    questionText: "En 1944, qu'est-ce qui a changé pour les femmes ?",
    answers: [
      { id: 'a', text: "Elles ont obtenu le droit de travailler" },
      { id: 'b', text: "Elles ont obtenu le droit de vote" },
      { id: 'c', text: "Elles ont obtenu le droit de se marier" },
      { id: 'd', text: "Elles ont obtenu le permis de conduire" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 161,
    questionText: "Quelle organisation a été créée en 1945 après la Seconde Guerre mondiale ?",
    answers: [
      { id: 'a', text: "L'Union européenne" },
      { id: 'b', text: "L'ONU (Organisation des Nations Unies)" },
      { id: 'c', text: "L'OTAN" },
      { id: 'd', text: "Le G7" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 162,
    questionText: "En quelle année l'euro est-il devenu la monnaie officielle de la France ?",
    answers: [
      { id: 'a', text: "En 1992" },
      { id: 'b', text: "En 1999" },
      { id: 'c', text: "En 2002" },
      { id: 'd', text: "En 2008" },
    ],
    correctAnswerId: 'c',
    category: 'IV'
  },
  {
    id: 163,
    questionText: "Lors de la seconde guerre mondiale, à quelle date la ville de Paris a-t-elle été libérée ?",
    answers: [
      { id: 'a', text: "Le 8 mai 1945" },
      { id: 'b', text: "Le 6 juin 1944" },
      { id: 'c', text: "Le 25 août 1944" },
      { id: 'd', text: "Le 11 novembre 1944" },
    ],
    correctAnswerId: 'c',
    category: 'IV'
  },
  {
    id: 164,
    questionText: "Quel était le principal port français impliqué dans la traite négrière au XVIIIe siècle ?",
    answers: [
      { id: 'a', text: "Marseille" },
      { id: 'b', text: "Nantes" },
      { id: 'c', text: "Calais" },
      { id: 'd', text: "Nice" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 165,
    questionText: "Quel célèbre philosophe des Lumières a dénoncé l'esclavage ?",
    answers: [
      { id: 'a', text: "Voltaire" },
      { id: 'b', text: "Napoléon" },
      { id: 'c', text: "Louis XIV" },
      { id: 'd', text: "Richelieu" },
    ],
    correctAnswerId: 'a',
    category: 'IV'
  },
  {
    id: 166,
    questionText: "Quelle œuvre a été écrite par Victor Hugo ?",
    answers: [
      { id: 'a', text: "Le Misanthrope" },
      { id: 'b', text: "Les Misérables" },
      { id: 'c', text: "Germinal" },
      { id: 'd', text: "Les Fleurs du mal" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 167,
    questionText: "Quel peintre est français ?",
    answers: [
      { id: 'a', text: "Picasso" },
      { id: 'b', text: "Van Gogh" },
      { id: 'c', text: "Claude Monet" },
      { id: 'd', text: "Rembrandt" },
    ],
    correctAnswerId: 'c',
    category: 'IV'
  },
  {
    id: 168,
    questionText: "Quel plat est une spécialité de la cuisine française ?",
    answers: [
      { id: 'a', text: "La paella" },
      { id: 'b', text: "Le coq au vin" },
      { id: 'c', text: "La pizza" },
      { id: 'd', text: "Le sushi" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 169,
    questionText: "Qui était Marie Curie ?",
    answers: [
      { id: 'a', text: "Une reine de France" },
      { id: 'b', text: "Une scientifique prix Nobel" },
      { id: 'c', text: "Une actrice" },
      { id: 'd', text: "Une chanteuse" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 170,
    questionText: "Qui a peint \"La liberté guidant le peuple\" ?",
    answers: [
      { id: 'a', text: "Claude Monet" },
      { id: 'b', text: "Eugène Delacroix" },
      { id: 'c', text: "Pierre-Auguste Renoir" },
      { id: 'd', text: "Édouard Manet" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 171,
    questionText: "Dans quel grand musée parisien est exposée la Joconde ?",
    answers: [
      { id: 'a', text: "Le musée d'Orsay" },
      { id: 'b', text: "Le Louvre" },
      { id: 'c', text: "Le centre Pompidou" },
      { id: 'd', text: "Le musée Rodin" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 172,
    questionText: "Quel château célèbre se trouve près de Paris et symbolise le pouvoir royal de Louis XIV ?",
    answers: [
      { id: 'a', text: "Le château de Chambord" },
      { id: 'b', text: "Le château de Versailles" },
      { id: 'c', text: "Le château de Chenonceau" },
      { id: 'd', text: "Le château de Fontainebleau" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 173,
    questionText: "Où peut-on voir des peintures préhistoriques en France ?",
    answers: [
      { id: 'a', text: "Au Louvre" },
      { id: 'b', text: "À la grotte de Lascaux" },
      { id: 'c', text: "Au musée d'Orsay" },
      { id: 'd', text: "À la Tour Eiffel" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 174,
    questionText: "Quel peintre célèbre a peint les Nymphéas ?",
    answers: [
      { id: 'a', text: "Pablo Picasso" },
      { id: 'b', text: "Claude Monet" },
      { id: 'c', text: "Vincent van Gogh" },
      { id: 'd', text: "Henri Matisse" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 175,
    questionText: "Pendant quelles journées peut-on visiter gratuitement des lieux culturels en France ?",
    answers: [
      { id: 'a', text: "Les dimanches" },
      { id: 'b', text: "Les Journées européennes du patrimoine" },
      { id: 'c', text: "Les jours fériés" },
      { id: 'd', text: "Pendant les vacances scolaires" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 176,
    questionText: "Que symbolise le 1er mai ?",
    answers: [
      { id: 'a', text: "La fête nationale" },
      { id: 'b', text: "La fête du Travail" },
      { id: 'c', text: "La fête de la musique" },
      { id: 'd', text: "La fête des mères" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 177,
    questionText: "Qui était Monsieur Rouget de Lisle ?",
    answers: [
      { id: 'a', text: "Un roi de France" },
      { id: 'b', text: "Le compositeur de la Marseillaise" },
      { id: 'c', text: "Un général" },
      { id: 'd', text: "Un peintre" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 178,
    questionText: "À quelle occasion a été construite la Tour Eiffel ?",
    answers: [
      { id: 'a', text: "Pour la Révolution française" },
      { id: 'b', text: "Pour l'Exposition universelle de 1889" },
      { id: 'c', text: "Pour célébrer la victoire de 1918" },
      { id: 'd', text: "Pour l'arrivée de Napoléon au pouvoir" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 179,
    questionText: "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    answers: [
      { id: 'a', text: "Les Pyrénées" },
      { id: 'b', text: "Les Alpes" },
      { id: 'c', text: "Les Vosges" },
      { id: 'd', text: "Le Jura" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 180,
    questionText: "Qui était Molière ?",
    answers: [
      { id: 'a', text: "Un roi de France" },
      { id: 'b', text: "Un dramaturge et acteur" },
      { id: 'c', text: "Un général" },
      { id: 'd', text: "Un explorateur" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 181,
    questionText: "Qui était Charles Baudelaire ?",
    answers: [
      { id: 'a', text: "Un musicien" },
      { id: 'b', text: "Un poète" },
      { id: 'c', text: "Un peintre" },
      { id: 'd', text: "Un architecte" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 182,
    questionText: "Qui était George Sand ?",
    answers: [
      { id: 'a', text: "Un philosophe" },
      { id: 'b', text: "Une écrivaine" },
      { id: 'c', text: "Une reine" },
      { id: 'd', text: "Une chanteuse" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 183,
    questionText: "Qui était Simone de Beauvoir ?",
    answers: [
      { id: 'a', text: "Une actrice" },
      { id: 'b', text: "Une philosophe et écrivaine féministe" },
      { id: 'c', text: "Une reine" },
      { id: 'd', text: "Une scientifique" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 184,
    questionText: "Qui était Albert Camus ?",
    answers: [
      { id: 'a', text: "Un roi" },
      { id: 'b', text: "Un écrivain et philosophe prix Nobel" },
      { id: 'c', text: "Un général" },
      { id: 'd', text: "Un architecte" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 185,
    questionText: "Qui était Marguerite Yourcenar ?",
    answers: [
      { id: 'a', text: "Une chanteuse" },
      { id: 'b', text: "Une écrivaine, première femme élue à l'Académie française" },
      { id: 'c', text: "Une actrice" },
      { id: 'd', text: "Une danseuse" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 186,
    questionText: "Qui était Paul Cézanne ?",
    answers: [
      { id: 'a', text: "Un écrivain" },
      { id: 'b', text: "Un peintre" },
      { id: 'c', text: "Un sculpteur" },
      { id: 'd', text: "Un musicien" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 187,
    questionText: "Qui était Auguste Rodin ?",
    answers: [
      { id: 'a', text: "Un peintre" },
      { id: 'b', text: "Un sculpteur" },
      { id: 'c', text: "Un écrivain" },
      { id: 'd', text: "Un architecte" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 188,
    questionText: "Qui était Auguste Renoir ?",
    answers: [
      { id: 'a', text: "Un sculpteur" },
      { id: 'b', text: "Un peintre impressionniste" },
      { id: 'c', text: "Un écrivain" },
      { id: 'd', text: "Un musicien" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 189,
    questionText: "Quel monument historique se trouve sur une île en Normandie ?",
    answers: [
      { id: 'a', text: "La Tour Eiffel" },
      { id: 'b', text: "Le Mont-Saint-Michel" },
      { id: 'c', text: "Le château de Versailles" },
      { id: 'd', text: "Le Louvre" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 190,
    questionText: "Quelle ville française fait partie des 10 plus grandes métropoles du pays ?",
    answers: [
      { id: 'a', text: "Annecy" },
      { id: 'b', text: "Lyon" },
      { id: 'c', text: "Colmar" },
      { id: 'd', text: "Biarritz" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 191,
    questionText: "Quelle île fait partie des Antilles françaises ?",
    answers: [
      { id: 'a', text: "La Corse" },
      { id: 'b', text: "La Martinique" },
      { id: 'c', text: "La Réunion" },
      { id: 'd', text: "Belle-Île" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 192,
    questionText: "Quelle île est française ?",
    answers: [
      { id: 'a', text: "La Sicile" },
      { id: 'b', text: "La Corse" },
      { id: 'c', text: "La Crète" },
      { id: 'd', text: "Malte" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 193,
    questionText: "Quelle est la plus haute montagne de France ?",
    answers: [
      { id: 'a', text: "Le mont Blanc" },
      { id: 'b', text: "Le mont Ventoux" },
      { id: 'c', text: "Le pic du Midi" },
      { id: 'd', text: "Le Puy de Dôme" },
    ],
    correctAnswerId: 'a',
    category: 'IV'
  },
  {
    id: 194,
    questionText: "Quelle île française est située dans l'océan indien ?",
    answers: [
      { id: 'a', text: "La Martinique" },
      { id: 'b', text: "La Réunion" },
      { id: 'c', text: "La Corse" },
      { id: 'd', text: "La Guadeloupe" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 195,
    questionText: "Quel département français a une frontière avec le Brésil ?",
    answers: [
      { id: 'a', text: "La Martinique" },
      { id: 'b', text: "La Guyane" },
      { id: 'c', text: "La Réunion" },
      { id: 'd', text: "La Guadeloupe" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 196,
    questionText: "De quelle ville française décolle la fusée Ariane ?",
    answers: [
      { id: 'a', text: "De Toulouse" },
      { id: 'b', text: "De Kourou en Guyane" },
      { id: 'c', text: "De Bordeaux" },
      { id: 'd', text: "De Nice" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 197,
    questionText: "Quelle mer ou océan borde la France métropolitaine ?",
    answers: [
      { id: 'a', text: "L'océan Indien" },
      { id: 'b', text: "La Méditerranée et l'océan Atlantique" },
      { id: 'c', text: "La mer Baltique" },
      { id: 'd', text: "L'océan Pacifique" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 198,
    questionText: "Quelle mer se situe entre la France et l'Angleterre ?",
    answers: [
      { id: 'a', text: "La mer Méditerranée" },
      { id: 'b', text: "La Manche" },
      { id: 'c', text: "La mer du Nord" },
      { id: 'd', text: "La mer Baltique" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 199,
    questionText: "Quelle île est un département d'outre-mer français ?",
    answers: [
      { id: 'a', text: "La Sicile" },
      { id: 'b', text: "La Guadeloupe" },
      { id: 'c', text: "Les Canaries" },
      { id: 'd', text: "Les Baléares" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 200,
    questionText: "Qu'est-ce que la France d'outre-mer ?",
    answers: [
      { id: 'a', text: "Les anciennes colonies" },
      { id: 'b', text: "Les territoires français situés hors de l'Europe" },
      { id: 'c', text: "Les pays francophones" },
      { id: 'd', text: "Les ambassades françaises" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 201,
    questionText: "Quelle est la population approximative de la France en 2025 ?",
    answers: [
      { id: 'a', text: "50 millions" },
      { id: 'b', text: "68 millions" },
      { id: 'c', text: "80 millions" },
      { id: 'd', text: "100 millions" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 202,
    questionText: "Quel est le principal port maritime de France ?",
    answers: [
      { id: 'a', text: "Calais" },
      { id: 'b', text: "Marseille" },
      { id: 'c', text: "Le Havre" },
      { id: 'd', text: "Brest" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 203,
    questionText: "Combien y a-t-il de régions en France métropolitaine ?",
    answers: [
      { id: 'a', text: "12" },
      { id: 'b', text: "13" },
      { id: 'c', text: "22" },
      { id: 'd', text: "27" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 204,
    questionText: "Quelle chaîne de montagnes est située entre la France et l'Espagne ?",
    answers: [
      { id: 'a', text: "Les Alpes" },
      { id: 'b', text: "Les Pyrénées" },
      { id: 'c', text: "Les Vosges" },
      { id: 'd', text: "Le Massif central" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 205,
    questionText: "Quelle île française se trouve au sud-est du continent africain ?",
    answers: [
      { id: 'a', text: "La Martinique" },
      { id: 'b', text: "Madagascar (ancienne colonie, maintenant indépendante) / La Réunion" },
      { id: 'c', text: "La Corse" },
      { id: 'd', text: "Mayotte" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 206,
    questionText: "Quel est le chef-lieu de la région Auvergne-Rhône-Alpes ?",
    answers: [
      { id: 'a', text: "Marseille" },
      { id: 'b', text: "Lyon" },
      { id: 'c', text: "Toulouse" },
      { id: 'd', text: "Bordeaux" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 207,
    questionText: "Quel est le chef-lieu de la région Bretagne ?",
    answers: [
      { id: 'a', text: "Nantes" },
      { id: 'b', text: "Rennes" },
      { id: 'c', text: "Brest" },
      { id: 'd', text: "Quimper" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 208,
    questionText: "Quel est le chef-lieu de la région Provence-Alpes-Côte d'Azur ?",
    answers: [
      { id: 'a', text: "Nice" },
      { id: 'b', text: "Marseille" },
      { id: 'c', text: "Toulon" },
      { id: 'd', text: "Avignon" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 209,
    questionText: "Quel est le 101ème département français depuis 2011 ?",
    answers: [
      { id: 'a', text: "La Corse-du-Sud" },
      { id: 'b', text: "Mayotte" },
      { id: 'c', text: "La Réunion" },
      { id: 'd', text: "La Guyane" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 210,
    questionText: "Quelle région française est réputée pour ses stations de ski ?",
    answers: [
      { id: 'a', text: "La Bretagne" },
      { id: 'b', text: "Les Alpes / Auvergne-Rhône-Alpes" },
      { id: 'c', text: "La Normandie" },
      { id: 'd', text: "L'Aquitaine" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 211,
    questionText: "Quel fleuve traverse Paris ?",
    answers: [
      { id: 'a', text: "La Loire" },
      { id: 'b', text: "La Seine" },
      { id: 'c', text: "Le Rhône" },
      { id: 'd', text: "La Garonne" },
    ],
    correctAnswerId: 'b',
    category: 'IV'
  },
  {
    id: 212,
    questionText: "Où faut-il déclarer la naissance d'un enfant ?",
    answers: [
      { id: 'a', text: "Au commissariat" },
      { id: 'b', text: "À la mairie" },
      { id: 'c', text: "À l'hôpital uniquement" },
      { id: 'd', text: "À la préfecture" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 213,
    questionText: "Quelle action peut réaliser le locataire d'un logement sans l'autorisation du propriétaire ?",
    answers: [
      { id: 'a', text: "Changer les murs porteurs" },
      { id: 'b', text: "Repeindre l'intérieur" },
      { id: 'c', text: "Louer le logement à quelqu'un d'autre" },
      { id: 'd', text: "Démolir une cloison" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 214,
    questionText: "Quel mariage est reconnu légalement ?",
    answers: [
      { id: 'a', text: "Le mariage religieux uniquement" },
      { id: 'b', text: "Le mariage civil célébré à la mairie" },
      { id: 'c', text: "Le mariage traditionnel uniquement" },
      { id: 'd', text: "Toute cérémonie de mariage" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 215,
    questionText: "Le stationnement sur une place réservée aux personnes handicapées :",
    answers: [
      { id: 'a', text: "Est autorisé pour quelques minutes" },
      { id: 'b', text: "Est interdit et sanctionné" },
      { id: 'c', text: "Est gratuit pour tous" },
      { id: 'd', text: "Est autorisé le dimanche" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 216,
    questionText: "Si une machine à laver est cassée, il est possible de :",
    answers: [
      { id: 'a', text: "La jeter dans la rue" },
      { id: 'b', text: "La faire réparer ou la déposer dans un point de collecte" },
      { id: 'c', text: "La brûler" },
      { id: 'd', text: "L'abandonner n'importe où" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 217,
    questionText: "Dans quel cas faut-il déclarer son enfant au service d'état civil ?",
    answers: [
      { id: 'a', text: "Seulement s'il est malade" },
      { id: 'b', text: "À chaque naissance" },
      { id: 'c', text: "Seulement pour le premier enfant" },
      { id: 'd', text: "Ce n'est pas obligatoire" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 218,
    questionText: "Quand faut-il déclarer son enfant au service d'état civil ?",
    answers: [
      { id: 'a', text: "Dans l'année qui suit" },
      { id: 'b', text: "Dans les 5 jours suivant la naissance" },
      { id: 'c', text: "Quand on le souhaite" },
      { id: 'd', text: "Avant la naissance" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 219,
    questionText: "Quel numéro d'urgence permet d'appeler la police ?",
    answers: [
      { id: 'a', text: "15" },
      { id: 'b', text: "17" },
      { id: 'c', text: "18" },
      { id: 'd', text: "112" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 220,
    questionText: "Quel numéro d'urgence permet d'appeler le SAMU ?",
    answers: [
      { id: 'a', text: "15" },
      { id: 'b', text: "17" },
      { id: 'c', text: "18" },
      { id: 'd', text: "112" },
    ],
    correctAnswerId: 'a',
    category: 'V'
  },
  {
    id: 221,
    questionText: "Auprès de quelle institution les parents peuvent inscrire leurs enfants à l'école publique ?",
    answers: [
      { id: 'a', text: "À la préfecture" },
      { id: 'b', text: "À la mairie" },
      { id: 'c', text: "Au commissariat" },
      { id: 'd', text: "À la poste" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 222,
    questionText: "En cas de divorce, qui exerce l'autorité parentale ?",
    answers: [
      { id: 'a', text: "Uniquement le père" },
      { id: 'b', text: "Les deux parents sauf décision contraire du juge" },
      { id: 'c', text: "Uniquement la mère" },
      { id: 'd', text: "Les grands-parents" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 223,
    questionText: "Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?",
    answers: [
      { id: 'a', text: "L'aide au logement" },
      { id: 'b', text: "L'aide juridictionnelle" },
      { id: 'c', text: "Le RSA" },
      { id: 'd', text: "Les allocations familiales" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 224,
    questionText: "Qui peut demander le divorce de personnes mariées ?",
    answers: [
      { id: 'a', text: "Seulement le mari" },
      { id: 'b', text: "L'un ou l'autre des époux" },
      { id: 'c', text: "Seulement les parents" },
      { id: 'd', text: "Le maire" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 225,
    questionText: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    answers: [
      { id: 'a', text: "La mairie" },
      { id: 'b', text: "La Sécurité sociale / l'Assurance maladie" },
      { id: 'c', text: "La préfecture" },
      { id: 'd', text: "La banque" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 226,
    questionText: "Travailler sans être déclaré est :",
    answers: [
      { id: 'a', text: "Autorisé" },
      { id: 'b', text: "Interdit et puni par la loi" },
      { id: 'c', text: "Toléré" },
      { id: 'd', text: "Recommandé" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 227,
    questionText: "Qu'est-ce que le SMIC ?",
    answers: [
      { id: 'a', text: "Un syndicat" },
      { id: 'b', text: "Le salaire minimum légal" },
      { id: 'c', text: "Une assurance" },
      { id: 'd', text: "Un type de contrat" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 228,
    questionText: "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    answers: [
      { id: 'a', text: "Acheter une voiture" },
      { id: 'b', text: "S'inscrire à Pôle emploi ou consulter des offres d'emploi" },
      { id: 'c', text: "Déménager" },
      { id: 'd', text: "Obtenir un diplôme universitaire" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 229,
    questionText: "Quelle est la durée légale du temps de travail par semaine ?",
    answers: [
      { id: 'a', text: "30 heures" },
      { id: 'b', text: "35 heures" },
      { id: 'c', text: "40 heures" },
      { id: 'd', text: "45 heures" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 230,
    questionText: "Qui peut demander un congé parental d'éducation ?",
    answers: [
      { id: 'a', text: "Seulement la mère" },
      { id: 'b', text: "Le père ou la mère" },
      { id: 'c', text: "Seulement le père" },
      { id: 'd', text: "Uniquement les grands-parents" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 231,
    questionText: "Quels sont les textes qui définissent les règles au travail ?",
    answers: [
      { id: 'a', text: "La Bible" },
      { id: 'b', text: "Le Code du travail et les conventions collectives" },
      { id: 'c', text: "Le règlement de l'immeuble" },
      { id: 'd', text: "Le code de la route" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 232,
    questionText: "Quelles sont les affaires traitées par le conseil de prud'hommes ?",
    answers: [
      { id: 'a', text: "Les divorces" },
      { id: 'b', text: "Les conflits entre employeurs et salariés" },
      { id: 'c', text: "Les accidents de la route" },
      { id: 'd', text: "Les vols" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 233,
    questionText: "Qui a le droit de se syndiquer ?",
    answers: [
      { id: 'a', text: "Seulement les fonctionnaires" },
      { id: 'b', text: "Tous les travailleurs" },
      { id: 'c', text: "Seulement les ouvriers" },
      { id: 'd', text: "Uniquement les cadres" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 234,
    questionText: "Est-il possible de licencier une femme enceinte ?",
    answers: [
      { id: 'a', text: "Oui, librement" },
      { id: 'b', text: "Non, sauf exceptions très limitées" },
      { id: 'c', text: "Oui, avec l'accord du médecin" },
      { id: 'd', text: "Oui, si l'employeur le souhaite" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 235,
    questionText: "L'instruction des enfants est obligatoire de quel âge à quel âge ?",
    answers: [
      { id: 'a', text: "De 6 ans à 14 ans" },
      { id: 'b', text: "De 3 ans à 16 ans" },
      { id: 'c', text: "De 6 ans à 16 ans" },
      { id: 'd', text: "De 3 ans à 18 ans" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 236,
    questionText: "Depuis le 1er juillet 2021, quelle est la durée du congé paternité ?",
    answers: [
      { id: 'a', text: "11 jours" },
      { id: 'b', text: "25 jours (28 jours pour naissances multiples)" },
      { id: 'c', text: "14 jours" },
      { id: 'd', text: "30 jours" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 237,
    questionText: "Est-ce possible de punir physiquement ses enfants ?",
    answers: [
      { id: 'a', text: "Oui, c'est un droit des parents" },
      { id: 'b', text: "Non, les violences éducatives ordinaires sont interdites" },
      { id: 'c', text: "Oui, si c'est pour les éduquer" },
      { id: 'd', text: "Oui, avec modération" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 238,
    questionText: "Qu'est-ce que la contraception ?",
    answers: [
      { id: 'a', text: "Une maladie" },
      { id: 'b', text: "L'ensemble des méthodes pour éviter une grossesse" },
      { id: 'c', text: "Un traitement médical obligatoire" },
      { id: 'd', text: "Une opération chirurgicale" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 239,
    questionText: "L'avortement (IVG) en France est :",
    answers: [
      { id: 'a', text: "Interdit" },
      { id: 'b', text: "Autorisé et remboursé par la Sécurité sociale" },
      { id: 'c', text: "Autorisé mais non remboursé" },
      { id: 'd', text: "Autorisé seulement pour les femmes mariées" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 240,
    questionText: "Qu'est-ce que la carte Vitale ?",
    answers: [
      { id: 'a', text: "Une carte bancaire" },
      { id: 'b', text: "La carte d'assuré social pour les remboursements de santé" },
      { id: 'c', text: "Une carte d'identité" },
      { id: 'd', text: "Un permis de conduire" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 241,
    questionText: "Qu'est-ce qu'une mutuelle santé ?",
    answers: [
      { id: 'a', text: "Un hôpital public" },
      { id: 'b', text: "Une assurance complémentaire santé" },
      { id: 'c', text: "Un service de la mairie" },
      { id: 'd', text: "Un type de carte bancaire" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 242,
    questionText: "Qu'est-ce que le tiers payant ?",
    answers: [
      { id: 'a', text: "Un troisième locataire" },
      { id: 'b', text: "Un système permettant de ne pas avancer les frais médicaux" },
      { id: 'c', text: "Une taxe supplémentaire" },
      { id: 'd', text: "Un type de contrat de travail" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 243,
    questionText: "Une femme peut-elle créer une entreprise en France ?",
    answers: [
      { id: 'a', text: "Non, c'est interdit" },
      { id: 'b', text: "Oui, avec les mêmes droits que les hommes" },
      { id: 'c', text: "Oui, mais avec autorisation du mari" },
      { id: 'd', text: "Non, sauf si elle est veuve" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 244,
    questionText: "Un étranger peut-il créer une entreprise en France ?",
    answers: [
      { id: 'a', text: "Non, jamais" },
      { id: 'b', text: "Oui, sous certaines conditions légales" },
      { id: 'c', text: "Oui, sans aucune condition" },
      { id: 'd', text: "Non, sauf s'il est européen" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 245,
    questionText: "En cas d'absence non justifiée d'un enfant à l'école, que risquent les parents ?",
    answers: [
      { id: 'a', text: "Rien du tout" },
      { id: 'b', text: "Des sanctions pouvant aller jusqu'à une amende ou une suspension des allocations familiales" },
      { id: 'c', text: "La prison immédiate" },
      { id: 'd', text: "L'expulsion du pays" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 246,
    questionText: "Qu'est-ce que la Journée Défense et Citoyenneté (JDC) ?",
    answers: [
      { id: 'a', text: "Un jour férié" },
      { id: 'b', text: "Une journée obligatoire pour les jeunes de 16 à 25 ans" },
      { id: 'c', text: "Un examen scolaire" },
      { id: 'd', text: "Une fête militaire" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  },
  {
    id: 247,
    questionText: "L'attestation de participation à la Journée Défense et Citoyenneté (JDC) est-elle nécessaire ?",
    answers: [
      { id: 'a', text: "Non, c'est facultatif" },
      { id: 'b', text: "Oui, notamment pour passer le permis de conduire et les examens officiels" },
      { id: 'c', text: "Seulement pour les militaires" },
      { id: 'd', text: "Uniquement pour les hommes" },
    ],
    correctAnswerId: 'b',
    category: 'V'
  }
];
