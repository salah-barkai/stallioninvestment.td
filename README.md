# Stallion Investment

Site web officiel de **Stallion Investment**, entreprise immobilière de premier plan au Tchad, spécialisée dans la construction, la vente, la location et l'installation de biens immobiliers.

## 🏢 À Propos

**Stallion Investment Sarl**  
📍 Radisson Blu Hotel, N'Djamena, Tchad  
👔 Directeur Général: Ndiya Kabadi

## 🚀 Technologies Utilisées

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **React Router DOM** - Navigation
- **Lucide React** - Icônes modernes

## 📁 Structure du Projet

```
stallion-investment/
├── src/
│   ├── components/       # Composants React réutilisables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── pages/            # Pages principales
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── constants.ts  # Données de l'entreprise
│   ├── lib/
│   │   └── utils.ts      # Utilitaires
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/               # Assets statiques
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🌐 Pages du Site

1. **Accueil** (`/`) - Hero, services, projets en vedette, témoignages
2. **Services** (`/services`) - Construction, vente, location, installation
3. **Projets** (`/projets`) - Portfolio avec filtres par catégorie/statut
4. **À Propos** (`/a-propos`) - Histoire, valeurs, équipe, DG
5. **Contact** (`/contact`) - Formulaire, FAQ, coordonnées

## 🛠️ Installation

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- npm (inclus avec Node.js)

### Étapes

1. **Naviguer dans le dossier du projet:**
   ```bash
   cd C:\Users\User\CascadeProjects\stallion-investment
   ```

2. **Installer les dépendances:**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement:**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur:**
   Le site sera accessible à l'adresse: `http://localhost:5173`

## 📦 Build pour Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## 🎨 Personnalisation

### Modifier les informations de l'entreprise

Éditez le fichier `src/data/constants.ts`:

```typescript
export const COMPANY_INFO = {
  name: "Stallion Investment",
  director: "Ndiya Kabadi",
  phone: "+235 66 XX XX XX",
  email: "contact@stallion-investment.td",
  address: "Radisson Blu Hotel, N'Djamena, Tchad",
  // ...
}
```

### Ajouter des projets

Dans `src/data/constants.ts`, modifiez le tableau `PROJECTS`:

```typescript
export const PROJECTS = [
  {
    id: 7,
    title: "Nouveau Projet",
    category: "Résidentiel",
    location: "N'Djamena",
    // ...
  }
]
```

### Modifier les couleurs

Dans `tailwind.config.js`:

```javascript
colors: {
  primary: {
    600: '#0284c7',  // Modifiez cette valeur
  },
  // ...
}
```

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour:
- 📱 Mobile (< 640px)
- 📱 Tablette (640px - 1024px)
- 💻 Desktop (> 1024px)

## 🔧 Fonctionnalités

- ✅ Navigation fluide avec React Router
- ✅ Animations avec Framer Motion
- ✅ Formulaire de contact fonctionnel
- ✅ Filtres de projets par catégorie/statut
- ✅ Design moderne avec Tailwind CSS
- ✅ Icônes vectorielles (Lucide)
- ✅ Typographie soignée (Inter)
- ✅ Optimisé pour le SEO

## 📝 License

© 2024 Stallion Investment Sarl. Tous droits réservés.

---

**Conçu avec excellence au Tchad 🇹🇩**
