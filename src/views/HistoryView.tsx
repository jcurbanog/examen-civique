import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAttempts } from '../utils/storage';
import type { QuizAttempt } from '../utils/storage';
import { Calendar, Award, BookOpen } from 'lucide-react';

export function HistoryView() {
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadAttempts();
  }, []);

  const loadAttempts = () => {
    const loadedAttempts = getAttempts();
    // Sort by timestamp descending (most recent first)
    const sorted = loadedAttempts.sort((a, b) => b.timestamp - a.timestamp);
    setAttempts(sorted);
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleReview = (timestamp: number) => {
    navigate(`/reviser/${timestamp}`);
  };

  const getScoreColor = (score: number) => {
    if (score >= 32) return 'text-green-600';
    if (score >= 25) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 32) return 'bg-green-50';
    if (score >= 25) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  if (attempts.length === 0) {
    return (
      <div className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Historique</h1>
            <p className="text-gray-600">
              Consultez vos tentatives de simulation précédentes
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Aucune simulation effectuée
            </h2>
            <p className="text-gray-500 mb-6">
              Passez votre première simulation pour voir votre historique ici.
            </p>
            <button
              onClick={() => navigate('/examen')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Commencer une simulation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Historique</h1>
          <p className="text-gray-600">
            Consultez vos tentatives de simulation précédentes
          </p>
        </div>

        {/* Statistics Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {attempts.length}
              </div>
              <div className="text-gray-600">
                Tentative{attempts.length > 1 ? 's' : ''}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {attempts.filter((a) => a.score >= 32).length}
              </div>
              <div className="text-gray-600">Réussite{attempts.filter((a) => a.score >= 32).length > 1 ? 's' : ''}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {attempts.length > 0
                  ? Math.round(attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length)
                  : 0}
              </div>
              <div className="text-gray-600">Score moyen</div>
            </div>
          </div>
        </div>

        {/* Attempts List */}
        <div className="space-y-4">
          {attempts.map((attempt) => (
            <div
              key={attempt.timestamp}
              className={`bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.01] ${getScoreBgColor(
                attempt.score
              )}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar size={20} className="text-gray-500" />
                    <span className="text-lg font-semibold text-gray-800">
                      {formatDate(attempt.timestamp)}
                    </span>
                    <span className="text-gray-500">à {formatTime(attempt.timestamp)}</span>
                  </div>

                  <div className="flex items-center space-x-4 ml-8">
                    <div className="flex items-center space-x-2">
                      <Award size={18} className={getScoreColor(attempt.score)} />
                      <span className={`text-2xl font-bold ${getScoreColor(attempt.score)}`}>
                        {attempt.score} / 40
                      </span>
                    </div>

                    {attempt.score >= 32 ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Réussi
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        Échoué
                      </span>
                    )}
                  </div>

                  {attempt.wrongQuestionIds.length > 0 && (
                    <div className="mt-2 ml-8 text-sm text-gray-600">
                      {attempt.wrongQuestionIds.length} question
                      {attempt.wrongQuestionIds.length > 1 ? 's' : ''} incorrecte
                      {attempt.wrongQuestionIds.length > 1 ? 's' : ''}
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  {attempt.wrongQuestionIds.length > 0 && (
                    <button
                      onClick={() => handleReview(attempt.timestamp)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                    >
                      Réviser
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Simulation Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/examen')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Nouvelle simulation
          </button>
        </div>
      </div>
    </div>
  );
}
