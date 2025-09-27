import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = ({ field, handleCellClick, winningCombo }) => {
	return (
		<FieldLayout
			field={field}
			handleCellClick={handleCellClick}
			winningCombo={winningCombo}
		/>
	);
};

Field.PropTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};
