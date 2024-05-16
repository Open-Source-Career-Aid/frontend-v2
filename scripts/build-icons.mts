import * as path from "node:path";
// fsExtra adds file system methods
import fsExtra from 'fs-extra';
import glob from 'glob';

// cwd = Current Working Directory
const cwd = process.cwd();
const inputDirectory = path.join(cwd, 'scripts', 'svg-icons')

// Relative = Pass 2 separate paths, return relative path
const inputDirRelative = path.relative(cwd, inputDirectory)

// outputDir to sprite.svg
const outputDir = path.join(cwd, 'public', 'icons')
await fsExtra.ensureDir(outputDir)

// Glob finds files 
const files = glob.sync("**/.svg", {
  cwd: inputDirectory,
}).sort((a,b) => a.localeCompare(b))

const shouldVerboseLog = process.argv.includes("--log=verbose")

const logVerbose = shouldVerboseLog ? console.log : () => {}

if (files.length === 0) {
  console.log(`No files found in ${inputDirRelative}`)
} else {
  await generateIconFiles()
}

async function generateIconFiles() {
  const spriteFilepath = path.join(outputDir, 'sprite.svg')
  const typeOutputFilepath = path.join(outputDir, 'name.d.ts')

  const currentSprite = await fsExtra.readFile(spriteFilepath, 'utf-8').catch(() => '')
  const currentType = await fsExtra.readFile(typeOutputFilepath, 'utf-8').catch(() => '')


  const iconNames = files.map((file) => iconName(file))

  const spriteUpToDate = iconNames.every((name) => currentSprite.includes(`id=${name}`) )
  const typesUpToDate = iconNames.every((name) => currentType.includes(`${name}`) )

  if (spriteUpToDate && typesUpToDate) {
    logVerbose(`Icons are up to date`)
    return
  }
  logVerbose(`Generating sprite for ${inputDirRelative}`)

  const spriteChanged = generateSvgSprite({ files, inputDirectory, outputDir })
}

function iconName(file: string) {
  return file.replace(/\.svg$/, '')
}

function generateSvgSprite({ files, inputDirectory, outputDir }: {
  files: string[]
  inputDirectory: string
  outputDir: string
}) {

  const symbol = await Promise.all(
    files.map(async (file) => {
      const input = await fsExtra.readFile(path.join(inputDirectory, file), 'utf-8')
    })
  )
}
