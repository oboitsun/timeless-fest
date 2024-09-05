import Image from "next/image";
import Link from "next/link";
import Heading from "../UI/Heading";
import styles from "./AboutSection.module.scss";
export default function AboutSection({ country }) {
  return (
    <section className={`${styles.section} ${styles[country]}`}>
      <div className="wrap flex max-lg:flex-col gap-5 lg:gap-10 2xl:gap-20">
        <div className="flex-1 w-full">
          <Heading addClasses={styles.heading}>ABOUT TIMELESS SUMMER TOUR</Heading>
          {country === "aus" ? (
            <>
              <p className="pt-4 font-semibold xl:text-xl  xl:leading-relaxed">
                Timeless Live is proud to present Timeless Summer Tour Australia – a new summer
                concert series celebrating legendary musicians from around the world.
              </p>
              <br /> <br />
              <p className=" font-semibold xl:text-xl  xl:leading-relaxed">
                Making its debut in 2025, the inaugural concert series features Boy George of
                Culture Club, Bonnie Tyler, Tony Hadley (ex Spandau Ballet) and Starship featuring
                Mickey Thomas touring Australian cities Yarra Valley, Hunter Valley and Sandstone
                Point.
              </p>
              <br /> <br />
              <p className="font-semibold xl:text-xl  xl:leading-relaxed">
                Live entertainment company Timeless Live is dedicated to providing top quality live
                music and entertainment events, creating timeless experiences that convert into
                forever memories!
              </p>
              <br /> <br />
              <p className="pb-4 font-semibold xl:text-xl  xl:leading-relaxed">
                Timeless Summer Tour may be a new event, but the team behind it is an experienced
                one behind major live music events in Australia and New Zealand.
              </p>
            </>
          ) : (
            <>
              {" "}
              <p className="pt-4 font-semibold xl:text-xl  xl:leading-relaxed">
                Timeless Live is proud to present Timeless Summer Tour –  a new summer concert
                series celebrating legendary musicians from around the world. 
              </p>
              <br /> <br />
              <p className="font-semibold xl:text-xl xl:leading-relaxed">
                Making its debut in 2025, the inaugural concert series features Boy George of
                Culture Club, Little River Band, Bonnie Tyler and Starship featuring Mickey Thomas
                and will tour five cities across New Zealand including Christchurch, Napier, New
                Plymouth, Mount Maunganui and Auckland. 
              </p>
              <br /> <br />
              <p className="pb-4 font-semibold xl:text-xl xl:leading-relaxed">
                Live entertainment company Timeless Live is dedicated to providing top quality live
                music and entertainment events, creating timeless experiences that convert into
                forever memories!
              </p>
            </>
          )}

          <Link
            prefetch={false}
            href={`${country}/about `}
            className="bg-black uppercase py-5 px-8 text-xl font-matiz flex w-max text-white ">
            read more
          </Link>
        </div>
        <div className="flex-1 relative h-auto max-lg:hidden">
          <Image
            width={771}
            height={668}
            src="/crowd.jpeg"
            className="object-cover w-full h-full"
            alt="Crowd"
          />
        </div>
      </div>
    </section>
  );
}
