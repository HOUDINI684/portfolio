# Portfolio – Stéphane Tossa

Site statique (HTML/CSS). Aucune installation nécessaire.

## Aperçu en local
Ouvre `index.html` dans ton navigateur, ou lance « Open with Live Server » dans VS Code.

## Déployer sur Vercel

### Option A – Glisser-déposer
1. Va sur https://vercel.com/new et connecte-toi.
2. Choisis l'import d'un dossier local (ou utilise l'option B ci-dessous).

### Option B – Via GitHub (recommandé)
1. Crée un dépôt GitHub `portfolio` et envoie-y ces fichiers.
2. Sur Vercel : Add New > Project > importe le dépôt.
3. Framework Preset : « Other ». Ne change rien d'autre, puis Deploy.
4. Chaque `git push` met ensuite le site à jour automatiquement.

### Option C – Ligne de commande
```
npm i -g vercel
cd portfolio
vercel --prod
```

## Personnaliser
- Textes : `index.html`
- Couleurs : variables en haut de `style.css`
- Numéro WhatsApp, e-mail, LinkedIn : section « Contact » de `index.html`
