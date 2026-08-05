import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const linksUrl = new URL("../app/project-links.ts", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);
const packageUrl = new URL("../package.json", import.meta.url);

test("defines the landing metadata and working local commands", async () => {
  const [layout, packageText] = await Promise.all([
    readFile(layoutUrl, "utf8"),
    readFile(packageUrl, "utf8"),
  ]);
  const packageJson = JSON.parse(packageText);

  assert.match(layout, /El Palacio \| Presentación del proyecto SPA/);
  assert.match(layout, /lang="es"/);
  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
});

test("keeps the six resources in the requested order", async () => {
  const page = await readFile(pageUrl, "utf8");
  const labels = [
    "Video promocional de la SPA",
    "Portafolio en Vercel",
    "Video tutorial de la SPA",
    "Documento SRS",
    "Video testimonial",
    "SPA final: El Palacio",
  ];

  let lastPosition = -1;
  for (const label of labels) {
    const position = page.indexOf(label);
    assert.ok(position > lastPosition, `${label} debe conservar su posición`);
    lastPosition = position;
  }
});

test("leaves missing links disabled and keeps available resources valid", async () => {
  const [page, links] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(linksUrl, "utf8"),
  ]);

  assert.match(page, /const available = Boolean\(resource\.href\)/);
  assert.match(page, /aria-disabled="true"/);
  assert.match(links, /srsDocument: "\/documentos\/srs\.docx"/);
  assert.match(
    links,
    /portfolio: "https:\/\/portafolio-seven-phi-38\.vercel\.app\/"/,
  );
  assert.match(
    links,
    /finalSpa: "https:\/\/el-palacio-2da-version\.vercel\.app\/"/,
  );
  assert.equal((links.match(/: "",/g) ?? []).length, 3);
});
