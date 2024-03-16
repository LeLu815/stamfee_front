import type { Metadata } from "next";

import "./globals.css";
import Navigation from "@/components/header";

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
        <Navigation />
        <div className="min-w-56 max-w-7xl m-auto">{children}</div>
      </body>
    </html>
  );
}
