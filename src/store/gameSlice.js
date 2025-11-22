import { WIN_PATTERNS, PLAYERS, GAME_STATUS } from '../constants/game';

export const ACTION_TYPES = {
	MAKE_MOVE: 'MAKE_MOVE',
	RESTART_GAME: 'RESTART_GAME',
	SET_STATUS: 'SET_STATUS',
};

const initialState = {
	currentPlayer: PLAYERS.X,
	status: GAME_STATUS.PLAYING,
	field: Array(9).fill(''),
	winningCombo: [],
};

export const makeMove = (index) => ({
	type: ACTION_TYPES.MAKE_MOVE,
	payload: { index },
});

export const restartGame = () => ({
	type: ACTION_TYPES.RESTART_GAME,
});

export const setStatus = (status, winningCombo = []) => ({
	type: ACTION_TYPES.SET_STATUS,
	payload: { status, winningCombo },
});

export const selectCurrentPlayer = (state) => state.currentPlayer;
export const selectStatus = (state) => state.status;
export const selectField = (state) => state.field;
export const selectWinningCombo = (state) => state.winningCombo;

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

		case ACTION_TYPES.SET_STATUS:
			return {
				...state,
				status: action.payload.status,
				winningCombo: action.payload.winningCombo,
			};

		default:
			return state;
	}
};

const checkWinner = (field) => {
	for (const pattern of WIN_PATTERNS) {
		const [a, b, c] = pattern;
		if (field[a] && field[a] === field[b] && field[a] === field[c]) {
			return { player: field[a], combo: pattern };
		}
	}
	return null;
};

const checkDraw = (field) => {
	return field.every((cell) => cell !== '');
};
