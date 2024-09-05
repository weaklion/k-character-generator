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
import { getDetail } from "./action";

export default function Client({ characters }: { characters: Character[] }) {
  const onclickDetail = async (name: string, index: number) => {
    const text = await getDetail(name);
    const background = text ? JSON.parse(text).background : "";
    console.log(background, "background");
    characters[index].background = background;
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
                {/* <Button
                  onClick={() => onclickDetail(character.name, index)}
                  className="mt-2"
                >
                  배경 상세 생성
                </Button> */}
              </h3>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* 일단 현재는 gemini ai를 통해 결과 값을 도출할 예정. 추후 하드 코딩을 통해 결과를 도출해보자. */}
    </main>
  );
}
