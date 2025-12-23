import { ACTION_TYPES, PLAYERS, GAME_STATUS } from '../constants/game';
import { checkWinner, checkDraw } from '../utils/gameLogic';

const initialState = {
	currentPlayer: PLAYERS.X,
	status: GAME_STATUS.PLAYING,
	field: Array(9).fill(''),
	winningCombo: [],
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.MAKE_MOVE: {
			const { index } = action.payload;

			if (state.field[index] !== '' || state.status !== GAME_STATUS.PLAYING) {
				return state;
			}

			const newField = [...state.field];
			newField[index] = state.currentPlayer;

			const winner = checkWinner(newField);
			if (winner) {
				return {
					...state,
					field: newField,
					status: GAME_STATUS.WIN,
					winningCombo: winner.combo,
				};
			}

			if (checkDraw(newField)) {
				return {
					...state,
					field: newField,
					status: GAME_STATUS.DRAW,
					winningCombo: [],
				};
			}

			return {
				...state,
				field: newField,
				currentPlayer: state.currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X,
			};
		}

		case ACTION_TYPES.RESTART_GAME:
			return initialState;

		default:
			return state;
	}
};
