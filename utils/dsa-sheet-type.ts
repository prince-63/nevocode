export interface DSASheetProblemType {
  id: string;
  name: string;
  description: string;
  link: string;
  guideLink: string;
  difficultyLevel: string;
}

export interface DSASheetType {
  topicId: string;
  topicName: string;
  description: string;
  problems: DSASheetProblemType[];
}
