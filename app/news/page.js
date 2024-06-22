import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { createClient } from "contentful";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
const client = createClient({
  space: process.env.NEXT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_APP_CONTENTFUL_API_TOKEN,
});
export async function getArticles() {
  const res = await client.getEntries({ content_type: "newsArticle" });

  if (!res) {
    return {};
  }
  return res.items ?? [];
}
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
export default async function page() {
  const articles = await getArticles();

  return (
    <section className="section ">
      <div className="wrap">
        {articles.map((article) => {
          const { title, slug, excerpt, image } = article?.fields || {};
          const { createdAt } = article?.sys || {};

          return (
            <div key={slug}>
              <div className="w-full h-[clamp(240px,30vw,640px)] relative mb-5 lg:mb-10">
                <Image
                  fill
                  src={image.fields.file.url?.replace(
                    "//images.ctfassets.net/htwlp7opy4lz",
                    "https://images.ctfassets.net/htwlp7opy4lz"
                  )}
                  alt={image.title}
                  className="object-cover object-center"
                />
              </div>
              <div className="grid lg:grid-cols-[1fr,max-content] gap-2 lg:gap-4 text-black">
                <p className="opacity-50">{format(new Date(createdAt), "dd MMM yyyy")}</p>
                <h4 className="lg:order-1 font-matiz text-lg lg:text-3xl">{title}</h4>
                <Link
                  href={`/news/${slug}`}
                  className="bg-primary py-5 px-8  leading-none font-matiz uppercase text-black lg:row-span-2 lg:col-start-2 flex justify-center items-center ">
                  <span className="relative translate-y-[16%]">read more</span>
                </Link>
              </div>
              <div className={"text-black mt-5 lg:text-xl"}>
                {documentToReactComponents(excerpt, options)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
