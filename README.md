# Frontend Mentor - Newsletter Sign-up Form with Success Message

A solution to the [Newsletter Sign-up Form with Success Message](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv) challenge on Frontend Mentor. Built with plain HTML, CSS, and JavaScript — no frameworks.

**Live Site:** https://hshs-dev.github.io/newsletter-sign-up-with-success-message/

**Repository:** https://github.com/HsHs-dev/newsletter-sign-up-with-success-message

## Design Preview

![Design preview for the Newsletter Sign-up Form with Success Message challenge](./Screenshot.png)

## Built with

- Semantic HTML5
- CSS custom properties
- Flexbox for layout and alignment
- CSS media queries for responsive design
- HTML `<picture>` and `<source>` for responsive images
- Native CSS nesting
- CSS pseudo-elements for decorative icons and button gradients
- CSS transitions for interactive states
- JavaScript DOM manipulation and event listeners
- Regular expressions for client-side email format validation
- Local Roboto font files using `@font-face`
- Mobile-first workflow

## Reflections

### What I learned

- **Form validation with JavaScript:** Handling the form's submit event and using a regular expression helped me understand how to validate user input and provide immediate visual feedback.
- **Managing UI states with CSS classes:** Adding and removing classes through `classList` makes it possible to switch between the sign-up form and its success message without navigating to another page.
- **Accessible form feedback:** Using a proper `<label>`, `aria-describedby`, and `aria-live` helps associate validation feedback with the email input and communicate changes to assistive technologies.
- **Responsive images:** The `<picture>` element and media-specific `<source>` elements allow the browser to select different illustrations depending on the viewport, while keeping the HTML structure simple.
- **CSS pseudo-elements:** Using `::before` for list icons and gradient overlays allowed me to create visual details without introducing additional markup.
- **Layering and transitions:** Pseudo-elements, `isolation`, and `z-index` helped me place the gradient overlay behind button text while keeping the hover effect smooth.
- **CSS custom properties and nesting:** Centralizing design values and grouping related rules made the stylesheet more organized and easier to maintain.

### Challenges

The main challenge was handling the transition between the sign-up form and the success message while keeping the interface responsive.

Instead of navigating to a separate page, the implementation uses JavaScript to toggle CSS classes on the two cards. CSS visibility, opacity, and transitions control their appearance, while the responsive layout adapts the sign-up card from a vertically stacked mobile layout to a horizontal desktop layout.

Another challenge was building the button's gradient effect using a pseudo-element. Positioning it over the button background but behind the text required understanding stacking contexts and how `z-index` works with `isolation`.

Form validation was another useful exercise: displaying an error state when the input is invalid and clearing that state when the user begins typing helped me connect DOM events with visual feedback.

## Useful resources

- [Josh Comeau's CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) - Used as the foundation for the project's CSS reset.
- [MDN: Form Validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) - A useful reference for understanding client-side form validation.
- [MDN: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) - Helped inform the email-format validation approach.
- [MDN: The `<picture>` Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture) - Explains how to provide different image sources for different display conditions.
- [MDN: CSS Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context) - Useful for understanding how layered elements and `z-index` interact.

## AI Collaboration

I used AI as a study partner to discuss implementation choices, reason through CSS layering and responsive behavior, and document the concepts I learned. The focus was on understanding the underlying HTML, CSS, and JavaScript rather than relying on frameworks.

## Author

- GitHub - [@HsHs-dev](https://github.com/HsHs-dev)
- Frontend Mentor - [@HsHs-dev](https://www.frontendmentor.io/profile/HsHs-dev)
