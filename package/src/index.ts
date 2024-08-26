#!/usr/bin/env node
import { Command } from 'commander';
import { add } from './commands/add.js';

const program = new Command();

program
  .name('shadcn-chat-cli')
  .description('CLI for adding chat components to your project')
  .version('0.1.0');

program.addCommand(add);

program.parse(process.argv);