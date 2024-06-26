import { createClient } from "contentful";
import Heading from "../UI/Heading";
import VenuesItem from "../VenuesItem";
import styles from "./VenuesSection.module.scss";

const client = createClient({
  space: process.env.NEXT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_APP_CONTENTFUL_API_TOKEN,
});
export async function getVenues() {
  const res = await client.getEntries({ content_type: "venues" });

  if (!res) {
    return {};
  }
  return res.items ?? [];
}
export default async function VenuesSection() {
  const venuesRes = await getVenues();
  return (
    <section className={`${styles.section}`}>
      <div className="wrap relative z-10 ">
        <Heading addClasses="text-center">Timeless Summer Tour</Heading>
        <div className={styles.venuesList}>
          {venuesRes
            .sort((a, b) => a?.fields?.order - b?.fields?.order)
            .map((venue, i) => (
              <VenuesItem key={venue.fields?.slug} venue={venue} leftSide={i % 2 === 0} />
            ))}
        </div>
      </div>
    </section>
  );
}
