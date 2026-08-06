import { tailwindcss } from "@huuma/theme/tailwind";
import { prepare } from "@huuma/ui/server/pack/list";
import app from "@app/root.tsx";

await tailwindcss();

const handler = (await prepare(app))?.deliver();
if (handler) Deno.serve(handler);
