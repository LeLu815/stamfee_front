import type { Metadata } from "next";

// 컴포넌트
import Logo from "@/components/logo";
import RoundShapeButton from "@/components/design/roundShapeButton";
import ImageComponent from "@/components/imageSlideComponent";
import ImageSlideComponent from "@/components/imageSlideComponent";

// tailwind 스타일
import { textSizeInfo, loginTextMargin } from "../styles/tailwindStyleText";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <div className="w-3/12 mx-auto pt-logoHeight">
        <Logo color="coffee" />
      </div>
      <div className="aspect-6/5 relative">
        <div
          className="invisible absolute w-20 h-full tablet-size:visible"
          style={{ left: "10%", top: "50%" }}
        >
          <div className="relative w-w80 aspect-square after:absolute after:w-w50 after:aspect-square after:border-solid after:border-r-2 after:border-t-2 after:rotate-225 after:border-gray-800 z-30"></div>
        </div>
        <div
          className="invisible absolute w-20 h-full tablet-size:visible"
          style={{ top: "50%", right: "5%" }}
        >
          <div className="relative w-w80 aspect-square after:absolute after:w-w50 after:aspect-square after:border-solid after:border-r-2 after:border-t-2 after:rotate-45 after:border-gray-800 z-30"></div>
        </div>
        <ImageSlideComponent imgaeList={[]} />
      </div>
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
