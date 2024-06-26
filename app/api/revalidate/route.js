import { revalidatePath } from "next/cache";

export async function GET(req) {
  revalidatePath("/tickets", "page");
  revalidatePath("/faq", "page");
  revalidatePath("/news", "page");
  revalidatePath("/set-times", "page");

  return Response.json("all good");
}
