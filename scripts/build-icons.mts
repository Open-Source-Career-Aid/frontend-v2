import * as path from "node:path";
// cwd = Current Working Directory
const cwd = process.cwd();
const inputDirectory = path.join(cwd, 'scripts', 'svg-icons')
// Relative = Pass 2 separate paths, return relative path
const inputDirRelative = path.relative(cwd, inputDirectory)
// outputDir to sprite.svg
const outputDir = path.join(cwd, 'public', 'icons')