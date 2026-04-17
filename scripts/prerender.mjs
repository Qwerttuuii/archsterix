import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const serverEntryPath = path.join(distDir, "server", "entry-server.js");
const templatePath = path.join(distDir, "index.html");

const routes = ["/", "/about", "/services", "/projects", "/contact", "/privacy", "/terms", "/blog"];

const template = await readFile(templatePath, "utf8");
const serverEntry = await import(pathToFileURL(serverEntryPath).href);
const render = serverEntry.render;

if (typeof render !== "function") {
  throw new Error("SSR render function was not found in dist/server/entry-server.js");
}

for (const route of routes) {
  const { appHtml } = render(route);
  const bodyStartIndex = appHtml.indexOf("<header");

  if (bodyStartIndex === -1) {
    throw new Error(`Could not find the start of body markup for route: ${route}`);
  }

  const head = appHtml.slice(0, bodyStartIndex);
  const bodyHtml = appHtml.slice(bodyStartIndex);

  let documentHtml = template.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  documentHtml = documentHtml.replace("</head>", `${head}\n</head>`);

  const outputPath =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.slice(1), "index.html");

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, documentHtml, "utf8");
}

await rm(path.join(distDir, "server"), { recursive: true, force: true });
