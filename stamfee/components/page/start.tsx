"use client";

import { use, useState } from "react";

import ImageSlideComponent from "../imageSlideComponent";

export default function StartPage() {
  const [increase, setIncrease] = useState(0);
  const [descrese, setDecrease] = useState(0);

  return (
    <div className="aspect-6/5 relative">
      <div
        className="invisible absolute w-20 h-full tablet-size:visible hover:cursor-pointer"
        style={{ top: "50%", left: "10%" }}
        onClick={() => {
          setIncrease((value) => ++value);
        }}
      >
        <div className="relative w-w80 aspect-square after:top-[25%] after:left-[35%] after:absolute after:w-w50 after:aspect-square after:border-solid after:border-r-2 after:border-t-2 after:rotate-225 after:border-gray-800 z-30"></div>
      </div>
      <div
        className="invisible absolute w-20 h-full tablet-size:visible hover:cursor-pointer"
        style={{ top: "50%", right: "10%" }}
        onClick={() => {
          setDecrease((value) => ++value);
        }}
      >
        <div className="relative w-w80 aspect-square after:top-[25%] after:left-[35%] after:absolute after:w-w50 after:aspect-square after:border-solid after:border-r-2 after:border-t-2 after:rotate-45 after:border-gray-800 z-30"></div>
      </div>
      <ImageSlideComponent
        imgaeList={[]}
        isIncrease={increase}
        isDecrease={descrese}
      />
    </div>
  );
}
