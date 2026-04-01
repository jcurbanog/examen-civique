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
      category: 'I',
      explication: "La Marseillaise commence par « Allons enfants de la Patrie, le jour de gloire est arrivé ! ». C'est l'hymne national français, composé en 1792 par Rouget de Lisle. 💡 Astuce : pensez à la gloire du combat révolutionnaire, une notion centrale dans cet hymne."
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
      category: 'I',
      explication: "En France, le droit du travail interdit de poser des questions sur la vie privée du candidat (religion, orientation sexuelle, situation familiale) car cela constituerait une discrimination. Seules les questions en lien direct avec le poste et les compétences professionnelles sont autorisées. 💡 Astuce : tout ce qui est personnel et sans lien avec le travail est interdit."
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
      category: 'I',
      explication: "La déclaration de revenus est une obligation légale pour toute personne domiciliée fiscalement en France, quel que soit le niveau de revenus. C'est un devoir civique qui permet à l'État de calculer l'impôt sur le revenu et de financer les services publics. 💡 Astuce : en France, droits et devoirs vont ensemble. Déclarer ses revenus est un devoir de chaque résident."
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
      category: 'I',
      explication: "Les impôts collectés par l'État servent à financer l'ensemble des services publics : l'éducation nationale, le système de santé, la police et la justice, les infrastructures, etc. Ils sont la base du modèle républicain fondé sur la solidarité collective. 💡 Astuce : pensez à tout ce que vous utilisez chaque jour qui est gratuit ou peu coûteux — école, hôpital, police — tout ça est financé par les impôts."
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
      category: 'I',
      explication: "La liberté d'association est un droit fondamental reconnu en France, consacré par la loi du 1er juillet 1901 et protégé par la Constitution. Elle permet à toute personne de créer ou rejoindre librement une association. 💡 Astuce : la loi 1901 est tellement connue qu'on appelle encore aujourd'hui les associations « associations loi 1901 »."
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
      category: 'I',
      explication: "La liberté d'expression est garantie en France mais elle n'est pas absolue. La loi interdit notamment les discours haineux, les appels à la violence, la diffamation et la provocation à la discrimination. Ces limites s'appliquent aussi sur les réseaux sociaux. 💡 Astuce : en France, aucune liberté n'est sans limite. Elle s'arrête toujours là où elle nuit à autrui ou à l'ordre public."
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
      category: 'I',
      explication: "Marianne est l'allégorie de la République française. Elle représente la liberté et la raison, et incarne les valeurs républicaines depuis la Révolution française. Son buste est présent dans toutes les mairies de France. 💡 Astuce : Marianne = République française. Elle porte toujours un bonnet phrygien, symbole de liberté."
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
      category: 'I',
      explication: "Le drapeau tricolore bleu, blanc, rouge est le drapeau national de la France depuis la Révolution française. Il est l'un des symboles officiels de la République aux côtés de la Marseillaise, de Marianne et de la devise. 💡 Astuce : la fleur de lys est un symbole de la royauté (pas de la République), l'aigle est associé à l'Empire napoléonien."
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
      category: 'I',
      explication: "La devise « Liberté, Égalité, Fraternité » est inscrite sur les frontons des bâtiments publics dans toute la France : mairies, tribunaux, préfectures, écoles, etc. C'est une obligation républicaine. 💡 Astuce : la devise est visible sur tous les bâtiments de l'État, partout en France, pas seulement à Paris."
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
      category: 'I',
      explication: "La Constitution française définit quatre symboles officiels de la République : le drapeau tricolore, la Marseillaise (hymne national), Marianne (allégorie de la République) et la devise « Liberté, Égalité, Fraternité ». La Tour Eiffel ou le coq sont des symboles culturels, non constitutionnels. 💡 Astuce : retenez les 4 symboles officiels = drapeau + hymne + Marianne + devise."
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
      category: 'I',
      explication: "Brûler ou dégrader publiquement le drapeau français est un délit pénal en France, puni d'une amende et potentiellement d'une peine d'emprisonnement. La loi protège les symboles de la République contre tout acte d'outrage public. 💡 Astuce : la liberté d'expression a des limites. Outrager les symboles nationaux est une infraction pénale."
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
      category: 'I',
      explication: "La Sécurité sociale a été créée par les ordonnances des 4 et 19 octobre 1945, sous le gouvernement provisoire du général de Gaulle, à la Libération. Elle est née de la volonté du Conseil national de la Résistance de garantir une protection sociale à tous les citoyens. 💡 Astuce : 1945 = fin de la Seconde Guerre mondiale = reconstruction de la France = naissance de la Sécu."
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
      category: 'I',
      explication: "Le 14 juillet commémore deux événements : la prise de la Bastille le 14 juillet 1789, symbole du soulèvement populaire contre l'Ancien Régime, et la Fête de la Fédération le 14 juillet 1790, qui célébrait l'unité nationale. C'est depuis 1880 la fête nationale française. 💡 Astuce : deux dates, un seul 14 juillet. La Bastille (1789) + la Fédération (1790) = la fête nationale."
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
      category: 'I',
      explication: "Marianne est traditionnellement représentée avec un bonnet phrygien, un couvre-chef originaire d'Antiquité qui est devenu un symbole universel de liberté et d'émancipation lors de la Révolution française. 💡 Astuce : le bonnet phrygien = liberté. C'est le même bonnet que portaient les esclaves affranchis dans l'Antiquité romaine."
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
      category: 'I',
      explication: "La fraternité exprime l'idée que les citoyens forment une communauté solidaire. Elle implique le soutien mutuel, l'entraide et la cohésion sociale, et fonde notamment la protection sociale, les droits sociaux et la solidarité nationale. 💡 Astuce : fraternité vient de « frère ». C'est se comporter comme des frères et sœurs, se soutenir mutuellement."
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
      category: 'I',
      explication: "Le coq gaulois figure sur les maillots de l'équipe de France de football. C'est un symbole national historique qui représente la fierté et le courage des Français, utilisé notamment dans le sport. 💡 Astuce : le coq gaulois n'est pas un symbole officiel de la République (ce n'est pas dans la Constitution), mais c'est l'emblème sportif de la France par tradition."
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
      category: 'I',
      explication: "« Liberté, Égalité, Fraternité » est la devise officielle de la République française, inscrite dans la Constitution. Elle est née de la Révolution française et symbolise les trois valeurs fondamentales de la République. 💡 Astuce : « Travail, Famille, Patrie » était la devise du régime de Vichy (1940-1944), à ne pas confondre avec la devise républicaine."
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
      category: 'I',
      explication: "La liberté d'association est le droit reconnu à toute personne de se réunir avec d'autres et de créer librement une association, sans avoir besoin d'une autorisation préalable de l'État. Ce droit est encadré par la loi du 1er juillet 1901. 💡 Astuce : créer une association en France est simple et libre. Il suffit de déclarer l'association en préfecture."
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
      category: 'I',
      explication: "La définition de la liberté dans la Déclaration des droits de l'homme et du citoyen de 1789 (article 4) est précisément : « La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. » Aucune liberté n'est donc absolue ou sans limite. 💡 Astuce : c'est la définition exacte de l'article 4 de la DDHC de 1789. À retenir mot pour mot."
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
      category: 'I',
      explication: "L'article 1er de la Constitution de 1958 dispose que « La France est une République indivisible, laïque, démocratique et sociale. » Ces quatre adjectifs définissent les caractères fondamentaux de la République française. 💡 Astuce : retenez les 4 mots clés : Indivisible (un seul territoire uni), Laïque (séparation État/religion), Démocratique (le peuple gouverne), Sociale (solidarité et protection sociale)."
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
      category: 'I',
      explication: "Marianne est présente sur les timbres postaux français et sous forme de buste dans toutes les mairies de France. Elle figure également sur les documents officiels et les pièces de monnaie. 💡 Astuce : si vous allez à la mairie, vous verrez toujours le buste de Marianne derrière le guichet."
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
      category: 'I',
      explication: "L'égalité républicaine signifie que tous les citoyens, sans distinction d'origine, de sexe, de religion ou de situation sociale, sont soumis aux mêmes lois et ont les mêmes droits devant la justice et les institutions. Ce n'est pas une égalité de revenus ou de résultats. 💡 Astuce : l'égalité républicaine = égalité devant la loi. Pas l'égalité des salaires ou des opinions."
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
      category: 'I',
      explication: "En France, la liberté de conscience est un droit fondamental garanti par la loi de 1905 sur la séparation des Églises et de l'État, ainsi que par la Constitution. Chaque personne est libre de croire, de ne pas croire, ou de changer de religion, sans aucune autorisation administrative. 💡 Astuce : l'État ne se mêle pas des croyances. La religion est une affaire strictement personnelle en France."
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
      category: 'I',
      explication: "La laïcité, telle qu'elle est définie par la loi du 9 décembre 1905, signifie que l'État est neutre en matière religieuse : il ne reconnaît, ne finance et ne subventionne aucune religion. Cela ne signifie pas que les religions sont interdites, mais qu'elles relèvent de la sphère privée. 💡 Astuce : laïcité ≠ interdiction de la religion. L'État ne prend parti pour aucune religion. Les Français croient ce qu'ils veulent, librement."
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
      category: 'I',
      explication: "Dans une mairie, comme dans tout service public, l'usager peut demander des informations administratives, effectuer des démarches officielles (état civil, urbanisme, inscription sur les listes électorales, etc.) et obtenir des services auxquels il a droit. Le service public est fondé sur les principes d'égalité, de neutralité et de continuité. 💡 Astuce : dans un service public, tout le monde est égal. Pas de traitement privilégié, pas d'imposition de convictions personnelles."
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
    category: 'I',
    explication: "La loi de 1905 interdit à l'État de financer les cultes ou les édifices religieux. L'État peut uniquement financer des services publics comme l'éducation, la santé ou la justice. 💡 Tip : l'État finance ce qui est pour TOUS, pas ce qui est pour une religion."
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
    category: 'I',
    explication: "La loi de séparation des Églises et de l'État a été adoptée le 9 décembre 1905. Elle met fin au régime du Concordat de 1801 qui liait l'État à l'Église catholique. 💡 Tip : 1905 = la France coupe le lien officiel avec les Églises, début de la laïcité moderne."
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
    category: 'I',
    explication: "La loi du 9 décembre 1905 établit la séparation des Églises et de l'État. Elle garantit la liberté de conscience et organise la neutralité de l'État en matière religieuse. 💡 Tip : 1905 = séparation. Les autres grandes dates : 1944 = droit de vote des femmes, 1848 = abolition de l'esclavage, 1945 = sécurité sociale."
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
    category: 'I',
    explication: "La laïcité ne supprime pas les religions, elle garantit au contraire la liberté de conscience (croire ou ne pas croire) et la liberté de culte (pratiquer sa religion). L'État reste neutre et ne favorise ni n'interdit aucune religion. 💡 Tip : la laïcité protège TOUTES les croyances, y compris le droit de n'en avoir aucune."
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
    category: 'I',
    explication: "Le 9 décembre est la Journée nationale de la laïcité, instaurée en 2015. Cette date commémore l'adoption de la loi de 1905 le 9 décembre 1905. 💡 Tip : même date que la loi fondatrice, facile à retenir !"
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
    category: 'I',
    explication: "La loi du 15 mars 2004 interdit les signes religieux ostensibles (visibles et reconnaissables immédiatement) dans les écoles publiques, comme le voile, la kippa ou une grande croix. En revanche, elle autorise explicitement les signes discrets, par exemple une petite croix ou une étoile portée sous les vêtements. 💡 Tip : ostensible = interdit, discret = autorisé."
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
    category: 'I',
    explication: "L'antisémitisme désigne spécifiquement la haine, les discriminations ou les préjugés envers les personnes juives. C'est une forme particulière de racisme condamnée par la loi en France. 💡 Tip : 'sémite' renvoie aux peuples de langue sémitique, dont les Hébreux. 'Anti' = contre."
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
    category: 'I',
    explication: "La loi du 9 décembre 1905 est le texte fondateur de la laïcité en France. Elle pose deux principes essentiels : l'État ne reconnaît ni ne finance aucun culte, et il garantit le libre exercice des religions. 💡 Tip : 1905 = naissance officielle de la laïcité à la française."
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
    category: 'I',
    explication: "En France, les services publics (hôpitaux, écoles, mairies, administrations...) doivent respecter la neutralité religieuse. Leurs agents ne peuvent pas manifester leurs convictions religieuses dans l'exercice de leurs fonctions. 💡 Tip : service public = neutralité totale. Dans le privé, les règles sont différentes."
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
    category: 'I',
    explication: "La laïcité repose sur trois piliers : la séparation des Églises et de l'État, la neutralité de l'État vis-à-vis des religions, et la garantie de la liberté de conscience pour tous. Elle ne s'oppose pas à la religion, elle la sépare de la sphère publique étatique. 💡 Tip : laïcité ≠ athéisme. C'est la neutralité de l'État, pas l'interdiction de croire."
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
    category: 'I',
    explication: "La charte de la laïcité à l'école, adoptée en 2013, rappelle les règles du vivre ensemble dans les établissements publics. Son objectif est de garantir que l'enseignement reste neutre, accessible à tous sans distinction de religion. 💡 Tip : la charte protège l'égalité à l'école, elle n'interdit pas les convictions personnelles."
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
    category: 'I',
    explication: "L'obligation de neutralité religieuse s'applique à tous les agents du service public, sans exception : enseignants, policiers, médecins hospitaliers, fonctionnaires administratifs, etc. Dans l'exercice de leurs fonctions, ils ne peuvent afficher aucune appartenance religieuse. 💡 Tip : 'tous les agents' = la règle s'applique à tout le monde dans le service public, sans distinction de métier."
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
    category: 'I',
    explication: "Une personne athée est une personne qui ne croit en l'existence d'aucun dieu. La laïcité française protège aussi bien la liberté de pratiquer une religion que la liberté de ne pas en avoir. 💡 Tip : athée vient du grec 'a-theos' = sans dieu."
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
    category: 'II',
    explication: "Selon l'article 8 de la Constitution de 1958, le Président de la République nomme le Premier ministre. Ce dernier n'est pas élu directement par les citoyens. 💡 Tip : le Président nomme le Premier ministre, et c'est le Premier ministre qui choisit ensuite ses ministres (sur proposition au Président)."
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
    category: 'II',
    explication: "Pour se présenter à l'élection présidentielle, il faut être de nationalité française, avoir au moins 18 ans, et réunir 500 parrainages (signatures) d'élus (maires, parlementaires, etc.) issus d'au moins 30 départements différents. 💡 Tip : les 500 parrainages servent à filtrer les candidatures et à garantir un ancrage territorial réel."
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
    category: 'II',
    explication: "L'article 3 de la Constitution de 1958 dispose que 'la souveraineté nationale appartient au peuple'. Les élus (président, députés, etc.) n'exercent ce pouvoir qu'au nom du peuple, qui leur délègue via les élections. 💡 Tip : en démocratie, c'est toujours le peuple qui est souverain, même si ce sont des élus qui gouvernent."
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
    category: 'II',
    explication: "Lors des élections municipales, les citoyens élisent les conseillers municipaux. Ce sont ces conseillers qui, une fois élus, choisissent ensuite le maire parmi eux lors du premier conseil municipal. 💡 Tip : les citoyens élisent le conseil municipal, et c'est le conseil qui élit le maire."
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
    category: 'II',
    explication: "L'inscription sur les listes électorales est obligatoire pour pouvoir voter. Sans inscription, il est impossible de participer à un scrutin. Pour certains (jeunes de 18 ans ayant effectué leur recensement citoyen à 16 ans, personnes naturalisées depuis 2019), l'inscription est automatique. Dans les autres cas, une démarche personnelle est nécessaire. 💡 Tip : pas d'inscription = pas de vote, quelles que soient les autres conditions remplies."
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
    category: 'II',
    explication: "Pour voter en France, il faut être majeur (18 ans), avoir la nationalité française, et être inscrit sur les listes électorales. Ces trois conditions sont cumulatives. 💡 Tip : 18 ans + inscription = les deux conditions à retenir, la nationalité est souvent implicite dans les questions sur l'examen."
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
    category: 'II',
    explication: "Les élections municipales sont ouvertes aux citoyens français et aux citoyens d'autres pays de l'Union européenne résidant en France, à condition d'être majeur et inscrit sur les listes électorales de la commune. Aucune condition de propriété ou de diplôme n'est requise. 💡 Tip : c'est l'une des rares élections en France où les citoyens européens non-français peuvent se présenter."
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
    category: 'II',
    explication: "Le maire est élu indirectement par les conseillers municipaux, eux-mêmes élus par les citoyens. Le préfet, le commissaire et le directeur d'hôpital sont des fonctionnaires nommés par l'État. 💡 Tip : élu = choisi par les citoyens (directement ou indirectement). Nommé = désigné par une autorité administrative."
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
    category: 'II',
    explication: "Le maire a un double rôle : il est à la fois chef de l'exécutif municipal (gestion des affaires de la commune, budget, services locaux) et agent de l'État (état civil, ordre public, organisation des élections). 💡 Tip : le maire a deux casquettes : représentant de sa commune ET représentant de l'État dans sa commune."
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
    category: 'II',
    explication: "En dehors d'internet, il est possible de s'inscrire sur les listes électorales directement en mairie, en présentant une pièce d'identité et un justificatif de domicile, avec le formulaire cerfa n°12669 disponible sur place. 💡 Tip : la mairie est le guichet de proximité pour toutes les démarches électorales."
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
    category: 'II',
    explication: "En France, la majorité électorale est fixée à 18 ans. C'est à cet âge que l'on acquiert le droit de vote pour toutes les élections. 💡 Tip : majorité civile et majorité électorale sont les deux fixées à 18 ans en France."
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
    category: 'II',
    explication: "En France, le vote est un droit et non une obligation légale. Un citoyen inscrit sur les listes électorales peut choisir de ne pas voter sans aucune sanction. L'abstention est légalement tolérée même si elle est parfois critiquée d'un point de vue civique. 💡 Tip : dans certains pays (Belgique, Australie) voter est obligatoire, mais pas en France."
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
    category: 'II',
    explication: "Le principe de légalité est fondamental dans un État de droit : la loi s'impose à tous les citoyens, sans exception. Nul n'est censé ignorer la loi, et l'ignorer ou ne pas être d'accord avec elle ne dispense pas de la respecter. 💡 Tip : 'Nul n'est censé ignorer la loi' — cette formule classique résume tout."
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
    category: 'II',
    explication: "Les 577 députés de l'Assemblée nationale sont élus directement par les citoyens français lors des élections législatives, au scrutin uninominal majoritaire à deux tours. Le suffrage universel direct signifie que c'est le peuple qui vote directement. 💡 Tip : 'Direct' = les citoyens votent eux-mêmes, contrairement aux sénateurs qui sont élus au suffrage indirect."
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
    category: 'II',
    explication: "En vertu de la séparation des pouvoirs, le pouvoir législatif appartient au Parlement, composé de l'Assemblée nationale et du Sénat. C'est lui qui vote les lois, tandis que le gouvernement les propose (projets de loi) et le Président les promulgue. 💡 Tip : Législatif = loi = Parlement. Le mot 'législatif' vient du latin 'lex' (loi)."
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
    category: 'II',
    explication: "La théorie de la séparation des pouvoirs, formulée par Montesquieu dans 'L'Esprit des lois' (1748), distingue trois pouvoirs : le législatif (voter les lois), l'exécutif (gouverner et appliquer les lois) et le judiciaire (juger). Ce principe évite la concentration des pouvoirs et protège les libertés. 💡 Tip : Mnémotechnique — 'LEJ' : Législatif, Exécutif, Judiciaire."
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
    category: 'II',
    explication: "L'État de droit est un système dans lequel l'ensemble des acteurs, y compris l'État lui-même et ses dirigeants, sont soumis à la loi. Personne n'est au-dessus des règles de droit. C'est une garantie contre l'arbitraire et les abus de pouvoir. 💡 Tip : L'État de droit = même le Président doit respecter la loi."
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
    category: 'II',
    explication: "Le conseil municipal est élu pour un mandat de 6 ans. Le maire est ensuite élu par les membres du conseil municipal, donc son mandat est également de 6 ans (il dure autant que le conseil qui l'a élu). 💡 Tip : Maire et sénateurs = 6 ans. Président et députés = 5 ans. Cette différence est souvent piège à l'examen."
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
    category: 'II',
    explication: "Les élections législatives permettent d'élire les 577 députés de l'Assemblée nationale pour 5 ans. Le mot 'législatif' fait référence au pouvoir de faire les lois, qui appartient aux députés. Ces élections ont lieu en principe quelques semaines après l'élection présidentielle. 💡 Tip : Législatif = les législateurs = ceux qui font les lois = les députés."
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
    category: 'II',
    explication: "Depuis la réforme constitutionnelle de 2000 (approuvée par référendum), le mandat présidentiel est passé de 7 ans (septennat) à 5 ans (quinquennat). Un président peut accomplir deux mandats consécutifs au maximum. 💡 Tip : Quinquennat = 5 ans (du latin 'quinque' = cinq). Pensez à 'quinze' qui commence aussi par 'quin'."
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
    category: 'II',
    explication: "Les députés de l'Assemblée nationale sont élus pour 5 ans lors des élections législatives. Cette durée correspond à celle du mandat présidentiel depuis 2002, ce qui permet une meilleure cohérence politique entre l'Assemblée et le Président. 💡 Tip : Président + Députés = 5 ans. Maire + Sénateurs = 6 ans. Retenez les paires !"
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
    category: 'II',
    explication: "Les 348 sénateurs sont élus pour 6 ans au suffrage universel indirect (par des grands électeurs : élus locaux). Le Sénat est renouvelé par moitié tous les 3 ans, ce qui assure une continuité institutionnelle. 💡 Tip : Attention, le mandat des sénateurs était 9 ans avant 2003. Désormais c'est 6 ans, comme le maire."
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
    category: 'II',
    explication: "Selon l'article 21 de la Constitution, 'le Premier ministre dirige l'action du gouvernement'. Il coordonne le travail des ministres et est responsable devant l'Assemblée nationale. Le Président de la République, lui, préside le Conseil des ministres mais c'est le Premier ministre qui dirige au quotidien. 💡 Tip : Le Président fixe le cap, le Premier ministre conduit le gouvernement."
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
    category: 'II',
    explication: "La liberté d'adhérer à un parti politique est garantie par l'article 4 de la Constitution de 1958, qui reconnaît le pluralisme politique. Tout citoyen français, naturalisé ou non, peut rejoindre librement un parti de son choix. 💡 Tip : En démocratie, le pluralisme politique est un droit fondamental — aucune restriction de nationalité d'origine."
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
    category: 'II',
    explication: "En France, seul un juge peut prononcer une sanction pénale. La police interpelle et enquête, mais elle n'a pas le pouvoir de condamner. Le principe de la séparation des pouvoirs confie le pouvoir judiciaire aux magistrats. 💡 Tip : La police arrête, le juge condamne — deux pouvoirs distincts."
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
    category: 'II',
    explication: "La répartition des compétences scolaires en France suit un découpage par niveau : les communes gèrent les écoles primaires, les départements gèrent les collèges, et les régions gèrent les lycées. L'État, lui, gère les programmes et emploie les enseignants. 💡 Tip : Commune = école / Département = collège / Région = lycée. Pensez à l'ordre croissant !"
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
    category: 'II',
    explication: "Les communes ont la responsabilité des bâtiments, de l'entretien et du fonctionnement des écoles primaires et maternelles publiques. Les enseignants, eux, restent des fonctionnaires d'État. 💡 Tip : Commune = école de quartier, c'est logique — c'est le niveau local le plus proche des familles."
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
    category: 'II',
    explication: "Le maire n'est pas élu directement par les habitants. Ce sont d'abord les conseillers municipaux qui sont élus par les citoyens, puis c'est le conseil municipal qui élit le maire parmi ses membres lors de sa première réunion. 💡 Tip : Les citoyens élisent le conseil municipal, et c'est le conseil qui élit le maire — deux étapes distinctes."
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
    category: 'II',
    explication: "Depuis la loi de décentralisation de 2004, les régions sont compétentes pour organiser les transports ferroviaires régionaux de voyageurs (TER). C'est la région qui commande et finance les lignes de train régionales auprès de la SNCF. 💡 Tip : Région = grand territoire = grands transports régionaux (TER). Logique d'échelle !"
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
    category: 'II',
    explication: "L'article 89 de la Constitution prévoit deux voies de révision : le référendum (vote direct des citoyens) ou le vote du Congrès (réunion de l'Assemblée nationale et du Sénat) à la majorité des 3/5. Le référendum est donc bien l'une des voies possibles. 💡 Tip : La Constitution est la loi suprême, donc la modifier demande une procédure exceptionnelle — référendum ou Congrès, jamais un simple décret."
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
    category: 'II',
    explication: "L'article 7 de la Constitution confie l'intérim de la présidence au Président du Sénat en cas de vacance du pouvoir (décès, démission, empêchement définitif). C'est lui qui assure les fonctions présidentielles jusqu'à l'élection d'un nouveau Président dans un délai de 20 à 35 jours. 💡 Tip : Président du Sénat = 3e personnage de l'État. Il remplace le Président, pas le Premier ministre."
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
    category: 'II',
    explication: "Le Conseil constitutionnel est le gardien de la Constitution. Il vérifie que les lois votées par le Parlement respectent la Constitution avant leur promulgation (contrôle a priori) ou après (QPC — question prioritaire de constitutionnalité). Il valide aussi les élections nationales. 💡 Tip : Le Conseil constitutionnel ne juge pas les criminels, il juge les lois — il s'assure qu'elles sont conformes à la Constitution."
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
    category: 'II',
    explication: "La France compte 101 départements au total : 96 en métropole (dont la Corse qui en compte 2) et 5 départements d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte). L'option 95 est un piège fréquent car elle correspond aux seuls départements métropolitains numérotés (01 à 95). 💡 Tip : 96 en métropole + 5 outre-mer = 101. Ne confondez pas avec les 95 numéros !"
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
    category: 'II',
    explication: "La France est organisée en trois niveaux de collectivités territoriales : les communes (environ 35 000), les départements (101) et les régions (18 en tout, dont 13 en métropole). Ce découpage a été progressivement mis en place depuis la Révolution française. 💡 Tip : Trois niveaux, du plus petit au plus grand : commune → département → région."
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
    category: 'II',
    explication: "Le préfet est nommé par le Président de la République en Conseil des ministres. Il représente l'État (et donc le gouvernement) dans le département, veille à l'application des lois et coordonne les services de l'État sur le territoire. 💡 Tip : Préfet = représentant de l'État central dans les territoires. C'est un fonctionnaire nommé, pas élu."
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
    category: 'II',
    explication: "Selon l'article 5 de la Constitution, le Président de la République est le chef de l'État. Il veille au respect de la Constitution, assure le fonctionnement régulier des pouvoirs publics, et est garant de l'indépendance nationale et de l'intégrité du territoire. 💡 Tip : Chef de l'État = au-dessus de tous. Garant de la Constitution = son rôle principal selon l'article 5."
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
    category: 'II',
    explication: "L'article 21 de la Constitution dispose que 'le Premier ministre dirige l'action du gouvernement'. Il coordonne les ministres, dispose du pouvoir réglementaire, et est responsable devant l'Assemblée nationale. C'est le chef du gouvernement, tandis que le Président est le chef de l'État. 💡 Tip : Président = chef de l'État / Premier ministre = chef du gouvernement. Deux rôles distincts."
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
    category: 'II',
    explication: "Créé par la révision constitutionnelle de 2008 (article 71-1), le Défenseur des droits est une autorité indépendante. Il peut être saisi gratuitement par tout citoyen qui s'estime victime d'une discrimination ou d'un dysfonctionnement d'un service public. Il a remplacé le médiateur de la République. 💡 Tip : Le Défenseur des droits = le 'médiateur' entre les citoyens et l'administration, accessible gratuitement à tous."
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
    category: 'II',
    explication: "La citoyenneté européenne a été instaurée par le traité de Maastricht, signé le 7 février 1992 et entré en vigueur le 1er novembre 1993. Elle s'ajoute à la citoyenneté nationale et donne notamment le droit de voter aux élections municipales et européennes dans tout État membre. 💡 Tip : Maastricht 1992 = naissance de l'Union européenne ET de la citoyenneté européenne. Deux en un !"
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
    category: 'II',
    explication: "La Croatie est le 28e État à avoir rejoint l'Union européenne, le 1er juillet 2013. Depuis le Brexit (sortie du Royaume-Uni en 2020), l'UE compte 27 membres. La Bulgarie et la Roumanie, elles, ont rejoint l'UE en 2007. 💡 Tip : Croatie 2013 = dernier entrant. Puis le Royaume-Uni est sorti en 2020, ce qui a ramené le total à 27."
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
    category: 'II',
    explication: "L'hymne européen est l'Ode à la joie, tiré du 4e mouvement de la 9e Symphonie de Ludwig van Beethoven (1824). C'est Herbert von Karajan qui en a réalisé l'arrangement officiel pour l'Union européenne en 1972. 💡 Tip : Beethoven + Ode à la joie = hymne européen. La 9e symphonie, composée par un sourd, symbolise la fraternité et l'unité."
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
    category: 'II',
    explication: "La Journée de l'Europe est célébrée chaque 9 mai, en commémoration de la déclaration Schuman du 9 mai 1950, dans laquelle Robert Schuman proposait la création d'une organisation européenne pour mettre en commun les ressources en charbon et en acier — acte fondateur de la construction européenne. 💡 Tip : 9 mai 1950 = Déclaration Schuman = naissance symbolique de l'Europe. Retenez : 9 mai = Europe."
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
    category: 'II',
    explication: "La Banque centrale européenne (BCE) a son siège à Francfort, en Allemagne, depuis sa création en 1998. Ce choix n'est pas anodin : l'Allemagne, économie la plus puissante de la zone euro, a imposé ce siège en contrepartie de l'abandon du Deutsche Mark. 💡 Tip : BCE = Francfort = Allemagne. Associez banque solide à l'économie allemande."
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
    category: 'II',
    explication: "La Commission européenne a son siège principal à Bruxelles, en Belgique (bâtiment Berlaymont). Bruxelles est souvent considérée comme la capitale administrative de l'Union européenne. Strasbourg accueille le Parlement européen, et Luxembourg abrite la Cour de justice de l'UE. 💡 Tip : Bruxelles = Commission (exécutif) / Strasbourg = Parlement (législatif). Deux villes, deux pouvoirs."
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
    category: 'II',
    explication: "Le Parlement européen est composé de 720 députés européens (depuis 2024) élus au suffrage universel direct par les citoyens des États membres tous les 5 ans. La France y envoie 81 députés. Ce sont les seuls représentants élus directement à l'échelle européenne. 💡 Tip : Parlement = élus par les citoyens = députés. Que ce soit national ou européen, le principe est le même."
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
    category: 'II',
    explication: "La citoyenneté européenne (instaurée par le traité de Maastricht, 1992) accorde le droit de vote et d'éligibilité aux élections municipales et au Parlement européen dans l'État membre de résidence, même si ce n'est pas son pays d'origine. En revanche, les élections nationales (présidentielles, législatives) restent réservées aux nationaux. 💡 Tip : UE = droits municipaux et européens ouverts à tous les citoyens UE résidents. Les élections nationales = nationaux seulement."
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
    category: 'II',
    explication: "L'Union européenne compte 27 États membres au 1er janvier 2025. Ce chiffre est passé de 28 à 27 après le Brexit, la sortie officielle du Royaume-Uni, effective le 31 janvier 2020. 💡 Tip : 28 - 1 (Brexit) = 27. Retenez le chiffre 27 comme le nombre actuel des membres de l'UE."
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
    category: 'II',
    explication: "Le traité de Maastricht (officiellement le Traité sur l'Union européenne) a été signé le 7 février 1992 aux Pays-Bas et est entré en vigueur le 1er novembre 1993. Il crée officiellement l'Union européenne, instaure la citoyenneté européenne et jette les bases de l'euro. 💡 Tip : 1957 = traité de Rome (CEE) / 1992 = traité de Maastricht (UE). Rome d'abord, Maastricht ensuite."
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
    category: 'II',
    explication: "La construction européenne repose sur deux traités fondateurs : le traité de Rome (1957), qui crée la Communauté économique européenne (CEE), et le traité de Maastricht (1992), qui transforme la CEE en Union européenne et introduit la monnaie unique. Les autres traités cités (Versailles, Paris 1763, Tordesillas) n'ont aucun rapport avec l'UE. 💡 Tip : Rome 1957 = CEE / Maastricht 1992 = UE. L'Europe s'est construite en deux grandes étapes."
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
    category: 'II',
    explication: "Le Royaume-Uni a officiellement quitté l'Union européenne le 31 janvier 2020, après le référendum du 23 juin 2016 (Brexit) où 51,9 % des Britanniques avaient voté pour la sortie. La Norvège, la Suisse et l'Islande n'ont jamais été membres de l'UE. 💡 Tip : Brexit = British exit = sortie britannique. Premier et seul pays à avoir quitté l'UE à ce jour."
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
    category: 'II',
    explication: "La devise officielle de l'UE est 'Unie dans la diversité' (adoptée en 2000). Elle exprime l'idée que les Européens, à travers leur diversité de cultures, de langues et de traditions, sont unis autour de valeurs communes. 💡 Tip : Ne confondez pas avec la devise française ('Liberté, Égalité, Fraternité'). L'UE met en avant la diversité, la France l'égalité."
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
    category: 'II',
    explication: "L'hymne de l'Union européenne est l'Ode à la joie, extrait de la 9e Symphonie de Ludwig van Beethoven. Adopté par le Conseil de l'Europe en 1972 puis par la Communauté européenne en 1985, il symbolise les valeurs de liberté, de paix et de solidarité. Seule la mélodie est officielle, sans paroles, pour dépasser les barrières linguistiques. 💡 Tip : La Marseillaise = France / L'Ode à la joie = Europe. Beethoven, compositeur allemand, pour une Europe unie."
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
    category: 'II',
    explication: "Le drapeau européen comporte 12 étoiles dorées (jaunes) disposées en cercle sur fond bleu. Le nombre 12 est symbolique : il représente la perfection et l'unité, et non le nombre d'États membres. C'est pourquoi il n'a pas changé malgré les élargissements successifs. 💡 Tip : 12 étoiles, toujours 12, même si l'UE en compte 27. Le 12 est symbolique, pas un décompte de membres."
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
    category: 'II',
    explication: "Les députés européens sont élus au suffrage universel direct par l'ensemble des citoyens de l'Union européenne tous les 5 ans. C'est la seule institution de l'UE dont les membres sont directement élus par les citoyens. Les dernières élections européennes ont eu lieu en juin 2024. 💡 Tip : Parlement européen = seule institution UE élue directement par les citoyens."
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
    category: 'II',
    explication: "Le Parlement européen a la particularité d'avoir deux sièges : son siège officiel est à Strasbourg (France), où se tiennent les sessions plénières, et il dispose également d'un lieu de travail important à Bruxelles (Belgique) pour les commissions et groupes politiques. 💡 Tip : Le Parlement européen voyage entre Strasbourg (France) et Bruxelles (Belgique) — une particularité souvent critiquée pour son coût."
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
    category: 'III',
    explication: "Le droit de grève est reconnu par le préambule de la Constitution de 1946 (intégré à la Constitution de 1958). Il permet aux travailleurs de cesser collectivement le travail pour défendre leurs intérêts professionnels : salaires, conditions de travail, emploi. Il ne s'applique pas à n'importe quelle revendication. 💡 Tip : Grève = outil professionnel, pas politique. Elle défend les droits des travailleurs dans leur relation avec l'employeur."
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
    category: 'III',
    explication: "En France, les droits et libertés peuvent être limités par l'État uniquement pour des raisons d'ordre public, de sécurité, de salubrité ou de tranquillité publique. Ces restrictions doivent être nécessaires, proportionnées et encadrées par la loi. Le Conseil constitutionnel veille à ce que ces limitations ne soient pas excessives. 💡 Tip : Aucun droit n'est absolu en France. La liberté de chacun s'arrête quand elle menace l'ordre public ou la sécurité d'autrui."
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
    category: 'III',
    explication: "C'est l'article 1er de la Déclaration des droits de l'homme et du citoyen du 26 août 1789 : 'Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune.' Ce texte a une valeur constitutionnelle en France. 💡 Tip : Article 1er de la DDHC = liberté et égalité à la naissance. C'est la phrase la plus célèbre de ce texte fondateur."
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
    category: 'III',
    explication: "L'article 4 de la DDHC de 1789 pose le principe que la liberté individuelle est limitée par la liberté d'autrui. On est libre de faire tout ce qui ne cause pas de tort aux autres. C'est le fondement même de la vie en société démocratique : mes droits s'exercent dans le respect des droits des autres. 💡 Tip : 'Ma liberté s'arrête où commence celle des autres' — cette formule résume parfaitement l'article 4."
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
    category: 'III',
    explication: "L'article 1er de la Constitution du 4 octobre 1958 dispose : 'La France est une République indivisible, laïque, démocratique et sociale.' Ces quatre qualificatifs résument les valeurs fondamentales : unité territoriale (indivisible), séparation de l'Église et de l'État (laïque), souveraineté du peuple (démocratique), protection sociale (sociale). 💡 Tip : Mnémotechnique — I.L.D.S. : Indivisible, Laïque, Démocratique, Sociale. Retenez ces 4 adjectifs."
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
    category: 'III',
    explication: "La liberté de la presse, instaurée en France par la loi du 29 juillet 1881, garantit le droit d'informer et d'exprimer des opinions librement. Mais cette liberté n'est pas sans limites : la diffamation, l'incitation à la haine ou la mise en danger de la vie d'autrui restent punissables par la loi. 💡 Tip : Liberté de la presse ≠ droit de tout dire. Elle s'exerce dans le cadre de la loi, notamment la loi de 1881."
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
    category: 'III',
    explication: "La liberté de circulation est un droit fondamental reconnu en France et dans l'espace Schengen. Elle permet à toute personne de se déplacer librement sur le territoire national sans avoir à justifier ses déplacements. Elle ne supprime pas les contrôles aux frontières extérieures ni les obligations légales comme le permis de conduire. 💡 Tip : Liberté de circuler = aller où on veut sur le territoire. Ça ne veut pas dire conduire sans règles ni voyager gratis."
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
    category: 'III',
    explication: "La citoyenneté désigne l'appartenance à une communauté politique. Elle implique à la fois des droits (voter, être protégé par la loi, accéder aux services publics) et des devoirs (respecter les lois, payer ses impôts, participer à la vie civique). On peut être citoyen sans être né dans le pays, par exemple par naturalisation. 💡 Tip : citoyen = droits + devoirs, les deux vont ensemble."
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
    category: 'III',
    explication: "La Déclaration des droits de l'homme et du citoyen de 1789 définit les droits naturels et imprescriptibles de tout individu : la liberté, la propriété, la sûreté et la résistance à l'oppression. Ces droits sont fondamentaux car ils s'appliquent à tous, sans distinction. 💡 Tip : retenir les 4 droits de 1789 = Liberté, Propriété, Sûreté, Résistance à l'oppression."
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
    category: 'III',
    explication: "Le droit à la sûreté garantit que nul ne peut être arrêté ou détenu sans raison légale. Il protège les individus contre toute arrestation arbitraire ou abusive par l'État ou toute autre autorité. C'est l'un des droits fondamentaux proclamés en 1789. 💡 Tip : sûreté = sécurité face au pouvoir de l'État, pas la même chose que la sécurité publique."
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
    category: 'III',
    explication: "La Déclaration des droits de l'homme et du citoyen, adoptée le 26 août 1789, est le texte fondateur qui pose les grands principes de liberté, d'égalité et de souveraineté du peuple. Elle fait aujourd'hui partie du bloc de constitutionnalité français. 💡 Tip : 1789 = Révolution = naissance des droits du citoyen en France."
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
    category: 'III',
    explication: "L'article premier de la Déclaration de 1789 proclame que tous les hommes naissent et demeurent libres et égaux en droits. Cette affirmation est la base du principe d'égalité en droit français. 💡 Tip : article 1 de la DDHC = « les hommes naissent et demeurent libres et égaux en droits »."
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
    category: 'III',
    explication: "L'esclavage et la torture sont des pratiques qui nient la valeur intrinsèque de la personne humaine. Ils sont formellement interdits en France et dans les textes internationaux comme la Déclaration universelle des droits de l'homme de 1948. 💡 Tip : atteinte à la dignité = tout ce qui traite un être humain comme un objet ou lui inflige des souffrances."
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
    category: 'III',
    explication: "La liberté d'expression est un droit fondamental mais pas absolu. Elle permet à chacun d'exprimer ses opinions, mais elle est encadrée par la loi : elle ne protège pas les propos diffamatoires, les incitations à la haine ou les menaces. 💡 Tip : liberté d'expression ≠ droit de tout dire. Elle s'arrête là où commence l'abus."
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
    category: 'III',
    explication: "Toute personne placée en garde à vue a le droit d'être assistée par un avocat dès le début de la procédure. C'est un droit fondamental garanti par le Code de procédure pénale. En revanche, refuser de donner son identité ou fuir peut constituer une infraction. 💡 Tip : en cas d'interpellation, le seul droit immédiat à exercer clairement est celui de contacter un avocat."
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
    category: 'III',
    explication: "En France, la liberté de conscience est garantie par la loi de 1905 et la Constitution. Chacun est libre de pratiquer la religion de son choix, d'en changer, ou de ne pas avoir de religion. L'État ne pose aucune question sur les convictions religieuses de ses citoyens. 💡 Tip : l'État français ne connaît pas la religion de ses citoyens, c'est une affaire strictement privée."
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
    category: 'III',
    explication: "La loi du 7 juillet 2023 fixe la majorité numérique à 15 ans en France. En dessous de cet âge, un mineur ne peut pas s'inscrire seul sur un réseau social sans l'autorisation d'un de ses parents. 💡 Tip : majorité civile = 18 ans, majorité numérique = 15 ans. Trois ans de différence."
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
    category: 'III',
    explication: "La loi Évin de 1991 et le décret de 2006 ont interdit de fumer dans tous les lieux publics fermés et couverts (restaurants, bars, transports, écoles, etc.). Fumer est autorisé dans les espaces privés comme son domicile, ou dans les espaces extérieurs désignés. 💡 Tip : chez soi = espace privé = on est libre. Partout ailleurs dans des lieux fermés et publics, c'est interdit."
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
    category: 'III',
    explication: "Conduire une moto sans le permis correspondant est une infraction pénale en France, passible d'une amende, d'un retrait de permis et même d'une peine d'emprisonnement. Même les petites cylindrées nécessitent un permis ou une formation adaptée. 💡 Tip : toute moto = permis obligatoire, il n'existe pas d'exception 'petite moto' sans formation."
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
    category: 'III',
    explication: "Le devoir de solidarité va au-delà du simple paiement des impôts. Il implique de contribuer à la cohésion sociale, d'aider les personnes vulnérables et de participer au financement des services collectifs (santé, éducation, retraites). C'est un principe inscrit dans le Préambule de la Constitution de 1946. 💡 Tip : solidarité = contribuer à la société pour que chacun puisse vivre dignement."
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
    category: 'III',
    explication: "La polygamie est formellement interdite en France. Le Code civil pose le principe de la monogamie : on ne peut être marié qu'à une seule personne à la fois. Contracter un mariage en étant déjà marié constitue le délit de bigamie, passible d'une peine de prison et d'une amende. 💡 Tip : en France, un mariage à la fois. Toujours."
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
    category: 'III',
    explication: "En France, toute personne fiscalement domiciliée en France a l'obligation de déposer une déclaration de revenus chaque année, quel que soit son niveau de revenu. Ne pas déclarer peut entraîner des pénalités et des majorations. 💡 Tip : déclarer ≠ forcément payer. Même si on doit peu ou rien, la déclaration reste obligatoire."
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
    category: 'III',
    explication: "L'article 223-6 du Code pénal oblige toute personne à porter secours à une personne en danger, dans la mesure où cela ne représente pas un risque pour elle-même. Ne pas le faire constitue le délit de 'non-assistance à personne en danger', passible de 5 ans d'emprisonnement et 75 000 € d'amende. 💡 Tip : appeler le 15 (SAMU), le 18 (pompiers) ou le 112 compte comme porter secours si on ne peut pas intervenir soi-même."
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
    category: 'III',
    explication: "Participer à un jury d'assises est une obligation civique en France. Les jurés sont tirés au sort parmi les citoyens inscrits sur les listes électorales. Refuser sans motif légitime peut entraîner une amende. C'est une forme directe de participation des citoyens à la justice. 💡 Tip : jury = le citoyen participe directement à la justice, c'est la démocratie en acte."
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
    category: 'III',
    explication: "Depuis la loi Hôpital, Patients, Santé et Territoires de 2009, la vente et l'offre d'alcool aux mineurs de moins de 18 ans est totalement interdite en France, que ce soit en magasin, au bar ou lors d'événements. 💡 Tip : alcool, tabac, conduite = tout à 18 ans. La majorité civile est la règle générale."
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
    category: 'III',
    explication: "Le Code de la route a valeur légale en France. Ses infractions sont classées en contraventions, délits ou crimes selon leur gravité, et sont punies par des amendes, des retraits de points, des suspensions ou annulations de permis, voire des peines d'emprisonnement. Aucune urgence personnelle ne justifie légalement d'enfreindre le code de la route. 💡 Tip : urgence personnelle ≠ exception légale. Seuls les véhicules d'urgence (ambulance, police, pompiers) ont des dérogations."
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
    category: 'III',
    explication: "En France, un juge peut prononcer la privation des droits civiques (voter, être élu, exercer certaines fonctions publiques) comme peine complémentaire à l'occasion de crimes graves, comme le terrorisme, certains crimes contre l'État ou des infractions particulièrement sérieuses. Les contraventions ou simples retards administratifs ne peuvent jamais mener à une telle peine. 💡 Tip : seul un crime grave, jugé par un tribunal, peut entraîner la perte des droits civiques."
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
    category: 'III',
    explication: "La carte nationale d'identité est gratuite et accessible à tout citoyen français. La demande se fait en mairie, avec des justificatifs d'identité, de nationalité française et de domicile. Aucune condition de revenus, de statut civil ou de possession d'un passeport n'est requise. 💡 Tip : la CNI est un droit pour tous les Français, accessible à la mairie gratuitement."
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
    category: 'III',
    explication: "La liberté d'expression est un droit fondamental, mais elle peut être limitée par la loi pour protéger d'autres droits et valeurs. Les motifs légaux de limitation incluent la diffamation, l'injure, l'incitation à la haine raciale ou religieuse, et les appels à la violence. En revanche, critiquer le gouvernement est pleinement protégé. 💡 Tip : la loi limite l'expression qui nuit à autrui, pas celle qui critique le pouvoir."
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
    category: 'III',
    explication: "La participation au jury d'assises est une obligation civique. Un citoyen convoqué doit se présenter, sauf s'il peut justifier d'un motif légitime (maladie grave, obligation professionnelle impérative, etc.). Les jurés reçoivent une indemnité modeste mais ne peuvent pas négocier de rémunération. 💡 Tip : la convocation au jury est comme la convocation au vote : c'est un devoir civique, pas une option."
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
    category: 'III',
    explication: "En France, la majorité civile est fixée à 18 ans depuis la loi du 5 juillet 1974. À partir de cet âge, une personne devient pleinement capable d'exercer ses droits civils (signer des contrats, voter, se marier sans autorisation parentale, etc.). 💡 Tip : avant 1974, la majorité était à 21 ans. C'est Valéry Giscard d'Estaing qui l'a abaissée à 18 ans."
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
    category: 'III',
    explication: "Parmi les devoirs fondamentaux du citoyen français figurent le respect des lois de la République et la contribution aux charges publiques via les impôts, comme le précise la Déclaration de 1789. Ces obligations s'appliquent à tous, quel que soit le statut social ou politique. 💡 Tip : respecter les lois + payer les impôts = les deux piliers du devoir civique de base."
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
    category: 'III',
    explication: "Le droit français classe les infractions en trois catégories par ordre croissant de gravité : la contravention (la moins grave, jugée au tribunal de police), le délit (jugé au tribunal correctionnel), et le crime (le plus grave, jugé par la cour d'assises). 💡 Tip : retenir l'ordre croissant : contravention < délit < crime."
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
    category: 'III',
    explication: "La citoyenneté numérique désigne l'ensemble des droits (liberté d'expression en ligne, protection des données personnelles, accès à l'information) et des devoirs (respect des autres, ne pas diffuser de fausses informations, ne pas harceler) qui s'appliquent dans l'espace numérique. 💡 Tip : les valeurs civiques de la vraie vie s'appliquent aussi sur internet."
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
    category: 'III',
    explication: "Le devoir de mémoire est l'obligation morale et civique de ne pas oublier les événements tragiques de l'histoire (Shoah, guerres mondiales, esclavage, génocides) afin d'en tirer des leçons et d'éviter de les répéter. Il s'exprime notamment par des commémorations officielles et l'enseignement de l'histoire. 💡 Tip : se souvenir du passé pour construire un avenir meilleur, c'est l'essence du devoir de mémoire."
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
    category: 'III',
    explication: "Les jurés d'assises sont tirés au sort parmi les citoyens français majeurs inscrits sur les listes électorales. Il n'est pas nécessaire d'avoir de formation juridique. Cette participation directe des citoyens à la justice est une forme de démocratie participative. 💡 Tip : les listes électorales servent aussi à désigner les jurés, une raison de plus de s'inscrire."
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
    category: 'III',
    explication: "La privation des droits civiques est une peine complémentaire prononcée par un juge. Elle entraîne l'impossibilité de voter, d'être candidat à une élection et d'exercer certaines fonctions publiques. En revanche, elle n'affecte pas le droit de travailler, de se marier ou de voyager. 💡 Tip : droits civiques = droits liés à la vie politique et civile (voter, se faire élire), pas les droits de la vie quotidienne."
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
    category: 'IV',
    explication: "Le Code civil, aussi appelé Code Napoléon, a été promulgué le 21 mars 1804 sous Napoléon Bonaparte, alors Premier consul. Il unifie et modernise le droit privé français (famille, propriété, contrats) et reste encore aujourd'hui la base du droit civil français. 💡 Tip : Napoléon = Code civil de 1804. À ne pas confondre avec la DDHC (1789) ou la Constitution (1958)."
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
    category: 'IV',
    explication: "Charles de Gaulle a été le premier président de la Ve République, de 1959 à 1969. Il est à l'origine de la Constitution de 1958 qui fonde ce régime. Les autres personnages cités appartiennent à d'autres époques : Louis XVI était roi, Napoléon était consul puis empereur, et Victor Hugo était écrivain. 💡 Tip : Ve République = 1958 = de Gaulle. Il en est à la fois le fondateur et le premier président."
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
    category: 'IV',
    explication: "Les lois Ferry de 1881 et 1882 ont rendu l'école primaire publique gratuite, laïque et obligatoire pour les enfants de 6 à 13 ans. Jules Ferry, ministre de l'Instruction publique, voulait former des citoyens républicains affranchis de l'influence de l'Église. 💡 Tip : les 3 mots clés = gratuite + laïque + obligatoire. C'est la base de l'école républicaine française."
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
    category: 'IV',
    explication: "Le 14 juillet commémore deux événements : la prise de la Bastille le 14 juillet 1789, symbole du début de la Révolution française, et la Fête de la Fédération du 14 juillet 1790, qui célébrait l'unité nationale. C'est la fête nationale française depuis 1880. 💡 Tip : deux événements, une date. La Bastille (1789) et la Fédération (1790), tous les deux le 14 juillet."
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
    category: 'IV',
    explication: "En 1958, la France traverse une crise politique grave liée à la guerre d'Algérie. Charles de Gaulle revient au pouvoir et fait adopter une nouvelle Constitution le 4 octobre 1958, fondant la Ve République, toujours en vigueur aujourd'hui. 💡 Tip : 1958 = Ve République = de Gaulle = la Constitution actuelle."
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
    category: 'IV',
    explication: "La France fait partie des 6 pays fondateurs de la Communauté économique européenne, créée par le Traité de Rome en 1957 : France, Allemagne, Italie, Belgique, Pays-Bas et Luxembourg. Le Royaume-Uni n'a rejoint la CEE qu'en 1973, et a quitté l'UE en 2020 (Brexit). 💡 Tip : les 6 fondateurs = France + Allemagne + Italie + Benelux (Belgique, Pays-Bas, Luxembourg)."
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
    category: 'IV',
    explication: "Simone Veil est notamment connue pour avoir fait adopter la loi du 17 janvier 1975 légalisant l'interruption volontaire de grossesse (IVG) en France, et pour avoir présidé le Parlement européen de 1979 à 1982. Survivante de la Shoah, elle est entrée au Panthéon en 2018. 💡 Tip : Simone Veil = loi IVG 1975 + Parlement européen + Panthéon 2018."
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
    category: 'IV',
    explication: "Le débarquement allié du 6 juin 1944 (D-Day) s'est déroulé sur les plages de Normandie : Utah, Omah'a', Gold, Juno et Sword. C'est l'une des plus grandes opérations militaires de la Seconde Guerre mondiale, qui a conduit à la libération de la France. 💡 Tip : Normandie = D-Day = 6 juin 1944. Ces plages sont aujourd'hui des lieux de mémoire mondialement connus."
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
    category: 'IV',
    explication: "Depuis le Moyen Âge, les rois de France étaient couronnés dans la cathédrale Notre-Dame de Reims, en Champagne. Cette tradition remonte au baptême de Clovis, premier roi des Francs à se convertir au christianisme. Presque tous les rois de France y ont été sacrés, dont Charles VII en présence de Jeanne d'Arc en 1429. 💡 Tip : Reims = cathédrale + sacre des rois. Paris = résidence royale mais pas couronnement."
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
    category: 'IV',
    explication: "Louis XVI a été guillotiné le 21 janvier 1793 sur la place de la Révolution à Paris (aujourd'hui place de la Concorde). Son exécution marque un tournant radical dans la Révolution française et la fin de la monarchie absolue. Sa femme, Marie-Antoinette, a été guillotinée quelques mois plus tard. 💡 Tip : Louis XVI = le roi guillotiné. Louis XIV = le Roi-Soleil (mort dans son lit). Louis XV = son successeur (également mort dans son lit)."
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
    category: 'IV',
    explication: "La Révolution française a débuté en 1789, marquée par la convocation des États généraux en mai, la création de l'Assemblée nationale en juin, et la prise de la Bastille le 14 juillet. 1792 est l'année de la proclamation de la République, 1804 celle du couronnement de Napoléon, et 1815 sa défaite à Waterloo. 💡 Tip : 1789 = début de la Révolution et de la DDHC. La date la plus importante de l'histoire française moderne."
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
    category: 'IV',
    explication: "Napoléon Bonaparte a été sacré empereur des Français le 2 décembre 1804 à la cathédrale Notre-Dame de Paris, en présence du pape Pie VII. En 1799, il avait pris le pouvoir par le coup d'État du 18 Brumaire comme Premier consul. 1815 est l'année de sa défaite définitive à Waterloo. 💡 Tip : 1799 = coup d'État, 1804 = couronnement, 1815 = fin. Retenir 1804 pour l'empire."
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
    category: 'IV',
    explication: "Marianne est la figure allégorique de la République française. Elle représente les valeurs de Liberté, Égalité et Fraternité. Son buste est présent dans toutes les mairies de France. Louis XIV, Jeanne d'Arc et Charlemagne sont des figures de la monarchie ou de la période médiévale. 💡 Tip : Marianne = symbole de la République. Son visage apparaît aussi sur les timbres-poste et les pièces de monnaie."
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
    category: 'IV',
    explication: "Le 18 juin 1940, depuis Londres sur la BBC, le général de Gaulle a lancé son célèbre appel à continuer le combat contre l'Allemagne nazie après l'armistice signé par le gouvernement de Vichy. Ce discours est considéré comme l'acte fondateur de la Résistance française. 💡 Tip : 18 juin 1940 = l'Appel. Une des dates les plus importantes de la mémoire française. Commémorée chaque année."
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
    category: 'IV',
    explication: "La Shoah désigne le génocide des Juifs d'Europe perpétré par le régime nazi entre 1941 et 1945. Environ 6 millions de Juifs ont été assassinés, dont environ 77 000 Juifs de France déportés avec la complicité du régime de Vichy. Le mot 'Shoah' signifie 'catastrophe' ou 'anéantissement' en hébreu. 💡 Tip : Shoah = génocide des Juifs par les nazis. Distincte des autres crimes de guerre, c'est un génocide planifié et systématique."
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
    category: 'IV',
    explication: "L'Algérie a été une colonie française de 1830 à 1962, date de son indépendance après une guerre de 8 ans (1954-1962). La France a eu un vaste empire colonial, comprenant aussi le Maroc, la Tunisie, le Sénégal, le Vietnam et bien d'autres territoires. 💡 Tip : parmi les pays cités, seule l'Algérie a été colonisée par la France. L'Espagne et le Brésil étaient eux-mêmes des puissances coloniales."
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
    category: 'IV',
    explication: "Jules Ferry, ministre de l'Instruction publique puis président du Conseil sous la IIIe République, a fait voter les lois de 1881 (gratuité) et 1882 (laïcité et obligation) qui ont fondé l'école républicaine française. Son nom reste associé à ce projet d'éducation nationale laïque. 💡 Tip : Jules Ferry = l'homme de l'école républicaine. Son nom est souvent donné aux écoles en France en sa mémoire."
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
    category: 'IV',
    explication: "Jusqu'en 1962, le président de la Ve République était élu par un collège de grands électeurs. En octobre 1962, de Gaulle fait adopter par référendum une révision constitutionnelle instaurant l'élection du président au suffrage universel direct. La première élection présidentielle directe a eu lieu en décembre 1965. 💡 Tip : 1848 = suffrage universel masculin pour l'Assemblée. 1962 = suffrage universel direct pour le Président."
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
    category: 'IV',
    explication: "L'Union européenne en tant que telle a été créée par le Traité de Maastricht, signé le 7 février 1992 et entré en vigueur le 1er novembre 1993. Avant cel'a', il existait la Communauté économique européenne (CEE), fondée par le Traité de Rome en 1957. 💡 Tip : 1957 = CEE (Communauté économique), 1992 = UE (Union européenne). Le changement de nom marque une intégration politique plus profonde."
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
    category: 'IV',
    explication: "La Seconde Guerre mondiale a duré du 1er septembre 1939 (invasion de la Pologne par l'Allemagne nazie) au 2 septembre 1945 (capitulation du Japon). En Europe, la guerre s'est terminée le 8 mai 1945, commémoré chaque année comme jour de la Victoire. 💡 Tip : WWI = 1914-1918, WWII = 1939-1945. Quatre ans pour chacune, mais 21 ans d'écart entre leurs débuts."
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
    category: 'IV',
    explication: "La Première Guerre mondiale a duré de 1914 à 1918. Elle a été déclenchée après l'assassinat de l'archiduc François-Ferdinand à Sarajevo et a mobilisé des millions de soldats en Europe. Elle se termine par l'armistice du 11 novembre 1918. Astuce : 14-18, comme l'adresse d'une maison — facile à retenir !"
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
    category: 'IV',
    explication: "La peine de mort a été abolie en France le 9 octobre 1981, sous la présidence de François Mitterrand. C'est son garde des Sceaux, Robert Badinter, qui a porté cette réforme devant l'Assemblée nationale. La France fut l'un des derniers pays d'Europe occidentale à franchir ce pas. Astuce : Mitterrand + Badinter = abolition. Les deux noms vont ensemble."
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
    category: 'IV',
    explication: "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie et la victoire des Alliés en Europe, mettant fin à la Seconde Guerre mondiale sur le continent européen. C'est un jour férié en France appelé le « 8 mai 1945 » ou « Victoire 1945 ». Astuce : 8 mai = fin de la guerre en Europe. Le 11 novembre, c'est la fin de la Première Guerre mondiale — ne pas confondre les deux !"
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
    category: 'IV',
    explication: "En 1951, six pays (France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg) signent le traité de Paris et créent la CEC'a', première institution supranationale européenne. Elle visait à mettre en commun les ressources en charbon et en acier pour éviter de nouveaux conflits entre la France et l'Allemagne. Astuce : CECA 1951 = la première brique de l'Europe. Charbon et acier avant l'euro !"
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
    category: 'IV',
    explication: "Jean Moulin est l'un des héros emblématiques de la Résistance française. Préfet républicain, il rejoint de Gaulle à Londres et est chargé d'unifier les mouvements de résistance intérieure. Il est arrêté par la Gestapo en 1943 et meurt sous la torture. Son entrée au Panthéon en 1964 a été célébrée par le discours fameux d'André Malraux. Astuce : Jean Moulin = visage de la Résistance, mort sans parler."
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
    category: 'IV',
    explication: "Le 11 novembre 1918 à 11h du matin, l'armistice mettant fin à la Première Guerre mondiale est signé entre les Alliés et l'Allemagne. Ce jour férié commémore la fin des combats et rend hommage aux soldats tombés durant le conflit. Astuce : 11/11 à 11h = triple 11. Impossible à oublier !"
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
    category: 'IV',
    explication: "L'esclavage est d'abord aboli une première fois en 1794 par la Convention nationale, puis rétabli par Napoléon en 1802. Il est finalement aboli définitivement le 27 avril 1848, sous la IIe République, grâce au décret porté par Victor Schœlcher. Astuce : deux abolitions — 1794 (provisoire) et 1848 (définitive). Napoléon a fait marche arrière entre les deux."
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
    category: 'IV',
    explication: "Victor Schœlcher, homme politique et humaniste, est le principal artisan de l'abolition définitive de l'esclavage en 1848. En tant que sous-secrétaire d'État à la Marine et aux Colonies, il rédige le décret d'abolition signé le 27 avril 1848. Il consacra toute sa vie à la lutte contre l'esclavage et le racisme. Astuce : Schœlcher = abolition 1848. Napoléon, c'est le contraire — il l'a rétabli en 1802 !"
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
    category: 'IV',
    explication: "C'est Jules Ferry, ministre de l'Instruction publique, qui rend l'école primaire publique gratuite en 1881, puis obligatoire en 1882 et laïque en 1886. Ces réformes fondatrices constituent l'une des bases de la République française. Astuce : Jules Ferry, 1881 = école gratuite. 1882 = école obligatoire. Un an d'écart, deux grandes avancées."
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
    category: 'IV',
    explication: "Par l'ordonnance du 21 avril 1944 du Gouvernement provisoire de la République française (GPRF), les femmes obtiennent le droit de vote. Elles l'exercent pour la première fois lors des élections municipales d'avril-mai 1945. La France est l'un des derniers pays d'Europe occidentale à accorder ce droit aux femmes. Astuce : 1944 = les femmes votent en France. En pleine Libération, une autre libération !"
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
    category: 'IV',
    explication: "L'Organisation des Nations Unies (ONU) est fondée le 24 octobre 1945, après la Seconde Guerre mondiale, pour maintenir la paix internationale et favoriser la coopération entre nations. La France est l'un des cinq membres permanents du Conseil de sécurité. Astuce : ONU = 1945, née des cendres de la guerre. À ne pas confondre avec l'OTAN (1949) ou l'UE (traité de Rome, 1957)."
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
    category: 'IV',
    explication: "L'euro est introduit comme monnaie fiduciaire (billets et pièces) le 1er janvier 2002 dans les 12 pays de la zone euro, dont la France. Le franc français est alors retiré de la circulation. L'euro existait en format électronique depuis 1999, mais c'est en 2002 qu'il devient la monnaie du quotidien. Astuce : 2002 = les billets et pièces en euros arrivent dans les portefeuilles. 1999 c'est sur les écrans, 2002 c'est dans la main."
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
    category: 'IV',
    explication: "Paris est libérée le 25 août 1944, après plusieurs jours d'insurrection menée par la Résistance. Les troupes du général Leclerc (2e DB) et les forces alliées entrent dans la capitale. Le général de Gaulle descend les Champs-Élysées le 26 août au milieu d'une foule en liesse. Astuce : 6 juin = débarquement en Normandie, 25 août = Paris libre. Deux mois et demi entre les deux."
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
    category: 'IV',
    explication: "Nantes est le premier port négrier français au XVIIIe siècle. On estime que plus de 40 % des expéditions négrières françaises partaient de Nantes, faisant de la ville l'un des grands centres de la traite atlantique. Bordeaux et La Rochelle étaient aussi impliqués, mais Nantes restait le premier. Aujourd'hui, la ville abrite le Mémorial de l'abolition de l'esclavage. Astuce : Nantes = port de la honte et aujourd'hui port de la mémoire."
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
    category: 'IV',
    explication: "Voltaire a dénoncé l'esclavage notamment dans Candide (1759), où il décrit avec ironie et horreur le sort des esclaves. Plus largement, les philosophes des Lumières comme Montesquieu, Rousseau et l'abbé Raynal ont critiqué l'esclavage au nom des droits naturels de l'homme. Astuce : Voltaire = plume acérée contre l'injustice. Candide dénonçait déjà l'esclavage au XVIIIe siècle."
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
    category: 'IV',
    explication: "Les Misérables (1862) est l'un des romans les plus célèbres de Victor Hugo. Il y décrit la misère sociale dans la France du XIXe siècle à travers les personnages de Jean Valjean, Fantine et Cosette. Le Misanthrope est de Molière, Germinal d'Émile Zol'a', et Les Fleurs du mal de Charles Baudelaire. Astuce : Hugo = Les Misérables. Les \"misérables\" correspondent bien à son combat pour les pauvres et les opprimés."
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
    category: 'IV',
    explication: "Claude Monet (1840-1926) est un peintre français, fondateur du mouvement impressionniste. Il est notamment connu pour ses séries de Nymphéas et pour le tableau Impression, soleil levant (1872) qui a donné son nom au mouvement. Picasso est espagnol, Van Gogh et Rembrandt sont néerlandais. Astuce : Monet = impressionnisme français. Impression, soleil levant → Im-pression → Im-pressionnisme. Le nom vient de lui !"
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
    category: 'IV',
    explication: "Le coq au vin est un plat traditionnel de la cuisine française, consistant en un poulet mijoté dans du vin rouge avec des lardons, des champignons et des oignons. C'est un exemple typique de la cuisine bourgeoise française. La paella vient d'Espagne, la pizza d'Italie, et le sushi du Japon. Astuce : Coq au vin = coq (symbole de la France) + vin (autre symbole). Deux emblèmes français dans un seul plat !"
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
    category: 'IV',
    explication: "Marie Curie (1867-1934) est une physicienne et chimiste d'origine polonaise naturalisée française. Elle est la première femme à avoir reçu un prix Nobel, et la seule personne à en avoir reçu deux dans deux disciplines différentes : en physique (1903) et en chimie (1911). Elle a notamment découvert le polonium et le radium. Astuce : Marie Curie = deux Nobel, deux sciences. Unique dans l'histoire !"
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
    category: 'IV',
    explication: "Eugène Delacroix a peint La Liberté guidant le peuple en 1830, pour commémorer la révolution des Trois Glorieuses (27-29 juillet 1830). Le tableau représente une femme incarnant la Liberté brandissant le drapeau tricolore. Il est exposé au musée du Louvre et est l'une des œuvres les plus emblématiques de l'art français. Astuce : Delacroix = Liberté guidant le peuple. La femme au drapeau, c'est lui !"
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
    category: 'IV',
    explication: "La Joconde (Mona Lisa) de Léonard de Vinci est exposée au musée du Louvre, à Paris. C'est l'œuvre d'art la plus visitée au monde. Le Louvre est le plus grand musée du monde et abrite d'autres chefs-d'œuvre comme la Vénus de Milo et La Victoire de Samothrace. Astuce : Joconde + Louvre = duo indissociable. Si on te parle de la Joconde, pense Louvre."
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
    category: 'IV',
    explication: "Le château de Versailles, construit et agrandi sous Louis XIV (le « Roi-Soleil »), est le symbole de la monarchie absolue française. Louis XIV y installe sa cour en 1682. La Galerie des Glaces, les jardins à la française et le Grand Trianon en font l'un des monuments les plus visités au monde. Astuce : Louis XIV = Versailles. Le Roi-Soleil avait besoin d'un palais à sa mesure !"
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
    category: 'IV',
    explication: "La grotte de Lascaux, découverte en 1940 en Dordogne, abrite des peintures rupestres vieilles d'environ 17 000 ans représentant des animaux (bisons, chevaux, cerfs). Elle est classée au patrimoine mondial de l'UNESCO. La grotte originale est fermée au public pour la préserver, mais une réplique (Lascaux IV) est accessible. Astuce : Lascaux = la chapelle Sixtine de la préhistoire, comme disait Picasso."
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
    category: 'IV',
    explication: "Claude Monet a peint une série de près de 250 tableaux représentant les nymphéas (nénuphars) de son jardin à Giverny, entre 1896 et sa mort en 1926. Les grands panneaux des Nymphéas sont exposés au musée de l'Orangerie à Paris, dans des salles spécialement conçues pour eux. Astuce : Monet + Giverny + nymphéas = trio gagnant. Il vivait dans son jardin autant qu'il le peignait."
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
    category: 'IV',
    explication: "Les Journées européennes du patrimoine se tiennent chaque année en septembre (3e week-end), et permettent d'accéder gratuitement ou à tarif réduit à des centaines de monuments, musées, palais et sites habituellement fermés au public. C'est un événement coordonné au niveau européen. Astuce : Journées du patrimoine = septembre, portes ouvertes pour tous. Un week-end à ne pas rater !"
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
    category: 'IV',
    explication: "Le 1er mai est la Fête du Travail, jour férié en France depuis 1941. Il commémore les luttes ouvrières pour l'obtention de la journée de 8 heures de travail, notamment les événements de Chicago en 1886. C'est aussi le jour traditionnel d'offrande du muguet, symbole de bonheur. Astuce : 1er mai = muguet + manifestations syndicales. Les deux font partie du même jour !"
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
    category: 'IV',
    explication: "Claude Joseph Rouget de Lisle est un officier et compositeur français qui écrit et compose La Marseillaise en 1792, à Strasbourg, dans la nuit du 25 au 26 avril. À l'origine intitulé Chant de guerre pour l'armée du Rhin, le chant est popularisé par les volontaires marseillais et devient l'hymne national français en 1795, puis à nouveau en 1879. Astuce : Rouget de Lisle = La Marseillaise. Un homme, une nuit, un hymne immortel."
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
    category: 'IV',
    explication: "La Tour Eiffel a été construite par Gustave Eiffel pour l'Exposition universelle de Paris de 1889, qui commémorait le centenaire de la Révolution française. Initialement prévue pour être démontée après l'exposition, elle est finalement conservée et devient le symbole de Paris et de la France. Astuce : Tour Eiffel = 1889 = 100 ans de la Révolution. La tour est née avec l'anniversaire de la République !"
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
    category: 'IV',
    explication: "Les Alpes forment la frontière naturelle entre la France, l'Italie et la Suisse. C'est là que se trouve le mont Blanc (4 807 m), le plus haut sommet d'Europe occidentale. Les Pyrénées, elles, séparent la France de l'Espagne. Astuce : Alpes = France + Italie + Suisse. Pyrénées = France + Espagne. Deux frontières montagneuses, deux voisins différents."
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
    category: 'IV',
    explication: "Molière (1622-1673), de son vrai nom Jean-Baptiste Poquelin, est l'un des plus grands dramaturges de la littérature française. Il a écrit des comédies célèbres comme Le Misanthrope, L'Avare, Tartuffe ou Dom Juan. Il était également acteur et directeur de troupe, protégé par Louis XIV. La langue française est parfois appelée « la langue de Molière ». Astuce : Molière = le Shakespeare français. Quand on dit « la langue de Molière », c'est le français !"
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
    category: 'IV',
    explication: "Charles Baudelaire (1821-1867) est l'un des poètes les plus importants de la littérature française. Son recueil Les Fleurs du mal (1857) a révolutionné la poésie moderne et lui a valu un procès pour « offense à la morale publique ». Il est considéré comme un précurseur du symbolisme. Astuce : Baudelaire = Les Fleurs du mal. Beau titre à double sens pour un poète maudit."
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
    category: 'IV',
    explication: "George Sand (1804-1876), de son vrai nom Aurore Dupin, est une écrivaine française prolifique, auteure de plus de 70 romans comme La Mare au diable ou Indiana. Elle est aussi connue pour son engagement féministe et républicain, et pour ses relations avec des personnalités comme Frédéric Chopin. Elle utilisait un pseudonyme masculin pour être publiée et prise au sérieux. Astuce : George Sand = femme qui écrivait sous un nom d'homme. Pionnière du féminisme avant l'heure."
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
    category: 'IV',
    explication: "Simone de Beauvoir (1908-1986) est une philosophe et écrivaine française, figure majeure du féminisme du XXe siècle. Son essai Le Deuxième Sexe (1949) est un texte fondateur du féminisme moderne. Elle était également compagne de vie de Jean-Paul Sartre et engagée dans le mouvement existentialiste. Astuce : Simone de Beauvoir = « On ne naît pas femme, on le devient ». Cette phrase du Deuxième Sexe résume tout son engagement."
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
    category: 'IV',
    explication: "Albert Camus (1913-1960) est un écrivain et philosophe franco-algérien, prix Nobel de littérature en 1957. Il est l'auteur de L'Étranger, La Peste et Le Mythe de Sisyphe, œuvres au cœur de la philosophie de l'absurde. Il est l'une des figures intellectuelles les plus importantes du XXe siècle en France. Astuce : Camus = L'absurde + prix Nobel. « Il faut imaginer Sisyphe heureux » est l'une de ses citations les plus connues."
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
    category: 'IV',
    explication: "Marguerite Yourcenar (1903-1987) est une écrivaine française, auteure notamment des Mémoires d'Hadrien. En 1980, elle devient la première femme élue à l'Académie française, institution fondée en 1635 et longtemps exclusivement masculine. Astuce : Yourcenar = première femme à l'Académie française en 1980. Presque 350 ans après sa création !"
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
    category: 'IV',
    explication: "Paul Cézanne (1839-1906) est un peintre français originaire d'Aix-en-Provence, considéré comme le père de l'art moderne. Son travail sur les volumes et les formes géométriques a inspiré le cubisme de Picasso. Il est notamment connu pour ses séries de tableaux de la montagne Sainte-Victoire. Astuce : Cézanne = père de l'art moderne. Ses pommes et sa montagne Sainte-Victoire ont changé la peinture."
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
    category: 'IV',
    explication: "Auguste Rodin (1840-1917) est le plus grand sculpteur français du XIXe siècle. Ses œuvres les plus célèbres sont Le Penseur, Le Baiser et Les Bourgeois de Calais. Le musée Rodin à Paris conserve l'essentiel de son œuvre. Astuce : Rodin = Le Penseur. L'homme assis qui réfléchit, tout le monde l'a déjà vu — c'est Rodin."
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
    category: 'IV',
    explication: "Pierre-Auguste Renoir (1841-1919) est l'un des maîtres de l'impressionnisme français. Ses tableaux représentent souvent des scènes de vie joyeuses, des portraits de femmes et des paysages lumineux, comme Le Moulin de la Galette ou Le Déjeuner des canotiers. Astuce : Renoir = impressionnisme joyeux. Ses toiles respirent la joie de vivre, contrairement à Van Gogh par exemple."
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
    category: 'IV',
    explication: "Le Mont-Saint-Michel est un îlot rocheux situé en baie de Normandie (rattaché administrativement à la Manche), sur lequel est bâtie une abbaye bénédictine fondée au VIIIe siècle. C'est l'un des sites les plus visités de France et il est classé au patrimoine mondial de l'UNESCO depuis 1979. Astuce : Mont-Saint-Michel = l'île-abbaye en Normandie. On y accède à pied à marée basse !"
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
    category: 'IV',
    explication: "Lyon est la deuxième plus grande métropole de France après Paris, avec une population métropolitaine de plus de 2 millions d'habitants. C'est une ville majeure pour la gastronomie, la culture, les biopharmacie et les transports. Annecy, Colmar et Biarritz sont des villes bien plus petites. Astuce : Paris, Lyon, Marseille = le podium des plus grandes villes françaises. Dans cet ordre !"
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
    category: 'IV',
    explication: "La Martinique est une île des Caraïbes et un département et région d'outre-mer français (DROM) situé dans les Antilles. La Corse est en Méditerranée, La Réunion dans l'océan Indien, et Belle-Île est au large de la Bretagne. Astuce : Antilles françaises = Martinique + Guadeloupe. Les deux sont dans les Caraïbes, les deux sont des DROM."
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
    category: 'IV',
    explication: "La Corse est une île française située en Méditerranée, à l'est de la côte provençale. C'est une collectivité territoriale à statut particulier depuis 2018. La Sicile appartient à l'Italie, la Crète à la Grèce, et Malte est un État indépendant. Astuce : Sicile = Italie, Crète = Grèce, Corse = France. La Méditerranée est partagée entre beaucoup de pays !"
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
    category: 'IV',
    explication: "Le mont Blanc (4 807 m) est le point culminant de France et d'Europe occidentale, situé dans les Alpes, à la frontière franco-italienne près de Chamonix. Le mont Ventoux, le pic du Midi et le Puy de Dôme sont des sommets bien plus bas. Astuce : Mont Blanc = 4807 m = le toit de l'Europe de l'Ouest. Blanc comme la neige qui le couvre toute l'année."
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
    category: 'IV',
    explication: "La Réunion est un département et région d'outre-mer français (DROM) situé dans l'océan Indien, à l'est de Madagascar. La Martinique et la Guadeloupe sont dans les Caraïbes, et la Corse en Méditerranée. Astuce : Réunion = océan Indien. Martinique + Guadeloupe = Caraïbes. Mayotte aussi est dans l'océan Indien !"
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
    category: 'IV',
    explication: "La Guyane (ou Guyane française) est un département et région d'outre-mer situé en Amérique du Sud, partageant une longue frontière avec le Brésil au sud et à l'est, et avec le Suriname à l'ouest. C'est le plus grand territoire de France en superficie et la seule frontière terrestre de l'UE avec le Brésil. Astuce : Guyane = France en Amérique du Sud. Le seul département français sur le continent américain."
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
    category: 'IV',
    explication: "Le Centre spatial guyanais (CSG) de Kourou, en Guyane française, est la base de lancement européenne. Sa position géographique proche de l'équateur est idéale pour les lancements de satellites en orbite géostationnaire, car elle permet de bénéficier de la vitesse de rotation de la Terre. Toulouse est la capitale française de l'aéronautique et du spatial (Airbus, CNES), mais les lancements se font depuis Kourou. Astuce : Ariane décolle de Kourou (Guyane). La France lance ses fusées depuis l'Amérique du Sud !"
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
    category: 'IV',
    explication: "La France métropolitaine est bordée à l'ouest et au nord-ouest par l'océan Atlantique, au nord par la Manche (et la mer du Nord), et au sud par la mer Méditerranée. Cette double façade maritime en fait l'un des pays avec le plus grand accès maritime en Europe. Astuce : France = deux façades maritimes. Atlantique à l'ouest, Méditerranée au sud. La Manche est techniquement une extension de l'Atlantique."
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
    category: 'IV',
    explication: "La Manche est le bras de mer qui sépare la France (côtes normandes et bretonnes) de l'Angleterre. C'est l'une des voies maritimes les plus fréquentées au monde. Le tunnel sous la Manche, inauguré en 1994, relie Calais (France) à Folkestone (Angleterre). Astuce : La Manche = entre France et Angleterre. Et le tunnel sous la Manche relie les deux depuis 1994."
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
    category: 'IV',
    explication: "La Guadeloupe est un archipel des Antilles et un département et région d'outre-mer (DROM) français situé dans les Caraïbes. La Sicile appartient à l'Italie, les Canaries et les Baléares à l'Espagne. Les DROM français sont : Guadeloupe, Martinique, Guyane, La Réunion et Mayotte. Astuce : Les 5 DROM = Guadeloupe, Martinique, Guyane, Réunion, Mayotte. À mémoriser comme une liste !"
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
    category: 'IV',
    explication: "La France d'outre-mer désigne l'ensemble des territoires français situés en dehors de l'Europe continentale : départements (DROM), régions, collectivités et territoires d'outre-mer répartis sur tous les océans. Ces territoires font partie intégrante de la République française et leurs habitants sont citoyens français. Astuce : Outre-mer = France hors Europe. Pas des ex-colonies, pas des pays étrangers — c'est la France, juste loin !"
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
    category: 'IV',
    explication: "La France compte environ 68 millions d'habitants en 2025, ce qui en fait le 2ème pays le plus peuplé de l'Union européenne après l'Allemagne. Tip : 68 = 6 + 8 = 14, comme le 14 juillet, fête nationale — ça aide à s'en souvenir !"
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
    category: 'IV',
    explication: "Marseille-Fos est le premier port français en volume total de marchandises (environ 80 millions de tonnes par an) et le 3ème port de Méditerranée. Le Havre est premier pour les conteneurs, mais en tonnage global c'est Marseille qui domine. Tip : Marseille = Méditerranée = le plus grand port du Sud, et de France."
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
    category: 'IV',
    explication: "Depuis la réforme territoriale de 2016, la France métropolitaine compte 13 régions (contre 22 auparavant). Plusieurs régions ont fusionné, comme l'Alsace-Champagne-Ardenne-Lorraine devenue Grand Est. Tip : Avant = 22, après la réforme = 13. Retenez juste 13, le chiffre actuel."
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
    category: 'IV',
    explication: "Les Pyrénées forment la frontière naturelle entre la France et l'Espagne, s'étendant d'ouest en est de l'océan Atlantique à la mer Méditerranée. Les Alpes, elles, séparent la France de l'Italie et de la Suisse. Tip : Pyrénées = Pays ibérique (Espagne/Portugal) → P pour P."
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
    category: 'IV',
    explication: "La Réunion est un département et région d'outre-mer français situé dans l'océan Indien, au sud-est du continent africain. C'est la réponse pertinente ici car Madagascar est indépendante depuis 1960. Tip : La Réunion = île volcanique dans l'océan Indien, au large de Madagascar — c'est la France en plein tropiques."
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
    category: 'IV',
    explication: "Lyon est le chef-lieu de la région Auvergne-Rhône-Alpes, la plus grande région de France métropolitaine par sa superficie économique. C'est aussi la 2ème ville de France en termes d'agglomération. Tip : Lyon est au cœur de la région, entre les Alpes et le Massif central — facile à situer."
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
    category: 'IV',
    explication: "Rennes est le chef-lieu de la région Bretagne depuis la réforme administrative. Nantes, bien qu'historiquement liée à la Bretagne, est aujourd'hui chef-lieu de la région Pays de la Loire. Tip : Attention au piège — Nantes est souvent associée à la Bretagne culturellement, mais administrativement c'est Rennes."
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
    category: 'IV',
    explication: "Marseille est le chef-lieu de la région PACA et la 2ème plus grande ville de France. C'est aussi le premier port français. Tip : Marseille = la capitale du Sud. Chef-lieu de région ET premier port, deux rôles majeurs à retenir."
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
    category: 'IV',
    explication: "Mayotte est devenue le 101ème département français le 31 mars 2011, après un référendum en 2009 où 95 % de la population a voté pour la départementalisation. C'est un archipel situé dans l'océan Indien, entre Madagascar et le continent africain. Tip : Mayotte = le plus jeune département de France, numéro 101."
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
    category: 'IV',
    explication: "La région Auvergne-Rhône-Alpes abrite les grandes stations de ski des Alpes françaises : Courchevel, Val d'Isère, Chamonix, Les Deux Alpes, etc. C'est la principale destination de sports d'hiver en France et en Europe. Tip : Alpes = altitude = ski. La Bretagne et la Normandie, c'est la mer et la pluie, pas la neige !"
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
    category: 'IV',
    explication: "La Seine traverse Paris d'est en ouest et se jette dans la Manche au niveau du Havre. Elle est au cœur de l'histoire et du patrimoine parisien (Notre-Dame, le Louvre, la Tour Eiffel sont tous au bord de la Seine). Tip : S comme Seine, S comme Paris — la ville a même deux îles dans ce fleuve : l'île de la Cité et l'île Saint-Louis."
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
    category: 'V',
    explication: "La naissance doit être déclarée à la mairie du lieu de naissance dans les 5 jours suivant l'accouchement. C'est l'officier d'état civil de la mairie qui enregistre l'acte de naissance. Tip : La mairie gère l'état civil (naissances, mariages, décès) — c'est son rôle central dans la vie administrative."
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
    category: 'V',
    explication: "Le locataire peut peindre ou décorer l'intérieur du logement librement, dans la mesure où il remet en état à son départ si nécessaire. En revanche, toute transformation structurelle (murs porteurs, cloisons, travaux lourds) ou sous-location nécessitent l'accord écrit du propriétaire. Tip : Repeindre = usage normal du logement. Démolir = modifier le bien d'autrui → toujours demander l'autorisation."
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
    category: 'V',
    explication: "En France, seul le mariage civil, célébré devant l'officier d'état civil à la mairie, a une valeur juridique. Le mariage religieux est une démarche personnelle et spirituelle, mais il n'a aucun effet légal. Tip : En France, l'État est laïc — c'est la mairie, pas l'église ou la mosquée, qui rend le mariage officiel."
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
    category: 'V',
    explication: "Se garer sur une place réservée aux personnes handicapées sans détenir la carte mobilité inclusion (CMI) est une infraction punie d'une amende pouvant atteindre 135 €, et le véhicule peut être mis en fourrière. Aucune exception (pas de 'juste 5 minutes', pas le dimanche). Tip : Ces places sont réservées 24h/24, 7j/7. Aucune tolérance."
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
    category: 'V',
    explication: "Les appareils électroménagers sont des déchets d'équipements électriques et électroniques (DEEE). Ils doivent être déposés dans une déchetterie, un point de collecte agréé, ou remis au commerçant lors d'un achat. Les jeter dans la rue ou les brûler est interdit et sanctionné. Tip : DEEE = dépose en déchetterie. Les magasins ont l'obligation de reprendre l'ancien appareil si on en achète un neuf."
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
    category: 'V',
    explication: "Chaque naissance doit obligatoirement être déclarée à l'état civil, quel que soit le rang de l'enfant (premier, deuxième, etc.). C'est une obligation légale qui permet d'établir l'acte de naissance et d'inscrire l'enfant dans l'état civil français. Tip : Pas d'exception — tout enfant né en France doit être déclaré, toujours."
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
    category: 'V',
    explication: "La loi impose de déclarer la naissance à la mairie dans un délai de 5 jours après l'accouchement (le jour de la naissance ne compte pas). En cas de non-respect, une régularisation judiciaire est nécessaire. Tip : 5 jours — pensez à 5 doigts d'une main. C'est court, il ne faut pas attendre."
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
    category: 'V',
    explication: "Le 17 est le numéro national de la police secours, disponible 24h/24. Il faut appeler le 17 en cas d'agression, de vol, d'accident ou de tout incident nécessitant l'intervention de la police ou de la gendarmerie. Tip : Retenez 15/17/18 dans l'ordre : SAMU, Police, Pompiers. Et 112 pour tout depuis un mobile en Europe."
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
    category: 'V',
    explication: "Le 15 est le numéro du SAMU (Service d'Aide Médicale Urgente). Il faut l'appeler en cas d'urgence médicale : malaise, accident grave, détresse respiratoire. Des médecins régulateurs répondent et orientent les secours. Tip : 15 = SAMU = médical. 17 = Police. 18 = Pompiers. En ordre croissant : soins, sécurité, secours."
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
    category: 'V',
    explication: "Pour inscrire un enfant dans une école publique, les parents doivent d'abord s'adresser à la mairie de leur commune, qui attribue l'école en fonction du secteur géographique. Ensuite, l'inscription définitive se fait directement auprès du directeur de l'école. Tip : Mairie = première étape pour l'école publique. La mairie gère la carte scolaire."
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
    category: 'V',
    explication: "En France, le divorce ne met pas fin à l'autorité parentale conjointe. Les deux parents continuent d'exercer ensemble l'autorité parentale, sauf si le juge aux affaires familiales décide autrement dans l'intérêt de l'enfant. Tip : Le divorce concerne les parents entre eux, pas leur relation avec leurs enfants — l'autorité parentale reste partagée par défaut."
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
    category: 'V',
    explication: "L'aide juridictionnelle est une prise en charge par l'État des frais de justice (avocat, huissier, expert…) pour les personnes dont les ressources sont insuffisantes. Elle peut être totale ou partielle selon les revenus. Tip : Juridictionnelle = justice. C'est l'aide qui permet à tous d'accéder à la justice, même sans argent — principe d'égalité devant la loi."
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
    category: 'V',
    explication: "En France, le droit au divorce est égal pour les deux époux : l'un ou l'autre peut en faire la demande, ou les deux conjointement (divorce par consentement mutuel). Cela découle du principe d'égalité entre les femmes et les hommes. Tip : En France, l'égalité femme-homme s'applique aussi dans le mariage et le divorce. Personne d'autre ne peut décider à leur place."
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
    category: 'V',
    explication: "C'est l'Assurance maladie (branche de la Sécurité sociale) qui rembourse les frais de santé en France : consultations, médicaments, hospitalisations, etc. La carte Vitale facilite ces remboursements automatiques. Une mutuelle peut compléter ce remboursement. Tip : Sécu = remboursement de base. Mutuelle = complément. Les deux ensemble = 100% des frais dans de nombreux cas."
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
    category: 'V',
    explication: "Le travail non déclaré (ou travail au noir) est illégal en France. Il est sanctionné par des amendes et des peines d'emprisonnement pour l'employeur, et prive le salarié de ses droits (chômage, retraite, maladie, accident du travail). Tip : Travailler non déclaré = aucune protection sociale. En cas d'accident, le salarié n'est pas couvert."
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
    category: 'V',
    explication: "Le SMIC (Salaire Minimum Interprofessionnel de Croissance) est le salaire horaire minimum légal en France, en dessous duquel aucun employeur ne peut rémunérer un salarié. Il est revalorisé chaque année. Tip : SMIC = Salaire Minimum. C'est le plancher en dessous duquel on ne peut pas aller — une protection pour tous les travailleurs."
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
    category: 'V',
    explication: "S'inscrire à Pôle emploi (désormais appelé France Travail) est la première démarche recommandée : cela permet d'accéder aux offres d'emploi, à un accompagnement personnalisé, et éventuellement aux allocations chômage si on a cotisé. Tip : France Travail (ex-Pôle emploi) = guichet unique pour l'emploi en France. Gratuit et accessible à tous."
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
    category: 'V',
    explication: "La durée légale du travail en France est fixée à 35 heures par semaine depuis la loi Aubry de 2000. Les heures travaillées au-delà sont des heures supplémentaires, majorées et compensées. Tip : Les 35 heures sont une spécificité française souvent citée à l'étranger. Retenez : 35h = la semaine de travail en France."
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
    category: 'V',
    explication: "Le congé parental d'éducation est ouvert indifféremment au père ou à la mère, salarié(e), pour élever un jeune enfant. Il peut être pris à temps plein ou partiel. Cela s'inscrit dans le principe d'égalité entre les hommes et les femmes dans la vie professionnelle et familiale. Tip : En France, les droits parentaux sont égaux pour les deux parents — ni le père, ni la mère n'a un droit exclusif."
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
    category: 'V',
    explication: "Le Code du travail est la loi nationale qui encadre les relations entre employeurs et salariés (contrats, licenciements, durée du travail, etc.). Les conventions collectives sont des accords négociés par branche professionnelle qui peuvent compléter ou améliorer ces droits. Tip : Code du travail = règles générales pour tous. Convention collective = règles spécifiques à un secteur (restauration, BTP, etc.)."
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
    category: 'V',
    explication: "Le conseil de prud'hommes est un tribunal spécialisé dans les litiges individuels liés au contrat de travail : licenciement abusif, non-paiement de salaire, harcèlement, rupture de contrat, etc. Il est composé à parité d'employeurs et de salariés élus. Tip : Prud'hommes = PROfessionnel. C'est le tribunal du monde du travail, rien d'autre."
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
    category: 'V',
    explication: "La liberté syndicale est un droit constitutionnel en France. Tout travailleur, qu'il soit salarié du privé, fonctionnaire, cadre ou ouvrier, peut adhérer librement à un syndicat. Aucun employeur ne peut s'y opposer ni sanctionner un salarié pour son appartenance syndicale. Tip : La liberté syndicale est inscrite dans le préambule de la Constitution de 1946. C'est un droit fondamental, sans exception."
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
    category: 'V',
    explication: "La loi française protège fortement les femmes enceintes : le licenciement est interdit pendant la grossesse et le congé maternité, sauf en cas de faute grave non liée à la grossesse ou d'impossibilité de maintenir le contrat pour une raison indépendante. Tip : Grossesse = protection renforcée. L'employeur ne peut pas se débarrasser d'une salariée parce qu'elle est enceinte — c'est une protection clé de l'égalité femme-homme."
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
    category: 'V',
    explication: "Depuis la loi du 26 juillet 2019 (loi pour une école de la confiance), l'instruction est obligatoire dès 3 ans (entrée en maternelle) jusqu'à 16 ans révolus. Avant cette loi, elle ne débutait qu'à 6 ans. Tip : Depuis 2019, la maternelle est obligatoire. Retenez 3-16 comme la nouvelle norme."
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
    category: 'V',
    explication: "Depuis le 1er juillet 2021, le congé paternité a été allongé à 25 jours calendaires (ou 28 jours pour une naissance multiple), dont 7 jours obligatoires immédiatement après la naissance. Avant 2021, il était de seulement 11 jours. Tip : La réforme de 2021 a plus que doublé la durée du congé paternité — de 11 à 25 jours. C'est un signal fort pour l'égalité parentale."
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
    category: 'V',
    explication: "Depuis la loi du 10 juillet 2019, toutes les violences éducatives ordinaires (gifles, fessées, etc.) sont explicitement interdites en France. Cette loi a modifié le Code civil pour préciser que l'autorité parentale s'exerce sans violence physique ou psychologique. Tip : Zéro violence sur les enfants, même 'pour les éduquer'. La France a aligné sa loi sur les standards européens en 2019."
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
    category: 'V',
    explication: "La contraception désigne l'ensemble des moyens utilisés pour prévenir une grossesse non désirée : pilule, préservatif, stérilet, implant, etc. En France, l'accès à la contraception est un droit garanti et certaines méthodes sont remboursées par l'Assurance maladie. Tip : Contraception = contre + conception. Contre la conception (grossesse) non désirée."
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
    category: 'V',
    explication: "L'interruption volontaire de grossesse (IVG) est légale en France depuis la loi Veil de 1975, et entièrement remboursée par la Sécurité sociale depuis 1982. Depuis 2024, le droit à l'IVG a même été inscrit dans la Constitution française. Tip : La France est l'un des premiers pays à avoir inscrit le droit à l'IVG dans sa Constitution (mars 2024). C'est une liberté fondamentale garantie."
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
    category: 'V',
    explication: "La carte Vitale est la carte d'assuré social remise par l'Assurance maladie. Elle contient les informations administratives nécessaires au remboursement des frais de santé et permet de simplifier les démarches chez le médecin, le pharmacien ou à l'hôpital. Tip : Vitale = carte verte = santé. Ce n'est ni une carte d'identité ni une carte bancaire, mais votre sésame pour les remboursements médicaux."
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
    category: 'V',
    explication: "La mutuelle santé est une assurance complémentaire privée qui rembourse tout ou partie des frais de santé non couverts par la Sécurité sociale (ticket modérateur, dépassements d'honoraires, optique, dentaire…). Elle est souvent proposée par les employeurs. Tip : Sécu = 1er étage du remboursement. Mutuelle = 2ème étage. Les deux ensemble = couverture optimale."
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
    category: 'V',
    explication: "Le tiers payant est un dispositif qui permet au patient de ne pas avancer les frais de santé : c'est la Sécurité sociale (et éventuellement la mutuelle) qui règle directement le professionnel de santé. Très utile pour les personnes aux revenus modestes. Tip : Tiers = tierce personne qui paie à votre place. Vous ne sortez pas d'argent de votre poche chez le médecin."
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
    category: 'V',
    explication: "En France, l'égalité entre les femmes et les hommes est un principe constitutionnel. Une femme peut créer et diriger une entreprise exactement dans les mêmes conditions qu'un homme, sans aucune autorisation maritale. Tip : En France, une femme n'a besoin de l'autorisation de personne pour entreprendre. L'égalité professionnelle est un droit fondamental."
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
    category: 'V',
    explication: "Un ressortissant étranger peut créer une entreprise en France, mais sous conditions : il doit notamment disposer d'un titre de séjour l'autorisant à exercer une activité indépendante. Les ressortissants de l'UE bénéficient de la liberté d'établissement sans restriction. Tip : Conditions légales = titre de séjour adapté pour les non-Européens. Les Européens, eux, ont la liberté totale d'entreprendre en France."
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
    category: 'V',
    explication: "L'instruction est obligatoire. En cas d'absences répétées et non justifiées, les parents peuvent recevoir un rappel à l'ordre, puis une amende (750 €), et dans certains cas une suspension des allocations familiales. L'objectif est de protéger le droit à l'éducation de l'enfant. Tip : L'État prend l'école très au sérieux. Les sanctions financières sont là pour que les parents s'impliquent dans la scolarité."
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
    category: 'V',
    explication: "La Journée Défense et Citoyenneté (JDC) est une journée obligatoire organisée par le ministère des Armées pour tous les jeunes Français (filles et garçons) entre 16 et 25 ans. Elle remplace le service militaire et vise à informer les jeunes sur la défense nationale et la citoyenneté. Tip : JDC = obligatoire pour tous les jeunes Français. Ce n'est pas un examen, c'est une journée d'information civique et militaire."
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
    category: 'V',
    explication: "L'attestation de participation à la JDC est obligatoire pour s'inscrire aux examens et concours soumis au contrôle de l'autorité publique (baccalauréat, CAP, permis de conduire, concours de la fonction publique…) avant l'âge de 25 ans. Sans elle, ces inscriptions sont bloquées. Tip : JDC = sésame indispensable pour le permis et le bac. Impossible de s'y soustraire si on veut passer ces examens."
  }
];
