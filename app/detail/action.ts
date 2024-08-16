"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const generativeAI = new GoogleGenerativeAI(process.env.API_KEY || "");

export async function getData() {
  // try {
  //   const model = generativeAI.getGenerativeModel({ model: "gemini-pro" });
  //   const result = await model.generateContent(
  //     "웹소설에 나오는 가상의 한국인 캐릭터를 만들려고 해. 캐릭터는 나이와 성별, 외형적 특징과 캐릭터 배경, 그리고 직업, 이름까지 총 6개가 나타나있어. 성별이 남성인 15명의 임의의 캐릭터를 만들어줘. 결과물은 한글로 출력해줘."
  //   );
  //   const response = await result.response;
  //   const text = await response.text();
  //   if (text) {
  //     console.log(text, "결과 텍스트 ");
  //     return text;
  //   }
  // } catch (e) {
  //   console.error(e, "error");
  // }
}
