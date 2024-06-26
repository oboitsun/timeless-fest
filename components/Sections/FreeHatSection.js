"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./FreeHat.module.scss";
export default function FreeHatSection() {
  const ref = useRef();
  const inView = useInView(ref, { amount: "some", once: true });
  return (
    <div className="bg-orange   w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: "100%" }}
        animate={inView ? { opacity: 1, y: "0%" } : { opacity: 1, y: "0%" }}
        transition={{ delay: 0, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
        style={{ maxWidth: "calc(1470px + 80px)" }}
        className="w-full relative flex justify-center  lg:px-10  mx-auto">
        <div className="w-full relative pb-[50%] lg:pb-[22%] overflow-x-hidden">
          <div className={styles.inner}>
            <motion.div
              initial={{ transformOrigin: "0% 100%" }}
              whileHover={{ rotate: "-8deg", y: -5, x: -5, transformOrigin: "0% 100%" }}
              whileTap={{ rotate: "-8deg", y: -5, x: -5, transformOrigin: "0% 100%" }}
              className={styles.hat}>
              <Image width={180} height={180} src="/hat.png" alt="Free Hat" className="w-full" />
            </motion.div>
            <div
              className={
                "w-1/2 max-lg:w-2/3 lg:flex-1 max-lg:text-center gap-2 mb-2 flex flex-col max-w-[650px] mx-auto h-max"
              }>
              <p className={styles.freeHat}> Early Bird Special</p>
              <p className={styles.tickets}>
                Tickets purchased between July 3-5 come with a free Timeless Summer Tour hat!
              </p>
            </div>
            <a
              href="https://arep.co/p/timeless-summer-tour-register-for-pre-sales-1"
              className={styles.buy}>
              <span>Pre-registration</span>
            </a>
          </div>
          <Image fill src="/frame.png" alt="Frame" className="object-cover" />
        </div>
      </motion.div>
    </div>
  );
}
