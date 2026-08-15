import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "有一份生日礼物，等你亲手打开",
  description: "给我最爱的你——一封只属于我们的生日信。",
  openGraph: {
    title: "有一份生日礼物，等你亲手打开",
    description: "给我最爱的你——一封只属于我们的生日信。",
  },
  twitter: {
    card: "summary",
    title: "有一份生日礼物，等你亲手打开",
    description: "给我最爱的你——一封只属于我们的生日信。",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
