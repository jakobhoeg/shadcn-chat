import { Command } from 'commander';
import prompts from 'prompts';
import { getRegistryIndex, fetchComponent } from '../utils/registry.js';
import fs from 'fs/promises';
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

      const component = await fetchComponent(componentName);

      // Create the target directory if it doesn't exist
      const targetDir = path.join(process.cwd(), 'src', 'components', 'ui', 'chat');
      await fs.mkdir(targetDir, { recursive: true });

      for (const file of component.files) {
        const filePath = path.join(targetDir, file.name);
        await fs.writeFile(filePath, file.content);
        console.log(`Created ${filePath}`);
      }

      console.log(`Component ${componentName} has been added successfully to src/components/ui/chat.`);

      if (component.dependencies && component.dependencies.length > 0) {
        console.log('Don\'t forget to install the following dependencies:');
        console.log(component.dependencies.join(', '));
      }
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  });