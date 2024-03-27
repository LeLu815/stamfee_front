"use client";

import { useState } from "react";

import LoginSection from "@/components/page/loginSection";
import Loading from "@/components/loading";

export default function FindPasswordComponent() {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [phoneNumCheck, setPhoneNumCheck] = useState(false);

  return (
    <div>
      {loadingStatus && <Loading />}
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
            비밀번호 찾기
          </div>
          <div
            style={{ visibility: "hidden" }}
            className="font-semibold text-browser-1 small-size:text-browser-3 mobile-size:text-browser-5 tablet-size:text-big-2 browser-size:text-big-4"
          >
            간편하게 가입해보세요
          </div>
        </div>
        {!phoneNumCheck ? (
          <LoginSection />
        ) : (
          <div className="aspect-square">
            <div className="pt-ppx30 tablet-size:pt-ppx60 flex flex-col gap-2 tablet-size:gap-4">
              <span className="font-semibold text-small-2 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-2">
                {}님의 비밀번호는
              </span>
              <span className="font-semibold text-small-2 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-2">
                {} 입니다
              </span>
            </div>
          </div>
        )}
        <div className="aspect-[5/1] flex items-end justify-between">
          <div className="hover:cursor-pointer pb-2 font-semibold text-small-2 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-1">
            {phoneNumCheck && "비밀번호 재설정"}
          </div>
          <div className="flex">
            <div className="hover:cursor-pointer pb-2 font-semibold text-small-2 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-1">
              다음으로
            </div>
            <div className="mb-px relative w-small-3 mobile-size:w-browser-2 tablet-size:w-browser-3 browser-size:w-browser-4 aspect-square">
              <div
                style={{ top: "15%", left: "30%" }}
                className="absolute w-w60 aspect-square border-solid border-r border-t rotate-45"
              ></div>
            </div>
          </div>
        </div>
        <div className="pb-p30"></div>
      </div>
    </div>
  );
}
