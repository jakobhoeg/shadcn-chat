import fs from "fs-extra";
import path from "path";

interface Component {
  name: string;
  dependencies: string[];
  files: { name: string; content: string }[];
  type: string; // Add a type field to differentiate between components and hooks
}

function isHiddenComponent(content: string): boolean {
  // Checks for @hidden in the file to hide it in the cli.
  return content.includes("// @hidden") || content.includes("@hidden");
}

async function generateRegistry(directories: { dir: string; type: string }[], outputPath: string) {
  const components: Component[] = [];
  const hiddenComponents: Component[] = [];

  for (const { dir, type } of directories) {
    // Read files in the directory
    const entries = await fs.readdir(dir);

    for (const entry of entries) {
      if (entry.endsWith(".tsx") || entry.endsWith(".ts")) {
        const filePath = path.join(dir, entry);
        const content = await fs.readFile(filePath, "utf-8");
        const name = path.basename(entry, path.extname(entry)); // Handle both .tsx and .ts files

        const component: Component = {
          name,
          dependencies: [],
          files: [{ name: entry, content }],
          type, // Set the type (e.g., "components:ui" or "hooks")
        };

        // Extract dependencies
        const dependencyMatch = content.match(/import.*from\s+['"](.+)['"]/g);
        if (dependencyMatch) {
          component.dependencies = dependencyMatch
            .map((match) => match.split(/['"]/).slice(-2, -1)[0])
            .filter((dep) => dep.startsWith("./"))
            .map((dep) => path.basename(dep, path.extname(dep))); // Handle both .tsx and .ts files
        }

        // Determine if it's a hidden component and don't show it in the cli.
        if (isHiddenComponent(content)) {
          hiddenComponents.push(component);
        } else {
          components.push(component);
        }
      }
    }
  }

  const registry = {
    components,
    hiddenComponents,
  };

  await fs.writeJson(outputPath, registry, { spaces: 2 });
  console.log(`Registry generated at ${outputPath}`);
}

export { generateRegistry };