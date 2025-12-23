import { ACTION_TYPES } from '../constants/game';

export const makeMove = (index) => ({
	type: ACTION_TYPES.MAKE_MOVE,
	payload: { index },
});

export const restartGame = () => ({
	type: ACTION_TYPES.RESTART_GAME,
});
