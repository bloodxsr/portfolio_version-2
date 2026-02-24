# F1-Inspired Developer Portfolio

A sleek, high-performance web portfolio designed for software engineers, blending professional aesthetics with subtle premium motorsport (Formula 1) themes. 

## Features

- **Multi-Page Architecture (MPA):** Clean semantic HTML structure split across isolated routes for optimal maintainability (`/about`, `/experience`, `/projects`, `/contact`).
- **Premium Aesthetics:** Deep carbon/charcoal dark mode (`#0a0a0a`), crisp typography (`Geist`, `Outfit`), and Racing Red (`#E10600`) highlights.
- **Dynamic Animations:** Staggered load animations on the Hero section and seamless fade-out/fade-in page transitions that mimic the speed of modern SPAs without the JS bloat.
- **Utmost Security:** Powered by a Node.js Express server heavily secured with **Helmet.js**, enforcing exceedingly strict HTTP headers, including a robust Custom `Content-Security-Policy` (CSP) and clickjacking protection (`X-Frame-Options: DENY`).

## Tech Stack

- **Frontend:** HTML5, Vanilla CSS3 (Custom Variables, Flexbox, CSS Grid), Vanilla JavaScript (IntersectionObservers, Event interception).
- **Backend:** Node.js, Express.js.
- **Security Middleware:** Helmet, CORS.

## Local Development

Follow these steps to run the portfolio on your local machine.

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install the backend dependencies:
   ```bash
   npm install
   ```

3. Start the secure Node.js server:
   ```bash
   node server.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
portfolio/
├── package.json           # Node.js dependencies
├── server.js              # Express server & Helmet security configuration
└── public/                # Static files served by Express
    ├── index.html         # Landing page (Hero section)
    ├── style.css          # Global styling and animations
    ├── script.js          # Page transitions and scroll logic
    ├── about/             # Driver Profile / Skills
    │   └── index.html
    ├── experience/        # Track Record / Timeline
    │   └── index.html
    ├── projects/          # Race Calendar / Project Grid
    │   └── index.html
    └── contact/           # Box, Box / Contact forms
        └── index.html
```

## Customization

To personalize the portfolio:
1. **Details:** Update the `<title>` tags and `index.html` content with your own name and bio.
2. **Colors:** The core colors are defined as CSS variables at the top of `public/style.css`. Change the `--accent-red` variable to your preferred highlight color.
3. **Projects/Experience:** Modify the respective `index.html` files in the `public/` subdirectories to reflect your actual work history.

## License

This project is licensed under the ISC License.
