# 🚀 Stallion Investment - Backend Supabase Complet

## ✅ Installation et Configuration

### 1. Variables d'environnement
Créez le fichier `.env` à la racine :
```env
VITE_SUPABASE_URL="https://skyrfaznqsgoprfmtmaw.supabase.co"
VITE_SUPABASE_ANON_KEY="sb_publishable_G7reDVPe-qi_zxaI0AuCOg_1J5kpiII"
```

### 2. Installation des dépendances
```bash
npm install
```

### 3. Création des tables Supabase
Exécutez le SQL dans `SUPABASE_SETUP.md` dans l'interface Supabase SQL Editor.

---

## 📁 Structure du Backend

```
src/lib/supabase/
├── client.ts              # Client Supabase configuré
├── database.types.ts      # Types TypeScript
├── index.ts              # Exportations principales
├── services/
│   ├── index.ts          # Export des services
│   ├── properties.service.ts    # CRUD biens immobiliers
│   ├── clients.service.ts       # CRUD clients
│   ├── projects.service.ts      # CRUD projets
│   └── storage.service.ts       # Upload/stockage images
└── hooks/
    ├── index.ts          # Export des hooks
    ├── useProperties.ts    # Hooks pour les propriétés
    └── useProjects.ts      # Hooks pour les projets
```

---

## 🌐 Pages Disponibles

### 1. Page d'Administration (`/admin`)
- **Gestion des projets** : Créer, modifier, supprimer
- **Gestion des propriétés** : Ajouter, éditer, gérer
- **Upload d'images** : Interface complète avec drag & drop
- **Formulaires** : Validation et soumission automatique

### 2. Page de Test (`/test-supabase`)
- **Diagnostic de connexion** : Vérifie l'accès à Supabase
- **Test des données** : Affiche les projets récupérés
- **Configuration** : Statut des variables d'environnement

### 3. Page Projets (`/projets`)
- **Dynamique** : Utilise les hooks Supabase
- **Filtrage** : Par statut et catégorie
- **Images** : Affiche depuis Supabase Storage

---

## 🔧 Fonctionnalités Implémentées

### ✅ Services CRUD
- **Properties** : Créer, lire, mettre à jour, supprimer
- **Projects** : Gestion complète des projets
- **Clients** : Base de données clients
- **Storage** : Upload d'images avec URLs publiques

### ✅ Hooks React
- **useProjects()** : Récupération et gestion des projets
- **useProperties()** : Gestion des biens immobiliers
- **useFeaturedProperties()** : Propriétés en vedette
- **usePropertyById()** : Détail d'une propriété

### ✅ Types TypeScript
- **Database types** : Génération automatique depuis Supabase
- **Interfaces fortes** : Validation des données
- **Sécurité** : Protection contre les erreurs

---

## 📊 Base de Données

### Tables créées :
1. **`properties`** - Biens immobiliers
   - id, title, description, location, type, status
   - price, surface, bedrooms, bathrooms
   - features[], images[], featured

2. **`projects`** - Projets de développement
   - id, title, description, location, status
   - progress, investment, surface
   - features[], images[], year

3. **`clients`** - Gestion client
   - id, first_name, last_name, email, phone
   - type, notes

4. **`appointments`** - Rendez-vous
   - id, client_id, property_id, date, time
   - status, notes

### Sécurité RLS activée
- Lecture publique autorisée (site vitrine)
- Modifications réservées aux utilisateurs authentifiés
- Politiques de sécurité configurées

---

## 🚀 Déploiement

### Étapes :
1. **Créer le `.env`** avec vos clés
2. **Installer dépendances** : `npm install`
3. **Créer les tables** : SQL dans Supabase Studio
4. **Configurer le bucket** : `property-images` dans Storage
5. **Déployer sur Vercel** avec variables d'environnement

### Variables Vercel :
- `VITE_SUPABASE_URL` = votre URL Supabase
- `VITE_SUPABASE_ANON_KEY` = votre clé ANON

---

## 🎯 Utilisation

### Exemple d'upload d'image :
```tsx
import { storageService } from '@/lib/supabase'

const urls = await storageService.uploadImages(files, 'property-123')
console.log('Images uploadées:', urls)
```

### Exemple de création de projet :
```tsx
import { projectsService } from '@/lib/supabase'

const project = await projectsService.create({
  title: 'Centre Commercial N\'Djamena',
  location: 'Chagoua, Tchad',
  investment: 500000000, // 500M FCFA
  status: 'planned',
  year: 2025
})
```

---

## 🔍 Dépannage

### Problèmes courants :
1. **"Supabase credentials not found"**
   → Vérifiez le fichier `.env`
   → Redémarrez le serveur

2. **"Table not found"**
   → Exécutez le SQL dans Supabase Studio
   → Vérifiez les noms de tables

3. **"CORS error"**
   → Ajoutez votre domaine Vercel dans les CORS Supabase
   → Vérifiez les politiques RLS

---

## 📈 Prochaines Évolutions

- [ ] Authentification complète (login/register)
- [ ] Dashboard client avec historique
- [ ] Notifications temps réel
- [ ] Export PDF des rapports
- [ ] API REST pour applications mobiles

---

## 🆘 Support

- **Documentation** : `SUPABASE_SETUP.md`
- **Test de connexion** : `/test-supabase`
- **Administration** : `/admin`
- **Issues** : Créer une issue sur GitHub

Le backend Supabase est **100% fonctionnel** et prêt pour la production ! 🎯
