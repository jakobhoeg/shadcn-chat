import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { getMutableAIState } from 'ai/rsc';

export async function sendMessage(message: string) {
  'use server';

  const history = getMutableAIState();

  // Update the AI state with the new user message.
  history.update([...history.get(), { role: 'user', content: message }]);

  const response = await generateText({
    model: openai('gpt-3.5-turbo'),
    messages: history.get(),
  });

  // Update the AI state again with the response from the model.
  history.done([...history.get(), { role: 'assistant', content: response }]);

  return response;
}