"use client";
import { useState } from "react";
import Venue from "./Venue";

export default function VenuesTabs({ venues }) {
  const [currentTab, setCurrentTab] = useState(
    venues.sort((a, b) => a?.fields?.order - b?.fields?.order)?.[0]?.fields.slug
  );

  return (
    <div className="relative flex max-lg:flex-col w-full 2xl:gap-10 gap-5 ">
      <ul className="flex flex-col sticky top-0 left-0 lg:w-1/5 flex-shrink-0 h-1/2 justify-between lg:border-t border-t-black/25 max-lg:flex-row overflow-x-auto w-full gap-3">
        {venues.map((v) => (
          <li
            className={`text-lg lg:text-xl font-matiz uppercase lg:py-5 2xl:py-8 lg:border-b border-b-black/25 cursor-pointer hover:text-primary/90 min-w-max ${
              v?.fields?.slug === currentTab ? "text-primary" : "text-black"
            }`}
            onClick={() => {
              if (v?.fields?.slug !== currentTab) {
                setCurrentTab(v?.fields?.slug);
              }
            }}
            key={v.sys.id}>
            {v?.fields?.title}
          </li>
        ))}
      </ul>
      <div className="flex flex-col w-full">
        <Venue key={currentTab} venue={venues?.find((v) => v?.fields?.slug === currentTab)} />
      </div>
    </div>
  );
}
