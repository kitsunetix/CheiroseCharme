# Design Guidelines: Cheiro & Charme

## Design Approach
**Reference-Based Approach** - Drawing inspiration from boutique e-commerce platforms like Etsy and artisan product sites, emphasizing elegance and craftsmanship. The specific brand palette (light pink, white, gold) drives all aesthetic decisions.

## Core Design Elements

### A. Color Palette

**Light Mode (Primary):**
- Primary Pink: 340 70% 92% (soft, elegant light pink)
- Accent Gold: 45 80% 65% (warm, luxurious gold for highlights)
- Neutral White: 0 0% 98% (clean background)
- Text Dark: 340 15% 25% (deep rose-brown for readability)
- Text Medium: 340 10% 45% (secondary text)

**Accent Applications:**
- Gold used for: Premium badges, promotion highlights, icons, CTA button borders
- Pink used for: Section backgrounds, product cards, soft gradients
- White used for: Primary content areas, cards on pink backgrounds

### B. Typography

**Font Families:**
- Primary (Headings): 'Playfair Display' - serif, elegant, luxurious feel
- Secondary (Body): 'Poppins' - sans-serif, clean, modern readability

**Type Scale:**
- Hero Heading: text-5xl md:text-7xl, font-bold
- Section Headings: text-3xl md:text-4xl, font-semibold
- Product Titles: text-xl md:text-2xl, font-medium
- Body Text: text-base md:text-lg
- Prices: text-2xl md:text-3xl, font-bold (in gold)

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Element gaps: gap-6 md:gap-8
- Container: max-w-7xl mx-auto px-4

### D. Component Library

**Navigation:**
- Fixed header with subtle pink tint background (backdrop-blur)
- Logo on left, navigation links centered, contact CTA on right
- Gold underline animation on hover for nav links

**Hero Section:**
- Full-width image showcase (1400x600px) featuring both products in elegant setting
- Overlaid heading: "Cheiro & Charme" with tagline "Elegância em Cada Detalhe"
- Centered CTA button with gold border and pink fill
- Soft gradient overlay (pink to transparent) for text readability

**Product Cards:**
- White cards with soft shadow on light pink background
- Product image at top (400x400px square)
- Product name, description snippet
- Price in large gold text
- "Adicionar ao Carrinho" button in gold outline

**Promotion Banner:**
- Distinct full-width section with gold background gradient
- Large prominent text: "Combo Especial: R$35"
- Visual representation: Product images + ecobag icon
- Decorative elements: subtle sparkle icons, gift box illustrations
- Strong CTA: "Aproveitar Promoção" button in white with gold text

**About Section:**
- Two-column layout (image left, text right on desktop)
- Soft pink background
- Decorative flourish elements in gold
- Story about craftsmanship and care

**Footer:**
- Three columns: About, Links, Contact
- Social media icons in gold
- Newsletter signup with elegant input styling
- Background in deep pink (340 50% 88%)

### E. Images

**Hero Image:**
- Large hero banner (1400x600px) showing styled arrangement of decorated plates and aromatic candles on elegant table setting with soft natural lighting

**Product Images:**
- Pratos Decorados (400x400px): Close-up of beautifully painted/decorated ceramic plates with intricate patterns
- Velas Aromáticas (400x400px): Elegant candles in decorative containers with soft glow, maybe with dried flowers
- Ecobag Personalizada (300x300px): Branded tote bag with "Cheiro & Charme" logo in gold on light pink fabric

**Supporting Images:**
- Lifestyle shots showing products in home settings (living room, dining table)
- Behind-the-scenes crafting images for About section
- All images should have warm, soft lighting with pink/gold color grading

## Page Structure

**Home Page Sections (in order):**
1. Hero - Full-width image with brand introduction
2. Products - Grid showcasing both products with pricing
3. Promotion Banner - Eye-catching combo deal highlight
4. Features - "Por Que Escolher Cheiro & Charme" (3-column: Qualidade, Artesanal, Exclusivo)
5. Gallery - Masonry grid of lifestyle product photos
6. About - Brand story with decorative elements
7. Contact - Form with social links and location info
8. Footer - Comprehensive navigation and newsletter

**Visual Enhancements:**
- Subtle floating animations on product cards
- Smooth scroll reveals for sections
- Gold sparkle micro-interactions on hover
- Soft shadow elevations for depth
- Rounded corners (rounded-xl) for modern elegance

**Responsive Behavior:**
- Mobile: Single column, stacked products, simplified navigation
- Tablet: 2-column product grid
- Desktop: Full multi-column layouts with generous whitespace