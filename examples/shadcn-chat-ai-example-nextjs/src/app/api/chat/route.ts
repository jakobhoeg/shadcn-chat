import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { createOllama } from 'ollama-ai-provider';

const ollama = createOllama();

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: openai('gpt-4'),
    system: 'You are a helpful assistant.',
    messages,
  });

  // Olamma
  // const result = await streamText({
  //   model: ollama("gemma:2b"),
  //   system: 'You are a helpful assistant.',
  //   messages,
  // });

  return result.toDataStreamResponse();
}