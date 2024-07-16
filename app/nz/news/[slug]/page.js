import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { createClient } from "contentful";
import { format } from "date-fns";
import Image from "next/image";

const client = createClient({
  space: process.env.NEXT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_APP_CONTENTFUL_API_TOKEN,
});
export async function generateStaticParams({ params }) {
  const res = await client.getEntries({
    content_type: "newsArticle",
    "fields.slug": params.slug,
  });
  const paths = res.items.map((item) => ({ slug: item.fields.slug, id: item.sys.id }));
  return paths;
}
export async function getArticle(slug) {
  const res = await client.getEntries({ content_type: "newsArticle", "fields.slug": slug });

  if (!res) {
    return {};
  }
  return res.items?.[0] ?? {};
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
export default async function Tab({ params }) {
  const article = await getArticle(params.slug);
  const { title, slug, article: art, image } = article?.fields || {};
  const { createdAt } = article?.sys || {};
  return (
    <section className="section ">
      <div className="wrap">
        <h4 className="mb-5 lg:mb-10 font-back uppercase text-lg lg:text-3xl xl:text-6xl text-black">
          {title}
        </h4>
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
        </div>
        <div className={"text-black mt-5 lg:text-xl flex flex-col gap-2 lg:gap-4"}>
          {documentToReactComponents(art)}
        </div>
      </div>
    </section>
  );
}
