"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const generativeAI = new GoogleGenerativeAI(process.env.API_KEY || "");

const model = generativeAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: { responseMimeType: "application/json" },
});

export async function getData(names: string[], gender: string) {
  try {
    const result = await model.generateContent(
      `웹소설에 나오는 가상의 한국인 캐릭터 15명을 만들어주세요. 각 캐릭터는 다음 형식의 JSON 객체로 표현되어야 합니다:

{
  "name": "string",
  "gender": "string",
  "age": "number",
  "occupation": "string",
  "appearance": "string",
  "background": "string"
}

조건:
1. 이름은 ${names} 배열에서 선택해주세요.
2. 성별은 모두 ${gender}로 통일해주세요. "man" 또는 "woman"으로 표기해주세요.
3. 성별이 ${gender}인 사람에게 어울리는 이름으로 만들어주세요.\
4. 이름은 현대적이면서도 한국적인 느낌이 나도록 해주세요.
5. 나이는 20에서 60 사이의 숫자로 설정해주세요.
6. 직업은 다양하고 구체적으로 설정해주세요.
7. 외형적 특징은 한 문장으로 간결하게 설명해주세요.
8. 캐릭터 배경은 2-3문장으로 간단히 설명해주세요.

15개의 캐릭터 객체를 포함하는 'characters' 배열을 JSON 형식으로 출력해주세요.`
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

export async function getDetail(name: string) {
  try {
    const result = await model.generateContent(
      `${name}의 background를 더 자세하게 만들어서 background만 보여줘`
    );
    const response = await result.response;
    const text = await response.text();
    if (text) {
      console.log(text, "결과");
      return text;
    }
  } catch (e) {
    console.error(e, "error");
  }
}
