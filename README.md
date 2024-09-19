# Test Xplor de Pierre Label

Les tâches effectuées sont les 1, 2, 4 et 5.

## ▶️ Youtube demo video

[![Watch the video](https://img.youtube.com/vi/16mbBtTJmXo/maxresdefault.jpg)](https://youtu.be/16mbBtTJmXo)

## Contourner la limitation de l'API github

Sans authentication la limite de l'API est vite atteinte (60 requêtes par heure).

Si la situation se présente veuillez décommenter la ligne 18 de useFetch.ts `Authorization: authStr,`

Veuillez aussi ajouter un PAT classic dans config.ts
Si github détecte ce token sur le web il peut être révoker sans avertissement.

## Installation et Lancement

Veuillez cloner le repo et ouvrir un terminal dans le dossier.

Veuillez lancer `npm i && npm start`.

## Unit tests

Veuillez lancer `npm run unit-test`.

## Cypress

Veuillez lancer le serveur de dev sur le port 3000 en local.

Veuillez lancer `npx cypress open`.
