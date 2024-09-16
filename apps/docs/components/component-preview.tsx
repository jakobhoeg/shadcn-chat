import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { CopyButton } from "./copy-button"

interface ComponentPreviewProps {
  component?: React.ReactNode
  code: string
}

export default function ComponentPreview({ component, code }: ComponentPreviewProps) {
  return (
    <div className="relative my-4 flex flex-col space-y-2">
      <Tabs defaultValue="preview" className="relative w-full">
        <TabsList className=" justify-start rounded-md ">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="relative rounded-md border dark:border-neutral-600 p-4">
          {component}
        </TabsContent>
        <TabsContent value="code" className="relative max-h-[400px] overflow-y-auto w-full rounded-md border dark:border-neutral-600 bg-foreground text-background p-4">
          <div className="relative w-full rounded-md  text-sm ">
            <CopyButton
              value={code}
              variant="outline"
              className="absolute top-4 right-4 h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground"
            />
            <pre className="overflow-x-auto">{code}</pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}