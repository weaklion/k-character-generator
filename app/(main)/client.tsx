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
import { Suspense, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import Loader from "@/components/loader";

export default function Home() {
  const [gender, setGender] = useState<"man" | "women">("man");
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const setQueryParams = (params: {
    gender: "man" | "women";
    count: string;
  }) => {
    const urlSearchParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([name, value]) => {
      urlSearchParams.set(name, value);
    });

    return urlSearchParams.toString();
  };

  const handleGenderChange = (value: "man" | "women") => {
    setGender(value);
  };

  const onCreateCharacter = () => {
    const params = {
      gender: gender,
      count: count.toString(),
    };
    const qs = setQueryParams(params);

    console.log(qs, "qs");
    console.log(pathname, "path");
    setLoading(true);
    router.push(`/detail?${qs}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        한국인 캐릭터 생성기
      </h1>

      <h3 className="scroll-m-20 my-4 text-2xl font-semibold tracking-tight">
        성별
      </h3>
      <Select
        onValueChange={(value: "man" | "women") => handleGenderChange(value)}
      >
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
        value={count}
        onChange={(e) => setCount(e.target.valueAsNumber)}
        placeholder="개수를 입력해주세요."
      />

      <Button className="my-4" onClick={onCreateCharacter}>
        생성
      </Button>
      {loading ? (
        <div className="flex flex-col py-4 gap-2 justify-center">
          <Loader />
          잠시만 기다려 주세요..
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
