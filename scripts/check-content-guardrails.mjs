import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];

const markdownLinkRegex = /\[[^\]]+\]\(([^)]+)\)/g;

const mustInclude = (filePath, entries, label) => {
  const content = fs.readFileSync(filePath, "utf8");
  for (const entry of entries) {
    if (!content.includes(entry)) {
      failures.push(
        `${label}: missing "${entry}" in ${path.relative(root, filePath)}`
      );
    }
  }
  return content;
};

const listMarkdownFiles = (dir) => {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => path.join(dir, name));
};

const validateInternalLinks = () => {
  const markdownFiles = [];

  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === ".git") continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && fullPath.endsWith(".md")) {
        markdownFiles.push(fullPath);
      }
    }
  };

  walk(root);

  for (const file of markdownFiles) {
    const content = fs.readFileSync(file, "utf8");
    let match;
    while ((match = markdownLinkRegex.exec(content)) !== null) {
      const raw = match[1].trim();
      const target = raw.split("#")[0];

      if (!target) continue;
      if (
        target.startsWith("http://") ||
        target.startsWith("https://") ||
        target.startsWith("mailto:")
      )
        continue;

      const resolved = path.resolve(path.dirname(file), target);
      if (!fs.existsSync(resolved)) {
        failures.push(`link: broken internal link in ${path.relative(root, file)} -> ${raw}`);
      }
    }
  }
};

const initiativeFiles = listMarkdownFiles(
  path.join(root, "initiatives", "showcase-public-repo-automation")
).filter((f) => path.basename(f) !== "README.md");

for (const file of initiativeFiles) {
  mustInclude(
    file,
    [
      "## Problema",
      "## Por que agora",
      "## Decisão",
      "## Alternativas consideradas",
      "## Trade-offs",
      "## Impacto esperado",
      "## Impacto observado",
    ],
    "initiative"
  );
}

const decisionFiles = listMarkdownFiles(path.join(root, "decisions")).filter(
  (f) => !["README.md", "decision-impact-index.md"].includes(path.basename(f))
);

for (const file of decisionFiles) {
  const content = mustInclude(file, ["## Referência interna"], "decision");
  if (!content.includes("../initiatives/")) {
    failures.push(
      `decision: missing initiative reference link in ${path.relative(root, file)}`
    );
  }
}

const timelineFiles = listMarkdownFiles(path.join(root, "timeline")).filter(
  (f) => path.basename(f) !== "README.md"
);

for (const file of timelineFiles) {
  const content = mustInclude(file, ["## Status atual", "## Referências"], "timeline");
  if (!content.includes("../initiatives/")) {
    failures.push(
      `timeline: missing initiative reference link in ${path.relative(root, file)}`
    );
  }
  if (!content.includes("../decisions/")) {
    failures.push(
      `timeline: missing decision reference link in ${path.relative(root, file)}`
    );
  }
}

validateInternalLinks();

if (failures.length > 0) {
  console.error("Content guardrails failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Content guardrails passed.");
