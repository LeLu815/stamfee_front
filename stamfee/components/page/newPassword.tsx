"use client";

import { useState, useRef } from "react";

export default function NewPasswordSection() {
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string | boolean>("");

  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [checkPasswordConfirm, setCheckPasswordConfirm] = useState<
    string | boolean
  >("");

  // const reg = /^(?=.[a-zA-Z])((?=.\d)|(?=.*\W)).{6,20}$/;
  // password
  const handleChangePassword = (e: React.ChangeEvent<HTMLElement>) => {
    setCheckPassword("");
    const value = (e.target as HTMLInputElement).value;
    if (value.length > 20) {
      return;
    }
    setPassword(value);
  };
  const handleCheckpasswodCorrect = (e: React.ChangeEvent<HTMLElement>) => {
    const reg1 = /^(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/;
    const reg2 = /^(?=.*[A-Za-z])(?=.*[$@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/;
    const reg3 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,20}$/;
    const value = (e.target as HTMLInputElement).value;

    if (reg1.test(value) || reg2.test(value) || reg3.test(value)) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };

  // passwordConfirm
  const handleChangePasswordConfirm = (e: React.ChangeEvent<HTMLElement>) => {
    setCheckPasswordConfirm("");
    const value = (e.target as HTMLInputElement).value;
    if (value.length > 20) {
      return;
    }
    setPasswordConfirm(value);
  };
  const handleCheckPasswordSame = (e: React.ChangeEvent<HTMLElement>) => {
    if (password === passwordConfirm) {
      setCheckPasswordConfirm(true);
    } else {
      setCheckPasswordConfirm(false);
    }
  };

  return (
    <>
      <div className="aspect-square">
        <div className="pt-p13 flex flex-col line-break:flex-row line-break:items-center">
          <span className="font-semibold text-small-2 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-2">
            비밀번호
          </span>
          <span className="line-break:ml-m01 font-semibold text-red-600 text-small-0 small-size:text-small-1 mobile-size:text-small-2 tablet-size:text-small-3 browser-size:text-small-4">
            {checkPassword !== "" &&
              !checkPassword &&
              "비밀번호 규정을 확인해주세요"}
          </span>
          <span className="line-break:ml-m01 font-semibold text-green-600 text-small-0 small-size:text-small-1 mobile-size:text-small-2 tablet-size:text-small-3 browser-size:text-small-4">
            {checkPassword && "규정에 맞아요"}
          </span>
        </div>
        <div className="flex justify-between bg-myColor-loginInput w-full mt-m02 aspect-[7/1] mobile-size:aspect-[8/1] tablet-size:aspect-[10/1] rounded-md line-break:rounded-xl tablet-size:rounded-2xl">
          <input
            ref={passwordRef}
            onBlur={handleCheckpasswodCorrect}
            onChange={handleChangePassword}
            className={`${
              checkPassword !== "" &&
              !checkPassword &&
              "border-2 border-red-600 border-solid"
            } w-full focus:border-2-black tracking-wide mobile-size:tracking-wider tablet-size:-widest browser-size:tracking-wwww text-small-2 mobile-size:text-small-5 tablet-size:text-mobile-5 browser-size:text-big-3  pl-p10 bg-myColor-loginInput rounded-md line-break:rounded-xl tablet-size:rounded-2xl`}
            value={password}
            type="password"
          />
        </div>
        <div className="cursor-pointer decoration-from-font font-extralight pt-p2 text-small-1 mobile-size:text-small-2 tablet-size:text-small-4 browser-size:text-tablet-1">
          특수문자, 숫자, 영어대소문자 중 2가지 이상을 포함한 6-20자리 번호
        </div>

        <div className="pt-p5 flex flex-col line-break:flex-row line-break:items-center">
          <span className="font-semibold text-small-2 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-2">
            비밀번호 확인
          </span>
          <span className="line-break:ml-m01 font-semibold text-red-600 text-small-0 small-size:text-small-1 mobile-size:text-small-2 tablet-size:text-small-3 browser-size:text-small-4">
            {checkPasswordConfirm !== "" &&
              !checkPasswordConfirm &&
              "비밀번호가 불일치해요. 번호를 다시 확인해주세요"}
          </span>
          <span className="line-break:ml-m01 font-semibold text-green-600 text-small-0 small-size:text-small-1 mobile-size:text-small-2 tablet-size:text-small-3 browser-size:text-small-4">
            {checkPasswordConfirm && "일치해요"}
          </span>
        </div>
        <div className="flex justify-between bg-myColor-loginInput w-full mt-m02 aspect-[8/1] mobile-size:aspect-[8/1] tablet-size:aspect-[10/1] rounded-md line-break:rounded-xl tablet-size:rounded-2xl">
          <input
            ref={passwordConfirmRef}
            onBlur={handleCheckPasswordSame}
            onChange={handleChangePasswordConfirm}
            className={`${
              checkPasswordConfirm !== "" &&
              !checkPasswordConfirm &&
              "border-2 border-red-600 border-solid"
            } tracking-wide mobile-size:tracking-wider tablet-size:-widest browser-size:tracking-wwww text-small-2 mobile-size:text-small-5 tablet-size:text-mobile-5 browser-size:text-big-3  pl-p10 bg-myColor-loginInput w-full rounded-md line-break:rounded-xl tablet-size:rounded-2xl`}
            value={passwordConfirm}
            type="password"
          />
        </div>
      </div>
    </>
  );
}
