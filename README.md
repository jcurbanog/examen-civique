# Quiz Civique - Application de Préparation à l'Examen de Naturalisation Française

Une application web moderne pour préparer l'examen civique requis pour la naturalisation française. L'application contient 247 questions réparties en 5 catégories.

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Lancement en mode développement

```bash
npm run dev
```

L'application sera accessible à l'adresse : `http://localhost:5173/`

### Build pour production

```bash
npm run build
```

## 📱 Fonctionnalités

### 1. Mode Quiz (Quiz)
- Questions aléatoires une par une
- Réponses mélangées à chaque question
- Flux en 3 clics : sélectionner → vérifier → question suivante
- Feedback immédiat (correct/incorrect)

### 2. Liste Complète (Liste)
- Accès à toutes les 247 questions
- Barre de recherche avec tolérance aux fautes de frappe
- Filtrage par catégorie (5 catégories disponibles)
- Défilement infini (chargement de 20 questions à la fois)
- Accordéons automatiquement dépliés si ≤5 résultats

### 3. Mode Examen (Simulation)
- Simulation d'examen réel
- 40 questions aléatoires (minimum 5 par catégorie)
- Chronomètre de 45 minutes
- Notation finale : 32/40 requis pour réussir
- Case à cocher obligatoire confirmant la lecture de la section "À propos"
- Sauvegarde des tentatives dans le localStorage
- Revue des réponses incorrectes

### 4. Historique (Historique)
- Visualisation de toutes les tentatives d'examen
- Statistiques : tentatives totales, réussites, score moyen
- Bouton "Réviser" pour pratiquer les questions manquées
- Classement chronologique inversé (plus récent en premier)

### 5. À propos (À propos)
- Informations sur les sources des questions
- Avertissements et disclaimers importants
- Ressources officielles recommandées
- Informations légales et licence open source

## 🎯 Catégories de Questions

1. **Principes et valeurs de la République** (38 questions)
2. **Système institutionnel et politique** (55 questions)
3. **Droits et devoirs** (37 questions)
4. **Histoire, géographie et culture** (81 questions)
5. **Vivre dans la société française** (36 questions)

## 🛠️ Technologies Utilisées

- **React 19** avec **TypeScript**
- **Vite** - Build tool rapide
- **React Router DOM** - Navigation
- **Tailwind CSS** - Styling moderne
- **Fuse.js** - Recherche floue
- **Lucide React** - Icônes
- **localStorage** - Persistance des données
- **Datadog** - Analytics anonymes (optionnelles avec consentement)

## 📐 Architecture

```
quiz-app/
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Layout.tsx     # Navigation responsive
│   │   ├── QuestionCard.tsx
│   │   └── Accordion.tsx
│   ├── views/             # Pages principales
│   │   ├── MainView.tsx   # Mode quiz
│   │   ├── ListView.tsx   # Liste complète
│   │   ├── MockView.tsx   # Mode examen
│   │   ├── HistoryView.tsx
│   │   └── ReviewView.tsx
│   ├── data/              # Données des questions
│   │   ├── types.ts
│   │   ├── categories.ts
│   │   └── questions.ts   # 247 questions
│   └── utils/             # Fonctions utilitaires
│       ├── storage.ts     # localStorage
│       └── quiz.ts        # Logique du quiz
```

## 📱 Design Responsive

- **Mobile First** : Optimisé pour les smartphones
- **Navigation adaptative** :
  - Mobile : Menu drawer coulissant
  - Desktop : Navbar fixe en haut
- **Composants tactiles** : Boutons et cartes adaptés au touch

## 💾 Stockage Local

L'application utilise le localStorage pour :
- Sauvegarder les tentatives d'examen
- Suivre les questions incorrectes
- Permettre la révision ciblée

Clé utilisée : `quiz-attempts`

Format :
```json
{
  "2026-01-15T20:30:00.000Z": [12, 45, 78, 103, 156, 189, 201, 234]
}
```

## 🎨 Thème et Couleurs

- Design moderne et épuré
- Palette de couleurs : bleu, vert, rouge pour les feedbacks
- Interface en français
- Accessibilité optimisée

## 📝 Notes de Développement

