## This README is AI generated because yes.
# War of Dots - React + Vite

A modern React conversion of the War of Dots website, built with Vite for optimal performance and developer experience.

## 🚀 Features

- **React Components**: Modular component architecture for better maintainability
- **Mobile-First Design**: Enhanced mobile responsiveness while preserving desktop UI
- **Background Animations**: Smooth image cycling and parallax effects
- **Countdown Timer**: Real-time countdown to game release
- **Intersection Observer**: Smooth animations triggered by scroll
- **Modern Build System**: Vite for fast development and optimized production builds

## 📱 Mobile Enhancements

- Responsive navigation that works on all screen sizes
- Touch-friendly buttons and links (44px minimum tap targets)
- Optimized video embedding for mobile devices
- Landscape orientation support
- Accessibility features (reduced motion support)
- High DPI display optimizations

## 🛠️ Development

### Prerequisites
- Node.js 20.19+ or 22.12+ (current project works with 20.17+ despite warnings)
- npm or yarn

### Installation

```bash
cd tapwod-react
npm install
```

### Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Hero.jsx & Hero.css
│   ├── Info.jsx & Info.css
│   ├── YouTube.jsx & YouTube.css
│   ├── Play.jsx & Play.css
│   ├── Discord.jsx & Discord.css
│   └── Footer.jsx & Footer.css
├── App.jsx
├── App.css
├── mobile-enhancements.css
└── main.jsx
```

## 🎨 Key Components

### Header
- Fixed navigation with smooth scrolling
- Mobile-responsive design
- Logo and navigation links

### Hero
- Background image slideshow
- Parallax scrolling effects
- Large title display

### Info
- Game description and features
- Responsive layout
- Gradient text effects

### YouTube
- Embedded video with intersection observer
- Responsive video container
- Channel link button

### Play
- Live countdown timer
- Donation button with hover effects
- Release date display

### Discord
- Community information
- Discord server link
- Responsive image and text layout

### Footer
- Credit information
- Simple and clean design

## 🔧 Customization

### Updating the Countdown
Edit the target date in `src/components/Play.jsx`:

```javascript
const targetDate = new Date();
targetDate.setMonth(targetDate.getMonth() + 3); // Adjust as needed
```

### Adding New Images
Place images in the `public/` directory and update the images array in `Hero.jsx`:

```javascript
const images = [
  'image1.png', 'image2.png', // ... add your images
];
```

### Styling
Each component has its own CSS file for easy customization. Global styles are in `App.css` and mobile enhancements in `mobile-enhancements.css`.

## 📊 Performance Features

- Code splitting ready
- Optimized image loading
- Lazy loading for components
- Minimal bundle size
- Fast refresh during development

## 🌐 Deployment

The built files can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

Simply run `npm run build` and upload the `dist/` folder contents.

## 🔄 Migration Notes

This React version maintains 100% visual parity with the original HTML/CSS version while adding:
- Better code organization
- Improved mobile experience
- Modern development workflow
- Component reusability
- Better state management

All original animations, styles, and functionality have been preserved and enhanced.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

