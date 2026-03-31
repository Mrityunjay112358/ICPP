# The Doorsteps Project — Design System & Standards

## Brand / Visual Language

### Color Palette
- **Base Background**: `#0a0a0b` (near-black, rich charcoal)
- **Surface**: `#121214` (elevated dark surface)
- **Typography Primary**: `#f5f5f0` (soft off-white, warm ivory)
- **Typography Secondary**: `#a8a8a0` (muted warm gray)
- **Accent Gold**: `#d4af37` (restrained, used sparingly for emphasis)
- **Accent Subtle**: `#e8e8dc` (soft warm highlight)

### Visual Principles
- Cinematic darkness with controlled contrast
- Refined, editorial composition
- Soft lighting effects, never harsh
- Depth through layering, not obvious shadows
- Premium grain texture at 2-3% opacity
- Elegant vignettes for focus
- No cheap gradients or glowing blobs
- Restrained use of color—let darkness and light tell the story

## Typography System

### Typeface
Primary: `Inter`, fallback to system-ui, -apple-system, SF Pro Display

### Scale
- Display (Hero): 4.5rem → 8rem (72px → 128px) / 900 weight / -0.02em tracking
- H1: 3rem → 5rem (48px → 80px) / 700 weight / -0.01em tracking
- H2: 2rem → 3.5rem (32px → 56px) / 600 weight / -0.01em tracking
- H3: 1.5rem → 2rem (24px → 32px) / 600 weight / normal tracking
- Body Large: 1.25rem → 1.5rem (20px → 24px) / 400 weight / 1.7 line-height
- Body: 1rem → 1.125rem (16px → 18px) / 400 weight / 1.7 line-height
- Small: 0.875rem → 1rem (14px → 16px) / 400 weight / 1.6 line-height

### Hierarchy Rules
- Use massive scale contrast for emotional impact
- Allow generous vertical rhythm (60-120px between sections)
- Text should breathe—never cramped
- Limit line length to 70ch for body, 50ch for large text
- Use optical alignment, not mathematical centering
- Emphasize through size and weight, not color

## Motion System

### Philosophy
Motion enhances meaning. Every animation must serve the narrative.

### Core Principles
1. **Smooth over Fast**: Prefer 0.8s–1.2s durations for major transitions
2. **Layered Choreography**: Stagger reveals by 0.05–0.15s
3. **Ease Curves**: Use `cubic-bezier(0.25, 0.1, 0.25, 1)` for elegance
4. **Scroll-Driven**: Major reveals tied to scroll position via GSAP ScrollTrigger
5. **Subtle Parallax**: Depth layers move at 0.3x–0.7x scroll speed
6. **Respect Motion Preferences**: Always implement `prefers-reduced-motion`

### Animation Vocabulary
- **Text Reveals**: Mask upward from bottom, fade from 0 → 1
- **Images**: Scale from 1.1 → 1, opacity 0 → 1, soft blur 8px → 0
- **Cards/Blocks**: Translate Y +40px → 0, opacity 0 → 1
- **Lines/Dividers**: Scale X from 0 → 1 from origin
- **Background Elements**: Continuous slow drift, rotate 0 → 360deg over 120s
- **Hover States**: Scale 1 → 1.02, subtle lift with soft shadow

### Technical Stack
- **Smooth Scroll**: Lenis (1.0+)
- **Scroll Choreography**: GSAP 3.12+ with ScrollTrigger
- **Component Transitions**: Framer Motion
- **Performance**: Use `will-change` sparingly, transform over position changes
- **Jank Prevention**: Lock to 60fps, debounce resize, lazy load off-screen

### Forbidden
- No bounce/elastic easing (keep sophisticated)
- No rotation >5deg unless intentional 3D
- No random particles or confetti
- No "startup landing page" gimmicks
- No overdone blur transitions

## Interaction Philosophy

### Scroll Experience
- The page is a directed narrative journey
- Each section reveals as user scrolls, like turning pages
- Smooth anchor scrolling with easing
- Active section should feel present, others recede

### Hover States
- Minimal, tactile, responsive
- Buttons: slight scale + glow
- Cards: soft lift (4px) + subtle shadow
- Text links: underline slide-in from left
- Never distract from content

### Clickable Elements
- Generous hit areas (48px minimum)
- Clear visual feedback within 100ms
- Smooth state transitions
- Accessible focus states with keyboard nav

## Engineering Standards

### Folder Structure
```
src/
├── components/
│   ├── Hero.jsx
│   ├── OurStory.jsx
│   ├── HowWeWork.jsx
│   ├── GlobalSuccess.jsx
│   ├── Collaborations.jsx
│   ├── Impact.jsx
│   ├── JoinUs.jsx
│   ├── Navigation.jsx
│   └── shared/
│       ├── SectionContainer.jsx
│       ├── RevealText.jsx
│       └── ParallaxImage.jsx
├── hooks/
│   ├── useScrollAnimation.js
│   ├── useInView.js
│   └── useReducedMotion.js
├── utils/
│   ├── animations.js
│   └── constants.js
├── styles/
│   └── globals.css
└── App.jsx
```

### Performance Budget
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- First Input Delay: <100ms
- Total JavaScript: <200KB gzipped

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Skip navigation link
- Screen reader friendly motion alternatives
- Respect `prefers-reduced-motion`
- Minimum 4.5:1 contrast ratio

### Code Quality
- Component-based architecture
- Props validation with PropTypes or TypeScript
- Consistent naming (PascalCase components, camelCase functions)
- Comments for complex animation logic
- Clean, readable, no clever code
- Reusable animation configurations

## Responsive Strategy

### Breakpoints
- Mobile: 320px → 640px
- Tablet: 641px → 1024px
- Desktop: 1025px → 1440px
- Large: 1441px+

### Approach
- Mobile-first development
- Fluid typography via clamp()
- Flexible grid systems
- Touch-friendly interactions on mobile
- Reduce motion complexity on smaller screens
- Maintain visual hierarchy across all sizes

## Content Guidelines

### Voice & Tone
- Sincere, not sentimental
- Authoritative, not academic
- Warm, not casual
- Confident, not arrogant
- Clear, not simplified

### Text Treatment
- Never rewrite provided content
- Maintain exact phrasing and meaning
- Preserve emotional weight of key phrases
- Use emphasis (bold, scale, color) intentionally
- Allow silence—white space is content

## Production Checklist

Before deployment:
- [ ] Test on Safari, Chrome, Firefox, Edge
- [ ] Verify mobile experience on actual devices
- [ ] Check scroll performance (should stay 60fps)
- [ ] Validate all animations respect reduced motion
- [ ] Ensure all images have alt text
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit (aim for 90+ accessibility, performance)
- [ ] Optimize images (WebP, lazy load)
- [ ] Preload critical fonts and hero assets
- [ ] Test slow 3G connection
- [ ] Verify no layout shift during load

---

**Last Updated**: March 30, 2026
**Design Lead**: Claude Code
**Version**: 1.0.0
