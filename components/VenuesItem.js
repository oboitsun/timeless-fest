"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./Venue.module.scss";
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
export default function VenuesItem({ venue, leftSide }) {
  const ref = useRef();
  const inView = useInView(ref, { amount: "some", once: true });
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
      <motion.a
        ref={ref}
        variants={parentVariants}
        initial="hidden"
        href={`/${venue.fields.country}/tickets/${venue.fields.slug}`}
        animate={inView ? "show" : "hidden"}
        className={`relative w-full flex justify-center items-center overflow-hidden max-lg:pb-[50%] bg-black/10 ${
          leftSide ? "" : "lg:order-1"
        }`}>
        <Image
          fill
          src={venues?.[venue.fields?.title] ?? "/crowd-wide.jpg"}
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
      </motion.a>
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
