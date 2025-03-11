export interface DSASheetProblemType {
  id: string;
  name: string;
  description: string;
  link: string;
  guideLink: string;
  videoLink: string;
  deficultyLevel: string;
  tags?: string[];
  cotegoriy: number[];
  company?: string[];
}

export interface DSASheetType {
  topicId: string;
  topicName: string;
  topicDescription: string;
  problems: DSASheetProblemType[];
}
