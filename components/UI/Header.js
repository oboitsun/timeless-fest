"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
export const links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Artists",
    href: "/artists",
  },
  {
    label: "Tickets",
    href: "/tickets",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
export default function Header() {
  const location = usePathname();
  const isHome = location === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <nav
      className={`${styles.nav} ${isHome ? styles.fixed : ""} ${
        scrolled || open ? styles.scrolled : ""
      } overflow-x-hidden`}>
      <div className="wrap flex justify-between items-center gap-10 w-full">
        <div className="w-1/2 flex flex-shrink justify-between gap-2 max-w-[550px] max-xl:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${location === l.href ? styles.active : ""}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="xl:w-[10vh] max-xl:w-[15vw] max-w-max flex-shrink-0 xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2  xl:-translate-y-1/2 z-10">
          <Image className="w-full " quality="100" width={161} height={99} src={"/logo.png"} />
        </Link>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className={`${styles.burger} ${open ? styles["is-open"] : ""} lg:hidden relative z-30`}>
          <div className={styles["line-top"]}></div>
          <div className={styles["line-middle"]}></div>
          <div className={styles["line-bottom"]}></div>
        </button>
        <div
          className={`xl:w-1/2 flex-shrink xl:static fixed top-0 right-0 w-4/5 max-xl:flex-col  max-xl:bg-pale-gray max-xl:h-svh max-xl:pt-14 max-xl:px-8 xl:hidden transition-all ${
            open ? "max-xl:translate-x-0" : "max-xl:translate-x-full"
          }`}>
          <div className="xl:hidden flex flex-col gap-8 text-black">
            {links.map((l) => (
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                key={l.href}
                href={l.href}
                className={`${styles.link} ${location === l.href ? styles.active : "text-black"}`}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col xl:flex-row mt-auto h-1/2 flex-grow justify-end">
            <Link
              href="/"
              className="bg-black uppercase py-5 px-8 text-xl font-matiz flex w-max text-white ">
              Buy Tickets
            </Link>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row max-xl:hidden">
          <Link
            href="/"
            className="bg-primary hover:bg-black uppercase py-4 px-6 text-xl  font-matiz flex w-max text-black hover:text-primary transition-all ">
            Buy Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
}
