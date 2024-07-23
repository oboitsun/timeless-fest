import Heading from "@/components/UI/Heading";
import VenuesTabs from "@/components/VenuesTabs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";

import { getVenues } from "@/actions";

const options = {
  renderNode: {
    [BLOCKS.LIST_ITEM]: (node, children) => {
      const transformedChildren = documentToReactComponents(node, {
        renderMark: options.renderMark,
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      });
      return <li>{transformedChildren}</li>;
    },
  },
};
export default async function TicketPage({ params }) {
  const venues = await getVenues("nz");
  return (
    <section style={{ paddingBottom: 0 }} className="section h-1/2 flex-grow ">
      <div className="wrap flex flex-col gap-5  text-black lg:tex-xl">
        <Heading addClasses="pb-5">Tickets</Heading>

        <VenuesTabs city={params?.slug} item="set-times" venues={venues} country="nz" />
      </div>
      <div className="bg-orange mt-10 xl:mt-20">
        <div className="wrap flex max-md:flex-col py-5 lg:py-10 xl:py-20 items-center justify-between gap-4">
          <Heading>Venue Entry Conditions and FAQ</Heading>

          <Link
            className="bg-black uppercase py-5 px-8 text-xl font-matiz flex w-max text-white "
            href={`/aus/faq`}>
            read more
          </Link>
        </div>
      </div>
    </section>
  );
}
