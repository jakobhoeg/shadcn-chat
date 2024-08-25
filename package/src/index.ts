#!/usr/bin/env node
import { Command } from 'commander';
import { add } from './commands/add.js';

const program = new Command();

program
  .name('shadcn-chat')
  .description('CLI to add UI chat components to your project')
  .version('1.0.0');

program.addCommand(add);

program.parse(process.argv);