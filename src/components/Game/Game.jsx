import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { GameLayout } from './GameLayout';
import { WIN_PATTERNS, PLAYERS } from '../../constants/game';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState(PLAYERS.X);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));
	const [winningCombo, setWinningCombo] = useState([]);

	const checkWinner = (currentField) => {
		for (const pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (
				currentField[a] &&
				currentField[a] === currentField[b] &&
				currentField[a] === currentField[c]
			) {
				setWinningCombo(pattern);
				return currentField[a];
			}
		}
		setWinningCombo([]);
		return null;
	};

	const checkDraw = (currentField) => {
		return currentField.every((cell) => cell !== '');
	};

	const handleCellClick = (index) => {
		if (isGameEnded || field[index] !== '') return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		const winner = checkWinner(newField);
		if (winner) {
			setIsGameEnded(true);
		} else if (checkDraw(newField)) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X);
		}
	};

	const handleRestart = () => {
		setCurrentPlayer(PLAYERS.X);
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
		setWinningCombo([]);
	};

	let statusText;
	if (isDraw) {
		statusText = 'Ничья';
	} else if (isGameEnded) {
		statusText = `Победа: ${currentPlayer}`;
	} else {
		statusText = `Ходит: ${currentPlayer}`;
	}

	return (
		<GameLayout
			statusText={statusText}
			field={field}
			handleCellClick={handleCellClick}
			handleRestart={handleRestart}
			winningCombo={winningCombo}
		/>
	);
};
