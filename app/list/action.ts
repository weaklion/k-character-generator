"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const generativeAI = new GoogleGenerativeAI(process.env.API_KEY || "");

const model = generativeAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: { responseMimeType: "application/json" },
});
{
}
export async function getData(count: number, gender: string) {
  try {
    const result = await model.generateContent(
      `웹소설에 나오는 가상의 한국인 캐릭터들을 만들어주세요. 성별이 ${gender}인 ${count}명의 임의의 캐릭터를 생성하여 characters 배열에 넣고 JSON 형식으로 출력해주세요. 각 캐릭터는 다음 속성을 가져야 합니다:

- name: 한국인 이름 (문자열)
- age: 나이 (문자열, 예: "25세")
- gender: 성별 (문자열, "남성" 또는 "여성")
- appearance: 외형적 특징을 간단히 설명 (문자열)
- background: 캐릭터의 간단한 배경 설명 (문자열)
- occupation: 직업 (문자열)

출력 형식:
{
  "characters": [
    {
      "name": string,
      "age": string,
      "gender": string,
      "appearance": string,
      "background": string,
      "occupation": string
    },
    ...
  ]
}

각 필드에 대해 구체적이고 다양한 설명을 제공해주세요. 캐릭터들은 서로 다른 특징과 배경을 가져야 합니다.`
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

export async function getList(name: string) {
  try {
    const result = await model.generateContent(
      `앞서 생성된 캐릭터 중 ${name}의 상세한 배경을 제공해주세요. 다음 요소들을 포함하여 자세히 설명해주세요:

1. 가족 관계
2. 성장 환경
3. 교육 배경
4. 주요 삶의 경험이나 전환점
5. 현재 상황에 이르게 된 과정
6. 성격 형성에 영향을 준 사건들
7. 주요 인간관계
8. 꿈과 목표
9. 강점과 약점
10. 특별한 기술이나 재능

형식은 다음과 같이 JSON으로 출력해주세요:

{
  "characterBackground": {
    "name": "${name}",
    "detailedBackground": {
      "familyRelations": string,
      "growthEnvironment": string,
      "educationalBackground": string,
      "lifeExperiences": string,
      "pathToCurrentSituation": string,
      "personalityShapingEvents": string,
      "keyRelationships": string,
      "dreamsAndGoals": string,
      "strengthsAndWeaknesses": string,
      "specialSkillsOrTalents": string
    }
  }
}

각 항목에 대해 2-3문장 정도의 구체적인 설명을 제공해주세요. 캐릭터의 기존 정보와 일관성을 유지하면서, 풍부하고 현실감 있는 배경을 만들어주세요.`
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
