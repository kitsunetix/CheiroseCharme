# Cheiros & Charme - E-commerce Platform

## Overview

Cheiros & Charme is an artisan e-commerce platform for selling handcrafted decorative plates and aromatic candles. The application is a single-page React application with a promotional landing page design, featuring product showcases, special combo offers, and social media integration. The platform emphasizes elegant design with a boutique aesthetic, using a pink and gold color palette inspired by luxury artisan marketplaces.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework:** React 18 with TypeScript, using Vite as the build tool and development server.

**Routing:** Wouter library for lightweight client-side routing. Currently implements a minimal route structure with a home page and 404 page.

**State Management:** TanStack Query (React Query) v5 for server state management. Queries are configured with conservative defaults (no automatic refetching, infinite stale time) suitable for a mostly static content site.

**UI Component Library:** Shadcn/ui components based on Radix UI primitives. The design system follows the "new-york" style variant with extensive customization for the boutique aesthetic. Components are styled with Tailwind CSS using a custom color palette and design tokens.

**Styling Approach:** Tailwind CSS with extensive CSS variable customization. The design implements a light-mode-first approach with custom HSL color definitions for the pink/gold brand palette. Typography uses Google Fonts (Playfair Display for headings, Poppins for body text) to create an elegant, artisan feel.

**Component Structure:** Page components are composed of smaller feature components (Hero, Products, PromotionBanner, Features, About, SocialMedia, Contact, Footer). Each section is self-contained and can be scrolled to via smooth-scroll navigation.

### Backend Architecture

**Server Framework:** Express.js running on Node.js with TypeScript support via tsx for development.

**API Design:** RESTful API pattern with routes prefixed under `/api`. Currently implements a minimal route structure with placeholder storage interface.

**Development Server:** Vite middleware integration in development mode for HMR and hot module replacement. Production builds serve static assets from the dist directory.

**Session Management:** Infrastructure includes connect-pg-simple for PostgreSQL session storage, though session implementation is not yet active.

### Data Storage

**Database:** PostgreSQL accessed via Neon serverless driver (@neondatabase/serverless).

**ORM:** Drizzle ORM for type-safe database queries and schema management. Schema definitions use drizzle-zod for runtime validation.

**Current Schema:** Minimal user table with id, username, and password fields. The schema uses PostgreSQL's gen_random_uuid() for ID generation.

**Storage Abstraction:** Interface-based storage pattern (IStorage) with an in-memory implementation (MemStorage) for development. This allows easy swapping to database-backed storage in production.

**Migration Strategy:** Drizzle Kit handles schema migrations with a push-based workflow (npm run db:push).

### Design System

**Color Palette:** Custom HSL color scheme centered around soft pink (340° hue) as primary, warm gold (45° hue) as accent, and neutral whites/grays for backgrounds. The system uses CSS variables for all colors to enable consistent theming.

**Elevation System:** Custom hover and active states using semi-transparent black overlays (--elevate-1, --elevate-2) applied via utility classes (hover-elevate, active-elevate-2).

**Component Variants:** Extensive use of class-variance-authority (CVA) for component variants. Buttons, badges, and cards support multiple visual styles (default, outline, secondary, destructive, ghost).

**Responsive Design:** Mobile-first responsive approach with Tailwind's md: breakpoint (768px) as the primary transition point. Components adapt layouts from single-column mobile to multi-column desktop views.

### Form Handling

React Hook Form with Zod schema validation via @hookform/resolvers. Forms use controlled components with the Shadcn form primitives for consistent styling and error handling.

### Asset Management

Static assets stored in attached_assets directory with stock images for products. Vite's asset resolution handles imports with proper bundling and cache-busting.

## External Dependencies

### Third-Party UI Libraries

- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (@radix-ui/react-*) including dialogs, dropdowns, tooltips, navigation menus, and form controls
- **Lucide React**: Icon library for consistent iconography throughout the application
- **React Icons**: Specifically used for social media icons (Instagram)
- **Embla Carousel**: Carousel/slider functionality for potential product galleries

### Utility Libraries

- **clsx & tailwind-merge**: Class name management and conflict resolution
- **class-variance-authority**: Type-safe component variant management
- **cmdk**: Command palette component (imported but not yet utilized)
- **date-fns**: Date formatting and manipulation utilities

### Development Tools

- **Replit Plugins**: Development banner, cartographer, and runtime error overlay for Replit environment integration
- **TypeScript**: Full TypeScript support with strict mode enabled
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins

### Database & Backend

- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect
- **drizzle-kit**: CLI tool for schema migrations and database operations
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation

### Build & Bundling

- **Vite**: Next-generation frontend build tool with native ESM support
- **esbuild**: Fast JavaScript bundler used for production server builds
- **tsx**: TypeScript execution environment for development server

### Hosting & Deployment

The application is designed for deployment on Replit with specific integrations for that platform. The server serves both the API and static frontend assets in production mode.