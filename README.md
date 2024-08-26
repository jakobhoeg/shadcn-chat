[<img src="shadcn-preview.png">](https://shadcn-chat.vercel.app/)

<h1 align="center">shadcn-chat</h1>
<div align="center">

   [![GitHub Repo stars](https://img.shields.io/github/stars/jakobhoeg/shadcn-chat)](https://github.com/jakobhoeg/shadcn-chat/stargazers)
   
</div>


<p align="center">Customizable and re-usable chat component for you to use in your projects. Built on top of shadcn.</p>

<div align="center">

[Demo](https://shadcn-chat.vercel.app/) • [Preview](#Preview) • [Usage](#Usage) • [Installation](#Installation) • [Tech stack](#Tech-stack)  • [Example Project](https://github.com/jakobhoeg/nextjs-ollama-llm-ui)

</div>

# Preview

https://github.com/jakobhoeg/shadcn-chat/assets/114422072/a934f80f-1662-46f2-83bc-bdca45982ce6

# Usage

For full documentation check out the: [npm docs](https://www.npmjs.com/package/shadcn-chat-cli)

> [!NOTE] 
> Some of the components rely on [shadcn-ui](https://ui.shadcn.com/docs/installation), so make sure to have it installed.

To view a list of all avaialbe components run the following command:

```
npx shadcn-chat-cli add
```

Otherwise, install individual components by running:

```
npx shadcn-chat-cli add [component]
```

## Simple Example

```
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";

<>
<ChatMessageList>
  <ChatBubble>
    <ChatBubbleAvatar />
    <ChatBubbleMessage>
      Message and other content here
     </ChatBubbleMessage>
  </ChatBubble>
</ChatMessageList>
<div className="flex-1" />
  <ChatInput
    placeholder="Type your message here..."
  />
  <Button
    size="sm" className="ml-auto gap-1.5">
    Send Message
    <CornerDownLeft className="size-3.5" />
  </Button>
</>
```

All of the above primitives are unstyled and you can add styling in any way you'd like - for instance with `className`.

For more comprehensive examples, check out the source code: [here](https://github.com/jakobhoeg/shadcn-chat/blob/master/src/app/chatbot/page.tsx#L106-L175), [here](https://github.com/jakobhoeg/shadcn-chat/blob/master/src/app/chatbot2/page.tsx#L106-L175) & [here](https://github.com/jakobhoeg/shadcn-chat/blob/master/src/components/chat/chat-list.tsx#L54-L63).
