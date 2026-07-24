import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const flatEnglishPage = path.join(outputDirectory, "en.html");
const cleanEnglishDirectory = path.join(outputDirectory, "en");
const cleanEnglishPage = path.join(cleanEnglishDirectory, "index.html");

async function exists(filePath) {
  try {
    await readFile(filePath);
    return true;
  } catch {
    return false;
  }
}

const flatExists = await exists(flatEnglishPage);
const cleanExists = await exists(cleanEnglishPage);

if (!flatExists && !cleanExists) {
  throw new Error("The English page was not exported to out/en.html or out/en/index.html.");
}

await mkdir(cleanEnglishDirectory, { recursive: true });

if (!cleanExists) {
  await copyFile(flatEnglishPage, cleanEnglishPage);
}

if (!flatExists) {
  await copyFile(cleanEnglishPage, flatEnglishPage);
}

for (const filePath of [cleanEnglishPage, flatEnglishPage]) {
  let html = await readFile(filePath, "utf8");

  html = html.replace(/<html\b([^>]*)>/i, (_match, attributes) => {
    const cleanAttributes = attributes
      .replace(/\s+lang=(["']).*?\1/i, "")
      .replace(/\s+dir=(["']).*?\1/i, "");

    return `<html${cleanAttributes} lang="en" dir="ltr">`;
  });

  html = html.replace(
    /<meta\b(?=[^>]*\bname=(["'])codex-preview\1)[^>]*>\s*/gi,
    "",
  );

  if (!/<html\b[^>]*\blang="en"[^>]*\bdir="ltr"/i.test(html)) {
    throw new Error(`Could not set English document attributes in ${filePath}.`);
  }

  if (/codex-preview/i.test(html)) {
    throw new Error(`Development-only metadata remains in ${filePath}.`);
  }

  await writeFile(filePath, html);
}

console.log("Prepared /en/ and /en.html with server-rendered English document attributes.");
