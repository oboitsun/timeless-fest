import Heading from "@/components/UI/Heading";
import VenuesTabs from "@/components/VenuesTabs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { createClient } from "contentful";
import Link from "next/link";
import { venues } from "../venues";

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
export const client = createClient({
  space: process.env.NEXT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_APP_CONTENTFUL_API_TOKEN,
});
export async function generateStaticParams({ params }) {
  const res = await client.getEntries({
    content_type: "venues",
    "fields.country": "aus",
    "fields.slug": params.slug,
  });
  const paths = res.items.map((item) => ({ slug: item.fields.slug, id: item.sys.id }));
  return paths;
}
export default async function TicketPage({ params }) {
  return (
    <section style={{ paddingBottom: 0 }} className="section h-1/2 flex-grow ">
      <div className="wrap flex flex-col gap-5  text-black lg:tex-xl">
        <Heading addClasses="pb-5">Tickets</Heading>

        <VenuesTabs city={params?.slug} venues={venues} country="aus" />
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
