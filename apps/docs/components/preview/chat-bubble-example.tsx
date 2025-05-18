import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Forward, Heart } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleAction,
  ChatBubbleActionWrapper,
} from "@shadcn-chat/ui";
import { ChatMessageList } from "@shadcn-chat/ui";

export const ChatBubbleExampleCode = `import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Forward, Heart } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleAction,
  ChatBubbleActionWrapper,
} from "@shadcn-chat/ui";
import { ChatMessageList } from "@shadcn-chat/ui";

  const messages = [
    {
      id: 1,
      message: "Hover me!",
      sender: "user",
    },
    {
      id: 2,
      message: "Hover me too!",
      sender: "bot",
    },
    {
      id: 3,
      message: "",
      sender: "bot",
      isLoading: true,
    },
  ];

  const actionIcons = [
    { icon: DotsVerticalIcon, type: "More" },
    { icon: Forward, type: "Share" },
    { icon: Heart, type: "Like" },
  ];

  <ChatMessageList>
    {messages.map((message, index) => {
      const variant = message.sender === "user" ? "sent" : "received";
      return (
        <ChatBubble key={message.id} variant={variant}>
          <ChatBubbleAvatar fallback={variant === "sent" ? "US" : "AI"} />
          <ChatBubbleMessage
            isLoading={message.isLoading}
            className={message.sender === "user" ? "bg-sky-400" : ""}
          >
            {message.message}
          </ChatBubbleMessage>
          {/* Action Icons */}
          <ChatBubbleActionWrapper>
            {actionIcons.map(({ icon: Icon, type }) => (
              <ChatBubbleAction
                className="size-7"
                key={type}
                icon={<Icon className="size-4" />}
                onClick={() =>
                  console.log(
                    "Action " + type + " clicked for message " + index,
                  )
                }
              />
            ))}
          </ChatBubbleActionWrapper>
        </ChatBubble>
      );
    })}
  </ChatMessageList>
`;

export default function ChatBubbleExample() {
  const messages = [
    {
      id: 1,
      message: "Hover me!",
      sender: "user",
    },
    {
      id: 2,
      message: "Hover me too!",
      sender: "bot",
    },
    {
      id: 3,
      message: "",
      sender: "bot",
      isLoading: true,
    },
  ];

  const actionIcons = [
    { icon: DotsVerticalIcon, type: "More" },
    { icon: Forward, type: "Share" },
    { icon: Heart, type: "Like" },
  ];

  return (
    <ChatMessageList>
      {messages.map((message, index) => {
        const variant = message.sender === "user" ? "sent" : "received";
        return (
          <ChatBubble key={message.id} variant={variant}>
            <ChatBubbleAvatar fallback={variant === "sent" ? "US" : "AI"} />
            <ChatBubbleMessage
              isLoading={message.isLoading}
              className={message.sender === "user" ? "bg-sky-400" : ""}
            >
              {message.message}
            </ChatBubbleMessage>
            {/* Action Icons */}
            <ChatBubbleActionWrapper>
              {actionIcons.map(({ icon: Icon, type }) => (
                <ChatBubbleAction
                  className="size-7"
                  key={type}
                  icon={<Icon className="size-4" />}
                  onClick={() =>
                    console.log(
                      "Action " + type + " clicked for message " + index,
                    )
                  }
                />
              ))}
            </ChatBubbleActionWrapper>
          </ChatBubble>
        );
      })}
    </ChatMessageList>
  );
}
