import {
  ChatBotMessages,
  Message,
  UserData,
  userData,
  Users,
} from "@/app/data";
import { create } from "zustand";

export interface Example {
  name: string;
  url: string;
}

interface State {
  selectedExample: Example;
  examples: Example[];
  input: string;
  chatBotMessages: Message[];
  messages: Message[];
  hasInitialAIResponse: boolean;
  hasInitialResponse: boolean;
}

interface Actions {
  selectedUser: UserData;
  setSelectedExample: (example: Example) => void;
  setExamples: (examples: Example[]) => void;
  setInput: (input: string) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  setchatBotMessages: (fn: (chatBotMessages: Message[]) => Message[]) => void;
  setMessages: (fn: (messages: Message[]) => Message[]) => void;
  setHasInitialAIResponse: (hasInitialAIResponse: boolean) => void;
  setHasInitialResponse: (hasInitialResponse: boolean) => void;
}

const useChatStore = create<State & Actions>()((set) => ({
  selectedUser: Users[4],

  selectedExample: { name: "Messenger example", url: "/" },

  examples: [
    { name: "Messenger example", url: "/" },
    { name: "Chatbot example", url: "/chatbot" },
    { name: "Chatbot2 example", url: "/chatbot2" },
  ],

  input: "",

  setSelectedExample: (selectedExample) => set({ selectedExample }),

  setExamples: (examples) => set({ examples }),

  setInput: (input) => set({ input }),
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => set({ input: e.target.value }),

  chatBotMessages: ChatBotMessages,
  setchatBotMessages: (fn) =>
    set(({ chatBotMessages }) => ({ chatBotMessages: fn(chatBotMessages) })),

  messages: userData[0].messages,
  setMessages: (fn) => set(({ messages }) => ({ messages: fn(messages) })),

  hasInitialAIResponse: false,
  setHasInitialAIResponse: (hasInitialAIResponse) =>
    set({ hasInitialAIResponse }),

  hasInitialResponse: false,
  setHasInitialResponse: (hasInitialResponse) => set({ hasInitialResponse }),
}));

export default useChatStore;
