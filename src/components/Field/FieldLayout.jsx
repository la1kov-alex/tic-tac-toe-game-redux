import PropTypes from 'prop-types';
import styles from './Field.module.css';

export const FieldLayout = ({ field, winningCombo, handleCellClick }) => {
	const getCellClassName = (cell, index) => {
		const baseClass = styles.cell;
		const isWinning = winningCombo.includes(index);

		let typeClass = '';
		if (cell === 'X') typeClass = styles.xCell;
		if (cell === '0') typeClass = styles.oCell;

		const winningClass = isWinning ? styles.winningCell : '';

		return `${baseClass} ${typeClass} ${winningClass}`.trim();
	};

	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={getCellClassName(cell, index)}
					onClick={() => handleCellClick(index)}
					disabled={cell !== ''}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
	winningCombo: PropTypes.array.isRequired,
	handleCellClick: PropTypes.func.isRequired,
};
