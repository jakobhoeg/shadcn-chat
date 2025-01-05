import path from "path";
import { generateRegistry } from "../src/utils/generate-registry";

const componentsDir = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "apps",
  "www",
  "src",
  "components",
  "ui",
  "chat",
);

const hooksDir = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "apps",
  "www",
  "src",
  "components",
  "ui",
  "chat",
  "hooks",
);

const outputPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "apps",
  "www",
  "public",
  "registry",
  "index.json",
);

generateRegistry(
  [
    { dir: componentsDir, type: "components:ui" },
    { dir: hooksDir, type: "hooks" },
  ],
  outputPath
)
  .then(() => console.log("Registry generation complete"))
  .catch((error) => console.error("Error generating registry:", error));