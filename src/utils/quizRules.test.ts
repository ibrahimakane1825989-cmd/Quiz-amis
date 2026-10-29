import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateAnswerPoints,
  evaluateAnswerLocally,
  sortLeaderboard,
  validatePlayerLogin,
  validateAdminLogin,
  ADMIN_ACCESS_CODE,
  OFFICIAL_PLAYERS,
} from './quizRules';

test('scoring rules: 1st place gets 5 points, 2nd gets 4 points, 3rd+ gets 3 points', () => {
  assert.equal(calculateAnswerPoints(1), 5);
  assert.equal(calculateAnswerPoints(2), 4);
  assert.equal(calculateAnswerPoints(3), 3);
  assert.equal(calculateAnswerPoints(4), 3);
  assert.equal(calculateAnswerPoints(0), 0);
});

test('player login validation checks official players credentials', () => {
  const valid = validatePlayerLogin('Ibrahima Kane', 'Ik2008');
  assert.equal(valid.success, true);
  assert.equal(valid.player?.name, 'Ibrahima Kane');

  const invalidCode = validatePlayerLogin('Ibrahima Kane', 'Wrong123');
  assert.equal(invalidCode.success, false);

  const unknownUser = validatePlayerLogin('Inconnu', 'Xy1234');
  assert.equal(unknownUser.success, false);
});

test('admin login validation verifies admin access code', () => {
  const validAdmin = validateAdminLogin(ADMIN_ACCESS_CODE, 'Admin 1');
  assert.equal(validAdmin.success, true);

  const invalidAdmin = validateAdminLogin('WrongCode');
  assert.equal(invalidAdmin.success, false);
});

test('answer evaluation matches accents, case insensitivity, and keywords', () => {
  const eval1 = evaluateAnswerLocally('chloroplaste', 'Le chloroplaste', ['chloroplaste', 'chloroplastes']);
  assert.equal(eval1.isCorrect, true);

  const eval2 = evaluateAnswerLocally('CHLOROPLASTES', 'chloroplaste', ['chloroplaste']);
  assert.equal(eval2.isCorrect, true);

  const eval3 = evaluateAnswerLocally('membrane plasmique', 'La membrane plasmique', ['membrane']);
  assert.equal(eval3.isCorrect, true);

  const evalWrong = evaluateAnswerLocally('inconnu complet', 'mitochondrie', ['mitochondrie']);
  assert.equal(evalWrong.isCorrect, false);
});

test('leaderboard sorting orders by score descending, then fastest first, then correct count', () => {
  const players = [
    { playerId: 'p1', name: 'Alice', score: 12, correctAnswersCount: 3, fastestFirstCount: 1, avatar: '👤' },
    { playerId: 'p2', name: 'Bob', score: 20, correctAnswersCount: 4, fastestFirstCount: 2, avatar: '👤' },
    { playerId: 'p3', name: 'Charlie', score: 12, correctAnswersCount: 3, fastestFirstCount: 2, avatar: '👤' },
  ];

  const sorted = sortLeaderboard(players);
  assert.equal(sorted[0].name, 'Bob'); // 20 pts
  assert.equal(sorted[1].name, 'Charlie'); // 12 pts, 2 firsts
  assert.equal(sorted[2].name, 'Alice'); // 12 pts, 1 first
});

test('solo questions and tournament questions are 100% distinct across all 8 subjects', async () => {
  const { TOURNAMENT_TOPICS, getTournamentQuestionsForSubject } = await import('../data/tournamentQuestions.js');
  const { SOLO_TOPICS, getSoloQuestionsForSubject } = await import('../data/soloQuestions.js');
  const { getQuestionsForSubject } = await import('../data/defaultQuestions.js');

  assert.equal(TOURNAMENT_TOPICS.length, 8, '8 subjects in tournament');
  assert.equal(SOLO_TOPICS.length, 8, '8 subjects in solo');

  for (const tourTopic of TOURNAMENT_TOPICS) {
    const soloTopic = SOLO_TOPICS.find((s) => s.id === tourTopic.id);
    assert.ok(soloTopic, `Solo topic must exist for ${tourTopic.id}`);

    const tourQuestions = tourTopic.questions;
    const soloQuestions = soloTopic.questions;

    assert.equal(tourQuestions.length, 20, `${tourTopic.id} has 20 tournament questions`);
    assert.equal(soloQuestions.length, 20, `${soloTopic.id} has 20 solo questions`);

    const tourIds = new Set(tourQuestions.map((q) => q.id));
    const soloIds = new Set(soloQuestions.map((q) => q.id));

    // Zero ID overlap
    for (const id of soloIds) {
      assert.equal(tourIds.has(id), false, `ID ${id} must not exist in tournament questions`);
    }

    // Zero Question text overlap
    const tourTexts = new Set(tourQuestions.map((q) => q.question.toLowerCase().trim()));
    for (const sq of soloQuestions) {
      const cleanQ = sq.question.toLowerCase().trim();
      assert.equal(tourTexts.has(cleanQ), false, `Solo question "${sq.question}" must not duplicate tournament question`);
    }

    // Zero Answer overlap on identical question intent
    for (const sq of soloQuestions) {
      assert.ok(sq.answer.length > 0, `Solo question ${sq.id} has valid answer`);
      assert.ok(sq.acceptableKeywords.length > 0, `Solo question ${sq.id} has keywords`);
      assert.ok(sq.hint.length > 0, `Solo question ${sq.id} has hint`);
    }
  }

  // Verify getQuestionsForSubject mode parameter
  const tourQs = getQuestionsForSubject('svt-cellule', 5, 'tournament');
  const soloQs = getQuestionsForSubject('svt-cellule', 5, 'solo');
  assert.equal(tourQs.length, 5);
  assert.equal(soloQs.length, 5);
  assert.notEqual(tourQs[0].id, soloQs[0].id);
});

