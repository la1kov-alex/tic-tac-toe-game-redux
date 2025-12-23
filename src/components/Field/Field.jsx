import store from '../../store';
import {
	selectField,
	selectWinningCombo,
	selectIsGameActive,
} from '../../store/selectors';
import { makeMove } from '../../store/actions';
import FieldLayout from './FieldLayout';

const Field = () => {
	const state = store.getState();
	const field = selectField(state);
	const winningCombo = selectWinningCombo(state);
	const isGameActive = selectIsGameActive(state);

	const handleCellClick = (index) => {
		if (!isGameActive || field[index] !== '') {
			return;
		}
		store.dispatch(makeMove(index));
	};

	return (
		<FieldLayout
			field={field}
			winningCombo={winningCombo}
			handleCellClick={handleCellClick}
		/>
	);
};

export default Field;
