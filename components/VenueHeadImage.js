"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const venues = {
  Christchurch: "/venues/christchurch.jpeg",
  Napier: "/venues/napier.jpeg",
  "New Plymouth": "/venues/new-plymouth.jpeg",
  Tauranga: "/venues/tauranga.jpeg",
  Auckland: "/venues/auckland.jpeg",
  "Yarra Valley": "/venues/yarra-valley.jpeg",
  "Hunter Valley": "/venues/hunter-valley.jpeg",
  Sandstone: "/venues/sandstone.jpeg",
};
export default function VenueHeadImage({ title, time, date }) {
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
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate={"show"}
      className={`relative w-full flex justify-center items-center overflow-hidden pb-[clamp(150px,15vw,240px)] bg-pale-gray`}>
      <Image
        fill
        src={venues?.[title] ?? "/crowd-wide.jpg"}
        alt={title}
        className={`${`object-cover opacity-90 ${
          ["Hunter Valley"].includes(title) ? "object-bottom" : "object-center"
        }`}`}
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
  );
}
