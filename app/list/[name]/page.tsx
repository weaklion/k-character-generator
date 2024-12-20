import { Suspense } from "react";
import { getList } from "../action";
import Client from "./client";
import { Loader } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  const text = await getList(name);
  const background = text ? JSON.parse(text) : "";

  return (
    <Suspense fallback={<Loader />}>
      {background ? <Client background={background.characterBackground} /> : ""}
    </Suspense>
  );
}
