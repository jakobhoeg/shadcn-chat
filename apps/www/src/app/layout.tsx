import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cookies } from "next/headers";
import Examples from "@/components/examples";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import ChatSupport from "@/components/chat/chat-support";

export const metadata: Metadata = {
  title: "Shadcn Chat",
  description: "Chat/message components for Shadcn",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 py-32 gap-4">
            <div className="flex justify-between max-w-5xl w-full items-center">
              <div className="flex gap-3 md:gap-6 items-center">
                <Link
                  href="#"
                  className="text-xl sm:text-2xl md:text-4xl font-bold text-gradient"
                >
                  shadcn-chat
                </Link>
                <Examples />
              </div>
              <div className="flex gap-1 items-center">
                <Link
                  href="https://github.com/jakobhoeg/shadcn-chat"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-7",
                  )}
                >
                  <GitHubLogoIcon className="size-7" />
                </Link>
                <ModeToggle />
              </div>
            </div>

            <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm flex">
              {/* Page content */}
              {children}
            </div>

            {/* Footer */}
            <div className="flex justify-between max-w-5xl w-full items-start text-xs md:text-sm text-muted-foreground ">
              <p className="max-w-[150px] sm:max-w-lg">
                Built by{" "}
                <a
                  className="font-semibold"
                  href="https://github.com/jakobhoeg/"
                >
                  Jakob Hoeg
                </a>
                . Check out the{" "}
                <a
                  className="font-semibold"
                  href="https://docs-shadcn-chat.vercel.app/"
                >
                  documentation
                </a>
                to get started.
              </p>
              <p className="max-w-[150px] sm:max-w-lg text-right">
                Source code available on{" "}
                <a
                  className="font-semibold"
                  href="https://github.com/jakobhoeg/shadcn-chat"
                >
                  GitHub
                </a>
                .
              </p>
            </div>

            {/* Chat support component */}
            <ChatSupport />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
