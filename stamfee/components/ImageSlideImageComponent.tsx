"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface ImageConfig {
  // key: number;
  index: number;
  url: string;
  parentElement: HTMLDivElement | null;
  changeFun: (index: number) => void;
}

export default function ImageSlideImageComponent(config: ImageConfig) {
  const [ref, inView, entry] = useInView({
    root: config.parentElement,
    threshold: 0.5,
  });
  const showRef = useRef<HTMLDivElement | null>(null);

  // 올려주기 함수를 받아서 inView 값을 줘야 한다.
  if (inView) {
    config.changeFun(config.index);
  }

  return (
    <Image
      className="snap-center w-w80 mx-m20 max-h object-cover h-h85 mt-auto"
      src={config.url}
      alt="광고 페이지 이미지"
      ref={(el) => {
        showRef.current = el;
        ref(el);
      }}
    />
  );
}
