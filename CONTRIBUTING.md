# Contributing guidelines

First off, a huge thank you for considering contributing to this project! I am incredibly grateful for your interest in making this project even better, and allowing developers to build better chat features in their projects.

> Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, we will reciprocate that respect by addressing your issue and assisting you finalize your pull requests.

# Prerequisites

Before contributing, ensure you have the following installed:

- Node.js (v18 or higher)
- npm

Familiarity with the following tools is recommended:

- Turborepo
- React and Next.js
- semantic-release

# Table of Contents

1. [Monorepo Structure](#monorepo)
2. [Versioning with semantic-release](#semantic-release)
3. [How the CLI Package Works](#how-the-cli-package-works)
4. [Development Workflow](#development-workflow)
5. [Making Your First Contribution](#your-first-contribution)

# Monorepo

This is a _monorepo_ powered by [turborepo](https://turbo.build/repo/docs) split into the following:

- [`apps/`](./apps/):
  - [`www/`](./apps/www/): The primary web app showcasing some of the features, built with Next.js
  - [`docs/`](./apps/docs/): The documentation site, built with [Nextra](https://nextra.site/docs)
- [`examples/`](./examples/): A folder to showcase example apps - such as chatbots etc.
- [`packages/`](./packages/):
  - [`cli/`](./packages/cli/): The npm package that gets published to npm, making it possible to run `npx shadcn-chat-cli add`
  - [`ui/`](./packages/ui/): This package is used as a shared ui dependency package in the `www` and `docs`.

# semantic-release

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) to automate version management and package publishing on npm.

When changes are made to specific paths in the repository on a pull request, a GitHub action determines whether to trigger a `patch`, `minor`, or `major` release.

Paths Monitored for Changes:

- `'apps/www/public/registry/index.json'`
- `'packages/cli/\*\*'`
- `'packages/ui/**'`

To ensure proper versioning, follow the [commit message formats](https://github.com/semantic-release/semantic-release?tab=readme-ov-file#commit-message-format) when making changes to the chat components. If you're unsure, avoid prefixing your commit message with any of the semantic keywords (e.g., `feat:`, `fix:`, `BREAKING CHANGE:`).

# How the project works

## CLI package overview

The [cli](./packages/cli/) package is a command-line tool that fetches components from a registry. This registry is a JSON file containing metadata about available components, such as their `names`, `dependencies`, `files`, and `types`. The registry is hosted on the [web app](https://shadcn-chat.vercel.app) and can be found at [here](apps/www/public/registry/index.json).

## Registry structure

Each component in the registry includes the following fields, which are used by the cli tool to install them:

- `name`: The name of the component.
- `dependencies`: A list of other components it depends on.
- `files`: The files that make up the component (e.g., `.tsx`, `.ts`).
- `type`: The type of component (e.g., `components:ui` or `hooks`).

## Development workflow

### **Making Changes to Chat Components**

All chat components are maintained in the **shared UI package** (`packages/ui/src/components/ui/chat`). Follow these steps to make changes:

1. **Navigate to the Shared UI Package**:
   ```bash
   cd packages/ui
   ```
2. **Make your changes**:
   - Edit the components in the `src/components/ui/chat` directory, or create new ones
   - For example, update the `ChatBubble` component in `src/components/ui/chat/ChatBubble.tsx`.
3. **Rebuild the Shared UI Package:**
   - After making changes, rebuild the package to ensure the updates are reflected:
   ```bash
   npm run build
   ```
   - You can now import the components in the frontend (`www` or `docs`):
   ```tsx
   import { ChatBubble } from "@shadcn-chat/ui";
   ```
4. **Test Your Changes Locally:**
   - Start the dev server by changing directory to the root folder and run
   ```bash
   npm run dev
   ```
   - Verify the changes are applied correctly
5. **Update the registry**
   - If you’ve added or modified components, regenerate the registry to update the metadata, by changing directory to the root folder and run
   ```bash
   npm run generate-registry
   ```

### **Testing the CLI in Development Mode**

To test your newly generated registry changes locally with the `npx` command, do the following:

1. **Navigate to the CLI Package:**
   ```bash
   cd packages/cli
   ```
2. **Run the CLI in Development Mode:**
   Use the `start:dev` script to run the CLI with a local registry:
   ```bash
   npm run start:dev add
   ```
3. **Check the file(s)**:
   The above will add the files to a `packages/cli/src/components/ui/chat` folder. This is just to test, if the CLI command works as expected.

   **Make sure to check if the files are correct, and then delete them after!**

> This project uses Prettier to maintain code quality. Before committing, ensure your code passes linting and formatting checks:
> `npm run format`

# Pull requests

Following these guidelines ensures a smooth and efficient process for everyone involved. To contribute:

1. Create your own fork of the repository
2. Do the changes in your fork
3. Open a pull request when you feel like the changes are finished.

This lets us review your work and discuss any necessary adjustments.

> Make sure to follow a [semantic commit message](https://github.com/semantic-release/semantic-release?tab=readme-ov-file#commit-message-format) style.
>
> Example of a PR:

> ````
> feat: add voice input support
> ^--^  ^------------^
> |     |
> |     +-> Summary in present tense.
> |
> +-------> Type: feat, fix, refactor, style, chore, docs or test.```
> ````

First time opening a PR? Check [this](https://makeapullrequest.com/) out.

Thank you again for your contribution! 🎉
