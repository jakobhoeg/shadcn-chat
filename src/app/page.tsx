import { cookies } from "next/headers";
import { Chat } from "@/components/chat";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout")
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined

  return (
    <main className="flex h-screen flex-col items-center justify-center p-4 md:px-24 py-32">
      <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex">
        <Chat 
        defaultLayout={defaultLayout}
        navCollapsedSize={8}
        />
      </div>
    </main>
  );
}
