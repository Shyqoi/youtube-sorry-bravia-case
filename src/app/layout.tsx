import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claim Ready — A free checklist for anyone about to file a warranty claim",
  description: "A warranty claim is decided on records. Keep yours, and ask for theirs in writing. 15 steps in the checklist.",
  keywords: ["warranty claim", "consumer checklist", "claim ready", "consumer forum", "job sheet", "warranty rights"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&family=Plus+Jakarta+Sans:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-[#363C47] selection:bg-[#DCF3EA] selection:text-[#065F43]">
        {children}
      </body>
    </html>
  );
}
