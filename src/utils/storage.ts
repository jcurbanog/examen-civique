export interface QuizAttempt {
  timestamp: number;
  wrongQuestionIds: number[];
  score: number;
}

export interface QuizAttempts {
  [timestamp: string]: number[];
}

const STORAGE_KEY = 'quiz-attempts';

export function getAttempts(): QuizAttempt[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const attempts: QuizAttempts = JSON.parse(stored);
    return Object.entries(attempts).map(([timestamp, wrongQuestionIds]) => ({
      timestamp: parseInt(timestamp),
      wrongQuestionIds,
      score: 40 - wrongQuestionIds.length
    }));
  } catch (error) {
    console.error('Error loading attempts:', error);
    return [];
  }
}

export function saveAttempt(wrongQuestionIds: number[]): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const attempts: QuizAttempts = stored ? JSON.parse(stored) : {};

    const timestamp = Date.now();
    attempts[timestamp.toString()] = wrongQuestionIds;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
    return timestamp;
  } catch (error) {
    console.error('Error saving attempt:', error);
    return Date.now();
  }
}

export function getAttemptQuestions(attemptId: string): number[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const attempts: QuizAttempts = JSON.parse(stored);
    return attempts[attemptId] || [];
  } catch (error) {
    console.error('Error loading attempt questions:', error);
    return [];
  }
}
