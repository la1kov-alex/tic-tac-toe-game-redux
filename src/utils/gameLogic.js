import { WIN_PATTERNS } from '../constants/game';

export const checkWinner = (field) => {
	for (const pattern of WIN_PATTERNS) {
		const [a, b, c] = pattern;
		if (field[a] && field[a] === field[b] && field[a] === field[c]) {
			return { player: field[a], combo: pattern };
		}
	}
	return null;
};

export const checkDraw = (field) => {
	return field.every((cell) => cell !== '');
};
