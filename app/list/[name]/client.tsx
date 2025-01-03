"use client";

import { CharacterBackground } from "@/app/model";

export default function Client({
  background,
}: {
  background: CharacterBackground;
}) {
  const detail = background;

  return (
    <main className="flex flex-col items-center justify-center size-full">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        이름 : {detail.name}
      </h3>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        가족 관계 : {detail.detailedBackground.familyRelations}
      </h3>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        성장 환경 : {detail.detailedBackground.growthEnvironment}
      </h3>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        교육 배경 : {detail.detailedBackground.educationalBackground}
      </h3>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        주요 삶의 경험이나 전환점 : {detail.detailedBackground.lifeExperiences}
      </h3>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        현재 상황에 이르게 된 과정 :
        {detail.detailedBackground.pathToCurrentSituation}
      </h3>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        성격 형성에 영향을 준 사건들 :{" "}
        {detail.detailedBackground.personalityShapingEvents}
      </h3>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        주요 인간관계: {detail.detailedBackground.keyRelationships}
      </h3>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        꿈과 목표: {detail.detailedBackground.dreamsAndGoals}
      </h3>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        강점과 약점: {detail.detailedBackground.strengthsAndWeaknesses}
      </h3>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        특별한 기술이나 재능 :{detail.detailedBackground.specialSkillsOrTalents}
      </h3>
    </main>
  );
}
