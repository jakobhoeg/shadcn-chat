import * as React from "react"
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  className?: string
  value?: string
  handleKeyPress?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
  handleInputChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
}

const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(({ className, value, handleKeyPress, handleInputChange, placeholder, ...props }, ref) => (
  <Textarea
    autoComplete="off"
    value={value}
    ref={ref}
    onKeyDown={handleKeyPress}
    onChange={handleInputChange}
    name="message"
    placeholder={placeholder}
    className={cn("max-h-12 px-4 py-3 bg-accent text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-full flex items-center h-16 resize-none  dark:bg-card",
      className)}
    {...props}
  />
))
ChatInput.displayName = "ChatInput"

export { ChatInput }