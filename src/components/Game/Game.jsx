import { useState, useEffect } from 'react';
import { GameLayout } from './GameLayout';
import { store, subscribe, getState } from '../../store';
import {
	makeMove,
	restartGame,
	selectCurrentPlayer,
	selectStatus,
	selectField,
	selectWinningCombo,
} from '../../store/gameSlice';
import { GAME_STATUS } from '../../constants/game';

export const Game = () => {
	const [state, setState] = useState(getState());

	useEffect(() => {
		const unsubscribe = subscribe(() => {
			setState(getState());
		});
		return unsubscribe;
	}, []);

	const handleCellClick = (index) => {
		store.dispatch(makeMove(index));
	};

	const handleRestart = () => {
		store.dispatch(restartGame());
	};

	const currentPlayer = selectCurrentPlayer(state);
	const status = selectStatus(state);
	const field = selectField(state);
	const winningCombo = selectWinningCombo(state);

	let statusText;
	switch (status) {
		case GAME_STATUS.WIN:
			statusText = `Победа: ${currentPlayer}`;
			break;
		case GAME_STATUS.DRAW:
			statusText = `Ничья`;
			break;
		default:
			statusText = `Ходит ${currentPlayer}`;
	}

	return (
		<GameLayout
			statusText={statusText}
			field={field}
			winningCombo={winningCombo}
			handleCellClick={handleCellClick}
			handleRestart={handleRestart}
		/>
	);
};
