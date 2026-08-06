import { pack } from "@huuma/ui/server/pack";
import app from "@app/root.tsx";
import List from "@manifest/list.ts";

await pack(app, List);
Deno.serve(app.deliver());
