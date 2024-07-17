import { revalidatePath } from "next/cache";

export async function GET(req) {
  revalidatePath("/nz", "page");
  revalidatePath("/nz/tickets", "page");
  revalidatePath("/nz/faq", "page");
  revalidatePath("/nz/news", "page");
  revalidatePath("/nz/set-times", "page");
  revalidatePath("/aus", "page");
  revalidatePath("/aus/tickets", "page");
  revalidatePath("/aus/faq", "page");
  revalidatePath("/aus/news", "page");
  revalidatePath("/aus/set-times", "page");

  return Response.json("all good");
}
