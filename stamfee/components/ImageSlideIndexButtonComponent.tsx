"use client";

import Image from "next/image";

import fill from "@/public/svg/Ellipse_fill.svg";
import empty from "@/public/svg/Ellipse_empty.svg";

interface IndexButtonConfig {
  myNum: number;
  currentNum: number;
}

export default function ImageSlideIndexButtonComponent(
  config: IndexButtonConfig
) {
  return (
    <>
      {config.myNum === config.currentNum && (
        <Image src={fill} alt="선택 활성화" />
      )}
      {config.myNum !== config.currentNum && (
        <Image src={empty} alt="선택 활성화" />
      )}
    </>
  );
}
