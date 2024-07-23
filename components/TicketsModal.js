"use client";

import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
const ticket_links_nz = [
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-christchurch-11jan2025",
    city: "Christchurch - JAN 11",
  },
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-napier",
    city: "napier - JAN 12",
  },
  {
    link: "https://premier.ticketek.co.nz/shows/show.aspx?sh=TIMELESS25",
    city: "new plymouth - JAN 16",
  },
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-tauranga",
    city: "tauranga - JAN 18",
  },
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-auckland",
    city: "auckland - JAN 19",
  },
];
const ticket_links_au = [
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-yarra-valley",
    city: "Yarra Valley - JAN 24 - All tickets",
  },
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-hunter-valley",
    city: "Hunter Valley - JAN 25 - All tickets",
  },
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-sandstone",
    city: "Sandstone - Jan 27 - GA + Golden Views",
  },
  {
    link: "https://sandstonepoint.oztix.com.au/outlet/event/637c7425-a413-4482-bb2a-f06a914a2cf0",
    city: "Sandstone - Jan 27 - VIP",
  },
  // {
  //   link: "https://oztixspecialoffers.oztix.com.au/outlet/event/576036d1-f722-4a4f-9b21-6e95c9484465",
  //   city: "Sandstone (Hamper)",
  // },
  // {
  //   link: "https://sandstonepoint.oztix.com.au/outlet/event/576036d1-f722-4a4f-9b21-6e95c9484465",
  //   city: "Sandstone (Car Park & Buses)",
  // },
];
const ticket_links = {
  nz: ticket_links_nz,
  aus: ticket_links_au,
};
export default function TicketsModal({ country = "nz" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("showBuyModal", (e) => {
      setShow(true);
    });
  }, []);

  return (
    <>
      <div
        className={`z-40 fixed top-0 left-0 bg-black/80 p-5 lg:p-10 xl:p-20 flex justify-center items-center w-dvw h-dvh ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <div className="w-full lg:w-2/3 bg-white rounded-xl p-4 lg:p-8 max-w-[640px] relative">
          <div className="flex justify-between items-center pb-5">
            <p className="font-back text-primary uppercase text-xl lg:text-3xl">Buy Tickets</p>
            <button
              onClick={() => {
                setShow(false);
              }}
              className=" h-7 w-7 bg-primary flex items-center justify-center font-bold">
              <XMarkIcon className="w-5 h-5 fill-black stroke-black " />
            </button>
          </div>
          <div className="flex flex-col gap-4 ">
            {ticket_links?.[country]?.map((ticket) => (
              <a
                key={ticket.city}
                href={ticket.link}
                className={` border-2 border-black bg-primary text-black   transition-all   p-4 flex justify-between items-center  font-back hover:bg-black hover:text-white uppercase lg:text-xl text-center`}>
                {ticket.city}
                <ChevronRightIcon className="w-6 h-6 text-inherit stroke-inherit" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
