import type { Metadata } from "next";

// 컴포넌트
import Logo from "@/components/logo";
import RoundShapeButton from "@/components/design/roundShapeButton";
import StartPage from "@/components/page/start";
// import ImageSlideComponent from "@/components/imageSlideComponent";

// tailwind 스타일
import { textSizeInfo, loginTextMargin } from "../styles/tailwindStyleText";

export const metadata: Metadata = {
  title: "Stamfee",
};

export default function Home() {
  return (
    <>
      <div style={{ paddingTop: "18%" }} className="w-3/12 mx-auto">
        <Logo color="coffee" />
      </div>
      <StartPage />
      <div className="mx-auto w-w-65">
        <div className="mb-3 mobile-size:mb-5 tablet-size:tmt-8 browser-size:mb-9">
          <div
            className={`${textSizeInfo.loginInfoText} text-myColor-loginInfo mb-1 mobile-size:mb-2 tablet-size:tmb-3 browser-size:mb-4`}
          >
            이미 스탬피 회원이신가요?
          </div>
          <RoundShapeButton
            text="로그인 하러가기"
            textColor="black"
            backgroundColor="coffee"
          />
        </div>
        <div className="pb-bottom">
          <div
            className={`${textSizeInfo.loginInfoText} text-myColor-loginInfo mb-1 mobile-size:mb-2 tablet-size:tmb-3 browser-size:mb-4`}
          >
            스탬피가 처음이시라면?
          </div>
          <RoundShapeButton
            text="최초 1회 인증으로 간편하게 시작"
            textColor="black"
            backgroundColor="coffee"
          />
        </div>
      </div>
    </>
  );
}
