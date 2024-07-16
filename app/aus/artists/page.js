"use client";
import Heading from "@/components/UI/Heading";
import { SpotifyIcon, WebSiteIcon } from "@/components/UI/icons";
import Image from "next/image";
import { useState } from "react";
import ArtistModal from "./ArtistModal";
import { artists_aus } from "./list";

export default function ArtistsPage() {
  const [pickedArtist, setPickedArtist] = useState();
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="section py-10 lg:py-14 xl:py-20">
      <div className="wrap flex flex-col gap-5 lg:gap-10">
        <Heading addClasses="pb-10">Artists</Heading>
        {artists_aus.map((artist, i) => (
          <div
            key={i}
            className="w-full flex max-lg:flex-col gap-5 xl:gap-10 2xl:gap-16 bg-white p-5 lg:p-7 xl:p-10 items-center ">
            <div className="w-fit flex-shrink-0 lg:w-1/4 max-w-sm">
              <Image
                className="w-full"
                width={356}
                height={356}
                src={artist.src}
                alt={artist.name}
              />
            </div>
            <div className="flex flex-col max-lg:items-center text-black max-lg:text-center">
              <div className="w-full flex items-center justify-between gap-2 lg:gap-4 items center pb-4 lg:pb-7 max-md:flex-wrap">
                <h3 className="max-md:hidden font-matiz uppercase  text-2xl xl:text-3xl tracking-tight">
                  {artist.name}
                </h3>
                <div className="flex-shrink-0 w-max flex gap-4 items-center md:ml-auto">
                  <a target="_blank" href={artist.spotify}>
                    <SpotifyIcon className="text-green-500 w-10 h-10" />
                  </a>
                  <a target="_blank" href={artist.website}>
                    <WebSiteIcon className=" w-10 h-10" />
                  </a>
                </div>
                {artist?.moreInfo && (
                  <button
                    onClick={() => {
                      setPickedArtist(artist);
                      setShowModal(true);
                    }}
                    className="bg-primary flex-shrink-0 hover:bg-black uppercase py-4 px-6 text-xl  font-matiz flex w-max text-black hover:text-primary transition-all ">
                    read more
                  </button>
                )}
              </div>
              <div className="text-lg lg:text-xl xl:leading-relaxed">{artist.about}</div>
            </div>
          </div>
        ))}
      </div>
      <ArtistModal
        show={showModal}
        artist={pickedArtist}
        closeClick={() => {
          setShowModal(false);
          setTimeout(() => {
            setPickedArtist();
          }, 300);
        }}
      />
    </section>
  );
}
