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

generateRegistry(componentsDir, outputPath)
  .then(() => console.log("Registry generation complete"))
  .catch((error) => console.error("Error generating registry:", error));
