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
}

export interface Category {
  id: string;
  name: string;
}
