'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Bot, Send } from 'lucide-react'
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '@/components/ui/chat/chat-bubble'
import { ChatInput } from '@/components/ui/chat/chat-input'
import { ExpandableChat, ExpandableChatHeader, ExpandableChatBody, ExpandableChatFooter } from '@/components/ui/chat/expandable-chat'
import { ChatMessageList } from '@/components/ui/chat/chat-message-list'
import { AnimatePresence, motion } from 'framer-motion'

interface Message {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: string
}

const initialChatSupportMessages: Message[] = [
  {
    id: '1',
    content: 'Hello! How can I help you today?',
    sender: 'ai',
    timestamp: new Date().toLocaleTimeString()
  }
]

export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>(initialChatSupportMessages)
  const [inputMessage, setInputMessage] = useState('')

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: inputMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString()
      }
      setMessages([...messages, newMessage])
      setInputMessage('')
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <ExpandableChat
      icon={<Bot className='h-6 w-6' />}
      size='lg'
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
        <ChatMessageList ref={messagesContainerRef} className='dark:bg-muted/40'>
          <AnimatePresence>
            {messages.map((message, index) => {
              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 1, y: 10, x: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                  transition={{
                    opacity: { duration: 0.1 },
                    layout: {
                      type: "spring",
                      bounce: 0.3,
                      duration: index * 0.05 + 0.2,
                    },
                  }}
                  style={{ originX: 0.5, originY: 0.5 }}
                  className="flex flex-col"
                >
                  <ChatBubble key={message.id} variant={message.sender === 'user' ? 'sent' : 'received'}>
                    <ChatBubbleAvatar
                      className='dark:invert'
                      src={message.sender === 'user' ? '' : '/chatbot.svg'}
                      fallback={message.sender === 'user' ? 'US' : 'AI'}
                    />
                    <ChatBubbleMessage variant={message.sender === 'user' ? 'sent' : 'received'}>
                      {message.content}
                    </ChatBubbleMessage>
                  </ChatBubble>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter>
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex relative gap-2">
          <ChatInput
            onKeyDown={onKeyDown}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <Button
            disabled={!inputMessage.trim()}
            type="submit" size="icon" className='absolute right-2 top-1/2 transform -translate-y-1/2 shrink-0'>
            <Send className="size-4" />
          </Button>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  )
}