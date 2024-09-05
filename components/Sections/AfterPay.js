"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef } from "react";
import styles from "./FreeHat.module.scss";
export default function AfterPaySection({ type = "big", country = "nz" }) {
  const ref = useRef();
  const inView = useInView(ref, { amount: "some", once: true });
  const openBuyModal = useCallback(() => {
    const event = new CustomEvent("showBuyModal");

    document.dispatchEvent(event);
  }, []);
  return (
    <div className={`bg-[#242424] w-full relative py-8`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: "100%" }}
        animate={inView ? { opacity: 1, y: "0%" } : { opacity: 1, y: "0%" }}
        transition={{ delay: 0, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
        style={{ maxWidth: "calc(1470px + 80px)" }}
        className="w-full relative flex  justify-center  lg:px-10  mx-auto z-10">
        <div className=" wrap w-full flex  flex-col lg:flex-row items-center gap-4 justify-center">
          <Image
            width={255}
            height={120}
            src="/afterpay.png"
            alt="AfterPay"
            className=" w-2/3 lg:w-full max-w-[250px]"
          />
          <div className={"mx-auto font-back uppercase"}>
            <p className={`${styles.freeHat} text-[clamp(32px,3.5vw,56px)] text-center`}>
              afterpay Payment Option available
            </p>
          </div>
          <button onClick={(e) => openBuyModal(e)} className={"promo-btn max-lg:w-full"}>
            <span style={{ fontSize: "clamp(18px,25vw,24px)" }} className="relative top-px ">
              buy tickets
            </span>
          </button>
        </div>
      </motion.div>
      <Image fill src="/vintage-texture.png" alt="Texture" className="object-cover " />
    </div>
  );
}
