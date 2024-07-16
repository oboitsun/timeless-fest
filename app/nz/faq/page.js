import Heading from "@/components/UI/Heading";
import { createClient } from "contentful";
import FAQList from "./FAQList";

const client = createClient({
  space: process.env.NEXT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_APP_CONTENTFUL_API_TOKEN,
});

export async function getFAQList() {
  const res = await client.getEntries({
    content_type: "faq",
  });

  if (!res) {
    return {};
  }
  return res.items ?? [];
}
export default async function FAQ() {
  const list = await getFAQList();
  return (
    <section className="section">
      <div className="wrap flex flex-col gap-5 lg:gap-10">
        <Heading>FAQ</Heading>
        <FAQList list={list} />
      </div>
    </section>
  );
}
