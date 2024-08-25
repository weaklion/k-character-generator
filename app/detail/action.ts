"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const generativeAI = new GoogleGenerativeAI(process.env.API_KEY || "");

export async function getData(names: string[], gender: string) {
  try {
    const model = generativeAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: { responseMimeType: "application/json" },
    });
    const result = await model.generateContent(
      `웹소설에 나오는 가상의 한국인 캐릭터들을 만들려고 해. 이름의 배열은 ${names}야 캐릭터는 나이와 성별, 외형적 특징과 캐릭터 배경, 그리고 직업, 이름까지 총 6개가 나타나있어. 성별이 ${gender}인 15명의 임의의 캐릭터를 만들어서 json schema로 추출해줘.`
    );
    const response = await result.response;
    const text = await response.text();
    if (text) {
      console.log(text, "결과 텍스트 ");
      return text;
    }
  } catch (e) {
    console.error(e, "error");
  }
}
