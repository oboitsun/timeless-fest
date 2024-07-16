import { getFAQList } from "@/actions";
import FAQList from "@/components/FAQ/FAQList";
import Heading from "@/components/UI/Heading";

export default async function FAQ() {
  const list = await getFAQList("aus");
  return (
    <section className="section">
      <div className="wrap flex flex-col gap-5 lg:gap-10">
        <Heading>FAQ</Heading>
        <FAQList list={list} />
      </div>
    </section>
  );
}
