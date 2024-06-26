"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./Venue.module.scss";
const venuesImgs = [
  {
    img: "/venues/christchurch.jpeg",
    city: "Christchurch",
  },
  {
    img: "/venues/napier.jpeg",
    city: "Napier",
  },
  {
    img: "/venues/new-plymouth.jpeg",
    city: "New Plymouth",
  },
  {
    img: "/venues/tauranga.jpeg",
    city: "Tauranga",
  },
  {
    img: "/venues/auckland.jpeg",
    city: "Auckland",
  },
];
export default function VenuesItem({ venue, leftSide }) {
  const ref = useRef();
  const inView = useInView(ref, { amount: "all", once: true });
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
      y: "220px", // example custom property
    }),
  };
  const [date, time] = venue?.fields?.time?.split(";");
  return (
    <div className="w-full grid lg:grid-cols-2 gap-3 lg:gap-7 2xl:gap-10">
      <motion.div
        ref={ref}
        variants={parentVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={`relative w-full flex justify-center items-center overflow-hidden max-lg:pb-[50%] ${
          leftSide ? "" : "lg:order-1"
        }`}>
        <Image
          fill
          src={venuesImgs.find((v) => v.city === venue?.fields?.title)?.img ?? ""}
          alt={venue?.fields?.title}
          className="object-cover z-[-1]"
        />
        <motion.p variants={childVariants} className={`${styles.city}`}>
          {venue?.fields?.title}
          <br />
          {date}
          <br />
          {time}
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={!inView ? { opacity: 0 } : { opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-5 lg:p-7 2xl:p-10 bg-white text-black font-semibold   lg:text-xl leading-relaxed lg:leading-relaxed">
        {documentToReactComponents(venue?.fields?.excerpt)}
      </motion.div>
    </div>
  );
}
