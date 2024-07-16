"use client";
import Heading from "@/components/UI/Heading";
import Image from "next/image";

export default function Sitemap() {
  return (
    <section className="section h-1/2 flex-grow ">
      <div className="wrap flex flex-col gap-5 lg:gap-10">
        <Heading addClasses="pb-10">Sitemap</Heading>
        <Image
          width={1064}
          height={783}
          className={`w-full lg:w-auto lg:h-[50vh]  object-contain flex-grow mx-auto relative z-[1] rounded-10`}
          src={"/sitemap.png"}
          alt="sitemap"
        />
      </div>
    </section>
  );
}
