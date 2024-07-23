import { createClient } from "contentful";
export const client = createClient({
  space: process.env.NEXT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_APP_CONTENTFUL_API_TOKEN,
});
export async function getVenues(country = "nz") {
  const res = await client.getEntries({ content_type: "venues", "fields.country": country });

  if (!res) {
    return {};
  }
  return res.items ?? [];
}
export async function getVenue(country = "nz", city) {
  const res = await client.getEntries({
    content_type: "venues",
    "fields.country": country,
    "fields.slug": city,
  });

  if (!res) {
    return {};
  }
  return res.items?.[0] ?? {};
}
export async function getArticles(country = "nz") {
  const res = await client.getEntries({ content_type: "newsArticle", "fields.country": country });

  if (!res) {
    return {};
  }
  return res.items ?? [];
}
export async function getFAQList(country = "nz") {
  const res = await client.getEntries({
    content_type: "faq",
    "fields.country": country,
  });

  if (!res) {
    return {};
  }
  return res.items ?? [];
}
