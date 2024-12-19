import { Button } from "@/components/ui/button";
import { getData } from "./action";
import Client from "./client";
import { Suspense } from "react";
import Loader from "@/components/loader";

export default async function detail({
  searchParams,
}: {
  searchParams: { count: number; gender: "man" | "women" };
}) {
  const count = searchParams?.count;
  const gender = searchParams?.gender;
  const text = await getData(count, gender);
  const result = text ? JSON.parse(text) : [];

  return (
    <Suspense fallback={<Loader />}>
      <Client characters={result.characters} />
    </Suspense>
  );
}
