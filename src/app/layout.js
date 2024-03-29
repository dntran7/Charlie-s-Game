import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
      <div className="fixed h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100" />
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
      </body>
    </html>
  );
}
