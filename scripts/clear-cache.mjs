import { rmSync } from "fs";
import { fileURLToPath } from "url";
import { join as joinPath, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cacheDir = joinPath(__dirname, "..", "node_modules/.cache");
rmSync(cacheDir, { recursive: true, force: true });

console.log("CACHE CLEARED");