/* eslint-disable @typescript-eslint/no-var-requires */
const { promisify } = require("util");
const { readdir, writeFile } = require("fs");
const { join: joinPath, relative } = require("path");

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

// eslint-disable-next-line no-undef
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
