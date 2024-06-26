"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const reval = async () => {
      const revalidate = await fetch("/api/revalidate");
      console.log("revalidate", revalidate);
    };
    reval();
    redirect("/");
  }, []);
  return <button>revalidate content</button>;
}
