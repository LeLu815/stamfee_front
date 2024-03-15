import "../styles/globals.css";
import type { Metadata } from "next";

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
        <div className="min-w-52 max-w-7xl m-auto">{children}</div>
      </body>
    </html>
  );
}
