"use client";

import { Button } from "@/components/ui/button";
import { Character } from "../model";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Client({ characters }: { characters: Character[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onClickDetail = async (name: string, index: number) => {
    setLoading(true);
    router.push(`/list/${name}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        결과
      </h1>

      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {characters?.map((character, index) => (
            <CarouselItem key={index}>
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                이름 : {character.name}
              </h3>
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                성별 : {character.gender === "man" ? "남자" : "여자"}
              </h3>
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                나이 : {character.age}
              </h3>
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                직업 : {character.occupation}
              </h3>
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                외형적 특징: {character.appearance}
              </h3>
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                배경 : {character.background}
              </h3>
              {loading ? (
                <Button disabled>
                  <Loader2 className="animate-spin" />
                  잠시만 기다려주세요...{" "}
                </Button>
              ) : (
                <Button
                  onClick={() => onClickDetail(character.name, index)}
                  className="mt-2"
                >
                  배경 상세 생성
                </Button>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
