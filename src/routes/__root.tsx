import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center border border-bronze/30 bg-card/60 p-8 md:p-12 backdrop-blur-sm animate-drift">
        <span className="inline-block w-3 h-3 rotate-45 bg-ice shadow-[0_0_12px_var(--color-ice)] animate-flicker mb-4" />
        <h1 className="font-display font-black text-6xl md:text-7xl text-glow-ice text-parchment">404</h1>
        <h2 className="mt-4 font-display text-lg tracking-[0.25em] uppercase text-bronze">Beyond the Wall</h2>
        <p className="mt-4 font-body italic text-lg text-muted-foreground leading-relaxed">
          "The path you seek has been swallowed by the winter storms. There is only cold stone here."
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-bronze/50 text-bronze font-display text-[0.68rem] tracking-[0.3em] uppercase hover:bg-bronze/10 px-6 py-3 transition rounded-none"
          >
            Return to Citadel
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center border border-bronze/30 bg-card/60 p-8 md:p-12 backdrop-blur-sm animate-drift">
        <span className="inline-block w-3 h-3 rotate-45 bg-fire shadow-[0_0_12px_var(--color-fire)] animate-flicker mb-4" />
        <h1 className="font-display text-2xl tracking-[0.2em] text-glow-fire text-parchment uppercase">
          Doom at the Gates
        </h1>
        <p className="mt-4 font-body italic text-lg text-muted-foreground leading-relaxed">
          "A catastrophic event has shaken the realm's foundations. The servers failed to scribe the page."
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border border-bronze/50 text-bronze font-display text-[0.68rem] tracking-[0.3em] uppercase hover:bg-bronze/10 px-6 py-3 transition rounded-none cursor-pointer"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-border text-muted-foreground font-display text-[0.68rem] tracking-[0.3em] uppercase hover:bg-accent px-6 py-3 transition rounded-none"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lakshy Chauhan — Maester of the Web" },
      {
        name: "description",
        content:
          "Portfolio of Lakshy Chauhan, full-stack developer. A dark-fantasy chronicle of projects, experience, and the code that binds them.",
      },
      { name: "author", content: "Lakshy Chauhan" },
      { property: "og:title", content: "Lakshy Chauhan — Maester of the Web" },
      {
        property: "og:description",
        content: "A Game of Thrones inspired developer portfolio. Enter the archive.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
      { name: "twitter:site", content: "@lakshychauhan" },
      { name: "twitter:creator", content: "@lakshychauhan" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=UnifrakturCook:wght@700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
