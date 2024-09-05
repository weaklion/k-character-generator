import { Button } from "@/components/ui/button";
import namer from "korean-name-generator";
import { getData } from "./action";
import Client from "./client";

export default async function detail({
  searchParams,
}: {
  searchParams: { count: number; gender: "man" | "women" };
}) {
  const count = searchParams?.count;
  const gender = searchParams?.gender;
  const names: string[] = [];

  if (searchParams) {
    for (let i = 0; i < count; i++) {
      gender === "man"
        ? names.push(namer.generate(true))
        : names.push(namer.generate(false));
    }
  }

  const text = await getData(names, gender);
  const result = text ? JSON.parse(text) : [];
  console.log(result, "names");

  return <Client characters={result.characters} />;
}
