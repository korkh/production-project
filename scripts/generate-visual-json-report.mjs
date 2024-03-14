import { promisify } from "util";
import { readdir, writeFile } from "fs";

import { fileURLToPath } from "url";
import { join as joinPath, dirname, relative } from "path";

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const lokiDir = joinPath(__dirname, "..", ".loki");
const actualDir = joinPath(lokiDir, "current");
const expectedDir = joinPath(lokiDir, "reference");
const diffDir = joinPath(lokiDir, "difference");

(async function main() {
  const diffs = await asyncReaddir(diffDir);

  await writeFileAsync(
    joinPath(lokiDir, "report.json"),
    JSON.stringify({
      newItems: [],
      deletedItems: [],
      passedItems: [],
      failedItems: diffs,
      expectedItems: diffs,
      actualItems: diffs,
      diffItems: diffs,
      actualDir: relative(lokiDir, actualDir),
      expectedDir: relative(lokiDir, expectedDir),
      diffDir: relative(lokiDir, diffDir),
    })
  );
})();

//USAGE in package.json
//"test:ui:report": "npm run test:ui:json && npm run test:ui:html",
//"test:ui:json": "node scripts/generate-visual-json-report.js",
//"test:ui:html": "reg-cli --from .loki/report.json --report .loki/report.html",
