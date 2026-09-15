# Déploiement sur Vercel

## ✅ Prérequis avant déploiement

### 1. Fichier `.env` créé
Assurez-vous d'avoir créé le fichier `.env` à la racine :
```env
VITE_SUPABASE_URL="https://skyrfaznqsgoprfmtmaw.supabase.co"
VITE_SUPABASE_ANON_KEY="sb_publishable_G7reDVPe-qi_zxaI0AuCOg_1J5kpiII"
```

**Important** : Le fichier `.env` ne sera PAS uploadé sur GitHub (protégé par `.gitignore`), mais vous devrez configurer les variables sur Vercel.

### 2. Tables Supabase créées
Exécutez le SQL dans `SUPABASE_SETUP.md` dans l'interface Supabase SQL Editor pour créer les tables.

---

## 🚀 Étapes de déploiement

### Étape 1 : Push sur GitHub

```bash
# Initialiser git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Ajout du backend Supabase"

# Créer un repo sur GitHub, puis pousser
git remote add origin https://github.com/votre-username/stallion-investment.git
git branch -M main
git push -u origin main
```

### Étape 2 : Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez votre compte GitHub
2. Cliquez sur "Add New Project"
3. Sélectionnez le repository `stallion-investment`
4. Dans la configuration du projet :

#### Framework Preset
- Sélectionnez **Vite**

#### Build Settings
- **Build Command** : `npm run build`
- **Output Directory** : `dist`

#### Variables d'environnement (IMPORTANT !)
Cliquez sur "Environment Variables" et ajoutez :

| Variable | Value |
|----------|-------|
| `VITE_SUPABASE_URL` | `https://skyrfaznqsgoprfmtmaw.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `sb_publishable_G7reDVPe-qi_zxaI0AuCOg_1J5kpiII` |

5. Cliquez sur **Deploy**

---

## 🔧 Configuration Supabase pour la production

### Autoriser le domaine Vercel

Dans Supabase Studio :
1. Allez dans **Authentication** → **URL Configuration**
2. Dans "Site URL", ajoutez votre URL Vercel :
   ```
   https://votre-projet.vercel.app
   ```
3. Dans "Redirect URLs", ajoutez :
   ```
   https://votre-projet.vercel.app/**
   ```

### CORS Configuration (si nécessaire)

Dans Supabase Studio :
1. Allez dans **Settings** → **API** → **CORS**
2. Ajoutez votre domaine Vercel dans les origines autorisées

---

## ✅ Vérification post-déploiement



Testez ces fonctionnalités sur le site en production :
- [ ] La page d'accueil s'affiche
- [ ] Les secteurs d'investissement s'affichent
- [ ] Les projets se chargent depuis Supabase
- [ ] Les images s'affichent correctement

---

## 🚨 Points importants

### Sécurité
- ✅ La clé `ANON_KEY` est safe pour le frontend (lecture seule par défaut)
- ✅ Les modifications nécessitent une authentification
- ✅ Les RLS (Row Level Security) protègent vos données

### Limites gratuites
- **Supabase** : 500MB base de données, 1GB stockage
- **Vercel** : Bande passante illimitée, builds gratuits

### Nom de domaine personnalisé
Sur Vercel, vous pouvez ajouter votre propre domaine (ex: `stallioninvestment.td`) dans **Settings** → **Domains**.

---

## 🆘 Dépannage courant

### "Failed to load resource" (erreur 401)
→ Vérifiez que les variables d'environnement sont bien configurées sur Vercel

### "Table not found"
→ Les tables Supabase ne sont pas créées. Exécutez le SQL dans Supabase Studio.

### Images qui ne s'affichent pas
→ Vérifiez le bucket `property-images` dans Supabase Storage et ses permissions.

---

## 📞 Besoin d'aide ?

Documentation officielle :
- [Vercel + Vite](https://vercel.com/docs/frameworks/vite)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
