"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import Image from "next/image";
const venues = {
  Christchurch: "/venues/christchurch.jpeg",
  Napier: "/venues/napier.jpeg",
  "New Plymouth": "/venues/new-plymouth.jpeg",
  Tauranga: "/venues/tauranga.jpeg",
  Auckland: "/venues/auckland.jpeg",
};

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
    time,
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
  return (
    <div className="w-full flex flex-col gap-5 xl:gap-10">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={"show"}
        className={`relative w-full flex justify-center items-center overflow-hidden pb-[clamp(150px,15vw,240px)] bg-pale-gray`}>
        <Image
          fill
          src={venues?.[title] ?? "/crowd-wide.jpg"}
          alt={photo.title}
          className="object-cover object-center opacity-90"
        />
        <motion.p
          variants={childVariants}
          className={`text-2xl lg:text-4xl xl:text-6xl text-center font-matiz uppercase text-white absolute drop-shadow-md top-1/2 left-1/2 leading-none w-max`}>
          {title}
          <br />
          {time}
        </motion.p>
      </motion.div>
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
    </div>
  );
}
