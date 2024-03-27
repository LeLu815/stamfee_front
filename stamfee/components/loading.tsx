"use client";

import { useEffect } from "react";

import styles from "../app/styles.module.css";

export default function Loading() {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0`}>
      <div
        style={{ maxWidth: "785px" }}
        className="backdrop-blur-4 min-w-44 rounded-md mobile-size:rounded-lg tablet-size:rounded-xl browser-size:rounded-2xl shadow-browser bg-myColor-loadingBg w-w75 aspect-5/2 m-auto mt-m20 flex justify-center items-center flex-col gap-gap9"
      >
        <div className={`${styles.loader} flex justify-center gap-gap7 w-w50`}>
          <div
            className={`${styles["box-load1"]} bg-myColor-loadingBtn rounded-full  w-1 h-1 mobile-size:w-2 mobile-size:h-2 tablet-size:w-3 tablet-size:h-3 browser-size:w-4 browser-size:h-4`}
          ></div>
          <div
            className={`${styles["box-load2"]} bg-myColor-loadingBtn rounded-full  w-1 h-1 mobile-size:w-2 mobile-size:h-2 tablet-size:w-3 tablet-size:h-3 browser-size:w-4 browser-size:h-4`}
          ></div>
          <div
            className={`${styles["box-load3"]} bg-myColor-loadingBtn rounded-full  w-1 h-1 mobile-size:w-2 mobile-size:h-2 tablet-size:w-3 tablet-size:h-3 browser-size:w-4 browser-size:h-4`}
          ></div>
        </div>
        <div className="flex flex-col">
          <span className="text-small-2 mobile-size:text-mobile-1 tablet-size:text-browser-4 browser-size:text-big-3">
            요청을 처리 중입니다
          </span>
          <span className="text-small-2 mobile-size:text-mobile-1 tablet-size:text-browser-4 browser-size:text-big-3">
            잠시만 기다려주세요
          </span>
        </div>
      </div>
    </div>
  );
}
