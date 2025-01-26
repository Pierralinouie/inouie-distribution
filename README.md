# Inouïe Distribution Playlistes

Plateforme de soumission de titres et playlists pour Inouïe Distribution.

## Installation

```bash
# Installer les dépendances
npm install

# Configurer la base de données
npx prisma generate
npx prisma db push

# Lancer le serveur de développement
npm run dev
```

## Configuration

1. Créer un fichier `.env.local` à partir du fichier `.env.example`
2. Configurer les variables d'environnement :
   - Base de données PostgreSQL
   - Clés Stripe
   - JWT Secret

## Fonctionnalités

- Soumission de titres (payant)
- Soumission de playlists (gratuit)
- Système d'authentification
- Interface d'administration
- Paiement sécurisé via Stripe

## Tests

```bash
# Lancer les tests
npm test

# Lancer les tests en mode watch
npm run test:watch
```

## Technologies utilisées

- Next.js
- TypeScript
- Prisma
- PostgreSQL
- Stripe
- Tailwind CSS