import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleAction,
  ChatBubbleActionWrapper,
} from "@shadcn-chat/ui";
import { ChatMessageList } from "@shadcn-chat/ui";

export const ChatBubblePreviewCode = `// Wrap with ChatMessageList
<ChatMessageList>
  // You can map over messages here
  <ChatBubble variant='sent'>
    <ChatBubbleAvatar fallback='US' />
    <ChatBubbleMessage variant='sent'>
      Hello, how has your day been? I hope you are doing well.
    </ChatBubbleMessage>
  </ChatBubble>

  <ChatBubble variant='received'>
    <ChatBubbleAvatar fallback='AI' />
    <ChatBubbleMessage variant='received'>
      Hi, I am doing well, thank you for asking. How can I help you today?
    </ChatBubbleMessage>
  </ChatBubble>

  <ChatBubble variant='received'>
    <ChatBubbleAvatar fallback='AI' />
    <ChatBubbleMessage isLoading />
  </ChatBubble>
</ChatMessageList>
`;

export default function ChatBubblePreview() {
  return (
    <ChatMessageList className="max-h-60">
      <ChatBubble variant="sent">
        <ChatBubbleAvatar fallback="US" />
        <ChatBubbleMessage>
          Hello, how has your day been? I hope you are doing well.
        </ChatBubbleMessage>
      </ChatBubble>

      <ChatBubble variant="received">
        <ChatBubbleAvatar fallback="AI" />
        <ChatBubbleMessage>
          Hi, I am doing well, thank you for asking. How can I help you today?
        </ChatBubbleMessage>
      </ChatBubble>

      <ChatBubble variant="received">
        <ChatBubbleAvatar fallback="AI" />
        <ChatBubbleMessage isLoading />
      </ChatBubble>
    </ChatMessageList>
  );
}
