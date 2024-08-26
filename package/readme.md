# shadcn-chat

A CLI for adding **chat** components to your project.

# Usage

> [!NOTE] 
> Some of the components rely on [shadcn-ui](https://ui.shadcn.com/docs/installation), so make sure to have it installed.

# add

Use the `add` command to add components to your project.
The add command adds a component to your project.

To view a list of all avaialbe components run the following command:

```
npx shadcn-chat-cli add
```

Otherwise, install individual components by running:

```
npx shadcn-chat-cli add [component]
```

![image](https://github.com/user-attachments/assets/8d9d2b33-b3ce-45f4-85b9-40b49497a9a6)

The components will be installed in a subdirectory of the `components` folder: `src/components/ui/chat`

# Examples

## Component usage

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

For more comprehensive examples, check out [this](https://github.com/jakobhoeg/shadcn-chat/blob/master/src/app/chatbot/page.tsx#L106-L175), [this](https://github.com/jakobhoeg/shadcn-chat/blob/master/src/app/chatbot2/page.tsx#L106-L175) & [this](https://github.com/jakobhoeg/shadcn-chat/blob/master/src/components/chat/chat-list.tsx#L54-L63) from the source code.
