"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [gender, setGender] = useState(false);
  const router = useRouter();

  const handleGenderChange = (value: string) => {
    value === "man" ? setGender(true) : false;
  };

  const onCreateCharacter = () => {
    router.push("/detail");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        한국인 캐릭터 생성기
      </h1>

      <h3 className="scroll-m-20 my-4 text-2xl font-semibold tracking-tight">
        성별
      </h3>
      <Select onValueChange={(value) => handleGenderChange(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="성별을 선택해주세요." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="man">남자</SelectItem>
            <SelectItem value="women">여자</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <h3 className="scroll-m-20 my-4 text-2xl font-semibold tracking-tight">
        개수
      </h3>

      <Input
        type="number"
        className="max-w-48"
        placeholder="개수를 입력해주세요."
      />

      <Button className="my-4" onClick={onCreateCharacter}>
        생성
      </Button>
    </main>
  );
}
