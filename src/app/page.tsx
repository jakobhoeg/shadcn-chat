import { cookies } from "next/headers";
import { ChatLayout } from "@/components/chat/chat-layout";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <div className="w-full">
      <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
    </div>
  );
}
