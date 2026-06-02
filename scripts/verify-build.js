const fs = require("fs");
const path = require("path");

const required = [
  "public/event/index.html",
  "public/subscription/index.html",
  "public/page-data/event/page-data.json",
  "public/page-data/subscription/page-data.json",
  "public/_redirects",
];

const missing = required.filter((file) => !fs.existsSync(path.join(__dirname, "..", file)));

if (missing.length) {
  console.error("\n[verify-build] Arquivos obrigatórios ausentes no build:\n");
  missing.forEach((f) => console.error(`  - ${f}`));
  process.exit(1);
}

const redirects = fs.readFileSync(
  path.join(__dirname, "..", "public/_redirects"),
  "utf8"
);

if (!redirects.includes("/event/*") || !redirects.includes("/subscription/*")) {
  console.error("\n[verify-build] _redirects sem regras de event/subscription\n");
  process.exit(1);
}

console.log("[verify-build] OK — event, subscription e redirects presentes.");
