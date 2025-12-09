# EGS Entreprenør AS - Style Guide

## Brand Identity

**Industry:** Construction / Groundwork / Civil Engineering
**Location:** Hallingdal, Norway
**Tone:** Professional, Reliable, Industrial, Modern

---

## Typography

### Primary Font (Headings)
**Font:** Bebas Neue
**Weights:** 400 (Regular)
**Usage:** All headings (h1-h6), navigation, buttons, CTAs
**Style:** Uppercase, wide letter-spacing

```css
font-family: 'Bebas Neue', sans-serif;
letter-spacing: 0.05em;
text-transform: uppercase;
```

### Secondary Font (Body)
**Font:** Inter
**Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
**Usage:** Body text, paragraphs, labels, captions

```css
font-family: 'Inter', sans-serif;
```

### Font Sizes
| Element | Mobile | Desktop |
|---------|--------|---------|
| H1 | 2.5rem (40px) | 4.5rem (72px) |
| H2 | 2rem (32px) | 3rem (48px) |
| H3 | 1.5rem (24px) | 2rem (32px) |
| H4 | 1.25rem (20px) | 1.5rem (24px) |
| Body | 1rem (16px) | 1.125rem (18px) |
| Small | 0.875rem (14px) | 0.875rem (14px) |

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Primary Yellow** | `#F5A623` | CTAs, accents, highlights |
| **Primary Yellow Dark** | `#D4910F` | Hover states |
| **Primary Yellow Light** | `#FFC857` | Backgrounds, subtle accents |

### Neutral Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Black** | `#0A0A0A` | Primary text, backgrounds |
| **Dark Gray** | `#1A1A1A` | Card backgrounds, sections |
| **Medium Gray** | `#404040` | Secondary text |
| **Light Gray** | `#A0A0A0` | Muted text, borders |
| **Off White** | `#F5F5F5` | Light backgrounds |
| **White** | `#FFFFFF` | Text on dark, backgrounds |

### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Success** | `#22C55E` | Success states |
| **Warning** | `#EAB308` | Warning states |
| **Error** | `#EF4444` | Error states |

### CSS Variables
```css
:root {
  --primary: #F5A623;
  --primary-dark: #D4910F;
  --primary-light: #FFC857;
  --background: #0A0A0A;
  --background-secondary: #1A1A1A;
  --foreground: #FFFFFF;
  --muted: #A0A0A0;
  --border: #2A2A2A;
}
```

---

## Spacing System

Based on 4px grid system:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing |
| sm | 8px | Small gaps |
| md | 16px | Default spacing |
| lg | 24px | Section padding |
| xl | 32px | Large gaps |
| 2xl | 48px | Section margins |
| 3xl | 64px | Major sections |
| 4xl | 96px | Hero sections |

---

## Components

### Buttons

#### Primary Button
```css
background: var(--primary);
color: #0A0A0A;
font-family: 'Bebas Neue', sans-serif;
font-size: 1rem;
letter-spacing: 0.1em;
text-transform: uppercase;
padding: 16px 32px;
border: none;
transition: all 0.3s ease;

&:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}
```

#### Secondary Button (Outline)
```css
background: transparent;
color: var(--primary);
border: 2px solid var(--primary);
font-family: 'Bebas Neue', sans-serif;
font-size: 1rem;
letter-spacing: 0.1em;
text-transform: uppercase;
padding: 14px 30px;

&:hover {
  background: var(--primary);
  color: #0A0A0A;
}
```

### Cards

#### Service Card
```css
background: var(--background-secondary);
border: 1px solid var(--border);
padding: 32px;
transition: all 0.3s ease;

&:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
}
```

#### Project Card
```css
position: relative;
overflow: hidden;
aspect-ratio: 16/9;

.overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

&:hover .overlay {
  opacity: 1;
}
```

### Section Headers
```css
.section-label {
  color: var(--primary);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--foreground);
}
```

---

## Layout

### Container
- Max width: 1280px
- Padding: 16px (mobile), 24px (tablet), 32px (desktop)

### Grid System
- 12 column grid
- Gap: 24px (mobile), 32px (desktop)

