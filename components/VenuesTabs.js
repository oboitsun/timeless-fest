"use client";
import VenueSetTimes from "@/components/VenueSetTimes";
import Link from "next/link";
import Venue from "./Venue";
import VenueAus from "./VenueAus";

export default function VenuesTabs({ city, venues, item = "tickets", country = "nz" }) {
  return (
    <div className="relative flex max-lg:flex-col w-full 2xl:gap-10 gap-5 ">
      <ul className="flex flex-col sticky top-0 left-0 lg:w-1/5 flex-shrink-0 h-1/2 justify-between lg:border-t border-t-black/25 max-lg:flex-row overflow-x-auto w-full gap-3">
        {venues
          .sort((a, b) => a?.fields?.order - b?.fields?.order)
          .map((v) => (
            <li
              key={v?.sys?.id ?? v?.fields?.slug}
              className="min-w-max lg:border-b border-b-black/25">
              <Link
                href={`/${country}/${item}/${v?.fields?.slug}`}
                className={`inline-flex text-lg lg:text-xl font-matiz uppercase lg:py-5 2xl:py-8  cursor-pointer hover:text-primary/90 min-w-max ${
                  v?.fields?.slug === city ? "text-primary" : "text-black"
                }`}>
                {v?.fields?.title}
              </Link>
            </li>
          ))}
      </ul>
      <div className="flex flex-col w-full">
        {item === "tickets" ? (
          country === "nz" ? (
            <Venue venue={venues?.find((v) => v?.fields?.slug === city ?? venues[0])} />
          ) : (
            <VenueAus venue={venues?.find((v) => v?.fields?.slug === city ?? venues[0])} />
          )
        ) : (
          <VenueSetTimes
            key={city}
            venue={venues?.find((v) => v?.fields?.slug === city ?? venues[0])}
          />
        )}
      </div>
    </div>
  );
}
