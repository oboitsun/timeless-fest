import { createClient } from "contentful";
import Heading from "../UI/Heading";
import VenuesItem from "../VenuesItem";
import styles from "./VenuesSection.module.scss";

const client = createClient({
  space: process.env.NEXT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_APP_CONTENTFUL_API_TOKEN,
});
export async function getVenues(country) {
  const res = await client.getEntries({ content_type: "venues", "fields.country": country });

  if (!res) {
    return {};
  }
  return res.items ?? [];
}
export default async function VenuesSection({ country = "nz" }) {
  const venuesRes = await getVenues(country);
  return (
    <section className={`${styles.section} ${styles[country]}`}>
      <div className="wrap relative z-10 ">
        <Heading addClasses={`text-center ${styles.heading}`}>Timeless Summer Tour</Heading>
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
