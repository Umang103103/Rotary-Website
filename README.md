# Rotary Club of Dhulikhel Website

A modern, responsive landing site for Rotary Club of Dhulikhel built with Vite, React (TypeScript), and Bootstrap 5. The site features a clean, minimalist design inspired by paulitsch.law with content structure from the Rotary Dhulikhel website.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation & Running

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

3. **Build for production:**

   ```bash
   npm run build
   ```

   Production files will be in the `dist/` folder.

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
rotary-dhulikhel/
├── public/               # Static assets
├── src/
│   ├── assets/
│   │   └── images/      # Image files (add your images here)
│   ├── components/      # React components
│   │   ├── SiteNavbar.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── Hero.tsx
│   │   ├── ProgramCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── NewsCard.tsx
│   │   └── BoardMemberCard.tsx
│   ├── content/         # Content data (JS/TS objects)
│   │   ├── homeContent.ts
│   │   ├── aboutContent.ts
│   │   ├── boardContent.ts
│   │   ├── projectsContent.ts
│   │   ├── getInvolveContent.ts
│   │   ├── newsContent.ts
│   │   └── contactContent.ts
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── BoardOfDirectors.tsx
│   │   ├── ServiceProjects.tsx
│   │   ├── OngoingProjects.tsx
│   │   ├── GetInvolve.tsx
│   │   ├── News.tsx
│   │   ├── NewsletterSubscription.tsx
│   │   ├── AranikoSouvenir.tsx
│   │   └── Contact.tsx
│   ├── utils/
│   │   └── imagePath.ts # Image import helper
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # App entry point
│   └── style.css       # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design System

### Color Palette

- **Accent Gold:** `#bfa66b` - Primary accent color
- **Dark Text:** `#1a1a1a` - Main headings
- **Body Text:** `#4a4a4a` - Content text
- **Cream Background:** `#f8f6f3` - Page background
- **White:** `#ffffff` - Card backgrounds
- **Border:** `#e5e1da` - Subtle borders

### Typography

- **Font Family:** Inter (via Google Fonts)
- Clean, modern sans-serif for excellent readability

### UI Principles

- Minimalist, premium aesthetic
- Clean spacing and subtle shadows
- Smooth transitions and hover effects
- Mobile-first responsive design
- Accessible with semantic HTML and ARIA labels

## 📄 Pages & Routes

| Route                            | Page             | Description                                     |
| -------------------------------- | ---------------- | ----------------------------------------------- |
| `/`                              | Home             | Hero, programs preview, featured projects, news |
| `/about`                         | About Us         | Mission, vision, areas of focus, values         |
| `/about/board-of-directors`      | Board            | Board members with photos and roles             |
| `/services`                      | Service Projects | Project categories and descriptions             |
| `/services/ongoing-projects`     | Ongoing Projects | Current active projects                         |
| `/get-involve`                   | Get Involved     | Membership, volunteering, donations             |
| `/news`                          | News             | Latest news and updates                         |
| `/news/newsletter-subscription`  | Newsletter       | Subscription form                               |
| `/news/araniko-souvenir-2025-26` | Souvenir         | Annual magazine information                     |
| `/contact`                       | Contact Us       | Contact form and information                    |

## ✅ Features

- ✨ Modern React with TypeScript
- 🎨 Bootstrap 5 for responsive layout
- 🎯 React Router for client-side routing
- 📱 Mobile-first responsive design
- ♿ Accessible (semantic HTML, ARIA labels)
- 🎭 Smooth animations and transitions
- 📝 Modular, maintainable component structure
- 🔄 Simulated data loading with spinners

## 🔧 Customization Checklist

Before deploying, you should update the following:

### 1. **Images** (Priority: HIGH)

- Add actual images to `src/assets/images/`
- Replace placeholder references in content files:
  - `src/content/homeContent.ts`
  - `src/content/boardContent.ts`
  - `src/content/projectsContent.ts`
  - `src/content/newsContent.ts`
- Recommended image sizes:
  - Hero backgrounds: 1920x1080px
  - Program cards: 800x500px
  - Project cards: 800x500px
  - Board members: 400x400px (square)
  - News thumbnails: 800x500px

