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
export default function VenueSetTimes({ venue }) {
  const { title, photo, setTimes } = venue?.fields || {};
  const [date, time] = venue?.fields?.time?.split(";");
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
          {date}
          <br />
          {time}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex flex-col gap-2 bg-white px-5 lg:px-7 xl:px-10 py-5 ">
        {setTimes ? (
          setTimes.map((item, i) => {
            const [name, time] = item.split(";");
            return (
              <div
                key={i}
                className="w-full flex items-center justify-between py-2 lg:py-3 [&:not(:last-child)]:border-b  font-matiz uppercase text-xl">
                <p>{name}</p>
                <p>{time}</p>
              </div>
            );
          })
        ) : (
          <p className="text-7xl font-matiz uppercase text-center mx-auto pt-5"> TBA</p>
        )}
      </motion.div>
    </div>
  );
}
