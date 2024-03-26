import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원가입",
};

import LoginSection from "@/components/page/loginSection";

// 화살표 크기는 화면 변화에 따른 글자 크기와 맞추기
export default function LoginPage() {
  return (
    <div className="w-w80 mx-auto">
      <div className="aspect-[10/1] flex items-end">
        <div className="relative mb-px w-small-3 mobile-size:w-browser-2 tablet-size:w-browser-3 browser-size:w-browser-4 aspect-square">
          <div
            style={{ top: "15%", left: "30%" }}
            className="absolute w-w60 aspect-square border-solid border-r border-t rotate-225"
          ></div>
        </div>
        <div className="hover:cursor-pointer font-semibold text-small-2 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-1">
          돌아가기
        </div>
      </div>
      <div className="aspect-[3/1] flex flex-col justify-end gap-gap3">
        <div className="font-semibold text-browser-3 mobile-size:text-browser-5 tablet-size:text-big-2 browser-size:text-big-4">
          최초 1회 인증으로
        </div>
        <div className="font-semibold text-browser-1 small-size:text-browser-3 mobile-size:text-browser-5 tablet-size:text-big-2 browser-size:text-big-4">
          간편하게 가입해보세요
        </div>
      </div>
      <LoginSection />
      <div className="aspect-[5/1] flex items-end justify-end">
        <div className="hover:cursor-pointer font-semibold text-small-2 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-1">
          다음으로
        </div>
        <div className="mb-px relative w-small-3 mobile-size:w-browser-2 tablet-size:w-browser-3 browser-size:w-browser-4 aspect-square">
          <div
            style={{ top: "15%", left: "30%" }}
            className="absolute w-w60 aspect-square border-solid border-r border-t rotate-45"
          ></div>
        </div>
      </div>
      <div className="pb-p30"></div>
    </div>
  );
}
