"use client";

import Image from "next/image";

// svg url
import introSvg_1 from "@/public/svg/intro_img/intro_1.svg";
import introSvg_2 from "@/public/svg/intro_img/intro_2.svg";
import introSvg_3 from "@/public/svg/intro_img/intro_3.svg";

export default function ImageSlideComponent({
  imgaeList,
}: {
  imgaeList: string[];
}) {
  const imageListCheck =
    imgaeList.length !== 0 ? imgaeList : [introSvg_1, introSvg_2, introSvg_3];

  return (
    <div className="w-w80 mx-auto aspect-square overflow-auto overflow-x-scroll snap-x snap-mandatory flex">
      {imageListCheck.map((value, index) => (
        <Image
          className="snap-center w-w60 mx-m20"
          key={index}
          src={value}
          alt="광고 페이지 이미지"
        />
      ))}
    </div>
  );
}
