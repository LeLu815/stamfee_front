import type { Metadata } from "next";

import Logo from "@/components/logo";
import RoundShapeButton from "@/components/design/roundShapeButton";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <div className="w-3/12 mx-auto pt-logoHeight">
        <Logo color="orange" />
      </div>
      <div></div>
      <div className=" mx-auto w-w-65">
        <div>
          <div>이미 스탬피 회원이신가요?</div>
          <RoundShapeButton text="로그인 하러가기" textColor="white" />
        </div>
        <div>
          <div>스탬피가 처음이시라면?</div>
          <RoundShapeButton
            text="최초 1회 인증으로 간편하게 시작"
            textColor="white"
          />
        </div>
      </div>
    </>
  );
}
