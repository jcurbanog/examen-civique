import { useState } from 'react';
import type { Question, Answer } from '../data';
import { logger } from '../utils/logging';
import { FeedbackPopover } from './FeedbackPopover';
import { consentManager } from '../utils/consent';

interface QuestionCardProps {
  question: Question;
  selectedAnswerId: string | null;
  onSelectAnswerId: (answerId: string) => void;
  showResult: boolean;
  onSubmit: () => void;
  onNext: () => void;
  questionNumber?: number;
  totalQuestions?: number;
}

const INDEX_TO_LETTER = ['A', 'B', 'C', 'D'];

export function QuestionCard({
  question,
  selectedAnswerId,
  onSelectAnswerId,
  showResult,
  onSubmit,
  onNext,
  questionNumber,
  totalQuestions
}: QuestionCardProps) {
  const [showExplication, setShowExplication] = useState(false);

  const getAnswerClassName = (answer: Answer) => {
    const baseClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200';

    if (!showResult) {
      if (selectedAnswerId === answer.id) {
        return `${baseClass} border-blue-500 bg-blue-50 font-medium`;
      }
      return `${baseClass} border-gray-200 hover:border-blue-300 hover:bg-blue-50`;
    }

    // When showing results
    if (answer.id === question.correctAnswerId) {
      return `${baseClass} border-green-500 bg-green-50 font-medium`;
    }

    if (selectedAnswerId === answer.id && answer.id !== question.correctAnswerId) {
      return `${baseClass} border-red-500 bg-red-50 font-medium`;
    }

    return `${baseClass} border-gray-200 opacity-60`;
  };

  const getAnswerLabel = (answer: Answer) => {
    if (!showResult) return null;

    if (answer.id === question.correctAnswerId) {
      return (
        <span className="ml-2 text-green-600 font-semibold">✓</span>
      );
    }

    if (selectedAnswerId === answer.id && answer.id !== question.correctAnswerId) {
      return (
        <span className="ml-2 text-red-600 font-semibold">✗</span>
      );
    }

    return null;
  };

  const handleSubmit = () => {
    if (!selectedAnswerId) return;

    logger.answerVerified({
      questionId: question.id,
      selectedAnswerId: selectedAnswerId,
      correctAnswerId: question.correctAnswerId,
      isCorrect: selectedAnswerId === question.correctAnswerId,
    });

    setShowExplication(false);
    onSubmit();
  }

  const handleNext = () => {
    setShowExplication(false);
    onNext();
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
      {/* Question Header */}
      <div className="mb-6">
        {questionNumber && totalQuestions && (
          <div className="text-sm text-gray-500 mb-2">
            Question {questionNumber} sur {totalQuestions}
          </div>
        )}
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex-1">
            {question.questionText}
          </h2>
          {consentManager.hasConsented() && <FeedbackPopover questionId={question.id} />}
        </div>
      </div>

      {/* Answer Options */}
      <div className="space-y-3 mb-6">
        {question.answers.map((answer, index) => (
          <button
            key={answer.id}
            onClick={() => !showResult && onSelectAnswerId(answer.id)}
            disabled={showResult}
            className={getAnswerClassName(answer)}
          >
            <span className="flex items-start">
              <span className="font-semibold mr-2 text-gray-600">
                {INDEX_TO_LETTER[index]}.
              </span>
              <span className="flex-1">{answer.text}</span>
              {getAnswerLabel(answer)}
            </span>
          </button>
        ))}
      </div>

      {/* Explication */}
      {showResult && showExplication && (
        <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-gray-700 text-sm leading-relaxed">
          {question.explication}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-3">
        {showResult ? (
          <>
            <button
              onClick={() => setShowExplication(prev => !prev)}
              className="px-5 py-3 rounded-lg font-medium border-2 border-amber-400 text-amber-700 bg-amber-50 hover:bg-amber-100 transition-all"
            >
              {showExplication ? 'Masquer l\'explication' : 'Voir l\'explication'}
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Question suivante
            </button>
          </>
        ) : (
          <div className="ml-auto">
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswerId}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedAnswerId
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Vérifier
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
