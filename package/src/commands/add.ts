import { Command } from 'commander';
import prompts from 'prompts';
import { getRegistryIndex, fetchComponent } from '../utils/registry.js';
import { writeComponentFiles } from '../utils/file-operations.js';
import path from 'path';
import ora from 'ora';
import chalk from 'chalk';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const add = new Command()
  .name('add')
  .description('Add a component to your project')
  .argument('[componentName]', 'Name of the component to add')
  .action(async (componentName) => {
    try {
      const spinner = ora({ text: 'Fetching registry...' }).start();
      const [registryIndex] = await Promise.all([
        getRegistryIndex(),
        delay(500) // Minimum 1 second display
      ]);
      spinner.succeed('Registry fetched');

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
        console.log(chalk.yellow('No component selected. Exiting.'));
        return;
      }

      // Validate if the component exists in the registry
      if (!registryIndex.some((c: any) => c.name === componentName)) {
        console.error(chalk.red(`Component "${componentName}" not found in the registry.`));
        return;
      }

      spinner.start(`Fetching component ${chalk.cyan(componentName)}...`);
      const [components] = await Promise.all([
        fetchComponent(componentName),
        delay(500)
      ]);
      spinner.succeed(`Component ${chalk.cyan(componentName)} fetched`);

      // Create the target directory if it doesn't exist
      const targetDir = path.join(process.cwd(), 'src', 'components', 'ui', 'chat');

      spinner.start('Writing component files...');
      await Promise.all([
        writeComponentFiles(components, targetDir),
        delay(500)
      ]);
      spinner.succeed(chalk.green(`Component ${chalk.cyan(componentName)} and its dependencies have been added successfully to ${chalk.cyan('src/components/ui/chat')}.`));

      const allDependencies = components.flatMap((c: any) => c.dependencies || []).filter((d, i, arr) => arr.indexOf(d) === i);
      if (allDependencies.length > 0) {
        console.log(chalk.blue('The following dependencies were also installed:'));
        console.log(chalk.cyan(allDependencies.join(', ')));
      }
    } catch (error: any) {
      console.error(chalk.red(error.message));
    }
  });