export interface Character {
  name: string;
  age: number;
  gender: string;
  appearance: string;
  background: string;
  occupation: string;
}

export interface CharacterBackground {
  name: string;
  detailedBackground: {
    familyRelations: string;
    growthEnvironment: string;
    educationalBackground: string;
    lifeExperiences: string;
    pathToCurrentSituation: string;
    personalityShapingEvents: string;
    keyRelationships: string;
    dreamsAndGoals: string;
    strengthsAndWeaknesses: string;
    specialSkillsOrTalents: string;
  };
}
