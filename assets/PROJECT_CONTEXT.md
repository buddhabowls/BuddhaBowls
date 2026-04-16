# Buddha Bowls Project Context

## Site Configuration
- **Jekyll Site**: buddhabowls.org
- **Base URL**: `{{ site.baseurl }}`
- **Site URL**: `{{ site.url }}`

## Design System
- **Primary Color**: #0D9488 (teal)
- **Secondary Color**: #14B8A6 (lighter teal)
- **Accent Color**: #FFD700 (gold)
- **Light Background**: #F0FDFA
- **White**: #FFFFFF
- **Text**: #333
- **Text Light**: #666
- **Shadow**: 0 2px 8px rgba(0, 0, 0, 0.1)

## Layout Structure
- **Default Layout**: `_layouts/default.html`
- **Includes**:
  - `header.html`
  - `email-signup.html`
  - `footer.html`
- **Scripts**:
  - `ingredients-checkbox.js`
  - `email-signup.js`
- **Stylesheet**: `assets/css/style.css`

## Key CSS Classes & Components
- `.page-container` - Main content wrapper
- `.hero` - Hero section with gradient
- `.btn`, `.btn-primary`, `.btn-secondary` - Button styles
- `.recipe-card`, `.product-card` - Card components
- `.recipes-grid`, `.products-grid` - Grid layouts
- `.dropdown`, `.dropdown-content` - Navigation dropdowns
- `.modal` - Modal dialogs
- `.cart-sidebar` - Shopping cart sidebar

## Common Patterns
1. **Gradients**: `linear-gradient(135deg, var(--primary), var(--secondary))`
2. **Responsive**: Mobile-first with breakpoints at 768px and 480px
3. **Transitions**: `.3s` ease for most animations
4. **Flexbox/Grid**: Primary layout methods

## Recent Projects
- Links directory page (alphabetically sorted with Jekyll URL prefix)
- [Add other recent projects here]

## Notes for Future Sessions
- Always use `{{ site.url }}` or `{{ site.baseurl }}` for links
- Maintain the teal/gold color scheme
- Keep responsive design in mind (mobile-first)
- Use existing CSS variables instead of hardcoding colors
