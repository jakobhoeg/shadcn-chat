import fs from 'fs-extra';
import path from 'path';

interface Component {
  name: string;
  dependencies: string[];
  files: { name: string; content: string }[];
  type?: string;
}
function isHiddenComponent(content: string): boolean {
  // Checks for @hidden in the component file to hide it in the cli.
  return content.includes('// @hidden') || content.includes('@hidden');
}

async function generateRegistry(componentsDir: string, outputPath: string) {
  const components: Component[] = [];
  const hiddenComponents: Component[] = [];

  // Read component files
  const entries = await fs.readdir(componentsDir);

  for (const entry of entries) {
    if (entry.endsWith('.tsx')) {
      const componentPath = path.join(componentsDir, entry);
      const content = await fs.readFile(componentPath, 'utf-8');
      const name = path.basename(entry, '.tsx');

      const component: Component = {
        name,
        dependencies: [],
        files: [{ name: entry, content }],
      };

      // Extract dependencies
      const dependencyMatch = content.match(/import.*from\s+['"](.+)['"]/g);
      if (dependencyMatch) {
        component.dependencies = dependencyMatch
          .map(match => match.split(/['"]/).slice(-2, -1)[0])
          .filter(dep => dep.startsWith('./'))
          .map(dep => path.basename(dep, '.tsx'));
      }

      // Determine if it's a hidden component and don't show it in the cli.
      if (isHiddenComponent(content)) {
        component.type = 'components:ui';
        hiddenComponents.push(component);
      } else {
        components.push(component);
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