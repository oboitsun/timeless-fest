import Heading from "@/components/UI/Heading";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { getVenues } from "@/actions";
import VenuesTabs from "@/components/VenuesTabs";

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
export default async function TicketsPage() {
  const venues = await getVenues("nz");

  return (
    <section className="section h-1/2 flex-grow ">
      <div className="wrap flex flex-col gap-5  text-black lg:tex-xl">
        <Heading addClasses="pb-5">Tickets</Heading>

        <VenuesTabs venues={venues} item="tickets" />
      </div>
    </section>
  );
}