### Section Structure
```
[Section]
  ├── Section Label (optional)
  ├── Section Title
  ├── Section Description (optional)
  └── Content Grid
```

### Breakpoints
| Name | Width |
|------|-------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

---

## Imagery

### Style Guidelines
- **Photography:** High-contrast, industrial settings
- **Treatment:** Slight desaturation, dark overlay on heroes
- **Subjects:** Machinery, construction sites, team at work, completed projects

### Overlay Gradients
```css
/* Hero overlay */
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.4),
  rgba(0, 0, 0, 0.7)
);

/* Card overlay */
background: linear-gradient(
  to top,
  rgba(0, 0, 0, 0.9),
  transparent
);
```

### Aspect Ratios
| Usage | Ratio |
|-------|-------|
| Hero | 16:9 or full-screen |
| Project cards | 16:9 |
| Gallery | 4:3 |
| Team photos | 1:1 |

---

## Icons

### Style
- **Library:** Lucide React
- **Stroke width:** 2px
- **Size:** 24px default, 20px small, 32px large
- **Color:** Inherit from parent or primary

### Common Icons
- Menu: `Menu`, `X`
- Social: `Facebook`, `Instagram`
- Contact: `Mail`, `Phone`, `MapPin`, `Building`
- Services: `HardHat`, `Truck`, `Hammer`, `Mountain`
- Actions: `ArrowRight`, `ChevronDown`, `ExternalLink`

---

## Animation

### Transitions
```css
/* Default */
transition: all 0.3s ease;

/* Fast (buttons, links) */
transition: all 0.2s ease;

/* Slow (page elements) */
transition: all 0.5s ease;
```

### Hover Effects
- Buttons: translateY(-2px) + shadow
- Cards: translateY(-4px) + border color change
- Links: color change + underline
- Images: scale(1.05)

### Scroll Animations
- Fade in from bottom: translateY(20px) → translateY(0)
- Fade in: opacity 0 → 1
- Duration: 0.6s
- Stagger: 0.1s between elements

### Hero Animation
```css
@keyframes slowZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}
/* Duration: 6s, ease-out */
```

---

## Patterns & Textures

### Industrial Elements
- Diagonal stripes (45°) for accents
- Dot grid patterns for backgrounds
- Geometric shapes (triangles, hexagons)

### Accent Line
```css
.accent-line {
  width: 60px;
  height: 4px;
  background: var(--primary);
}
```

---

## Website Sections

### 1. Header
- Transparent on hero, solid on scroll
- Logo left, nav center/right
- Language toggle with flags
- Social icons

### 2. Hero
- Full-screen with image carousel
- Slow zoom animation
- Centered content
- CTA buttons
- Contact info bar at bottom

### 3. About
- Company introduction
- Key statistics (employees, projects, years)
- Image with industrial styling

### 4. Services
- Icon + title + description cards
- Grid layout (2-3 columns)
- Hover effects

### 5. Fleet/Equipment
- Machinery showcase
- Image gallery with categories
- Specs or descriptions

### 6. Projects/Portfolio
- Featured projects grid
- Image + overlay with details
- Filter by category (optional)

### 7. Contact
- Two-column layout
- Contact info + form
- Map integration (optional)

### 8. Footer
- Quote/testimonial
- Logo (muted)
- Social links
- Copyright

---

## Do's and Don'ts

### Do's
- Use bold, uppercase headings
- Maintain high contrast
- Use yellow accents sparingly but effectively
- Keep layouts clean and structured
- Use industrial imagery
- Ensure mobile responsiveness

### Don'ts
- Don't use light/pastel colors
- Don't use script or decorative fonts
- Don't overuse animations
- Don't clutter layouts
- Don't use low-quality images
- Don't forget accessibility (contrast ratios)

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Focus states: visible outline (primary color)
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation support
- Reduced motion support

---

## File Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Fleet.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/
├── contexts/
│   └── LanguageContext.tsx
├── styles/
│   └── globals.css
└── pages/
    └── Index.tsx
```

---

*Last updated: December 2025*
