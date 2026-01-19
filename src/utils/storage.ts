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

// Question queue management for main view
const QUESTION_QUEUE_KEY = 'question-queue';

function shuffleArray(array: number[]): number[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getQuestionQueue(): number[] | null {
  try {
    const stored = localStorage.getItem(QUESTION_QUEUE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error loading question queue:', error);
    return null;
  }
}

export function setQuestionQueue(queue: number[]): void {
  try {
    localStorage.setItem(QUESTION_QUEUE_KEY, JSON.stringify(queue));
  } catch (error) {
    console.error('Error saving question queue:', error);
  }
}

export function createShuffledQuestionQueue(totalQuestions: number): number[] {
  // Create array of question IDs [1, 2, 3, ..., totalQuestions]
  const questionIds = Array.from({ length: totalQuestions }, (_, i) => i + 1);
  return shuffleArray(questionIds);
}
