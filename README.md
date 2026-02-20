# Photo Portfolio

A photography portfolio built with Next.js, Tailwind CSS, and Cloudinary.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
Create a `.env.local` file in the root:
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dugbo7xjm
```

### 3. Add your photos
- Upload your photos to [Cloudinary](https://cloudinary.com)
- Copy the **Public ID** of each photo from the Cloudinary Media Library
- Add them to `lib/photos.ts`

### 4. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Photos

In `lib/photos.ts`, add entries like:
```ts
export const photos: Photo[] = [
  { publicId: 'portfolio/my-photo', title: 'Mountain Sunrise', category: 'landscape', featured: true },
  { publicId: 'portfolio/street-1', title: 'City Life', category: 'street' },
]
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo
3. Add environment variable: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` = `dugbo7xjm`
4. Deploy!

## Customizing

- **Colors & fonts**: `tailwind.config.ts` and `app/globals.css`
- **Your name/initials**: `components/Nav.tsx`
- **Bio**: `app/about/page.tsx`
- **Contact email**: `app/contact/page.tsx`
