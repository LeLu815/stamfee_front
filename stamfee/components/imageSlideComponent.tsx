"use client";

//
import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

// import custom components
import ImageSlideImageComponent from "./ImageSlideImageComponent";

// svg url
import introSvg_1 from "@/public/svg/intro_img/intro_1.svg";
import introSvg_2 from "@/public/svg/intro_img/intro_2.svg";
import introSvg_3 from "@/public/svg/intro_img/intro_3.svg";

export default function ImageSlideComponent({
  imgaeList,
}: {
  imgaeList: string[];
}) {
  // imgaeList 값 결정
  const imageListCheck =
    imgaeList.length !== 0 ? imgaeList : [introSvg_1, introSvg_2, introSvg_3];

  const [imageNum, setImageNum] = useState(0);
  const parentRef = useRef<null | HTMLDivElement>(null);

  const changeImageIndex = useCallback(
    (index: number) => {
      setImageNum(index);
    },
    [setImageNum]
  );
  // const childrenRef = useRef<null[] | HTMLDivElement[]>([]);
  // const [ref, inView, entry] = useInView({
  //   root: parentRef.current,
  //   threshold: 0.5,
  // });

  // const setRefs = useCallback(
  //   (node:HTMLDivElement | null, num:number) => {
  //     childrenRef.current[num] = node;
  //     ref(node);
  //   },
  //   [ref],
  // );

  return (
    <>
      <div
        className="w-w80 mx-auto aspect-square overflow-auto overflow-x-scroll snap-x snap-mandatory flex"
        ref={parentRef}
      >
        {imageListCheck.map((value, index) => (
          <ImageSlideImageComponent
            key={index}
            index={index}
            url={value}
            parentElement={parentRef.current}
            changeFun={changeImageIndex}
          />
          // <Image
          //   className="snap-center w-w80 mx-m20 max-h object-cover h-h85 mt-auto"
          //   key={index}
          //   src={value}
          //   alt="광고 페이지 이미지"
          // />
        ))}
      </div>
      <div>
        {imageNum}
        {imageListCheck.map((value, index) => (
          <></>
          // <Image src={} />
        ))}
      </div>
    </>
  );
}
