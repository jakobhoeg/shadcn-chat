import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@shadcn-chat/ui/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
