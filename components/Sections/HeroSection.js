"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback } from "react";
import PromoModal from "../PromoModal";
import { SpotifyIcon } from "../UI/icons";
import styles from "./Hero.module.scss";
const artists_nz = [
  { src: "/artists/boy-george.png", name: "Boy George" },

  { src: "/artists/little-river-band.png", name: "Little River Band" },
  { src: "/artists/bonnie-tyler.png", name: "Bonnie Tyler" },
  { src: "/artists/starship.png", name: "Starship" },
];
const artists_aus = [
  { src: "/artists/boy-george.png", name: "Boy George" },
  { src: "/artists/starship.png", name: "Starship" },
  { src: "/artists/bonnie-tyler.png", name: "Bonnie Tyler" },
  { src: "/artists/tony-hadley.png", name: "Tony Hadley" },
];
const countries_data = {
  nz: {
    artistsImg: "/home/artists-nz.png",
    width: 1439,
    height: 952,
    logoImg: "/home/logo-nz.png",
    title: "new zealand tour 2025",
    dates: [
      { date: "11 jan", city: "christchurch", venue: "QEII" },
      { date: "12 jan", city: "napier", venue: "church rd winery" },
      { date: "16 jan", city: "new plymouth", venue: "bowl of brooklands" },
      { date: "18 jan", city: "Tauranga", venue: "venue tbc" },
      { date: "19 jan", city: "Auckland", venue: "Auckland Showgrounds" },
    ],
  },
  aus: {
    artistsImg: "/home/artists-aus.png",
    logoImg: "/home/logo-aus.png",
    title: "Australia tour 2025",
    width: 1158,
    height: 952,
    dates: [
      { date: "24 jan", city: "Yarra Valley, VIC", venue: "Rochford Wines" },
      { date: "25 jan", city: "Hunter Valley, NSW", venue: "Hope Estate" },
      { date: "27 jan", city: "Sandstone Point, QLD", venue: "Sandston Point Hotel" },
    ],
  },
};

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
const backs = {
  nz: "/home/bg-nz.jpg",
  aus: "/home/bg-aus.jpg",
};
export default function HeroSection({ country = "nz" }) {
  const openBuyModal = useCallback(() => {
    const event = new CustomEvent("showBuyModal");

    document.dispatchEvent(event);
  }, []);
  return (
    <section className={`${styles.section} gradient min-h-svh`}>
      <Image
        className="opacity-90 object-cover w-full h-full z-0"
        fill
        src={backs?.[country]}
        alt="texture"
      />
      <div className="wrap flex flex-col items-center justify-center h-1/2 flex-grow relative  max-lg:overflow-x-hidden">
        <div className="max-md:flex max-md:flex-col max-lg:items-center w-full lg:gap-4 justify-center place-items-center grid lg:grid-cols-[1.3fr,1fr]">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate="show"
            className="relative w-full ">
            <Image
              quality={100}
              width={countries_data?.[country]?.width}
              height={countries_data?.[country]?.height}
              className={` relative max-lg:translate-y-[3%] ${
                country === "nz"
                  ? "w-[110%] lg:w-[150%] max-lg:translate-x-[5%] lg:-translate-x-[10%]"
                  : "w-full lg:w-[120%] lg:-translate-x-[10%] lg:translate-y-[5%]"
              }`}
              src={countries_data?.[country]?.artistsImg}
              alt={"Artists"}
            />
          </motion.div>
          <div className="relative z-10 flex flex-col gap-4 items-center">
            <Image
              width={662}
              height={276}
              className="w-11/12"
              quality={100}
              src={countries_data?.[country]?.logoImg}
              alt={"Timeless Summer Tour"}
            />
            <motion.p
              initial={{ opacity: 0, y: "15%" }}
              transition={{ delay: 0.3 }}
              animate={{ opacity: 1, y: "0%" }}
              className={styles.p}>
              {countries_data?.[country]?.title}
            </motion.p>
            <div className=" w-1/3 max-lg:h-0.5 h-1 bg-black"></div>
            {/* <button onClick={(e) => openBuyModal(e)} className={styles.buy}>
            <span className="relative top-px">buy tickets</span>
          </button> */}
            <div className={`${styles.dates} ${styles[country]}`}>
              {countries_data?.[country]?.dates.map((item) => (
                <div key={item.date} className={styles.dateItem}>
                  <p className={styles.day}>{item.date}</p>
                  <p className={styles.city}>{item.city}</p>
                  <p className={styles.venue}>{item.venue}</p>
                </div>
              ))}
            </div>
            <div className=" w-1/3 max-lg:h-0.5 h-1 bg-black"></div>
            <div className="mt-5 lg:mt-10 flex max-lg:flex-col  lg:gap-6 button-lines">
              <PromoModal country={country} />
              <a
                target="_blank"
                href={
                  country === "aus"
                    ? "https://open.spotify.com/playlist/5lpQ1k16zedTv3SIT4mb8j?si=f1111d18afb94b15"
                    : "https://open.spotify.com/playlist/21dcPTCRigIqbu7XfEHQIV?si=15db3ffdc43b4cad"
                }
                className="promo-btn">
                <span className="relative translate-y-0.5  ">Official Spotify Playlist</span>
                <SpotifyIcon className="text-green-400 lg:w-10 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
