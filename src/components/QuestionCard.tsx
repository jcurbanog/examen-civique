import type { Question, Answer } from '../data';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (answerId: string) => void;
  showResult: boolean;
  onSubmit: () => void;
  onNext: () => void;
  questionNumber?: number;
  totalQuestions?: number;
}

const INDEX_TO_LETTER = ['A', 'B', 'C', 'D'];

export function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult,
  onSubmit,
  onNext,
  questionNumber,
  totalQuestions
}: QuestionCardProps) {
  const getAnswerClassName = (answer: Answer) => {
    const baseClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200';

    if (!showResult) {
      if (selectedAnswer === answer.id) {
        return `${baseClass} border-blue-500 bg-blue-50 font-medium`;
      }
      return `${baseClass} border-gray-200 hover:border-blue-300 hover:bg-blue-50`;
    }

    // When showing results
    if (answer.id === question.correctAnswerId) {
      return `${baseClass} border-green-500 bg-green-50 font-medium`;
    }

    if (selectedAnswer === answer.id && answer.id !== question.correctAnswerId) {
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

    if (selectedAnswer === answer.id && answer.id !== question.correctAnswerId) {
      return (
        <span className="ml-2 text-red-600 font-semibold">✗</span>
      );
    }

    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
      {/* Question Header */}
      <div className="mb-6">
        {questionNumber && totalQuestions && (
          <div className="text-sm text-gray-500 mb-2">
            Question {questionNumber} sur {totalQuestions}
          </div>
        )}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          {question.questionText}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="space-y-3 mb-6">
        {question.answers.map((answer, index) => (
          <button
            key={answer.id}
            onClick={() => !showResult && onSelectAnswer(answer.id)}
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

      {/* Action Button */}
      <div className="flex justify-end">
        {!showResult ? (
          <button
            onClick={onSubmit}
            disabled={!selectedAnswer}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              selectedAnswer
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Vérifier
          </button>
        ) : (
          <button
            onClick={onNext}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Question suivante
          </button>
        )}
      </div>
    </div>
  );
}
