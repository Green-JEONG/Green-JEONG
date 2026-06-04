import type { Metadata } from "next";
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
      <body className="flex justify-center bg-gray-100 min-h-screen">
        
        <div className="w-full max-w-[500px] min-h-screen bg-white shadow-2xl flex flex-col relative">
          
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          
        </div>

      </body>
    </html>
  );
}