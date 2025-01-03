"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const onClickBackButton = () => {
    router.back();
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center bg-background">
      <Button
        size="icon"
        variant="ghost"
        className="ml-4"
        onClick={onClickBackButton}
      >
        <ChevronLeft />
      </Button>
    </header>
  );
}