- Toutes les questions proviennent du fichier `QCM.md`
- Les réponses sont mélangées aléatoirement à chaque affichage
- Le mode examen respecte le format officiel (40 questions, 45 minutes)
- Seuil de réussite : 80% (32/40)

## ⚠️ Avertissement Important

### Source des questions

Les questions de cette application proviennent des ressources officielles fournies par le gouvernement français pour la préparation à l'examen civique de naturalisation :

- [Naturalisation française : comment passer l'examen civique ?](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)

**Important :** Bien que les énoncés des questions proviennent des ressources officielles, les options de réponse multiples (y compris les réponses marquées comme "correctes") ont été générées par intelligence artificielle (Gemini) et **peuvent contenir des erreurs ou ne pas représenter fidèlement l'examen réel**.

### Clause de non-responsabilité

Cette application doit être utilisée uniquement comme un **outil complémentaire de préparation** à l'examen civique, mention naturalisation. Elle ne remplace pas l'étude des documents officiels.

**L'auteur décline toute responsabilité** quant aux préjudices qui pourraient résulter de l'utilisation exclusive de cet outil. La préparation à l'examen relève de la responsabilité individuelle de chaque candidat. L'auteur n'a aucun lien avec les autorités officielles et ne dispose pas d'un accès privilégié aux questions ou réponses de l'examen réel.

### Recommandations

- Consultez les sources officielles pour une préparation complète
- Utilisez cette application en complément d'autres ressources
- Vérifiez toujours les informations importantes avec les documents officiels
- Cette application ne garantit pas le succès à l'examen

## 📄 Licence et Code Source

Cette application est **gratuite** et son code source est disponible sous licence open source.

**Code source :** [Lien GitHub à ajouter]

Les contributions et suggestions d'amélioration sont les bienvenues.

## 🔒 Protection des Données

### Données locales

Toutes vos informations personnelles (historique des tentatives, progression) sont stockées localement dans votre navigateur via le localStorage et ne sont jamais transmises à des serveurs externes.

### Analyses anonymes (optionnelles)

Avec votre consentement, nous collectons des données d'utilisation anonymes via Datadog pour améliorer l'application :

- **Données collectées** : Taux de réussite, usage de l'application, erreurs techniques
- **Informations réseau** : Adresse IP, localisation approximée (ville, pays) basée sur l'IP
- **Aucune donnée personnelle identifiable** : Nous ne collectons ni nom, ni email, ni autre information personnelle

**Vous gardez le contrôle** : Ces analyses sont entièrement optionnelles. Un bandeau de consentement vous permet d'accepter ou de refuser en un clic. Vous pouvez révoquer votre consentement à tout moment en effaçant les données de navigation de votre navigateur.

## 🔧 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 🌐 Ressources Officielles

Pour une préparation complète à l'examen civique, consultez les ressources officielles :

- [Guide officiel de l'examen civique](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)
- [Ministère de l'Intérieur - Immigration](https://www.immigration.interieur.gouv.fr/)
- Livret du citoyen (disponible sur Service-Public.fr)
- Charte des droits et devoirs du citoyen français

## 📞 Contact et Contributions

Cette application est un projet open source. Pour signaler des problèmes, suggérer des améliorations ou contribuer :

- Ouvrez une issue sur GitHub
- Soumettez une pull request
- Consultez le code source : [Lien à ajouter]

## ⚖️ Informations Légales Complémentaires

**Propriété intellectuelle :** Les questions proviennent de sources gouvernementales françaises officielles. Les options de réponse générées et le code de l'application sont fournis sous licence open source.

**Utilisation :** Cette application est destinée à un usage personnel et éducatif uniquement.

**Modification :** L'auteur se réserve le droit de modifier, mettre à jour ou interrompre l'application à tout moment.

---

## 📋 Disclaimer / Clause de non-responsabilité

Cette application est fournie "en l'état", sans garantie d'aucune sorte. En l'utilisant, vous reconnaissez et acceptez que :

- Les informations peuvent contenir des inexactitudes
- L'application ne garantit pas le succès à l'examen officiel
- Vous devez consulter les sources officielles pour une préparation complète
- L'auteur ne peut être tenu responsable des résultats obtenus à l'examen

---

**Version :** 1.0.0 - Janvier 2026

Ce projet est destiné à la préparation à l'examen civique pour la naturalisation française.
