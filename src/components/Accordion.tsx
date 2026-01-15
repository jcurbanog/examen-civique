import { ChevronDown } from 'lucide-react';
import type { Question } from '../data';

interface AccordionProps {
  question: Question;
  isOpen: boolean;
  onToggle: () => void;
  showAnswer: boolean;
  userAnswer?: string | null;
  highlightWrong?: boolean;
}

export function Accordion({
  question,
  isOpen,
  onToggle,
  showAnswer,
  userAnswer,
  highlightWrong = false
}: AccordionProps) {
  const isWrong = highlightWrong && userAnswer && userAnswer !== question.correctAnswerId;

  return (
    <div
      className={`border rounded-lg overflow-hidden transition-all ${
        isWrong ? 'border-red-300 border-2' : 'border-gray-200'
      }`}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className={`w-full flex items-start justify-between p-4 text-left transition-colors ${
          isWrong
            ? 'bg-red-50 hover:bg-red-100'
            : 'bg-white hover:bg-gray-50'
        }`}
      >
        <span className="flex-1 font-medium text-gray-800 pr-4">
          {question.questionText}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="space-y-2">
            {question.answers.map((answer) => {
              const isCorrect = answer.id === question.correctAnswerId;
              const isUserAnswer = userAnswer === answer.id;
              const isWrongAnswer = isUserAnswer && !isCorrect && highlightWrong;

              return (
                <div
                  key={answer.id}
                  className={`flex items-start p-3 rounded-lg ${
                    isCorrect && showAnswer
                      ? 'bg-green-50 border border-green-200'
                      : isWrongAnswer
                      ? 'bg-red-50 border border-red-200'
                      : 'bg-white border border-gray-100'
                  }`}
                >
                  <span className="font-semibold mr-2 text-gray-600">
                    {answer.id.toUpperCase()}.
                  </span>
                  <span className="flex-1">{answer.text}</span>
                  {isCorrect && showAnswer && (
                    <span className="ml-2 text-green-600 font-semibold">✓</span>
                  )}
                  {isWrongAnswer && (
                    <span className="ml-2 text-red-600 font-semibold">✗</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
