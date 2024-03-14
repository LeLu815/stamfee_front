import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "%s | Stamfee",
  description: "coffee and stamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
