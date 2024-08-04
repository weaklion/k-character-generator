import { Button } from "@/components/ui/button";

export default function detail() {
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
        직업 :
      </h3>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        특이사항 :
      </h3>

      <Button>gpt 사용 특이사항 생성</Button>
    </main>
  );
}
