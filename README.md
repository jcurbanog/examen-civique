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

### 3. Mode Examen (Examen)
- Simulation d'examen réel
- 40 questions aléatoires (minimum 5 par catégorie)
- Chronomètre de 45 minutes
- Notation finale : 32/40 requis pour réussir
- Sauvegarde des tentatives dans le localStorage
- Revue des réponses incorrectes

### 4. Historique (Historique)
- Visualisation de toutes les tentatives d'examen
- Statistiques : tentatives totales, réussites, score moyen
- Bouton "Réviser" pour pratiquer les questions manquées
- Classement chronologique inversé (plus récent en premier)

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

## 🔧 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 📄 Licence

Ce projet est destiné à un usage personnel pour la préparation à l'examen de naturalisation française.
