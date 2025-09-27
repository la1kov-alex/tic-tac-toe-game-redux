import PropTypes from 'prop-types';
import styles from './Field.module.css';

export const FieldLayout = ({ field, handleCellClick }) => {
	const getCellClassName = (cell) => {
		const baseClass = styles.cell;
		if (cell === 'X') return `${baseClass} ${styles.xCell}`;
		if (cell === '0') return `${baseClass} ${styles.oCell}`;
		return baseClass;
	};

	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={getCellClassName(cell)}
					onClick={() => handleCellClick(index)}
					disabled={cell !== ''}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.PropTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};
