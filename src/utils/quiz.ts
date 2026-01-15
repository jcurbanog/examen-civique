import type { Question } from '../data';

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function selectRandomQuestions(questions: Question[], count: number): Question[] {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, count);
}

export function selectQuestionsByCategory(
  questions: Question[],
  perCategory: number
): Question[] {
  const categories = ['I', 'II', 'III', 'IV', 'V'];
  const selected: Question[] = [];

  categories.forEach(categoryId => {
    const categoryQuestions = questions.filter(q => q.category === categoryId);
    const shuffled = shuffleArray(categoryQuestions);
    selected.push(...shuffled.slice(0, perCategory));
  });

  // If we need more questions to reach 40, add random ones
  const remaining = 40 - selected.length;
  if (remaining > 0) {
    const usedIds = new Set(selected.map(q => q.id));
    const availableQuestions = questions.filter(q => !usedIds.has(q.id));
    const additionalQuestions = selectRandomQuestions(availableQuestions, remaining);
    selected.push(...additionalQuestions);
  }

  return shuffleArray(selected);
}
