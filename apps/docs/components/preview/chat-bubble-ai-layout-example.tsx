import { Copy, RefreshCcw } from 'lucide-react'
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage, ChatBubbleAction } from '../../components/ui/chat/chat-bubble'
import { ChatMessageList } from '../../components/ui/chat/chat-message-list'

export const ChatBubbleAILayoutExampleCode = `import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage, ChatBubbleAction } from '@/components/ui/chat/chat-bubble'
import { ChatMessageList } from '@/components/ui/chat/chat-message-list'

const messages = [
  {
    id: 1,
    message: 'Help me with my essay.',
    sender: 'user',
  },
  {
    id: 2,
    message: 'I can help you with that. What do you need help with?',
    sender: 'bot',
  },
];

const actionIcons = [
  { icon: Copy, type: 'Copy' },
  { icon: RefreshCcw, type: 'Regenerate' },
];

<ChatMessageList>
  {messages.map((message, index) => {
    const variant = message.sender === 'user' ? 'sent' : 'received';
    return (
      <ChatBubble key={message.id} layout='ai'  >
        <ChatBubbleAvatar fallback={variant === 'sent' ? 'US' : 'AI'} />
        <ChatBubbleMessage>
          {message.message}

          {message.sender === 'bot' && (
            <div>
              {actionIcons.map(({ icon: Icon, type }) => (
                <ChatBubbleAction
                  className="size-6"
                  key={type}
                  icon={<Icon className="size-3" />}
                  onClick={() => console.log('Action ' + type + ' clicked for message ' + index)}
                />
              ))}
            </div>
          )}
        </ChatBubbleMessage>
      </ChatBubble>
    )
  })}
</ChatMessageList>
`

export default function ChatBubbleAILayoutExample() {
  const messages = [
    {
      id: 1,
      message: 'Help me with my essay.',
      sender: 'user',
    },
    {
      id: 2,
      message: 'I can help you with that. What do you need help with?',
      sender: 'bot',
    },
  ];

  const actionIcons = [
    { icon: Copy, type: 'Copy' },
    { icon: RefreshCcw, type: 'Regenerate' },
  ];

  return (
    <ChatMessageList>
      {messages.map((message, index) => {
        const variant = message.sender === 'user' ? 'sent' : 'received';
        return (
          <ChatBubble key={message.id} layout='ai'  >
            <ChatBubbleAvatar fallback={variant === 'sent' ? 'US' : 'AI'} />
            <ChatBubbleMessage>
              {message.message}

              {message.sender === 'bot' && (
                <div>
                  {actionIcons.map(({ icon: Icon, type }) => (
                    <ChatBubbleAction
                      className="size-6"
                      key={type}
                      icon={<Icon className="size-3" />}
                      onClick={() => console.log('Action ' + type + ' clicked for message ' + index)}
                    />
                  ))}
                </div>
              )}
            </ChatBubbleMessage>
          </ChatBubble>
        )
      })}
    </ChatMessageList>
  )
}