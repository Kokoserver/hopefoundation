# Achebe Hope Foundation

**Changing lives, one family at a time**

The official website for Achebe Hope Foundation - a nonprofit organization dedicated to improving lives through strategic programs, community projects, and volunteer engagement. This repository contains the frontend and content management system for the foundation's web presence.

## About the Project

The Achebe Hope Foundation website serves as both a public-facing platform for donors and supporters, and an internal dashboard for managing foundation operations. The platform includes:

- **Public Site**: Information about programs, projects, impact stories, volunteer opportunities, and donation portal
- **Admin Dashboard**: Content management for programs, projects, stories, contacts, and volunteers
- **Database**: PostgreSQL backend with Drizzle ORM for data persistence
- **Responsive Design**: Mobile-first approach using Tailwind CSS

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Database**: PostgreSQL with [Drizzle ORM](https://orm.drizzle.team)
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Carousel**: [Embla Carousel](https://www.emblacarousel.com)
- **Package Manager**: [pnpm](https://pnpm.io)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hopefoundation
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
# Create a .env.local file with:
DATABASE_URL=postgresql://user:password@localhost:5432/hopefoundation
```

4. Set up the database:

```bash
pnpm db:generate  # Generate migrations
pnpm db:push      # Apply migrations
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

The application auto-refreshes as you make edits to files.

### Database Management

```bash
# Generate database migrations after schema changes
pnpm db:generate

# Push migrations to database
pnpm db:push

# Open Drizzle Studio for visual database management
pnpm db:studio
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (dashboard)        # Admin dashboard routes
│   │   └── dashboard/     # Content management pages
│   └── (public)           # Public-facing routes
│       ├── about/         # About page
│       ├── programs/      # Programs listing
│       ├── projects/      # Projects listing
│       ├── stories/       # Hope stories
│       └── ...            # Other public pages
├── components/            # React components
│   ├── common/           # Shared components
│   ├── home/             # Homepage sections
│   ├── layout/           # Layout components
│   └── ui/               # UI primitives
├── db/                    # Database layer
│   ├── schema.ts         # Table definitions
│   ├── queries.ts        # Database queries
│   └── types.ts          # TypeScript types
├── lib/                   # Utilities and helpers
├── public/               # Static assets
└── components.json       # Shadcn/ui config
```

## Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm start     # Start production server
pnpm lint      # Run ESLint
pnpm db:generate  # Generate database migrations
pnpm db:push      # Apply migrations to database
pnpm db:studio    # Open Drizzle Studio
```

## Build & Deployment

### Build

```bash
pnpm build
```

### Production

```bash
pnpm start
```

The application is optimized for deployment on Vercel, Netlify, or any Node.js hosting platform.

## Contact

For more information about Achebe Hope Foundation:

- **Email**: AchebeHopeFoundation@gmail.com
- **Phone**: +234 802 058 6948
- **Address**: No 6 Chief Obiora Achebe Close, Enugu
- **Website**: https://achebehopefoundation.org

## License

This project is private and proprietary to Achebe Hope Foundation.
