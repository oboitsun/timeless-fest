import Heading from "@/components/UI/Heading";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="section h-1/2 flex-grow ">
      <div className="wrap flex flex-col gap-5  text-black lg:tex-xl">
        <Heading addClasses="pb-5">About us</Heading>

        <Image width={1600} height={641} src={"/crowd-wide.jpg"} alt="Crowd" className="w-full" />
        <p>
          Timeless Live is proud to present Timeless Summer Tour Australia – a new summer concert
          series celebrating legendary musicians from around the world.
        </p>
        <p>
          Making its debut in 2025, the inaugural concert series features Boy George of Culture
          Club, Bonnie Tyler, Tony Hadley (ex Spandau Ballet) and Starship featuring Mickey Thomas
          touring Australian regions Yarra Valley, Hunter Valley and Sandstone Point.
        </p>
        <p>
          Live entertainment company Timeless Live is dedicated to providing top quality live music
          and entertainment events, creating timeless experiences that convert into forever
          memories!
        </p>
        <p>
          Timeless Summer Tour may be a new event, but the team behind it is an experienced one
          behind major live music events in Australia and New Zealand.
        </p>
        <p className=" ">
          Timeless Summer Tour Aotearoa Australia is proudly produced by Timeless Events Australia
          Limited
        </p>
        <a className="underline   hover:text-primary" href="tel:89672074181" target="_blank">
          ABN: 89 672 074 181
        </a>
      </div>
    </section>
  );
}
