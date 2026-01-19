import { useState, useEffect } from 'react';
import { questions } from '../data';
import type { Question } from '../data';
import { QuestionCard } from '../components/QuestionCard';
import { shuffleArray } from '../utils/quiz';
import {
  getQuestionQueue,
  setQuestionQueue,
  createShuffledQuestionQueue
} from '../utils/storage';

export function MainView() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [questionQueue, setQuestionQueueState] = useState<number[]>([]);

  const handleQuestionQueueUpdate = (queue: number[]) => {
    // Update localStorage
    setQuestionQueue(queue);
    // Update state to trigger loading the next question
    setQuestionQueueState(queue);
  };

  // Initialize question queue on mount
  useEffect(() => {
    const storedQueue = getQuestionQueue();
    console.log('storedQueue', storedQueue?.length);
    const initialQueue = storedQueue && storedQueue.length > 0
      ? storedQueue
      : createShuffledQuestionQueue(questions.length);

      handleQuestionQueueUpdate(initialQueue);
  }, []);

  // Load question when queue changes
  useEffect(() => {
    if (questionQueue.length > 0) {
      loadNextQuestion();
    }
  }, [questionQueue]);

  const loadNextQuestion = () => {
    if (questionQueue.length === 0) return;

    // Get the last question ID from the queue (without removing it yet)
    const questionId = questionQueue[questionQueue.length - 1];

    // Find question by ID
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    // Shuffle answers
    const shuffled = shuffleArray(question.answers);

    setCurrentQuestion({ ...question, answers: shuffled });
    setSelectedAnswerId(null);
    setShowResult(false);
  };

  const handleSelectAnswer = (answerId: string) => {
    setSelectedAnswerId(answerId);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleNext = () => {
    // Pop the last element from the queue
    const newQueue = [...questionQueue];
    newQueue.pop();

    // If queue is empty, create a new shuffled queue
    const updatedQueue = newQueue.length === 0
      ? createShuffledQuestionQueue(questions.length)
      : newQueue;

    handleQuestionQueueUpdate(updatedQueue);
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
