#!/usr/bin/env node
import { Command } from 'commander';
import { add } from './commands/add.js';

const program = new Command();

program
  .name('shadcn-chat-components')
  .description('CLI to add chat components to your project')
  .version('0.1.0');

program.addCommand(add);

program.parse(process.argv);