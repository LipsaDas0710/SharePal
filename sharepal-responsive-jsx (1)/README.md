# SharePal responsive JSX page

This archive contains the reusable JSX components and styles for the SharePal gaming catalog page. It is intended to be copied into an existing Next.js App Router project, rather than run as a standalone project.

## Install and run

From your existing `frontend` folder:

```powershell
npm install lucide-react
npm run dev
```

## Copying the files

Merge `frontend/app`, `frontend/components`, and `frontend/data` into your existing `frontend` directory. Keep your existing `package.json`, `package-lock.json`, `next.config.ts`, and other Next.js setup files.

## Banner artwork

The two SharePal banners use the supplied public image assets hosted at `images.sharepal.in`:
- `sharepal-banners/assets-fund-banner.png`
- `sharepal-banners/ews-generic-banner-desktop.png`

The page includes responsive breakpoints for desktop, tablet, and mobile. Product/category images not included in this archive should be placed under `frontend/public/images/` using the paths referenced by the components and data files.
