"use client";

import { tree } from "next/dist/build/templates/app-page";
import { useState } from "react";

export default function LoginSection() {
  const [phoneNum, setPhoneNum] = useState<number | string>("");
  const [inputNumCheck, setInputNumCheck] = useState(true);
  const [] = useState();

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (value.length > 11) {
      return;
    }

    const reg = /^([0-9])*$/;
    if (value === "" || reg.test(value)) {
      setInputNumCheck(true);
      setPhoneNum(value);
    } else {
      setInputNumCheck(false);
    }
  };

  return (
    <>
      <div className="aspect-square">
        <div className="pt-p13 flex flex-col line-break:flex-row line-break:items-center">
          <span className="font-semibold text-small-2 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-1">
            휴대폰 번호
          </span>
          <span className="line-break:ml-m01 font-semibold text-red-600 text-small-0 small-size:text-small-1 mobile-size:text-small-2 tablet-size:text-small-3 browser-size:text-small-4">
            {!inputNumCheck && "올바른 형식의 번호를 입력해주세요( - 제외)"}
          </span>
        </div>
        <div className="flex justify-between bg-amber-200 w-full mt-m02 aspect-[7/1] mobile-size:aspect-[8/1] tablet-size:aspect-[10/1] rounded-md line-break:rounded-xl tablet-size:rounded-2xl">
          <input
            onChange={handleChangeInputValue}
            className="tracking-wide mobile-size:tracking-wider tablet-size:-widest browser-size:tracking-wwww    text-small-2 mobile-size:text-small-5 tablet-size:text-mobile-5 browser-size:text-big-3  pl-p10 bg-myColor-loginInput w-full rounded-l-md line-break:rounded-l-xl tablet-size:rounded-l-2xl"
            value={phoneNum}
            type="text"
          />
          <div className="w-w25 line-break:w-w23 tablet-size:w-25  flex justify-center items-center bg-black rounded-r-md line-break:rounded-r-xl tablet-size:rounded-r-2xl">
            <span className="m-auto text-white text-small-1 mobile-size:text-small-5 tablet-size:text-mobile-3 browser-size:text-big-1">
              확인
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
