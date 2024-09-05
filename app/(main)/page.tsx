import { Suspense } from "react";
import Client from "./client";
import Loader from "@/components/loader";

export default function Main() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Client />
      </Suspense>
    </div>
  );
}
