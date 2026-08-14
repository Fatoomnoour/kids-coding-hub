import { copyFile, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
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

async function prepareRouteDirectories(routeDirectories) {
  for (const routeDirectory of routeDirectories) {
    let entries = [];
    try {
      entries = await readdir(routeDirectory, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith(".html") || entry.name === "index.html") continue;
      const slug = entry.name.slice(0, -".html".length);
      const source = path.join(routeDirectory, entry.name);
      const targetDirectory = path.join(routeDirectory, slug);
      const target = path.join(targetDirectory, "index.html");
      await mkdir(targetDirectory, { recursive: true });
      await copyFile(source, target);
    }
  }
}

async function prepareCourseDirectories() {
  await prepareRouteDirectories([
    path.join(outputDirectory, "courses"),
    path.join(outputDirectory, "en", "courses"),
  ]);
}

async function prepareBlogDirectories() {
  await prepareRouteDirectories([
    path.join(outputDirectory, "blog"),
    path.join(outputDirectory, "en", "blog"),
  ]);

  for (const [source, target] of [
    [path.join(outputDirectory, "blog.html"), path.join(outputDirectory, "blog", "index.html")],
    [path.join(outputDirectory, "en", "blog.html"), path.join(outputDirectory, "en", "blog", "index.html")],
  ]) {
    if (await exists(source) && !(await exists(target))) {
      await mkdir(path.dirname(target), { recursive: true });
      await copyFile(source, target);
    }
  }
}

await prepareCourseDirectories();
await prepareBlogDirectories();

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

console.log("Prepared /en/, /en.html, and directory index files for static course routes.");
