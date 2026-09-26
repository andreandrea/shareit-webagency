import { access, cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "dist");
const pages = ["home.html", "chi-siamo.html", "contatti.html", "page-template.html"];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const page of pages) {
  await cp(path.join(root, page), path.join(output, page));
}

const indexSource = path.join(root, "index.html");
try {
  await access(indexSource);
  await cp(indexSource, path.join(output, "index.html"));
} catch {
  await cp(path.join(root, "home.html"), path.join(output, "index.html"));
}

console.log(`Static build ready: ${pages.length + 1} pages copied to dist/`);
