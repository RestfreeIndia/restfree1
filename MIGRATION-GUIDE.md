# Installation and Setup Steps for Next.js Conversion

Follow these steps to complete the migration from Vite+React to Next.js:

## Step 1: Install Next.js dependencies
Run the following command to install Next.js and required dependencies:

```bash
npm install next@latest react@latest react-dom@latest
```

## Step 2: Install TypeScript types (if needed)
```bash
npm install --save-dev @types/react @types/react-dom @types/node
```

## Step 3: Install Next.js related ESLint packages
```bash
npm install --save-dev eslint-config-next
```

## Step 4: Remove Vite specific packages
```bash
npm uninstall vite @vitejs/plugin-react-swc react-router-dom eslint-plugin-react-refresh
```

## Step 5: Run the development server
```bash
npm run dev
```

## Additional Notes

1. The routing has been migrated from React Router to Next.js App Router
2. Navigation links now use Next.js's `Link` component
3. The `useRouter` hook is used for programmatic navigation
4. Client-side components are marked with 'use client' directive

## Potential Issues and Solutions

- If you encounter module resolution issues, check the import paths and make sure they start with `@/` as configured in tsconfig.json
- Some components may still need migration from React Router patterns to Next.js
- Styling should work as before since you're using Tailwind CSS
