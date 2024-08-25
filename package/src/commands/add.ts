import { Command } from 'commander';
import prompts from 'prompts';
import { getRegistryIndex, fetchComponent } from '../utils/registry.js';
import { writeComponentFiles } from '../utils/file-operations.js';
import path from 'path';

export const add = new Command()
  .name('add')
  .description('Add a component to your project')
  .argument('[componentName]', 'Name of the component to add')
  .action(async (componentName) => {
    try {
      const registryIndex = await getRegistryIndex();

      if (!componentName) {
        const response = await prompts({
          type: 'select',
          name: 'componentName',
          message: 'Select a component to add:',
          choices: registryIndex.map((c: any) => ({ title: c.name, value: c.name }))
        });
        componentName = response.componentName;
      }

      if (!componentName) {
        console.log('No component selected. Exiting.');
        return;
      }

      // Validate if the component exists in the registry
      if (!registryIndex.some((c: any) => c.name === componentName)) {
        console.error(`Component "${componentName}" not found in the registry.`);
        return;
      }

      const components = await fetchComponent(componentName);

      // Create the target directory if it doesn't exist
      const targetDir = path.join(process.cwd(), 'src', 'components', 'ui', 'chat');

      await writeComponentFiles(components, targetDir);

      console.log(`Component ${componentName} and its dependencies have been added successfully to src/components/ui/chat.`);

      const allDependencies = components.flatMap((c: any) => c.dependencies || []).filter((d, i, arr) => arr.indexOf(d) === i);
      if (allDependencies.length > 0) {
        console.log('The following dependencies were also installed:');
        console.log(allDependencies.join(', '));
      }
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  });