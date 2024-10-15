"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import VenueHeadImage from "./VenueHeadImage";
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

export default function VenueSetTimes({ venue }) {
  const { title, photo, setTimes } = venue?.fields || {};
  const [date, time] = venue?.fields?.time?.split(";");
  return (
    <div className="w-full flex flex-col gap-5 xl:gap-10">
      <VenueHeadImage date={date} time={time} title={title} />

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
                <p>
                  {name.includes("Spandau") ? (
                    <>
                      Tony Hadley <i className="text-sm">ex.</i>Spandau Ballet
                    </>
                  ) : (
                    name
                  )}
                </p>
                <p>{time}</p>
              </div>
            );
          })
        ) : (
          <p className="text-7xl font-matiz uppercase text-center mx-auto pt-5"> TBA</p>
        )}
      </motion.div>
      <p className="text-lg uppercase">* times subject to change</p>
    </div>
  );
}
