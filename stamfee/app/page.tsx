import type { Metadata } from "next";

import RootLayout from "./layout";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <div>메인페이지</div>;
}
