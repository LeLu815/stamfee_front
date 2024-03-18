import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Stamfee",
    default: "Welcome",
  },
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
