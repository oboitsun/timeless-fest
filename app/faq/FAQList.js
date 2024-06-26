"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import { useState } from "react";
import FaqItem from "./FaqItem";
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

export default function FAQList({ list }) {
  const [openId, setOpenId] = useState(1);
  const handleOpen = (id) => {
    if (id !== openId) {
      setOpenId(id);
      return;
    }
    setOpenId(0);
  };

  return (
    <motion.div
      key="faq"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col lg:h-full lg:flex-grow py-2 ">
      {list &&
        list
          ?.sort((a, b) => a.fields.order - b.fields.order)
          .map(({ fields, sys }) => {
            return (
              <FaqItem
                key={sys.id}
                question={fields.heading}
                handleOpen={() => {
                  handleOpen(sys.id);
                }}
                open={openId === sys.id}>
                {documentToReactComponents(fields.answer, options)}
              </FaqItem>
            );
          })}
    </motion.div>
  );
}
