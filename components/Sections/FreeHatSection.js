"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FreeHat.module.scss";
export default function FreeHatSection() {
  return (
    <div className="bg-orange pt-20 xl:pt-10   w-full">
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "-50%" }}
        transition={{ delay: 1.5, stiffnes: 150 }}
        style={{ maxWidth: "calc(1470px + 80px)" }}
        className="w-full relative -translate-y-1/2 flex justify-center  lg:px-10  mx-auto">
        <div className="w-full relative pb-[50%] lg:pb-[22%] overflow-x-hidden">
          <div className={styles.inner}>
            <motion.div
              initial={{ transformOrigin: "0% 100%" }}
              whileHover={{ rotate: "-8deg", y: -5, x: -5, transformOrigin: "0% 100%" }}
              whileTap={{ rotate: "-8deg", y: -5, x: -5, transformOrigin: "0% 100%" }}
              className={styles.hat}>
              <Image width={180} height={180} src="/hat.png" alt="Free Hat" className="w-full" />
            </motion.div>
            <p className={styles.freeHat}> free hat</p>
            <p className={styles.tickets}>
              Tickets purchased between July 3-5 come with a free Ttimeless Summer Tour hat!
            </p>
            <button className={styles.buy}>
              <span>buy hat</span>
            </button>
          </div>
          <Image fill src="/frame.png" alt="Frame" className="object-cover" />
        </div>
      </motion.div>
    </div>
  );
}
