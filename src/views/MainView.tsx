import { useState, useEffect } from 'react';
import { questions } from '../data';
import type { Question } from '../data';
import { QuestionCard } from '../components/QuestionCard';
import { shuffleArray } from '../utils/quiz';

export function MainView() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const loadNewQuestion = () => {
    // Pick random question
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];

    // Shuffle answers
    const shuffled = shuffleArray(question.answers);

    setCurrentQuestion({ ...question, answers: shuffled });
    setSelectedAnswerId(null);
    setShowResult(false);
  };

  useEffect(() => {
    loadNewQuestion();
  }, []);

  const handleSelectAnswer = (answerId: string) => {
    setSelectedAnswerId(answerId);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleNext = () => {
    loadNewQuestion();
  };

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-gray-500">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Aléatoire</h1>
        <p className="text-gray-600">
          Testez vos connaissances avec des questions aléatoires
        </p>
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedAnswerId={selectedAnswerId}
        onSelectAnswerId={handleSelectAnswer}
        showResult={showResult}
        onSubmit={handleSubmit}
        onNext={handleNext}
      />
    </div>
  );
}
