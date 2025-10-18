import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import "@/styles/globals.css";

const font = "Arial, Helvetica, sans-serif";

export const metadata: Metadata = {
  title: "Swap Spot",
  description: "A second-hand e-commerce platform",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
