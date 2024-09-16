# shadcn-chat

A CLI for adding **chat** components to your project.

# Installation

Check out the full documentation and API reference [here](https://docsshadcn-chat.vercel.app/).

> Some of the components rely on [shadcn-ui](https://ui.shadcn.com/docs/installation), so make sure to have it installed.

# add

Use the `add` command to add components to your project.

It is recommended to install all components at once:

```
npx shadcn-chat-cli add --all
```

To view a list of all available components run the following command:

```
npx shadcn-chat-cli add
```

Otherwise, install individual components by running:

```
npx shadcn-chat-cli add [component]
```

The components will be installed in a subdirectory of the `components` folder: `src/components/ui/chat`

# Usage & Examples

All of the component primitives are unstyled and you can add styling in any way you'd like - for instance with `className`.
