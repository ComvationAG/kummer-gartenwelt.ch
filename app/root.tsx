import { createUIApp, Launch, Scripts, Meta } from "@huuma/ui/server";
import { loadStaticFiles } from "@huuma/route/http/tasks/static-files";

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Lexend:wght@100..900&display=swap";

const app = createUIApp(
  ({ children, scripts, islands, metadata, transferState }) => {
    return (
      <html lang="de">
        <head>
          <Meta metadata={metadata} />
          <Scripts nonce={scripts?.nonce} scripts={scripts?.head} />
          <title>Kummer Gartenbau — Gestaltungsvarianten</title>
          <meta
            name="description"
            content="Kummer Gartenbau — zwei gestalterische Richtungen für Ihren Aussenraum."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="stylesheet" href={FONTS_HREF} />
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          {children}
          <Scripts nonce={scripts?.nonce} scripts={scripts?.body} />
          <Launch
            nonce={scripts?.nonce}
            body={scripts?.body}
            islands={islands}
            transferState={transferState}
          />
        </body>
      </html>
    );
  },
);

await loadStaticFiles(app);

export default app;