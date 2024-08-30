'use client';

import { useChat } from 'ai/react';
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from '@/components/ui/button';
import { CornerDownLeft, Mic, Paperclip, RefreshCcw } from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';
import { toast } from 'sonner';

export default function Page() {

  const { messages, input, handleSubmit, handleInputChange, isLoading, reload } = useChat({
    onResponse: (response) => {
      if (response) {
        setIsGenerating(false);
      }
    },
    onError: (error) => {
      setIsGenerating(false);
      toast.error("An error occurred. Please try again.");
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating(true);
    handleSubmit(e);
  }

  const NoMessages = () => (
    <div className="flex items-start justify-center h-full antialiased">
      <div className="text-start rounded-lg p-6 w-full bg-background flex flex-col shadow-sm border gap-2">
        <p className="text-base font-semibold">This is a chat application built with shadcn-chat</p>
        <p className="text-sm text-muted-foreground">Start a conversation by typing a message below. Remember to set your OPENAI_API_KEY in the .env.local file.</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl w-full flex h-screen flex-col mx-auto p-12">
      <ChatMessageList ref={messagesContainerRef}>
        {messages.length === 0 && <NoMessages />}

        {messages && messages.map((message, index) => (
          <ChatBubble key={index} variant={message.role === "user" ? "sent" : "received"}>
            <ChatBubbleAvatar src='' fallback={message.role === "user" ? "US" : "AI"} />
            <ChatBubbleMessage variant={message.role === "user" ? "sent" : "received"}
            >
              <Markdown>{message.content}</Markdown>
              {message.role === "assistant" && messages.length - 1 === index && (
                <div className="flex items-center mt-1.5 gap-1">
                  <>
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="size-5"
                      onClick={() => reload()}
                    >
                      <RefreshCcw className="size-3" />
                    </Button>
                  </>
                </div>
              )}
            </ChatBubbleMessage>
          </ChatBubble>
        ))}
        {isGenerating && (
          <ChatBubble variant="received">
            <ChatBubbleAvatar src='' fallback="AI" />
            <ChatBubbleMessage variant="received" isLoading={true} />
          </ChatBubble>
        )}
      </ChatMessageList>
      <div className="flex-1" />
      <form
        ref={formRef}
        onSubmit={onSubmit} className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
        <ChatInput
          value={input}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
          onChange={handleInputChange}
          className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
          <Button variant="ghost" size="icon">
            <Paperclip className="size-4" />
            <span className="sr-only">Attach file</span>
          </Button>


          <Button variant="ghost" size="icon">
            <Mic className="size-4" />
            <span className="sr-only">Use Microphone</span>
          </Button>

          <Button
            disabled={!input || isLoading}
            type="submit" size="sm" className="ml-auto gap-1.5">
            Send Message
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
      </form>

    </div>
  );
}