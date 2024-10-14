# Bun Astro Starter with Bootstrap

![License](https://img.shields.io/github/license/casoon/bun-astro-starter-with-bootstrap)
![Stars](https://img.shields.io/github/stars/casoon/bun-astro-starter-with-bootstrap)
![Issues](https://img.shields.io/github/issues/casoon/bun-astro-starter-with-bootstrap)

A starter template using **Bun.js**, **Astro.js**, **Alpine.js**, **Bootstrap**, **Lightning CSS**, and **TypeScript**.

This project is live
at: [https://bun-astro-starter-with-bootstrap.casoon.dev/](https://bun-astro-starter-with-bootstrap.casoon.dev/)

You can use this project as a template to quickly start your own project. Simply click the **"Use this template"**
button on GitHub, and you'll have a copy of the repository to work with.

## Why Astro.js?

**Astro.js** is a relatively new solution in web development that stands out with its **content-first** philosophy.
While many modern frameworks like React or Vue focus on building interactive web applications, Astro emphasizes
generating **optimized static HTML**. This optimization aims to minimize the amount of JavaScript sent to the client,
providing a faster and leaner user experience.

Detailed benefits:

- **Optimized load times**: By generating pure HTML, Astro significantly reduces time to full page load. JavaScript is
  only used where absolutely necessary.
- **Partial hydration**: Unlike traditional single-page applications (SPAs), Astro allows for hydrating individual
  components. This means only interactive parts of a page require JavaScript, while the rest is served as static HTML.
- **Framework flexibility**: You can seamlessly integrate components from React, Vue, Svelte, and other frameworks in
  Astro, without being tied to a specific library. This gives developers maximum flexibility when choosing tools.
- **Modern development tools**: Astro natively integrates modern tools like **ESM** (ECMAScript Modules) and offers
  out-of-the-box support for **TypeScript**.
- **Server-Side Rendering (SSR)**: While Astro is primarily known for generating static sites, it also supports **SSR**
  for more dynamic use cases. With SSR, Astro can render content on the server for each request, enabling personalized,
  real-time updates without sacrificing the performance benefits of static HTML. This makes it a versatile choice for
  websites that need both static and dynamic content handling.

## Why Bun.js?

**Bun.js** is a high-performance JavaScript runtime focused on speed and efficiency. It combines several development
tools in one package and offers remarkable performance by being built on **WebKit's JavaScriptCore** (instead of V8,
like Node.js).

Key advantages of Bun.js:

- **Fast module resolution and runtime**: Bun.js resolves JavaScript modules extremely quickly, making it particularly
  beneficial for projects with many dependencies or large codebases. The speed advantages over Node.js are significant.
- **Built-in development tools**: Bun offers native support for **TypeScript**, **ESM**, **SCSS**, and more, without
  needing extra configuration or external tools like Webpack or Babel.
- **Streamlined development process**: With Bun, you can handle the entire build process — from package management to
  transpiling and bundling. This simplifies the toolchain, reduces dependencies, and accelerates the workflow.
- **Lower memory usage**: Bun.js is optimized for lower memory consumption, making it ideal for projects that prioritize
  resource efficiency.

## Why Lightning CSS?

**Lightning CSS** is a highly optimized tool for CSS processing. While many CSS optimization tools exist, Lightning CSS
provides a unique combination of **speed** and **future-proofing**. It is designed to support modern CSS features while
maintaining excellent compatibility with older browsers.

Detailed benefits:

- **Ultra-fast processing**: Lightning CSS is designed to minify and optimize CSS files at lightning speed, ensuring
  fast builds even for large and complex stylesheets.
- **Autoprefixing with future support**: It supports modern CSS specifications and automatically adds **vendor prefixes
  ** to ensure your website works across as many browsers as possible without worrying about browser compatibility
  issues.
- **Cutting-edge CSS**: Lightning CSS not only supports current CSS specifications but also experimental and future
  standards. It ensures you can use modern features like CSS Grid, Flexbox, or Custom Properties without running into
  compatibility problems.
- **Error detection**: Lightning CSS analyzes your CSS code for potential errors and warns you early, helping you avoid
  layout issues or performance degradation.

## Features

- **Bun.js**: Fast JavaScript runtime for package management and builds.
- **Astro.js**: Static site generator focused on speed and simplicity.
- **Alpine.js**: Lightweight JavaScript framework for UI interactions.
- **Bootstrap**: CSS framework for responsive and modern design.
- **TypeScript**: Static typing for a better developer experience.
- **Sass**: CSS preprocessor for writing reusable, scalable styles.
- **Lightning CSS**: Fast CSS minification and autoprefixing for optimized styles.

## Requirements

- **Bun**: Install Bun on your system by following the [official instructions](https://bun.sh).
- **Node.js**: Required for TypeScript and other tooling. Make sure it's installed.

## Getting Started

### Using as a GitHub Template

To use this repository as a template for your project:

1. Click the **"Use this template"** button at the top of the GitHub repository page.
2. Follow the prompts to create your new repository.

Alternatively, you can clone this repository manually:

1. Clone the repository:

   ```bash
   git clone https://github.com/casoon/bun-astro-starter-with-bootstrap.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bun-astro-starter-with-bootstrap
   ```

3. Install dependencies:

   ```bash
   bun install
   ```

4. Start the development server:

   ```bash
   bun run dev
   ```

   The app will be available at `http://localhost:3000`.

## Testing Accessibility with axe-core and Lighthouse

This project includes automated accessibility tests using **axe-core** and **Lighthouse**. These tests are executed
automatically after each build to ensure that the website adheres to best practices for accessibility.

### Running axe-core

**axe-core** is used to detect accessibility issues on the built website. The test script is located in `test-axe.js`
and runs automatically after the build.

You can manually trigger the axe-core test by running:

```bash
bun run test:axe
```

### Running Lighthouse

**Lighthouse** is used to measure accessibility, performance, and other metrics. The test script is located in
`test-lighthouse.js` and runs automatically after the build, generating a report in `lighthouse-report.html`.

You can manually trigger the Lighthouse test by running:

```bash
bun run test:lighthouse
```

Both tests will run automatically after the build when you execute:

## Scripts

- `dev`: Start the development server.
- `build`: Create a production build.
- `postbuild`: Run axe-core and Lighthouse accessibility tests.
- `test:axe`: Run axe-core accessibility test.
- `test:lighthouse`: Run Lighthouse accessibility test.
- `start`: Preview the production build.
- `check`: Run TypeScript checks.
- `clean`: Clean up the build directory.
- `sass`: Compile SCSS into CSS.
- `sass:watch`: Watch SCSS files and compile on changes.

## Custom Styles

### Global Styles

- The `global.css` file is available for any additional global styles, but it is currently empty. You can use it to
  define custom global CSS rules.

### Bootstrap Customization

You can customize Bootstrap in the `src/styles/bootstrap.scss` file.

Example of overriding the primary color:

```scss
$primary: #ffa500; // Custom orange primary color
```

You can import only the necessary Bootstrap components to keep the bundle size small.

## Lightning CSS

This project uses **Lightning CSS** for CSS optimization. Lightning CSS handles minification and autoprefixing to ensure
that the final CSS is both lightweight and compatible with a wide range of browsers.

Lightning CSS is automatically applied during the build process, so you don’t need to configure anything manually. If
you need to customize or disable certain optimizations, you can refer to
the [Lightning CSS documentation](https://github.com/parcel-bundler/lightningcss).

## Project Structure

```plaintext
bun-astro-starter-with-bootstrap/
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Layout components
│   ├── pages/           # Page routes
│   └── styles/          # SCSS files for styles
├── public/              # Static assets
├── package.json         # Project dependencies and scripts
└── astro.config.mjs     # Astro configuration
```

## Dependencies

- `@astrojs/alpinejs`: Astro integration for Alpine.js.
- `alpinejs`: Lightweight framework for UI interactions.
- `astro`: Static site generator.
- `bootstrap`: CSS framework for responsive design.
- `typescript`: Static typing.
- `sass`: CSS preprocessor.
- `lightningcss`: CSS optimizer and autoprefixer.

## Dev Dependencies

- `@astrojs/ts-plugin`: TypeScript support for Astro.
- `@types/node`: TypeScript definitions for Node.js.
- `@types/bootstrap`: TypeScript definitions for Bootstrap.

## Measuring Page Size and Performance

To measure the page size and speed of your site, you can use **Google PageSpeed Insights**.

Visit [PageSpeed Insights for this project](https://pagespeed.web.dev/analysis/https-bun-astro-starter-with-bootstrap-casoon-dev/0dl98nu056?form_factor=mobile)
to view a detailed performance report
for [https://bun-astro-starter-with-bootstrap.casoon.dev/](https://bun-astro-starter-with-bootstrap.casoon.dev/).

PageSpeed Insights provides metrics on performance, accessibility, best practices, and SEO, with specific suggestions
for improving your site’s loading speed and overall performance.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues or submit

## Author

Created by **Casoon**.
