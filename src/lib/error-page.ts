export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Labor Connect - Page Error</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        --cta: #F26522;
        --cta-hover: #E0581C;
        --background: #ffffff;
        --foreground: #1a1a1a;
        --muted-foreground: #6b7280;
        --border: #e5e7eb;
        --secondary: #f9fafb;
      }

      body {
        font: 16px/1.6 system-ui, -apple-system, sans-serif;
        background: var(--background);
        color: var(--foreground);
        display: grid;
        place-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 2rem;
      }

      .card {
        max-width: 30rem;
        width: 100%;
        text-align: center;
        padding: 3rem 2rem;
        border: 1px solid var(--border);
        border-radius: 1.5rem;
        background: var(--background);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      }

      .logo {
        font-size: 1.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
      }

      .logo span {
        color: var(--cta);
      }

      h1 {
        font-size: 1.75rem;
        margin: 0 0 0.75rem;
        font-weight: 800;
      }

      p {
        color: var(--muted-foreground);
        margin: 0 0 2rem;
        line-height: 1.7;
      }

      .actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      a, button {
        padding: 0.75rem 1.5rem;
        border-radius: 0.75rem;
        font: inherit;
        cursor: pointer;
        text-decoration: none;
        border: 1px solid transparent;
        font-weight: 600;
        transition: all 0.2s ease;
      }

      .primary {
        background: var(--cta);
        color: #fff;
      }

      .primary:hover {
        background: var(--cta-hover);
      }

      .secondary {
        background: var(--secondary);
        color: var(--foreground);
        border-color: var(--border);
      }

      .secondary:hover {
        background: #f3f4f6;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="logo">Labor <span>Connect</span></div>
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
