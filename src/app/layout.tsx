import type { Metadata } from "next";
import BottomNav from "@/components/BottomNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green-JEONG | Portfolio",
  description: "Mobile Web App Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex justify-center min-h-screen">
        
        <div className="w-full max-w-3xl min-h-screen bg-[#fefef9] shadow-2xl flex flex-col relative">
          
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>

          <BottomNav />
        </div>

      </body>
    </html>
  );
}