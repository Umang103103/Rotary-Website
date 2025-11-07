# Deployment Guide

This guide provides step-by-step instructions for deploying the Rotary Club of Dhulikhel website to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Updated all content in `src/content/*.ts` files
- [ ] Added actual images to `src/assets/images/`
- [ ] Updated contact information (email, phone, address)
- [ ] Tested the site locally (`npm run dev`)
- [ ] Built the production version successfully (`npm run build`)
- [ ] Configured form submission endpoints (contact form, newsletter)
- [ ] Added analytics tracking code (if required)
- [ ] Updated social media links
- [ ] Reviewed all pages for accuracy

## Deployment Options

### 1. Vercel (Recommended - Easiest)

**Advantages:** Automatic deployments, free SSL, global CDN, zero configuration

**Steps:**

1. Push your code to GitHub/GitLab/Bitbucket

2. Visit [vercel.com](https://vercel.com) and sign up

3. Click "New Project" and import your repository

4. Vercel will auto-detect Vite settings. Verify:

   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. Click "Deploy"

6. Your site will be live in minutes at `your-project.vercel.app`

**Custom Domain:**

- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### 2. Netlify

**Advantages:** Drag-and-drop deployment, form handling, continuous deployment

**Method A: Drag and Drop**

1. Build your project locally:

   ```bash
   npm run build
   ```

2. Visit [netlify.com](https://netlify.com) and sign up

3. Drag the `dist` folder to the deploy zone

4. Your site is live!

**Method B: Git Integration**

1. Push code to GitHub/GitLab/Bitbucket

2. Click "New site from Git" in Netlify

3. Choose your repository

4. Configure build settings:

   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

5. Click "Deploy site"

**Custom Domain:**

- Go to Domain Settings
- Add your custom domain
- Update DNS records

---

### 3. GitHub Pages

**Advantages:** Free hosting for public repositories, version control integration

**Steps:**

1. Install `gh-pages` package:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json` scripts:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.ts` with base path:

   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: "/your-repo-name/",
   });
   ```

4. Deploy:

   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings:

   - Settings → Pages
   - Source: Deploy from branch → `gh-pages`

6. Site will be available at: `https://username.github.io/repo-name/`

---

### 4. Traditional Web Hosting (cPanel, FTP)

**For providers like:** HostGator, Bluehost, GoDaddy, etc.

**Steps:**

1. Build your project:

   ```bash
   npm run build
   ```

2. Connect to your hosting via FTP (FileZilla, etc.)

3. Upload all files from the `dist` folder to your web root:

   - Often `public_html` or `www` directory

4. If uploading to a subdirectory, update `vite.config.ts`:

   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: "/subdirectory/",
   });
   ```

5. Rebuild and re-upload

**Important:** Ensure your hosting supports:

- Static file serving
- Single Page Application (SPA) routing
- `.htaccess` or equivalent for URL rewrites

**Apache .htaccess for SPA routing:**

Create `.htaccess` in the root of your upload:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### 5. AWS S3 + CloudFront

**Advantages:** Scalable, fast global delivery, pay-as-you-go

**Steps:**

1. Build your project:

   ```bash
   npm run build
   ```

2. Create an S3 bucket:

   - Name it after your domain (e.g., `www.rotarydhulikhel.org.np`)
   - Enable static website hosting
   - Set index document to `index.html`
   - Set error document to `index.html` (for SPA routing)

3. Upload `dist` folder contents to the bucket

4. Set bucket policy for public access:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```

5. Create CloudFront distribution:

   - Origin: Your S3 bucket
   - Set default root object to `index.html`
   - Configure custom error responses (404 → /index.html)

6. Update DNS to point to CloudFront distribution

---

### 6. Firebase Hosting

**Advantages:** Fast, secure, free tier available

**Steps:**

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:

   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:

   ```bash
   firebase init hosting
   ```

   Configure:

   - Public directory: `dist`
   - Single-page app: `Yes`
   - Automatic builds with GitHub: Optional

4. Build your project:

   ```bash
   npm run build
   ```

5. Deploy:

   ```bash
   firebase deploy
   ```

6. Your site is live at: `your-project.firebaseapp.com`

---

## Post-Deployment Tasks

After deployment, verify:

- [ ] All pages load correctly
- [ ] Navigation works on all routes
- [ ] Images display properly
- [ ] Contact form submits successfully
- [ ] Newsletter subscription works
- [ ] Responsive design on mobile devices
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain is configured (if applicable)
- [ ] Analytics tracking is working
- [ ] Social media links work
- [ ] All external links open correctly

## Environment Variables (If Needed)

If you need to use environment variables (for API keys, etc.):

1. Create `.env` file in project root:

   ```env
   VITE_API_ENDPOINT=https://api.example.com
   VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
   ```

2. Access in code:

   ```typescript
   const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
   ```

3. Add to `.gitignore`:

   ```
   .env
   .env.local
   ```

4. Configure environment variables in your hosting platform:
   - **Vercel:** Project Settings → Environment Variables
   - **Netlify:** Site Settings → Build & Deploy → Environment
   - **GitHub Pages:** Use GitHub Secrets

## Continuous Deployment

For automatic deployments when you push code:

1. **Connect your repository** to Vercel or Netlify

2. **Configure build settings** (usually auto-detected)

3. **Push to main/master branch** - site deploys automatically

4. **Preview deployments** - Pull requests get preview URLs

## Troubleshooting

### Blank page after deployment

- Check browser console for errors
- Verify `base` path in `vite.config.ts`
- Ensure all assets are uploaded

### 404 errors on page refresh

- Configure server for SPA routing
- Add `.htaccess` for Apache
- Set error document to `index.html`

### Images not loading

- Verify images are in `dist/assets` after build
- Check image paths are correct
- Ensure images were uploaded to server

### Slow loading

- Enable gzip compression on server
- Use CloudFlare or CDN
- Optimize images before deploying

## Need Help?

Common deployment issues:

- **Build fails:** Check Node version (14+), run `npm install`
- **White screen:** Check browser console, verify base URL
- **Routing issues:** Configure SPA fallback on server

---

**Remember:** Always test your production build locally with `npm run preview` before deploying!
