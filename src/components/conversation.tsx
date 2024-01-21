import { Message, UserData } from "@/app/data";
import MessageTopbar from "./message-topbar";
import { MessageList } from "./messasge-list";
import React from "react";

interface ConversationProps {
  messages?: Message[];
  selectedUser: UserData;
}

export function Conversation({ messages, selectedUser }: ConversationProps) {
  const [messagesState, setMessages] = React.useState<Message[]>(
    messages ?? []
  );

  const sendMessage = (newMessage: Message) => {
    setMessages([...messagesState, newMessage]);
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <MessageTopbar selectedUser={selectedUser} />

      <MessageList
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
      />
    </div>
  );
}
