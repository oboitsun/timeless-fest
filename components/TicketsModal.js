"use client";

import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
const ticket_links = [
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-christchurch-11jan2025",
    city: "Christchurch - 11",
  },
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-napier",
    city: "napier - 12",
  },
  {
    link: "https://premier.ticketek.co.nz/shows/show.aspx?sh=TIMELESS25",
    city: "new plymouth - 16",
  },
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-tauranga",
    city: "tauranga - 18",
  },
  {
    link: "https://www.ticketfairy.com/event/timeless-summer-tour-auckland",
    city: "auckland - 19",
  },
];
export default function TicketsModal() {
  const [show, setShow] = useState(false);
  const [link, setLink] = useState();
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
            {ticket_links.map((ticket) => (
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
