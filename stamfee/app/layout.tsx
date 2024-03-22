import type { Metadata } from "next";

import "./globals.css";

// app router를 사용하면 동적 메타데이터 세팅이 바뀐다.
export const metadata: Metadata = {
  title: { default: "Welcome", template: "%s | Stamfee" },
  description: "coffee and stamp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-w-56 max-w-5xl min-h-screen mx-auto bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
