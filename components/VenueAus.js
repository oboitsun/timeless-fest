"use client";
import FreeHatSection from "@/components/Sections/FreeHatSection";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SitemapModal from "./UI/SitemapModal";
import styles from "./Venue.module.scss";
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

export default function Venue({ venue }) {
  const { title, ticketLink, tiers, sitemap } = venue?.fields || {};
  const [date, time] = venue?.fields?.time?.split(";");
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full flex flex-col gap-5 xl:gap-10">
      <VenueHeadImage date={date} time={time} title={title} />
      {ticketLink || sitemap ? (
        <div className="flex max-md:flex-col gap-2 lg:gap-4">
          {ticketLink && (
            <a
              href={ticketLink}
              className={
                "w-full bg-primary border-2 border-black text-center uppercase font-back text-xl lg:text-3xl py-2 lg:py-4 hover:bg-black hover:text-white hover:shadow-lg transition-all"
              }>
              <span className="">Buy Tickets Now</span>
            </a>
          )}
          {/* {sitemap && (
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className={
                "w-full bg-black border-2 border-primary hover:border-black text-center uppercase font-back text-xl lg:text-3xl py-2 lg:py-4 hover:bg-primary hover:text-black text-white hover:shadow-lg transition-all"
              }>
              <span className="">sitemap</span>
            </button>
          )} */}
        </div>
      ) : (
        ""
      )}
      {tiers.map((tier, i) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: (i + 1) * 0.2 }}
          key={tier.id}
          className={`${styles.venueTier} w-full flex max-lg:flex-col gap-5 xl:gap-10 2xl:gap-14 bg-white p-5 lg:p-7 xl:p-10 `}>
          <div
            className={`${
              !tier?.prices ? "max-lg:hidden" : ""
            } text-black lg:text-xl flex flex-col w-full  max-w-[260px] `}>
            <p className="font-matiz uppercase text-black text-lg xl:text-2xl tracking-tighter mb-5">
              {tier.title}
            </p>
            {tier.prices}
            {/* {documentToReactComponents(tier?.prices, options)} */}
          </div>

          <div className="h-full w-px bg-black/25"></div>
          <div className="flex flex-col *:list-disc">
            <p className="font-matiz uppercase text-black text-lg xl:text-2xl tracking-tighter mb-5">
              {tier.inclusion_title ?? "Inclusions:"}
            </p>
            {/* <ul className="lg:columns-2 gap-x-4 list-disc">
                {tier?.inclusions?.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
                  
              </ul> */}
            {tier.inclusions}
          </div>
        </motion.div>
      ))}
      {sitemap && (
        <Image
          width={1235}
          height={1280}
          src={sitemap}
          className="w-full md:w-1/2 mx-auto"
          alt="Sitemap"
        />
      )}

      <FreeHatSection type="small" country="aus" />
      <SitemapModal show={showModal} imgSrc={sitemap} setShow={setShowModal} />
    </div>
  );
}
