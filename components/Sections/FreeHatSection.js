"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef } from "react";
import styles from "./FreeHat.module.scss";
export default function FreeHatSection({ type = "big" }) {
  const ref = useRef();
  const inView = useInView(ref, { amount: "some", once: true });
  const openBuyModal = useCallback(() => {
    const event = new CustomEvent("showBuyModal");

    document.dispatchEvent(event);
  }, []);
  return (
    <div className={`${type === "big" ? "bg-orange" : ""} w-full`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: "100%" }}
        animate={inView ? { opacity: 1, y: "0%" } : { opacity: 1, y: "0%" }}
        transition={{ delay: 0, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
        style={{ maxWidth: "calc(1470px + 80px)" }}
        className="w-full relative flex justify-center  lg:px-10  mx-auto">
        <div className="w-full relative pb-[50%] lg:pb-[22%] overflow-x-hidden">
          <div className={`${styles.inner} ${type === "small" ? styles.small : ""}`}>
            <motion.div
              initial={{ transformOrigin: "0% 100%" }}
              whileHover={{ rotate: "-8deg", y: -5, x: -5, transformOrigin: "0% 100%" }}
              whileTap={{ rotate: "-8deg", y: -5, x: -5, transformOrigin: "0% 100%" }}
              className={styles.hat}>
              <Image
                width={255}
                height={120}
                src="/afterpay.png"
                alt="AfterPay"
                className="w-full"
              />
            </motion.div>
            <div
              className={
                "w-1/2 max-lg:w-2/3 lg:flex-1  max-lg:text-center gap-2 mb-2 flex flex-grow max-w-[650px] mx-auto h-max"
              }>
              <p className={styles.freeHat}> afterpay Payment Option available</p>
            </div>
            <button
              onClick={() => {
                openBuyModal();
              }}
              className={styles.buy}>
              <span>Buy Tickets</span>
            </button>
          </div>
          <Image fill src="/frame.png" alt="Frame" className="object-cover" />
        </div>
      </motion.div>
    </div>
  );
}
