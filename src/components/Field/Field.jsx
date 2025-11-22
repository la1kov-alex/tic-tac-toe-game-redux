import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = ({ field, winningCombo, handleCellClick }) => {
	return (
		<FieldLayout
			field={field}
			winningCombo={winningCombo}
			handleCellClick={handleCellClick}
		/>
	);
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
	winningCombo: PropTypes.array.isRequired,
	handleCellClick: PropTypes.func.isRequired,
};
