import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from '../data';
import type { Question } from '../data';
import { QuestionCard } from '../components/QuestionCard';
import { getAttemptQuestions } from '../utils/storage';
import { shuffleArray } from '../utils/quiz';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export function ReviewView() {
  const { attemptId } = useParams<{ attemptId: string }>();
  const navigate = useNavigate();

  const [reviewQuestions, setReviewQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!attemptId) {
      navigate('/historique');
      return;
    }

    // Load wrong questions from this attempt
    const wrongQuestionIds = getAttemptQuestions(attemptId);

    if (wrongQuestionIds.length === 0) {
      navigate('/historique');
      return;
    }

    // Find the questions and shuffle their answers
    const questionsToReview = wrongQuestionIds
      .map((id) => questions.find((q) => q.id === id))
      .filter((q): q is Question => q !== undefined)
      .map((q) => ({
        ...q,
        answers: shuffleArray(q.answers)
      }));

    setReviewQuestions(questionsToReview);
  }, [attemptId, navigate]);

  const handleSelectAnswer = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmit = () => {
    setShowResult(true);

    // Track if answered correctly
    const currentQuestion = reviewQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswerId) {
      setAnsweredCorrectly((prev) => new Set([...prev, currentQuestion.id]));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < reviewQuestions.length - 1) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // All questions reviewed, navigate back to history
      navigate('/historique');
    }
  };

  if (reviewQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-gray-500">Chargement...</div>
      </div>
    );
  }

  const currentQuestion = reviewQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / reviewQuestions.length) * 100;

  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/historique')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Retour à l'historique</span>
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Révision
              </h1>
              <p className="text-gray-600">
                Question {currentQuestionIndex + 1} sur {reviewQuestions.length}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle size={20} />
                <span className="font-semibold">
                  {answeredCorrectly.size} / {reviewQuestions.length}
                </span>
              </div>
              <div className="text-sm text-gray-500">Correct</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-600 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          showResult={showResult}
          onSubmit={handleSubmit}
          onNext={handleNext}
        />

        {/* Tips Section */}
        {showResult && (
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              {selectedAnswer === currentQuestion.correctAnswerId ? (
                <span className="font-semibold text-green-700">
                  Excellent ! Vous avez bien compris cette question.
                </span>
              ) : (
                <span className="font-semibold text-red-700">
                  Prenez le temps de bien lire la bonne réponse pour mieux la retenir.
                </span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
