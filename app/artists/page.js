import Image from "next/image";
import Heading from "../../components/UI/Heading";

const artists = [
  {
    src: "/artists/bonnie-tyler.png",
    name: "Bonnie Tyler, Summer Hits",
    about: (
      <p>
        Bonnie Tyler, born Gaynor Hopkins, was brought up in Skewen, a small village near Swansea.
        She grew up to become one of Wales&apos; best known performers, achieving chart success all
        over the world. She is recognised for her distinctive husky voice, and a long list of hit
        singles including Total Eclipse of the Heart, It&apos;s a Heartache, Holding Out for a Hero,
        Lost in France, More Than a Lover, Bitterblue and If I Sing You a Love Song. In her 50-year
        career, Bonnie has performed for audiences in countries across the world, and she has
        enjoyed critical acclaim for her recent albums Rocks and Honey and Between The Earth and the
        Stars...
      </p>
    ),
  },
  {
    src: "/artists/starship.png",
    name: "Starship, Featuring Mickey Thomas",
    about: (
      <>
        <p>
          Mickey Thomas is the owner of the soaring voice that propelled Starship through the decade
          of the 80s.
        </p>
        <br />
        <br />
        <p>
          With his soulful and compelling vocals, Mickey has established himself as one of rock
          music&apos;s most recognisable stars.
        </p>
        <br />
        <br />
        <p>
          Mickey made his mark in 1976 as lead vocalist on the mega-hit Fooled Around And Fell In
          Love with The Elvin Bishop Band. In 1979, Mickey joined Jefferson Starship as the lead
          vocalist, after the departure of Grace Slick ...
        </p>
      </>
    ),
  },
  {
    src: "/artists/boy-george.png",
    name: "Boy George  of  Culture Club performing all his greatest hits",
    about: (
      <>
        <p>
          Boy George emerged as a vibrant icon in the 1980s music scene, renowned for his
          distinctive voice, flamboyant style, and fearless embrace of individuality. His career as
          a musician and singer-songwriter has left an indelible mark on the pop and new wave
          genres.
        </p>
        <br /> <br />
        <p>
          Boy George rose to prominence as the lead vocalist of the band Culture Club, which he
          co-founded in 1981. The band&apos;s debut album, Kissing to Be Clever, catapulted them to
          international fame with hit singles like Do You Really Want to Hurt Me and Time (Clock of
          the Heart). The album&apos;s fusion of pop, reggae, and soul ...
        </p>
      </>
    ),
  },
  {
    src: "/artists/little-river-band.png",
    name: "Little River Band  Celebrating their  50 Year Anniversary",
    about: (
      <>
        <p>
          Through the &apos;70s and &apos;80s, Little River Band (LRB) enjoyed huge chart success
          with multi-platinum albums and chart topping hits like:
        </p>
        <br />
        <br />
        <p>
          Reminiscing,  Cool Change, Lonesome Loser, The Night Owls,  Take It Easy On Me,  Help Is
          on Its Way,  Happy Anniversary, We Two, Man On Your Mind, The Other Guy, and It&apos;s A
          Long Way There.
        </p>
        <p>
          Worldwide album and CD sales now top 30 million and in 1982 LRB set a record for having
          had top 10 hits for 6 consecutive years – In fact, they were the very first band to
          achieve that remarkable plateau! According to B...
        </p>
      </>
    ),
  },
];
export default function ArtistsPage() {
  return (
    <section className="section py-10 lg:py-14 xl:py-20">
      <div className="wrap flex flex-col gap-5 lg:gap-10">
        <Heading addClasses="pb-10">Artists</Heading>
        {artists.map((artist, i) => (
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
              <h3 className="font-matiz uppercase lg:text-2xl xl:text-3xl pb-4 lg:pb-7">
                {artist.name}
              </h3>
              <div className="text-lg lg:text-xl xl:leading-relaxed">{artist.about}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
