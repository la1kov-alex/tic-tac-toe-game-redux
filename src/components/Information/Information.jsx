import store from '../../store';
import { selectStatus, selectCurrentPlayer } from '../../store/selectors';
import { GAME_STATUS } from '../../constants/game';
import InformationLayout from './InformationLayout';

const Information = () => {
	const state = store.getState();
	const status = selectStatus(state);
	const currentPlayer = selectCurrentPlayer(state);

	let statusText;
	switch (status) {
		case GAME_STATUS.WIN:
			statusText = `Победа: ${currentPlayer}`;
			break;
		case GAME_STATUS.DRAW:
			statusText = 'Ничья';
			break;
		default:
			statusText = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout statusText={statusText} />;
};

export default Information;
