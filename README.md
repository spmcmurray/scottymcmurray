# Scott McMurray - Personal Developer Website

A modern, professional website for showcasing mobile and web applications.

## Features

- ✨ Beautiful, unique design with custom typography (Playfair Display + Karla)
- 🎨 Warm, earthy color palette with vibrant accents
- 📱 Fully responsive across all devices
- ⚡ Fast, optimized Next.js 14 with TypeScript
- 🎭 Smooth animations and micro-interactions
- 🔒 Privacy-focused (no tracking, no analytics)
- 📄 Complete legal pages (Privacy Policy, Terms of Service)
- 💬 Support page with FAQ

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── apps/          # Individual app pages
│   ├── privacy/       # Privacy policy
│   ├── terms/         # Terms of service
│   ├── support/       # Support page
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
└── components/
    ├── Header.tsx     # Navigation header
    ├── Footer.tsx     # Site footer
    └── AppCard.tsx    # App showcase cards
```

## Customization

### Update Your Information

1. **Personal Details**: Edit `src/app/page.tsx` to update your bio and tagline
2. **App Information**: Update content in `src/app/apps/app1/page.tsx`, `app2/page.tsx`, `app3/page.tsx`
3. **Contact Info**: Update email addresses in `src/components/Footer.tsx` and support pages
4. **Legal Pages**: Customize `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`

### Design Customization

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-accent: #ff6b35;     /* Primary accent color */
  --color-secondary: #f4a261;  /* Secondary accent */
  --font-display: ...;          /* Heading font */
  --font-body: ...;             /* Body font */
}
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

Works on any platform supporting Next.js:
- Netlify
- AWS Amplify  
- Cloudflare Pages
- Self-hosted

## License

© 2025 Scott McMurray. All rights reserved.

## Contact

- Email: scottymcmurray@gmail.com
- Website: scottymcmurray.com