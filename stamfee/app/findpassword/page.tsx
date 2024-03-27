import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비밀번호 찾기",
};
import FindPasswordComponent from "@/components/page/findPassword";

export default function FindPasswordPage() {
  return <FindPasswordComponent />;
}
