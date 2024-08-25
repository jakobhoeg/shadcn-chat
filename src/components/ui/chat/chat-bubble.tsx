import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import MessageLoading from "./message-loading"

// ChatBubble
const bubbleVariants = cva(
  "flex gap-2 max-w-[60%] items-end",
  {
    variants: {
      variant: {
        received: "self-start",
        sent: "self-end flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "received"
    }
  }
)

interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof bubbleVariants> { }

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant, children, ...props }, ref) => (
    <div
      className={cn(bubbleVariants({ variant, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
)
ChatBubble.displayName = "ChatBubble"

// ChatBubbleAvatar
interface ChatBubbleAvatarProps {
  src?: string
  fallback?: string
  className?: string
}

const ChatBubbleAvatar: React.FC<ChatBubbleAvatarProps> = ({ src, fallback, className }) => (
  <Avatar className={className}>
    <AvatarImage src={src} alt="Avatar" />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
)

// ChatBubbleMessage
const bubbleMessageVariants = cva(
  "p-4",
  {
    variants: {
      variant: {
        received: "bg-secondary text-secondary-foreground rounded-r-lg rounded-tl-lg",
        sent: "bg-primary text-primary-foreground rounded-l-lg rounded-tr-lg",
      }
    },
    defaultVariants: {
      variant: "received"
    }
  }
)

interface ChatBubbleMessageProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof bubbleMessageVariants> {
  isLoading?: boolean
}

const ChatBubbleMessage = React.forwardRef<HTMLDivElement, ChatBubbleMessageProps>(
  ({ className, variant, isLoading = false, children, ...props }, ref) => (
    <div
      className={cn(bubbleMessageVariants({ variant, className }))}
      ref={ref}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <MessageLoading />
        </div>
      ) : (
        children
      )}
    </div>
  )
)
ChatBubbleMessage.displayName = "ChatBubbleMessage"

// ChatBubbleTimestamp
interface ChatBubbleTimestampProps extends React.HTMLAttributes<HTMLDivElement> {
  timestamp: string
}

const ChatBubbleTimestamp: React.FC<ChatBubbleTimestampProps> = ({ timestamp, className, ...props }) => (
  <div className={cn("text-xs mt-2 text-right", className)} {...props}>
    {timestamp}
  </div>
)

export {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
  bubbleVariants,
  bubbleMessageVariants
}