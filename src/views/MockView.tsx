import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../data';
import type { Question } from '../data';
import { QuestionCard } from '../components/QuestionCard';
import { Accordion } from '../components/Accordion';
import { selectQuestionsByCategory, shuffleArray } from '../utils/quiz';
import { saveAttempt } from '../utils/storage';
import { logger } from '../utils/logging';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

type ExamState = 'instructions' | 'exam' | 'results';

const DEFAULT_TIME_REMAINING = 45 * 60;

interface UserAnswers {
  [questionId: number]: string;
}

export function MockView() {
  const [examState, setExamState] = useState<ExamState>('instructions');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [timeRemaining, setTimeRemaining] = useState(DEFAULT_TIME_REMAINING); // 45 minutes in seconds
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [openAccordions, setOpenAccordions] = useState<Set<number>>(new Set());
  const [hasReadDisclaimer, setHasReadDisclaimer] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  // Timer effect
  useEffect(() => {
    if (examState !== 'exam') return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examState]);

  const startExam = () => {
    if (!hasReadDisclaimer) {
      setShowValidation(true);
      return;
    }

    // Select 40 questions with at least 5 from each category
    const selected = selectQuestionsByCategory(questions, 5);

    // Shuffle answers for each question
    const questionsWithShuffledAnswers = selected.map((q) => ({
      ...q,
      answers: shuffleArray(q.answers)
    }));

    setExamQuestions(questionsWithShuffledAnswers);
    setExamState('exam');
    setTimeRemaining(DEFAULT_TIME_REMAINING);
    setShowValidation(false);
    
    // Log simulation started
    logger.simulationStarted({
      numberOfQuestions: questionsWithShuffledAnswers.length,
    });
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
      // Pass the final answer to finishExam to avoid race condition with state update
      finishExam(timeRemaining, currentQuestion.id, selectedAnswer);
    }
  };

  const finishExam = (timeRemaining: number, finalQuestionId?: number, finalAnswer?: string) => {
    setExamState('results');

    // Build complete answers including the final answer if provided
    const completeAnswers = finalQuestionId && finalAnswer
      ? { ...userAnswers, [finalQuestionId]: finalAnswer }
      : userAnswers;

    // Calculate results
    const wrongQuestionIds = examQuestions
      .filter((q) => completeAnswers[q.id] !== q.correctAnswerId)
      .map((q) => q.id);
    
    const score = 40 - wrongQuestionIds.length;
    const timeTaken = DEFAULT_TIME_REMAINING - timeRemaining; // in seconds
    const completionReason = timeRemaining <= 1 ? 'time_expired' : 'finished';

    // Auto-expand wrong answers
    setOpenAccordions(new Set(wrongQuestionIds));

    // Save to localStorage
    saveAttempt(wrongQuestionIds);
    
    // Log simulation completed
    logger.simulationCompleted({
      finalScore: score,
      passStatus: score >= 32,
      timeTaken: timeTaken,
      wrongAnswerIds: wrongQuestionIds,
      completionReason: completionReason,
    });
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
              Simulation d'Examen Civique
            </h1>

            <div className="space-y-4 text-gray-700 mb-8">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">
                      Ceci est une simulation
                    </p>
                    <p className="text-amber-800 text-sm">
                      Cette simulation vous permet de vous entraîner dans des conditions similaires à l'examen réel. 
                      Il ne s'agit <strong>pas d'un examen officiel</strong>. Les questions et réponses peuvent 
                      contenir des erreurs et ne reflètent pas nécessairement l'examen réel.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg">
                Entraînez-vous dans des conditions similaires à l'examen civique pour la naturalisation française.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h2 className="font-semibold mb-2">Format de la simulation :</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>40 questions sélectionnées aléatoirement</li>
                  <li>Au moins 5 questions de chaque catégorie</li>
                  <li>Durée : 45 minutes</li>
                  <li>Score requis pour réussir : 32/40 (80%)</li>
                </ul>
              </div>

              <div className="bg-slate-50 border-l-4 border-slate-500 p-4">
                <h2 className="font-semibold mb-2">Instructions :</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lisez chaque question attentivement</li>
                  <li>Sélectionnez une réponse pour chaque question</li>
                  <li>Le chronomètre démarre dès que vous commencez</li>
                  <li>Vous ne pouvez pas revenir en arrière</li>
                  <li>La simulation se termine automatiquement après 45 minutes</li>
                </ul>
              </div>
            </div>

            {/* Disclaimer Checkbox */}
            <div className="mb-6">
              <label 
                className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  showValidation && !hasReadDisclaimer
                    ? 'border-red-500 bg-red-50'
                    : hasReadDisclaimer
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <input
                  type="checkbox"
                  checked={hasReadDisclaimer}
                  onChange={(e) => {
                    setHasReadDisclaimer(e.target.checked);
                    if (e.target.checked) setShowValidation(false);
                  }}
                  className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700 flex-1">
                  J'ai lu et compris la section{' '}
                  <Link 
                    to="/a-propos" 
                    className="text-blue-600 hover:text-blue-800 font-semibold underline"
                    target="_blank"
                  >
                    À propos
                  </Link>
                  {' '}et je comprends que cette simulation peut contenir des erreurs et ne remplace pas 
                  la préparation avec les documents officiels.
                  <span className="text-red-600 ml-1">*</span>
                </span>
              </label>
              {showValidation && !hasReadDisclaimer && (
                <p className="text-red-600 text-sm mt-2 ml-8">
                  Vous devez lire la section "À propos" avant de commencer la simulation.
                </p>
              )}
            </div>

            <button
              onClick={startExam}
              disabled={!hasReadDisclaimer}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all shadow-md ${
                hasReadDisclaimer
                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {hasReadDisclaimer ? 'Commencer la simulation' : 'Commencer la simulation (lecture requise)'}
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
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Simulation d'Examen</h1>
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedAnswerId={selectedAnswer}
          onSelectAnswerId={handleSelectAnswer}
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
              {passed ? 'Félicitations !' : 'Simulation non réussie'}
            </h1>

            <div className="text-5xl font-bold mb-4">
              <span className={passed ? 'text-green-600' : 'text-red-600'}>
                {score}
              </span>
              <span className="text-gray-400"> / 40</span>
            </div>

            <p className="text-lg text-gray-600">
              {passed
                ? 'Vous avez réussi la simulation avec succès ! À l\'examen réel, ce score vous permettrait de réussir.'
                : 'Vous devez obtenir au moins 32/40 pour réussir l\'examen réel. Continuez à vous entraîner !'}
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
              setHasReadDisclaimer(false);
              setShowValidation(false);
            }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Recommencer une simulation
          </button>
        </div>
      </div>
    </div>
  );
}
