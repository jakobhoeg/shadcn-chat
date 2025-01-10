import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import { Button } from "../ui/button";
import { ChatInput } from "@shadcn-chat/ui";

export const ChatInputPreviewCode = `import { ChatInput } from "@shadcn-chat/ui"

<ChatInput
  placeholder="Type your message here..."
/>
`;

export default function ChatInputPreview() {
  return <ChatInput placeholder="Type your message here..." />;
}
