/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  QuizQuestion,
  QuizTopic,
  TOURNAMENT_TOPICS,
  getTournamentQuestionsForSubject,
} from './tournamentQuestions';
import {
  SOLO_TOPICS,
  getSoloQuestionsForSubject,
} from './soloQuestions';

export type { QuizQuestion, QuizTopic };
export { TOURNAMENT_TOPICS, SOLO_TOPICS, getTournamentQuestionsForSubject, getSoloQuestionsForSubject };

/**
 * PRESET_TOPICS points by default to the official tournament curriculum.
 * Separate questions exist for solo training in SOLO_TOPICS.
 */
export const PRESET_TOPICS: QuizTopic[] = TOURNAMENT_TOPICS;

/**
 * Universal question retrieval helper.
 * When mode === 'solo', retrieves strictly from SOLO_TOPICS.
 * When mode === 'tournament' (default), retrieves strictly from TOURNAMENT_TOPICS.
 * Guaranteed 0 overlap between solo and tournament questions!
 */
export function getQuestionsForSubject(
  subjectOrId: string,
  count = 20,
  mode: 'tournament' | 'solo' = 'tournament'
): QuizQuestion[] {
  if (mode === 'solo') {
    return getSoloQuestionsForSubject(subjectOrId, count);
  }
  return getTournamentQuestionsForSubject(subjectOrId, count);
}
