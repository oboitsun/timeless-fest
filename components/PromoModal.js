"use client";

import { useState } from "react";

export default function PromoModal() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="promo-btn"
        onClick={() => {
          setShow(true);
        }}>
        <span className="relative translate-y-0.5"> See Our Promo</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M18.9938 10.9172L5.94375 3.15C5.78438 3.05625 5.62031 3 5.43281 3C4.92188 3 4.50469 3.42188 4.50469 3.9375H4.5V20.0625H4.50469C4.50469 20.5781 4.92188 21 5.43281 21C5.625 21 5.78437 20.9344 5.95781 20.8406L18.9938 13.0828C19.3031 12.825 19.5 12.4359 19.5 12C19.5 11.5641 19.3031 11.1797 18.9938 10.9172Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        className={`z-40 fixed top-0 left-0 bg-black/80 p-5 lg:p-10 xl:p-20 flex justify-center items-center w-dvw h-dvh ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <div className="w-full lg:w-2/3 aspect-video max-w-[1000px] relative">
          <button
            onClick={() => {
              setShow(false);
            }}
            className="absolute z-10 right-0 top-0 h-10 w-10 bg-pale-gray p-2 text-black font-bold">
            x
          </button>
          <iframe
            className="object-cover absolute top-0 left-0 "
            width="100%"
            height="100%"
            frameBorder={0}
            src="https://www.youtube.com/embed/H_ORu9ubzy8?si=h9kMIvKy1bR-i9Ri?mute=0&autoplay=0&controls=1&loop=1"
            title="YouTube video player"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
