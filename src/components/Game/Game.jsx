import { useState, useEffect } from 'react';
import GameLayout from './GameLayout';
import store, { setRenderCallback } from '../../store';

const Game = () => {
	const [_, forceUpdate] = useState({});

	useEffect(() => {
		setRenderCallback(() => {
			forceUpdate({});
		});

		return () => {
			setRenderCallback(null);
		};
	}, []);

	const handleRestart = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return <GameLayout handleRestart={handleRestart} />;
};

export default Game;
