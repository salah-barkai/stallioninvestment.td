-- Insertion des projets Stallion Investment dans Supabase

INSERT INTO projects (title, description, location, status, progress, investment, surface, features, images, year) VALUES
(
  'Centre Commercial N''Djamena',
  'Centre commercial moderne de 15 000 m² avec espaces de vente, restaurants et cinémas au cœur de la capitale tchadienne.',
  'N''Djamena, Tchad',
  'in_progress',
  65,
  5000000000,
  15000,
  ARRAY['Espaces commerciaux', 'Restaurants', 'Cinéma', 'Parking souterrain', 'Climatisation centrale'],
  ARRAY['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800'],
  2025
),

(
  'Résidence Les Jardins de Chagoua',
  'Ensemble résidentiel haut de gamme de 120 appartements avec piscine, espaces verts et sécurité 24/7.',
  'Chagoua, N''Djamena',
  'planned',
  0,
  3500000000,
  8500,
  ARRAY['Appartements 2-4 pièces', 'Piscine', 'Espaces verts', 'Sécurité 24/7', 'Parking'],
  ARRAY['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'],
  2026
),
(
  'Complexe Agro-Industriel du Logone',
  'Complexe agro-industriel intégré pour la transformation des produits agricoles locaux avec unités de production et stockage.',
  'Moundou, Tchad',
  'completed',
  100,
  2800000000,
  12000,
  ARRAY['Unité de transformation', 'Entrepôts frigorifiques', 'Laboratoire qualité', 'Centre logistique'],
  ARRAY['https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800'],
  2024
);
