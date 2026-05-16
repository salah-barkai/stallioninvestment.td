# Configuration Supabase pour Stallion Investment

## 📋 Prérequis

1. Créer un compte sur [Supabase](https://supabase.com)
2. Créer un nouveau projet
3. Récupérer l'URL et la clé anonyme dans les paramètres du projet

## 🔧 Configuration

### 1. Variables d'environnement

Copiez le fichier `.env.example` vers `.env` et remplacez les valeurs :

```bash
cp .env.example .env
```

Dans le fichier `.env` :
```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-clé-anon-ici
```

### 2. Installation des dépendances

```bash
npm install
```

### 3. Création des tables (SQL)

Dans l'interface SQL Editor de Supabase, exécutez :

```sql
-- Table des propriétés (biens immobiliers)
CREATE TABLE properties (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  location TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('residential', 'commercial', 'land')),
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'sold', 'rented')),
  price INTEGER NOT NULL,
  surface INTEGER,
  bedrooms INTEGER,
  bathrooms INTEGER,
  features TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false
);

-- Table des clients
CREATE TABLE clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  type TEXT NOT NULL CHECK (type IN ('buyer', 'seller', 'renter', 'investor')),
  notes TEXT
);

-- Table des rendez-vous
CREATE TABLE appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  time TIME NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  notes TEXT
);

-- Table des projets
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  location TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'planned' CHECK (status IN ('planned', 'in_progress', 'completed')),
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  investment INTEGER DEFAULT 0,
  surface INTEGER DEFAULT 0,
  features TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  year INTEGER DEFAULT EXTRACT(YEAR FROM CURRENT_DATE)
);

-- Politiques de sécurité (RLS)
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Politique : lecture publique pour tous
CREATE POLICY "Allow public read" ON properties FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON clients FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON appointments FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON projects FOR SELECT USING (true);

-- Politique : insertion/modification/suppression uniquement pour les utilisateurs authentifiés
CREATE POLICY "Allow authenticated insert" ON properties FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update" ON properties FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete" ON properties FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert" ON clients FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update" ON clients FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete" ON clients FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert" ON appointments FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update" ON appointments FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete" ON appointments FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert" ON projects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update" ON projects FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete" ON projects FOR DELETE USING (auth.role() = 'authenticated');
```

### 4. Configuration du stockage (Images)

Dans Supabase Studio :
1. Allez dans "Storage"
2. Créez un bucket nommé `property-images`
3. Définissez la politique de stockage publique pour les lectures
4. Limitez l'upload aux utilisateurs authentifiés

## 🚀 Utilisation dans l'application

### Exemple d'utilisation des hooks

```tsx
import { useProperties, useFeaturedProperties } from '@/lib/supabase'

function PropertiesList() {
  const { properties, loading, error } = useProperties()
  
  if (loading) return <div>Chargement...</div>
  if (error) return <div>Erreur: {error.message}</div>
  
  return (
    <div>
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
```

### Exemple d'utilisation des services

```tsx
import { propertiesService } from '@/lib/supabase'

// Créer un nouveau bien
const newProperty = await propertiesService.create({
  title: 'Villa Moderne N\'Djamena',
  description: 'Superbe villa avec piscine',
  location: 'Moursal, N\'Djamena',
  type: 'residential',
  price: 150000000,
  surface: 450,
  bedrooms: 4,
  bathrooms: 3,
  features: ['Piscine', 'Jardin', 'Garage'],
  images: ['url1.jpg', 'url2.jpg'],
  featured: true
})
```

## 📁 Structure des fichiers

```
src/lib/supabase/
├── client.ts              # Client Supabase configuré
├── database.types.ts      # Types TypeScript
├── index.ts              # Exportations principales
├── services/
│   ├── index.ts          # Export des services
│   ├── properties.service.ts
│   ├── clients.service.ts
│   └── projects.service.ts
└── hooks/
    ├── index.ts          # Export des hooks
    ├── useProperties.ts
    └── useProjects.ts
```

## 🔐 Sécurité

- RLS (Row Level Security) activé sur toutes les tables
- Lecture publique autorisée (pour le site vitrine)
- Modification réservée aux utilisateurs authentifiés
- Variables d'environnement pour les clés API

## 📝 Notes

- Les prix sont stockés en FCFA (entiers)
- Les images sont stockées comme URLs dans un array
- Les features sont stockées comme array de strings
- Les dates sont au format ISO 8601
