/**
 * No Netlify, o gatsby-adapter-netlify gera:
 *   public/event/[accessCode]/index.html
 *   public/page-data/event/[accessCode]/page-data.json
 *
 * O runtime do Gatsby ainda busca:
 *   /page-data/event/page-data.json
 *
 * Este script cria cópias em /event/ para compatibilidade.
 */
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const adapterSegmentDir = "[accessCode]";

function copyIfExists(from, to) {
  if (!fs.existsSync(from)) return false;
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
  return true;
}

function bridgeRoute(segment) {
  const htmlFrom = path.join(publicDir, segment, adapterSegmentDir, "index.html");
  const htmlTo = path.join(publicDir, segment, "index.html");
  const pageDataFrom = path.join(
    publicDir,
    "page-data",
    segment,
    adapterSegmentDir,
    "page-data.json"
  );
  const pageDataTo = path.join(publicDir, "page-data", segment, "page-data.json");

  const htmlCopied = copyIfExists(htmlFrom, htmlTo);
  const pageDataCopied = copyIfExists(pageDataFrom, pageDataTo);

  if (htmlCopied || pageDataCopied) {
    console.log(
      `[bridge-adapter-routes] ${segment}: html=${htmlCopied}, page-data=${pageDataCopied}`
    );
  }
}

bridgeRoute("event");
bridgeRoute("subscription");
