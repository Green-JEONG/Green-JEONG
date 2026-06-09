import type { Metadata } from "next";
import BottomNav from "@/components/BottomNav";
import { blackHanSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "포트폴리오 | 정그린",
  description: "모바일 웹앱 포트폴리오_정그린",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={blackHanSans.variable}>
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