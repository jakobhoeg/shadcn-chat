'use client';

import { useChat } from 'ai/react';
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from '@/components/ui/button';
import { CopyIcon, CornerDownLeft, Mic, Paperclip, RefreshCcw, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import { ExpandableChat, ExpandableChatBody, ExpandableChatFooter, ExpandableChatHeader } from '../ui/chat/expandable-chat';
import Markdown from 'react-markdown';
import CodeDisplayBlock from '../ui/code-display';
import remarkGfm from 'remark-gfm';
import { toast } from 'sonner';

export default function Chat() {
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

  return (
    <ExpandableChat size='md'
      position='bottom-right'>
      <ExpandableChatHeader className='flex-col text-center justify-center'>
        <h1 className='text-xl font-semibold'>Chat with our AI ✨</h1>
        <p>Ask any question for our AI to answer</p>
        <div className='flex gap-2 items-center pt-2'>
          <Button
            variant='secondary'
          >
            New Chat
          </Button>
          <Button
            variant='secondary'
          >
            See FAQ
          </Button>
        </div>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList ref={messagesContainerRef}>
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              className='max-w-[75%]'
              variant={message.role === "user" ? "sent" : "received"}>
              <ChatBubbleAvatar src='' fallback={message.role === "user" ? "US" : "AI"} />
              <ChatBubbleMessage variant={message.role === "user" ? "sent" : "received"}
                isLoading={message.role === "assistant" && isGenerating && index === messages.length - 1}>
                {message.content
                  .split("```")
                  .map((part: string, index: number) => {
                    if (index % 2 === 0) {
                      return (
                        <Markdown key={index} remarkPlugins={[remarkGfm]}>
                          {part}
                        </Markdown>
                      );
                    } else {
                      return (
                        <pre
                          className="whitespace-pre-wrap pt-2"
                          key={index}
                        >
                          <CodeDisplayBlock code={part} lang="" />
                        </pre>
                      );
                    }
                  })}
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
      </ExpandableChatBody>
      <ExpandableChatFooter>
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

      </ExpandableChatFooter>
    </ExpandableChat>

  );
}