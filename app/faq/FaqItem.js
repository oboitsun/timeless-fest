"use client";
import { useEffect, useRef, useState } from "react";

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import styles from "./faq-item.module.scss";
export default function FaqItem({ question, children, open, handleOpen }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);

  function toggleAccordion() {
    handleOpen();
  }
  useEffect(() => {
    setHeightState(!open ? "0px" : `${content.current.scrollHeight}px`);
  }, [open]);
  return (
    <div
      onClick={handleOpen}
      className={`${styles.row} ${open ? styles.open : ""}  border-t border-t-black/50 `}>
      <div className={styles.question}>
        {question}
        <div className=" bg-primary h-14 w-14 justify-center items-center flex flex-shrink-0">
          <ChevronUpIcon
            className={`${open ? "rotate-0" : "rotate-180"} transition-all text-black w-8 h-8`}
          />
        </div>
      </div>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className={styles.answer}>
        {children}
      </div>
    </div>
  );
}
