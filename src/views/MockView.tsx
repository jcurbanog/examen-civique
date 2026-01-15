import { useState, useEffect } from 'react';
import { questions } from '../data';
import type { Question } from '../data';
import { QuestionCard } from '../components/QuestionCard';
import { Accordion } from '../components/Accordion';
import { selectQuestionsByCategory, shuffleArray } from '../utils/quiz';
import { saveAttempt } from '../utils/storage';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

type ExamState = 'instructions' | 'exam' | 'results';

interface UserAnswers {
  [questionId: number]: string;
}

export function MockView() {
  const [examState, setExamState] = useState<ExamState>('instructions');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes in seconds
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [openAccordions, setOpenAccordions] = useState<Set<number>>(new Set());

  // Timer effect
  useEffect(() => {
    if (examState !== 'exam') return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examState]);

  const startExam = () => {
    // Select 40 questions with at least 5 from each category
    const selected = selectQuestionsByCategory(questions, 5);

    // Shuffle answers for each question
    const questionsWithShuffledAnswers = selected.map((q) => ({
      ...q,
      answers: shuffleArray(q.answers)
    }));

    setExamQuestions(questionsWithShuffledAnswers);
    setExamState('exam');
    setTimeRemaining(45 * 60);
  };

  const handleSelectAnswer = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleAnswerQuestion = () => {
    if (!selectedAnswer) return;

    const currentQuestion = examQuestions[currentQuestionIndex];
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: selectedAnswer
    });

    // Move to next question or finish
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    setExamState('results');

    // Calculate wrong answers
    const wrongQuestionIds = examQuestions
      .filter((q) => userAnswers[q.id] !== q.correctAnswerId)
      .map((q) => q.id);

    // Auto-expand wrong answers
    setOpenAccordions(new Set(wrongQuestionIds));

    // Save to localStorage
    saveAttempt(wrongQuestionIds);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleAccordion = (questionId: number) => {
    setOpenAccordions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  // Instructions Screen
  if (examState === 'instructions') {
    return (
      <div className="py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Examen Blanc
            </h1>

            <div className="space-y-4 text-gray-700 mb-8">
              <p className="text-lg">
                Bienvenue à l'examen blanc de naturalisation française.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h2 className="font-semibold mb-2">Conditions de l'examen :</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>40 questions au total</li>
                  <li>Au moins 5 questions de chaque catégorie</li>
                  <li>Durée : 45 minutes</li>
                  <li>Score minimum pour réussir : 32/40 (80%)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h2 className="font-semibold mb-2">Instructions :</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lisez chaque question attentivement</li>
                  <li>Sélectionnez une réponse pour chaque question</li>
                  <li>Le chronomètre démarre dès que vous commencez</li>
                  <li>Vous ne pouvez pas revenir en arrière</li>
                  <li>L'examen se termine automatiquement après 45 minutes</li>
                </ul>
              </div>
            </div>

            <button
              onClick={startExam}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Commencer l'examen
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam Screen
  if (examState === 'exam') {
    const currentQuestion = examQuestions[currentQuestionIndex];

    return (
      <div className="py-8">
        {/* Timer */}
        <div className="fixed top-20 right-4 md:right-8 bg-white shadow-lg rounded-lg px-4 py-2 z-20">
          <div className="flex items-center space-x-2">
            <Clock size={20} className={timeRemaining < 300 ? 'text-red-500' : 'text-blue-600'} />
            <span
              className={`font-mono text-lg font-semibold ${
                timeRemaining < 300 ? 'text-red-500' : 'text-gray-800'
              }`}
            >
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Examen Blanc</h1>
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          showResult={false}
          onSubmit={handleAnswerQuestion}
          onNext={handleAnswerQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={examQuestions.length}
        />
      </div>
    );
  }

  // Results Screen
  const score = examQuestions.filter((q) => userAnswers[q.id] === q.correctAnswerId).length;
  const passed = score >= 32;
  const wrongQuestions = examQuestions.filter((q) => userAnswers[q.id] !== q.correctAnswerId);

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        {/* Results Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="mb-4">
              {passed ? (
                <CheckCircle size={64} className="mx-auto text-green-500" />
              ) : (
                <XCircle size={64} className="mx-auto text-red-500" />
              )}
            </div>

            <h1 className="text-3xl font-bold mb-2">
              {passed ? 'Félicitations !' : 'Examen non réussi'}
            </h1>

            <div className="text-5xl font-bold mb-4">
              <span className={passed ? 'text-green-600' : 'text-red-600'}>
                {score}
              </span>
              <span className="text-gray-400"> / 40</span>
            </div>

            <p className="text-lg text-gray-600">
              {passed
                ? 'Vous avez réussi l\'examen avec succès !'
                : 'Vous devez obtenir au moins 32/40 pour réussir.'}
            </p>

            {!passed && (
              <p className="text-gray-600 mt-2">
                Il vous manque {32 - score} bonne{32 - score > 1 ? 's' : ''} réponse
                {32 - score > 1 ? 's' : ''}.
              </p>
            )}
          </div>
        </div>

        {/* Wrong Answers Section */}
        {wrongQuestions.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Questions à réviser ({wrongQuestions.length})
            </h2>
            <p className="text-gray-600 mb-4">
              Les questions incorrectes sont surlignées en rouge.
            </p>
          </div>
        )}

        {/* All Questions List */}
        <div className="space-y-3">
          {examQuestions.map((question) => {
            const isWrong = userAnswers[question.id] !== question.correctAnswerId;
            return (
              <Accordion
                key={question.id}
                question={question}
                isOpen={openAccordions.has(question.id)}
                onToggle={() => toggleAccordion(question.id)}
                showAnswer={true}
                userAnswer={userAnswers[question.id]}
                highlightWrong={isWrong}
              />
            );
          })}
        </div>

        {/* Restart Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setExamState('instructions');
              setCurrentQuestionIndex(0);
              setUserAnswers({});
              setSelectedAnswer(null);
            }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Recommencer un examen
          </button>
        </div>
      </div>
    </div>
  );
}
