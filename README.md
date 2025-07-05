# Restfree - Next.js + React Application

## Project Overview

Restfree is a platform that helps users find restrooms, hotels, waiting areas, and more. This application was migrated from Vite+React to Next.js+React for improved performance, SEO, and routing capabilities.

## Features

- Find nearby restrooms, hotels, and other facilities
- Map-based navigation
- User authentication
- Merchant dashboard
- Admin panel
- Responsive design
- Clean, modern UI with Tailwind CSS and Shadcn UI components

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Component Library**: Shadcn UI
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Data Fetching**: TanStack Query
- **Type Safety**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/restfree.git
cd restfree
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app` - Next.js App Router pages
- `/src/components` - Reusable React components
- `/src/lib` - Utilities and helper functions
- `/src/hooks` - Custom React hooks
- `/public` - Static assets

## User Roles

The application supports three user types:
1. **User** - Regular users looking for facilities
2. **Merchant** - Business owners who list their facilities
3. **Admin** - Platform administrators with management capabilities

## Deployment

This Next.js application can be deployed on Vercel or any hosting platform that supports Next.js:

```bash
npm run build
npm start
```

## Migration Notes

This project was migrated from Vite+React to Next.js. Key changes include:
- Routing system changed from React Router to Next.js App Router
- Added server-side rendering capabilities
- Improved performance and SEO
- Component structure maintained for easy understanding

See the MIGRATION-GUIDE.md file for detailed instructions on completing the migration.

## License

[MIT License](LICENSE)

## Contact

For questions or support, please email support@restfree.com
