import { getVenues } from "@/actions";
import Heading from "@/components/UI/Heading";
import VenuesTabs from "@/components/VenuesTabs";

export default async function SetTimes() {
  const venues = await getVenues("aus");

  return (
    <section className="section h-1/2 flex-grow ">
      <div className="wrap flex flex-col gap-5  text-black lg:tex-xl">
        <Heading addClasses="pb-5">Set Times</Heading>

        <VenuesTabs country="aus" city={"yarra-valley"} venues={venues} item="set-times" />
      </div>
    </section>
  );
}
