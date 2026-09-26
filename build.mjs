import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "dist");
// page-template.html resta nel repo come base per nuove pagine, ma non va online
const pages = ["index.html", "chi-siamo.html", "contatti.html"];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const page of pages) {
  await cp(path.join(root, page), path.join(output, page));
}

console.log(`Static build ready: ${pages.length} pages copied to dist/`);
