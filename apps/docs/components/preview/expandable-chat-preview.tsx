import {
  ExpandableChat,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChatHeader,
} from "../ui/chat/expandable-chat";
import { ChatMessageList } from "../ui/chat/chat-message-list";
import { Button } from "../ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "../ui/chat/chat-bubble";
import { ChatInput } from "../ui/chat/chat-input";
import { Send } from "lucide-react";

export const ExpandableChatPreviewCode = `<ExpandableChat
  size="md"
  position="bottom-right"
>
  <ExpandableChatHeader className="flex-col text-center justify-center">
    <h1 className="text-xl font-semibold">Chat with our AI ✨</h1>
    <p>Ask any question for our AI to answer</p>
    <div className="flex gap-2 items-center pt-2">
      <Button variant="secondary">New Chat</Button>
      <Button variant="secondary">See FAQ</Button>
    </div>
  </ExpandableChatHeader>
  <ExpandableChatBody>
    <ChatMessageList
      className="dark:bg-muted/40"
    >
      <ChatBubble
        variant="received"
      >
        <ChatBubbleAvatar
          fallback='AI'
        />
        <ChatBubbleMessage
        >
          Hey there
        </ChatBubbleMessage>
      </ChatBubble>
    </ChatMessageList>
  </ExpandableChatBody>
  <ExpandableChatFooter>
    <form className="flex relative gap-2">
      <ChatInput
        className="min-h-12 bg-background shadow-none "
      />
      <Button
        className="absolute top-1/2 right-2 transform size-8 -translate-y-1/2"
        size="icon"
      >
        <Send className="size-4" />
      </Button>
    </form>
  </ExpandableChatFooter>
</ExpandableChat>
`;

export default function ExpandableChatPreview() {
  return (
    <ExpandableChat size="md" position="bottom-right">
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chat with our AI ✨</h1>
        <p>Ask any question for our AI to answer</p>
        <div className="flex gap-2 items-center pt-2">
          <Button variant="secondary">New Chat</Button>
          <Button variant="secondary">See FAQ</Button>
        </div>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList className="dark:bg-muted/40">
          <ChatBubble variant="received">
            <ChatBubbleAvatar fallback="AI" />
            <ChatBubbleMessage>Hey there</ChatBubbleMessage>
          </ChatBubble>
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter>
        <form className="flex relative gap-2">
          <ChatInput className="min-h-12 bg-background shadow-none " />
          <Button
            className="absolute top-1/2 right-2 transform size-8 -translate-y-1/2"
            size="icon"
          >
            <Send className="size-4" />
          </Button>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
