"use client";
import FreeHatSection from "@/components/Sections/FreeHatSection";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import VenueHeadImage from "./VenueHeadImage";

const options = {
  renderNode: {
    [BLOCKS.LIST_ITEM]: (node, children) => {
      const transformedChildren = documentToReactComponents(node, {
        renderMark: options.renderMark,
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      });
      return <li>{transformedChildren}</li>;
    },
  },
};
const parentVariants = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const childVariants = {
  show: {
    opacity: 1,
    y: "-50%",
    x: "-50%",

    letterSpacing: "0.1em",
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  hidden: (custom) => ({
    opacity: 0,
    letterSpacing: "0em",
    x: "-50%",
    y: "200%", // example custom property
  }),
};
export default function Venue({ venue }) {
  const {
    title,
    ticketLink,
    photo,
    gaInclusions,
    gaPrices,
    vipPrices,
    vipInclusions,
    platinumPrices,
    platinumInlcusions,
  } = venue?.fields || {};

  const tiers = [
    {
      id: "ga",
      prices: gaPrices,
      inclusions: gaInclusions,
    },
    {
      id: "vip",
      prices: vipPrices,
      inclusions: vipInclusions,
    },
    {
      id: "platinum",
      prices: platinumPrices,
      inclusions: platinumInlcusions,
    },
  ];
  const [date, time] = venue?.fields?.time?.split(";");
  return (
    <div className="w-full flex flex-col gap-5 xl:gap-10">
      <VenueHeadImage date={date} time={time} title={title} />
      {ticketLink && (
        <a
          href={ticketLink}
          className={
            "w-full bg-primary border-2 border-black text-center uppercase font-back text-xl lg:text-3xl py-2 lg:py-4 hover:bg-black hover:text-white hover:shadow-lg transition-all"
          }>
          <span className="">Buy Tickets Now</span>
        </a>
      )}
      {tiers.map((tier, i) =>
        tier.prices ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (i + 1) * 0.5 }}
            key={tier.id}
            className="w-full flex max-lg:flex-col gap-5 xl:gap-10 2xl:gap-16 bg-white p-5 lg:p-7 xl:p-10  ">
            <div className="flex flex-col w-fit xl:min-w-max ">
              <p className="font-matiz uppercase text-black text-lg xl:text-2xl tracking-tighter">
                {tier.id} Price:
              </p>
              <div className={"text-black mt-5 lg:text-xl"}>
                {documentToReactComponents(tier?.prices, options)}
              </div>
            </div>
            <div className="h-full w-px bg-black/25"></div>
            <div className="flex flex-col">
              <p className="font-matiz uppercase text-black text-lg xl:text-2xl tracking-tighter">
                {tier.id} Inclusions:
              </p>
              <ul className="lg:columns-2 gap-x-4 list-disc">
                {tier?.inclusions?.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : (
          <></>
        )
      )}
      <p className="text-sm">*Booking fees apply</p>
      <FreeHatSection type="small" />
    </div>
  );
}
