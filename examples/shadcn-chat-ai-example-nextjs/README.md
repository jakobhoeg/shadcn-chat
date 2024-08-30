# Vercel AI SDK, Next.js and shadcn-chat

This example shows how easy it is to get your own chat ai up and running in no time and still have full control over the design.

It shows both how to integrate a classic layout and also the chat support using the `expandable-chat` component.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/jakobhoeg/shadcn-chat/tree/master/examples/shadcn-chat-ai-example-nextjs shadcn-chat-ai-example-nextjs
```

```bash
yarn create next-app --example https://github.com/jakobhoeg/shadcn-chat/tree/master/examples/shadcn-chat-ai-example-nextjs shadcn-chat-ai-example-nextjs
```

```bash
pnpm create next-app --example https://github.com/jakobhoeg/shadcn-chat/tree/master/examples/shadcn-chat-ai-example-nextjs shadcn-chat-ai-example-nextjs
```

To then run the example locally you'll need to:

1. Sign up at [OpenAI's Developer Platform](https://platform.openai.com/signup).
2. Go to [OpenAI's dashboard](https://platform.openai.com/account/api-keys) and create an API KEY.
3. Set the required environment variables as shown in [the example env file](./.env.local.example) but in a new file called `.env.local`.
4. `npm install` to install the dependencies.
5. `npm run dev` to launch the development server.

Look at the `/components/chat/chat-support.tsx`, `app/page.tsx` & `/api/chat/route.ts` components to check out the implementation.