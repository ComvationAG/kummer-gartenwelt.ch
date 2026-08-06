import { createUIApp, Launch, Scripts, Meta } from "@huuma/ui/server";
import { loadStaticFiles } from "@huuma/route/http/tasks/static-files";

const app = createUIApp(
  ({ children, scripts, islands, metadata, transferState }) => {
    return (
      <html lang="en">
        <head>
          <Meta metadata={metadata} />
          <Scripts nonce={scripts?.nonce} scripts={scripts?.head} />
          <title>Hello Huuma</title>
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

// Apply additional tasks or middleware here.
await loadStaticFiles(app);

export default app;

