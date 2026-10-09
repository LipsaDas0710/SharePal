# SharePal gaming category page

This folder contains a JSX-based Next.js App Router page composed from reusable components.

## Install
From `frontend`:
```bash
npm install lucide-react
npm run dev
```

## Image assets
Place your actual image assets in `frontend/public/images/` using the paths referenced in `data/products.js`, `components/catalog/GamingBanner.jsx`, `PartnerBanner.jsx`, `GearBanner.jsx`, and `Sidebar.jsx`.

Missing product/banner images are hidden or shown with a small fallback, but using the correct source assets is necessary for a close visual match.

## Main structure
- `app/`: route and global styling
- `components/layout/`: navbar, category nav, footer, floating action
- `components/catalog/`: sidebar, banners, product cards, recommendation form
- `components/content/`: FAQ, moving reviews carousel, impact stats
- `data/`: product, FAQ, review and footer content
