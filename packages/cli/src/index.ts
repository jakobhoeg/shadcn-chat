#!/usr/bin/env node
import { Command } from "commander";
import { add } from "./commands/add.js";
import { getPackageInfo } from "./utils/get-package-info";

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command();
  program
    .name("shadcn-chat-cli")
    .description("CLI for adding chat components to your project")
    .version(packageInfo.version || "1.0.0");

  program.addCommand(add);

  program.parse(process.argv);
}

main();
