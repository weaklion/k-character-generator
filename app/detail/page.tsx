import { Button } from "@/components/ui/button";
import namer from "korean-name-generator";

export default function detail() {
  const generate = () => {};

  const male = namer.generate(true);

  console.log(male, "male");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        결과
      </h1>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        이름 :
      </h3>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        성별 :
      </h3>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        나이 : 이건 뺄 수도 있다.
      </h3>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        외형적 특징:
      </h3>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        직업 :
      </h3>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        특이사항 :
      </h3>

      {/* 일단 현재는 gemini ai를 통해 결과 값을 도출할 예정. 추후 하드 코딩을 통해 결과를 도출해보자. */}
      <Button>gpt 사용 특이사항 생성</Button>
    </main>
  );
}
