// Renders the application's single page as an HTML string.

const styles = `
  body { margin: 0; font-family: system-ui, sans-serif; background: #ffffff; color: #1f2328; }
  main { padding: 48px 24px; max-width: 640px; margin: 0 auto; }
  footer { padding: 16px 24px; border-top: 1px solid #d0d7de; color: #59636e; font-size: 14px; }
`;

export function renderFooter() {
  return '<footer>Made with care by the demo team.</footer>';
}

export function renderPage({ title = 'demo-app', greeting = 'Hello!' } = {}) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <style>${styles}</style>
</head>
<body>
  <main>
    <h1>${greeting}</h1>
    <p>Welcome to the demo application.</p>
  </main>
  ${renderFooter()}
</body>
</html>
`;
}
