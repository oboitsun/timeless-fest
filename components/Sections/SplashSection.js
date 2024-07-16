"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
const artists = [
  { src: "/artists/boy-george.png", name: "Boy George" },

  { src: "/artists/little-river-band.png", name: "Little River Band" },
  { src: "/artists/bonnie-tyler.png", name: "Bonnie Tyler" },
  { src: "/artists/starship.png", name: "Starship" },
];
const parentVariants = {
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
  hidden: {
    zIndex: 0,
    opacity: 0,
  },
};

const childVariants = {
  show: {
    opacity: 1,
    x: "0%",
  },
  hidden: (custom) => ({
    opacity: 0,
    x: custom.x, // example custom property
  }),
};

export default function SplashSection() {
  return (
    <section className={`w-screen h-svh flex flex-col justify-center items-center gradient `}>
      <Image
        className="opacity-90 object-cover w-full h-full z-0"
        fill
        src="/vintage-texture.png"
        alt="texture"
      />
      <div className="wrap flex flex-col items-center justify-center h-1/2 flex-grow relative  ">
        <div className="flex max-md:flex-col max-lg:items-center w-full gap-4 justify-center">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: "15%" }}
              transition={{ delay: 0.3 }}
              animate={{ opacity: 1, y: "0%" }}
              className="w-full max-w-md">
              <Image
                className=" w-full h-auto z-0"
                width={423}
                height={260}
                src="/logo-big.png"
                alt="Timeless Summer Tour 2025"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: "15%" }}
              transition={{ delay: 0.5 }}
              animate={{ opacity: 1, y: "0%" }}
              className={styles.h1}>
              Choose your country
            </motion.h1>
          </div>
        </div>

        <div className="mt-1 lg:mt-10 flex max-lg:flex-col  lg:gap-6 button-lines">
          <Link prefetch={false} href={"/nz/"} className="promo-btn">
            <span className="relative translate-y-0.5"> New Zealand</span>
          </Link>
          <Link prefetch={false} href={"/aus/"} className="promo-btn flex justify-center">
            <span className="relative translate-y-0.5 text-center"> Australia</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
