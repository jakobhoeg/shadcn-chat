import { cookies } from "next/headers";
import { Chat } from "@/components/chat";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <main className="flex h-screen flex-col items-center justify-center p-4 md:px-24 py-32 gap-4">
      <div className="flex justify-between max-w-5xl w-full items-center">
        <Link href="#" className="text-4xl font-bold text-gradient">shadcn-chat</Link>
        <Link
          href="https://github.com/jakobhoeg/shadcn-chat"
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "h-10 w-10"
          )}
        >
          <GitHubLogoIcon className="w-7 h-7 text-muted-foreground" />
        </Link>
      </div>

      <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex">
        <Chat defaultLayout={defaultLayout} navCollapsedSize={8} />
      </div>

      <div className="flex justify-between max-w-5xl w-full items-center text-sm text-muted-foreground">
      <p>Built by <a className="font-semibold" href="https://github.com/jakobhoeg/">Jakob Hoeg</a> to be used with <a className="font-semibold" href="https://ui.shadcn.com/">shadcn</a>.</p>
      <p>Source code available on <a className="font-semibold" href="https://github.com/jakobhoeg/shadcn-chat">GitHub</a>.</p>
      </div>
    </main>
  );
}
