/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RegisteredPlayer {
  id: string;
  name: string;
  code: string;
  avatar: string;
  isOnline?: boolean;
}

export const OFFICIAL_PLAYERS: RegisteredPlayer[] = [
  { id: 'p1', name: 'Ibrahima Kane', code: 'Ik2008', avatar: '🦁' },
  { id: 'p2', name: 'Abdou Faye', code: 'Af2009', avatar: '🦅' },
  { id: 'p3', name: 'Diasse séne', code: 'Ds2008', avatar: '⚡' },
  { id: 'p4', name: 'Ogo Sall', code: 'Os2009', avatar: '🌟' },
  { id: 'p5', name: 'Mohamed Ndiaye', code: 'Mn2027', avatar: '🚀' },
  { id: 'p6', name: 'Mouhamadou Ndiaye', code: 'Mn2026', avatar: '🎯' },
  { id: 'p7', name: 'Kadiata Diallo', code: 'Kd2008', avatar: '🌺' },
  { id: 'p8', name: 'Landing Diedhiou', code: 'Ld2000', avatar: '🔥' },
  { id: 'p9', name: 'Binta Samb', code: 'Bs2015', avatar: '💎' },
  { id: 'p10', name: 'Mairam thiam', code: 'Mt2019', avatar: '👑' },
];

export const ADMIN_ACCESS_CODE = 'Meonly123';

/**
 * Validate credentials for player login
 */
export function validatePlayerLogin(
  username: string,
  code: string
): { success: boolean; player?: RegisteredPlayer; error?: string } {
  const cleanName = username.trim().toLowerCase();
  const cleanCode = code.trim().toLowerCase();

  if (!cleanName || !cleanCode) {
    return { success: false, error: 'Veuillez saisir votre nom et code d’accès.' };
  }

  const found = OFFICIAL_PLAYERS.find(
    (p) =>
      p.name.toLowerCase() === cleanName &&
      p.code.toLowerCase() === cleanCode
  );

  if (found) {
    return { success: true, player: found };
  }

  // Check if name matches but code is wrong
  const nameMatch = OFFICIAL_PLAYERS.find(
    (p) => p.name.toLowerCase() === cleanName
  );
  if (nameMatch) {
    return { success: false, error: 'Code d’accès erroné pour cet utilisateur.' };
  }

  return {
    success: false,
    error: 'Utilisateur non reconnu. Seuls les élèves autorisés peuvent participer.',
  };
}

/**
 * Validate admin access code
 */
export function validateAdminLogin(
  code: string,
  adminName?: string
): { success: boolean; error?: string; name: string } {
  if (code.trim() === ADMIN_ACCESS_CODE) {
    return {
      success: true,
      name: adminName?.trim() || 'Admin Défi',
    };
  }
  return {
    success: false,
    name: '',
    error: 'Code Admin invalide. Accès réservé aux 2 administrateurs.',
  };
}

/**
 * Scoring calculation based on response order:
 * 1st correct answer gets 5 points
 * 2nd correct answer gets 4 points
 * 3rd and subsequent get 3 points
 */
export function calculateAnswerPoints(correctRank: number): number {
  if (correctRank <= 0) return 0;
  if (correctRank === 1) return 5;
  if (correctRank === 2) return 4;
  return 3;
}

/**
 * Normalize text for accent-insensitive, case-insensitive, punctuation-free string matching
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/['’\-–—.,;:!?()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Fast local evaluation of player answer against expected answer and acceptable keywords.
 */
export function evaluateAnswerLocally(
  userAnswer: string,
  expectedAnswer: string,
  acceptableKeywords: string[] = []
): { isCorrect: boolean; confidence: number } {
  const normUser = normalizeText(userAnswer);
  const normExpected = normalizeText(expectedAnswer);

  if (!normUser) return { isCorrect: false, confidence: 0 };

  // Exact normalized match
  if (normUser === normExpected) {
    return { isCorrect: true, confidence: 1 };
  }

  // Contained match if answer has at least 3 characters
  if (normUser.length >= 3 && normExpected.includes(normUser)) {
    // If the expected answer is a phrase and user provided the core key phrase
    const ratio = normUser.length / normExpected.length;
    if (ratio >= 0.5 || acceptableKeywords.some(kw => normalizeText(kw) === normUser)) {
      return { isCorrect: true, confidence: 0.9 };
    }
  }

  if (normExpected.length >= 3 && normUser.includes(normExpected)) {
    return { isCorrect: true, confidence: 0.95 };
  }

  // Check acceptable keywords
  for (const kw of acceptableKeywords) {
    const normKw = normalizeText(kw);
    if (!normKw) continue;
    if (normUser === normKw || normUser.includes(normKw)) {
      return { isCorrect: true, confidence: 0.9 };
    }
  }

  // Levenshtein distance check for short typos (e.g. "chlorophyle" vs "chlorophylle")
  const dist = levenshteinDistance(normUser, normExpected);
  const maxLen = Math.max(normUser.length, normExpected.length);
  if (maxLen > 4 && dist <= 2) {
    return { isCorrect: true, confidence: 0.85 };
  }

  return { isCorrect: false, confidence: 0 };
}

/**
 * Levenshtein distance for typo tolerance
 */
export function levenshteinDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

export interface PlayerScoreSummary {
  playerId: string;
  name: string;
  score: number;
  correctAnswersCount: number;
  fastestFirstCount: number;
  avatar: string;
}

/**
 * Sorts players for leaderboard and final podium:
 * Highest score first, then most 1st-place bonuses, then most correct answers
 */
export function sortLeaderboard(players: PlayerScoreSummary[]): PlayerScoreSummary[] {
  return [...players].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.fastestFirstCount !== a.fastestFirstCount)
      return b.fastestFirstCount - a.fastestFirstCount;
    return b.correctAnswersCount - a.correctAnswersCount;
  });
}
