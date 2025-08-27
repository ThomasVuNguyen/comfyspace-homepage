# Firebase Hosting Deployment Guide

## Prerequisites

1. Install Firebase CLI globally:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

## Configuration

1. **Update `.firebaserc`** with your actual Firebase project ID:
   ```json
   {
     "projects": {
       "default": "your-actual-project-id"
     }
   }
   ```

2. **Initialize Firebase project** (if not already done):
   ```bash
   firebase init hosting
   ```

## Build and Deploy

### Option 1: Using the deploy script
```bash
npm run deploy
```

### Option 2: Manual steps
1. **Build the project:**
   ```bash
   npm run build
   ```
   This creates static files in the `./out/` directory.

2. **Deploy to Firebase:**
   ```bash
   firebase deploy
   ```

## What Happens

- `npm run build` creates a static export in the `./out/` directory
- Firebase hosting serves files from the `out` directory
- The `trailingSlash: true` config ensures proper routing
- `images.unoptimized: true` allows static image serving

## File Structure After Build

```
your-project/
├── out/                    # Static export files
│   ├── index.html
│   ├── _next/
│   └── ...
├── .next/                 # Build cache
├── firebase.json          # Firebase config
└── .firebaserc           # Firebase project ID
```

## Troubleshooting

- If you get routing errors, ensure `trailingSlash: true` is set
- For image issues, verify `images.unoptimized: true` is configured
- Check that the `out` directory contains your built files before deploying
