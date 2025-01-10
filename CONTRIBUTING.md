# Contributing guidelines

First off, a huge thank you for considering contributing to this project! I am incredibly grateful for your interest in making this project even better, and allowing developers to build better chat features in their projects.

> Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, we will reciprocate that respect by addressing your issue and assisting you finalize your pull requests.

# Monorepo

This is a _monorepo_ powered by [turborepo](https://turbo.build/repo/docs) split into the following:

- [`apps/`](./apps/):
  - [`www/`](./apps/www/): The primary web app showcasing some of the features, built with Next.js
  - [`docs/`](./apps/docs/): The documentation site, built with [Nextra](https://nextra.site/docs)
- [`examples/`](./examples/): A folder to showcase example apps - such as chatbots etc.
- [`packages/`](./packages/):
  - [`cli/`](./packages/cli/): The npm package that gets published to npm.

# semantic-release

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) to automate version management and package publishing on npm.

When changes are made to specific paths in the repository on a pull request, a GitHub action determines whether to trigger a `patch`, `minor`, or `major` release.

Paths Monitored for Changes:

- `'apps/www/public/registry/index.json'`
- `'packages/cli/\*\*'`

To ensure proper versioning, follow the [commit message formats](https://github.com/semantic-release/semantic-release?tab=readme-ov-file#commit-message-format) when making changes. If you're unsure, avoid prefixing your commit message with any of the semantic keywords (e.g., `feat:`, `fix:`, `BREAKING CHANGE:`).

# How the package works

The [cli](./packages/cli/) package is a command-line tool that fetches components from a registry. This registry is a JSON file containing metadata about available components, such as their `names`, `dependencies`, `files`, and `types`. The registry is hosted on the [web app](https://shadcn-chat.vercel.app) and can be found at [here](apps/www/public/registry/index.json).

Each component in the registry has:

- `name`: The name of the component.
- `dependencies`: A list of other components it depends on.
- `files`: The files that make up the component (e.g., `.tsx`, `.ts`).
- `type`: The type of component (e.g., `components:ui` or `hooks`).

### Development workflow

The components from `/apps/www/src/components/ui/chat` are the ones being used atm. Ideally, we'd make a shared UI library to

- Local Development:

  - Navigate to

  - The CLI can be run in development mode by changing directory to `packages/cli` and using `npm run start:dev`, which uses a local registry URL (`http://localhost:3000/registry/index.json`), so you can install the components from your local environment for testing.

To generate the registry after making changes to any of the components inside

# Your first contribution

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
