export interface Answer {
  id: string; // 'a', 'b', 'c', 'd'
  text: string;
}

export interface Question {
  id: number;
  questionText: string;
  answers: Answer[];
  correctAnswerId: string;
  category: string; // 'I', 'II', 'III', 'IV', 'V'
  explication: string;
}

export interface Category {
  id: string;
  name: string;
}

export const FeedbackType = {
  WRONG_CORRECT_ANSWER: 'wrong_correct_answer',
  TOO_EVIDENT: 'too_evident',
  APPEARED_IN_EXAM: 'appeared_in_exam',
  OTHER: 'other'
} as const;

export type FeedbackType = typeof FeedbackType[keyof typeof FeedbackType];
