"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Socials from "./Socials";
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
    label: "FAQs",
    href: "/faq",
  },
  {
    label: "Artists",
    href: "/artists",
  },
  {
    label: "Set Times",
    href: "/set-times",
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
        <Link href="/" className="xl:w-[10vh] max-xl:w-[15vw] max-w-max flex-shrink-0  z-10">
          <Image className="w-full " quality="100" width={161} height={99} src={"/logo.png"} />
        </Link>
        <div className="w-10/12 flex flex-grow  justify-around gap-2  max-xl:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} min-w-max  ${location === l.href ? styles.active : ""}`}>
              {l.label}
            </Link>
          ))}
        </div>

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
          <div className="flex flex-col xl:flex-row mt-auto h-1/2 flex-grow justify-end gap-4 items-center">
            <Link
              href="/"
              className="bg-black uppercase py-5 px-8 text-xl font-matiz flex w-max text-white ">
              Buy Tickets
            </Link>
            <Socials />
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:flex-row max-xl:hidden">
          <Socials />
          <Link href="/" className={styles.buy}>
            <span className="relative top-0.5">Buy Tickets</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
