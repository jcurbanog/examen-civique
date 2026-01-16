import { datadogLogs } from '@datadog/browser-logs';

/**
 * Centralized logging utilities for Datadog
 */

export const logger = {
  /**
   * Log when a user verifies their answer in Quiz mode
   */
  answerVerified: (data: {
    questionId: number;
    selectedAnswerId: string;
    correctAnswerId: string;
    isCorrect: boolean;
  }) => {
    datadogLogs.logger.info('Answer Verified', {
      event: 'answer_verified',
      question_id: data.questionId,
      selected_answer_id: data.selectedAnswerId,
      correct_answer_id: data.correctAnswerId,
      is_correct: data.isCorrect,
    });
  },

  /**
   * Log when a simulation/exam is started
   */
  simulationStarted: (data: {
    numberOfQuestions: number;
  }) => {
    datadogLogs.logger.info('Simulation Started', {
      event: 'simulation_started',
      number_of_questions: data.numberOfQuestions,
    });
  },

  /**
   * Log when a simulation/exam is completed
   */
  simulationCompleted: (data: {
    finalScore: number;
    passStatus: boolean;
    timeTaken: number; // in seconds
    wrongAnswerIds: number[];
    completionReason: 'finished' | 'time_expired';
  }) => {
    datadogLogs.logger.info('Simulation Completed', {
      event: 'simulation_completed',
      final_score: data.finalScore,
      pass_status: data.passStatus,
      time_taken_seconds: data.timeTaken,
      wrong_answer_ids: data.wrongAnswerIds,
      completion_reason: data.completionReason,
    });
  },

  /**
   * Log when the history view is opened
   */
  historyViewOpened: (data: {
    numberOfAttempts: number;
    totalSuccessfulAttempts: number;
    averageScore: number;
    bestScore: number;
    worstScore: number;
  }) => {
    datadogLogs.logger.info('History View Opened', {
      event: 'history_view_opened',
      number_of_attempts: data.numberOfAttempts,
      total_successful_attempts: data.totalSuccessfulAttempts,
      average_score: data.averageScore,
      best_score: data.bestScore,
      worst_score: data.worstScore,
    });
  },

  /**
   * Log when a user clicks the review button for a specific attempt
   */
  reviewButtonClicked: (data: {
    scoreOfAttempt: number;
    questionIdsToReview: number[];
  }) => {
    datadogLogs.logger.info('Review Button Clicked', {
      event: 'review_button_clicked',
      score_of_attempt: data.scoreOfAttempt,
      question_ids_to_review: data.questionIdsToReview,
    });
  },

  /**
   * Log when a review session is completed
   */
  reviewSessionCompleted: (data: {
    improvementRate: number; // percentage (0-100)
  }) => {
    datadogLogs.logger.info('Review Session Completed', {
      event: 'review_session_completed',
      improvement_rate: data.improvementRate,
    });
  },
};
