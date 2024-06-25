import Image from "next/image";
import Heading from "../../components/UI/Heading";

export default function AboutPage() {
  return (
    <section className="section h-1/2 flex-grow ">
      <div className="wrap flex flex-col gap-5  text-black lg:tex-xl">
        <Heading addClasses="pb-5">About us</Heading>

        <Image width={1600} height={641} src={"/crowd-wide.jpg"} alt="Crowd" className="w-full" />
        <p>
          Timeless Live is proud to present Timeless Summer Tour – a new summer concert series
          celebrating legendary musicians from around the world.
        </p>

        <p>
          Making its debut in 2025, the inaugural concert series features{" "}
          <b>
            Boy George of Culture Club, Little River Band, Bonnie Tyler and Starship featuring
            Mickey Thomas
          </b>{" "}
          and will tour five cities across New Zealand including Christchurch, Napier, New Plymouth,
          Mount Maunganui and Auckland. 
        </p>

        <p>
          Live entertainment company Timeless Live is dedicated to providing top quality live music
          and entertainment events, creating timeless experiences that convert into forever
          memories!
        </p>
        <p>
          Timeless Summer Tour may be a new event, the team behind it is an experienced team that
          has been involved in some of the biggest music events in New Zealand and overseas.{" "}
        </p>
      </div>
    </section>
  );
}
