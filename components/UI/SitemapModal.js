"use client";

import Image from "next/image";

export default function SitemapModal({ show = false, imgSrc, setShow }) {
  return (
    <>
      <div
        className={`z-40 fixed top-0 left-0 bg-black/80 p-5 lg:p-10 xl:p-20 flex justify-center items-center w-dvw h-dvh ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <div className="w-full lg:w-1/2  relative m-auto">
          <button
            onClick={() => {
              setShow(false);
            }}
            className="absolute z-10 right-0 top-0 h-10 w-10 bg-pale-gray p-2 text-black font-bold">
            x
          </button>
          <div className="relative w-full h-full pb-[104%]">
            <Image className="w-full object-contain" fill src={imgSrc} alt="sitemap" />
          </div>
        </div>
      </div>
    </>
  );
}
