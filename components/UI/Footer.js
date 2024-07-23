import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
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
export default function Footer({ country = "nz" }) {
  return (
    <footer className={styles.footer}>
      <div className="wrap  py-8 lg:py-16 flex max-xl:flex-wrap gap-5 max-lg:flex-col justify-between items-center">
        <Link prefetch={false} href={"/"}>
          <Image
            className="w-[10vh] max-w-max flex-shrink-0 mr-10"
            quality="100"
            width={161}
            height={99}
            src={"/logo.png"}
            alt="Logo"
          />
        </Link>
        <div className={styles.links}>
          {links.map((l) => (
            <Link
              prefetch={false}
              key={l.href}
              href={`/${country}${l.href}`}
              className="hover:text-primary">
              {l.label}
            </Link>
          ))}
        </div>
        {/* <div className="w-px h-16 my-auto flex-shrink-0 bg-white/25 max-xl:hidden"></div>
        <div className={"max-w-xs font-matiz lg:text-lg xl:text-xl"}>
          <p>
            <span className="text-white/50">Email:</span>{" "}
            <a href="mailto:info@timelessfest.co.nz">info@timelessfest.co.nz </a>
          </p>
          <p>
            <span className="text-white/50">Phone:</span> <a href="">00 000 000 </a>
          </p>
        </div>
        <div className="w-px h-16 my-auto flex-shrink-0 bg-white/25 max-xl:hidden"></div>
        <div className={"max-w-xs font-matiz lg:text-lg xl:text-xl"}>
          <p>PO Box </p>
          <p> uknown </p>
        </div>
        <div className="w-px h-16 my-auto flex-shrink-0 bg-white/25 max-xl:hidden"></div> */}
      </div>
      <div className="w-full border-t border-t-white/25">
        <div className="wrap py-8 font-matiz lg:text-lg xl:text-xl flex max-lg:flex-col max-lg:items-center justify-between gap-2 lg:gap-8">
          <div className="w-1/2 flex-grow">
            {country === "nz" ? (
              <>
                <p className="font-back uppercase ">
                  Timeless Summer Tour New Zealand is proudly produced by Timeless Events Global
                  Limited
                </p>
                <a className="underline font-back uppercase  ">NZBN: 9429050280568</a>
              </>
            ) : (
              <>
                <p className="font-back uppercase ">
                  Timeless Summer Tour Australia is proudly produced by Timeless Events Australia
                  Limited
                </p>
                <p className="underline font-back uppercase  ">ABN: 89 672 074 181</p>
              </>
            )}
            <p className=" mt-5">
              Website powered by{" "}
              <a
                className="underline hover:text-primary "
                href="https://www.apped.nz"
                target="_blank">
                apped.nz
              </a>
            </p>
          </div>
          <div className="max-lg:mx-auto  lg:mr-20 ">
            <Socials text="text-white" country={country} />
          </div>
        </div>
      </div>
    </footer>
  );
}
