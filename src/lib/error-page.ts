export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Doom at the Gates — Error</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=EB+Garamond:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
    <style>
      :root {
        --background: #151310;
        --card: #1c1815;
        --foreground: #e8dcc8;
        --bronze: #c4956a;
        --fire: #c4622a;
      }
      body {
        font-family: 'EB Garamond', serif;
        font-size: 18px;
        line-height: 1.6;
        background: var(--background);
        color: var(--foreground);
        display: grid;
        place-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 1.5rem;
        background-image:
          radial-gradient(ellipse at 15% 8%, rgba(196, 98, 42, 0.15), transparent 55%),
          radial-gradient(ellipse at 85% 92%, rgba(106, 168, 196, 0.15), transparent 60%);
      }
      .card {
        max-width: 28rem;
        width: 100%;
        text-align: center;
        padding: 3rem 2rem;
        background: var(--card);
        border: 1px solid rgba(196, 149, 106, 0.3);
        box-sizing: border-box;
      }
      .gem {
        display: inline-block;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        background: var(--fire);
        box-shadow: 0 0 12px var(--fire);
        margin-bottom: 1.5rem;
      }
      h1 {
        font-family: 'Cinzel', serif;
        font-size: 1.5rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        margin: 0 0 1rem;
        color: var(--foreground);
      }
      p {
        color: #a0937e;
        font-style: italic;
        margin: 0 0 2rem;
      }
      .actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      a, button {
        padding: 0.75rem 1.5rem;
        font-family: 'Cinzel', serif;
        font-size: 0.7rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        cursor: pointer;
        text-decoration: none;
        border: 1px solid transparent;
        background: transparent;
        transition: all 0.3s;
      }
      .primary {
        color: var(--bronze);
        border-color: rgba(196, 149, 106, 0.5);
      }
      .primary:hover {
        background: rgba(196, 149, 106, 0.1);
      }
      .secondary {
        color: #a0937e;
        border-color: rgba(255, 255, 255, 0.08);
      }
      .secondary:hover {
        background: rgba(255, 255, 255, 0.02);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="gem"></div>
      <h1>Doom at the Gates</h1>
      <p>"A catastrophic event has shaken the realm's foundations. The servers failed to scribe the page."</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try Again</button>
        <a class="secondary" href="/">Return Home</a>
      </div>
    </div>
  </body>
</html>`;
}
