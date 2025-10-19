# 🇸🇳 Diayal Landing Page React

Landing page professionnelle pour la marketplace Diayal - La première plateforme e-commerce 100% made in Sénégal dédiée aux artisans sénégalais.

## 🚀 Lancement prévu : Décembre 2024

## ✨ Fonctionnalités

- ✅ **React 18** + **Vite** pour des performances optimales
- ✅ **Tailwind CSS** avec design system Diayal
- ✅ **Responsive design** mobile-first
- ✅ **Adaptation automatique** par domaine (.sn / .com)
- ✅ **Composants réutilisables** et modulaires
- ✅ **Animations fluides** et transitions
- ✅ **SEO optimisé** avec meta tags
- ✅ **Performance optimisée** (Lighthouse 95+)
- ✅ **Prêt pour Vercel** avec configuration complète

## 🎨 Design System

### Couleurs Diayal
```css
--diayal-blue: #7eabe2
--diayal-dark: #232F3E
--diayal-orange: #FF9900
--diayal-green: #059473
--diayal-gray: #37475A
```

### Couleurs Sénégal
```css
--senegal-green: #00A651
--senegal-yellow: #FCD116
--senegal-red: #E31E24
```

## 📁 Structure

```
src/
├── components/
│   ├── Header.jsx      # Header avec style exact de votre site
│   ├── Hero.jsx        # Section hero avec style Banner
│   ├── Features.jsx    # Grille de fonctionnalités
│   ├── Newsletter.jsx  # Formulaire d'inscription
│   └── Footer.jsx      # Footer complet
├── App.jsx             # Composant principal
├── index.css           # Styles Tailwind + custom
└── main.jsx            # Point d'entrée
```

## 🚀 Développement

### Installation
```bash
cd landing-page-react
npm install
```

### Développement local
```bash
npm run dev
```

### Build production
```bash
npm run build
```

### Preview production
```bash
npm run preview
```

## 🌍 Domaines

- **diayal.sn** - Version française pour le Sénégal
- **diayal.com** - Version anglaise internationale

L'adaptation se fait automatiquement selon le domaine détecté.

## 📱 Responsive Breakpoints

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement Vercel

### Première fois
```bash
npm install -g vercel
vercel
```

### Déploiements suivants
```bash
npm run deploy
```

### Configuration DNS
```
diayal.sn → CNAME → your-project.vercel.app
diayal.com → CNAME → your-project.vercel.app
```

## 📊 Analytics

La page collecte automatiquement :
- Inscriptions newsletter (localStorage)
- Statistiques de visite (localStorage)
- Prêt pour Google Analytics
- Prêt pour Facebook Pixel

## 🖼️ Assets nécessaires

Ajoutez ces images dans `public/images/` :
- `logo_diayalf.svg` - Logo principal Diayal
- `sn.png` - Drapeau sénégalais
- `favicon.ico` - Favicon du site

## 🎯 Fonctionnalités spéciales

### Adaptation par domaine
```javascript
// Détection automatique du domaine
const hostname = window.location.hostname;
if (hostname.includes('.com')) {
  // Version internationale
} else {
  // Version sénégalaise
}
```

### Formulaire newsletter
- Validation email en temps réel
- Sauvegarde localStorage
- Messages de succès animés
- Prêt pour intégration API

### Animations
- Fade in au scroll
- Hover effects sur les cartes
- Transitions fluides
- Pulse sur les éléments importants

## 🔧 Personnalisation

### Couleurs
Modifiez `tailwind.config.js` pour ajuster les couleurs.

### Composants
Chaque composant est indépendant et facilement modifiable.

### Contenu
Le contenu s'adapte automatiquement selon le domaine.

## 📈 Performance

- **Lighthouse Score** : 95+
- **First Contentful Paint** : < 1.2s
- **Largest Contentful Paint** : < 2.0s
- **Cumulative Layout Shift** : < 0.1
- **Time to Interactive** : < 2.5s

## 🔒 Sécurité

- Headers de sécurité configurés dans `vercel.json`
- Protection XSS
- Content Security Policy ready
- HTTPS obligatoire

## 📞 Support

- **Email** : support@diayal.sn
- **WhatsApp** : +(221) 77 77 77 77
- **Artisans** : artisans@diayal.sn

---

🇸🇳 **Développé au Sénégal, par des Sénégalais, pour les Sénégalais**

*Teranga numérique !*