### 2. **Content** (Priority: HIGH)

- Review and update text in all `src/content/*.ts` files
- Ensure contact information is accurate:
  - Email address
  - Phone number
  - Meeting time and location
  - Physical address
- Update social media URLs in `src/content/contactContent.ts`

### 3. **Contact Form** (Priority: MEDIUM)

- Implement actual form submission endpoint in `src/pages/Contact.tsx`
- Replace mock submission with API call or email service
- Add form validation error handling
- Configure email notifications

### 4. **Newsletter Subscription** (Priority: MEDIUM)

- Implement newsletter API integration in `src/pages/NewsletterSubscription.tsx`
- Connect to email marketing service (Mailchimp, SendGrid, etc.)
- Add proper error handling and success messages

### 5. **Analytics** (Priority: LOW)

- Add Google Analytics or similar tracking
- Add tracking code to `index.html` or `src/main.tsx`
- Configure conversion goals

### 6. **SEO** (Priority: MEDIUM)

- Update meta tags in `index.html`
- Add page-specific titles and descriptions
- Create `robots.txt` and `sitemap.xml`
- Add Open Graph tags for social sharing

### 7. **PDF Downloads** (Priority: MEDIUM)

- Add actual PDF file for Araniko Souvenir
- Update download button functionality in `src/pages/AranikoSouvenir.tsx`

### 8. **Favicon** (Priority: LOW)

- Replace default Vite favicon
- Add Rotary logo favicon in `public/`
- Update references in `index.html`

## 🚀 Deployment

### Static Site Deployment

This project builds to static files and can be deployed to any static hosting service:

#### Vercel

```bash
npm install -g vercel
vercel
```

#### Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

#### GitHub Pages

1. Update `vite.config.ts` with base path
2. Run `npm run build`
3. Deploy `dist/` folder to gh-pages branch

#### Traditional Hosting

1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server

### Build Output

- All assets are bundled and optimized
- CSS is minified
- JavaScript is code-split
- Images are optimized (when using proper loaders)

## 🛠️ Development Notes

### TypeScript Errors

You may see some TypeScript errors related to `react-bootstrap` type definitions. These are cosmetic and won't affect runtime functionality. The app uses Bootstrap 5 which is fully compatible.

### Adding New Pages

1. Create component in `src/pages/`
2. Add content file in `src/content/`
3. Add route in `src/App.tsx`
4. Update navigation in `src/components/SiteNavbar.tsx`
5. Update footer links in `src/components/SiteFooter.tsx`

### Styling

- Global styles: `src/style.css`
- CSS variables defined in `:root` selector
- Bootstrap utilities available throughout
- Custom classes follow BEM-like conventions

### Content Management

All content is centralized in `src/content/*.ts` files for easy updates without touching component code.

## 📦 Dependencies

### Production

- `react` & `react-dom` - UI library
- `react-router-dom` - Client-side routing
- `bootstrap` - CSS framework
- `bootstrap-icons` - Icon library

### Development

- `vite` - Build tool and dev server
- `typescript` - Type safety
- `@vitejs/plugin-react` - React support for Vite
- ESLint - Code linting

## 📝 Initial Commit Message

```
feat: Initial scaffold for Rotary Club of Dhulikhel website

- Set up Vite + React + TypeScript + Bootstrap 5
- Implemented 10 pages with React Router navigation
- Created modular component architecture
- Added responsive navbar and footer
- Implemented paulitsch.law inspired design system
- Created content structure based on Rotary Dhulikhel
- Added contact form and newsletter subscription
- Implemented mobile-first responsive design
- Configured build and deployment scripts
```

## 🆘 Support & Contact

For questions about this project structure or implementation:

- Review the component code in `src/components/`
- Check page implementations in `src/pages/`
- Refer to content files in `src/content/`

## 📄 License

This project is created for Rotary Club of Dhulikhel. All Rotary marks, logos, and copyrighted materials are property of Rotary International.

---

**Built with ❤️ for Rotary Club of Dhulikhel**
