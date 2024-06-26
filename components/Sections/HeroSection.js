"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import PromoModal from "../PromoModal";
import { SpotifyIcon } from "../UI/icons";
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

export default function HeroSection() {
  return (
    <section className={`${styles.section} gradient`}>
      <Image
        className="opacity-90 object-cover w-full h-full z-0"
        fill
        src="/vintage-texture.png"
        alt="texture"
      />
      <div className="wrap flex flex-col items-center justify-center h-1/2 flex-grow relative  ">
        <div className="flex max-md:flex-col max-lg:items-center w-full gap-4 justify-center">
          <div className="flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: "15%" }}
              transition={{ delay: 0.3 }}
              animate={{ opacity: 1, y: "0%" }}
              className={styles.p}>
              2025 timeless
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: "15%" }}
              transition={{ delay: 0.5 }}
              animate={{ opacity: 1, y: "0%" }}
              className={styles.h1}>
              Summer Tour
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: "15%" }}
            transition={{ delay: 0.7 }}
            animate={{ opacity: 1, y: "0%" }}
            className="w-full md:w-1/2 lg:w-1/3 h-auto flex flex-col">
            <Image
              className="w-full h-1/2 flex-grow  object-contain"
              width={524}
              height={259}
              src={"/dates.png"}
              alt="dates"
            />
          </motion.div>
        </div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="show"
          className="w-full md:w-10/12 max-md:gap-2 grid grid-cols-2 lg:grid-cols-4 pt-5 xl:pt-10">
          {artists.map(({ src, name }, i) => (
            <motion.div
              variants={childVariants}
              key={i}
              custom={{ x: `-${i * 25}%` }}
              className="w-full pb-[100%] relative">
              <Image
                className="absolute w-[105%] h-[105%] object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                width={356}
                height={356}
                src={src}
                alt={name}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-5 lg:mt-10 flex max-lg:flex-col  lg:gap-6 button-lines">
          <PromoModal />
          <a
            target="_blank"
            href="https://open.spotify.com/playlist/21dcPTCRigIqbu7XfEHQIV?si=15db3ffdc43b4cad"
            className="promo-btn">
            <span className="relative translate-y-0.5"> See Our Promo Video</span>
            <SpotifyIcon className="text-green-400 lg:w-10 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
