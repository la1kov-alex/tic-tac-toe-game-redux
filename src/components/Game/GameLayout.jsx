import { PropTypes } from 'prop-types';
import { Information } from '../Information/Information';
import { Field } from '../Field/Field';
import styles from './Game.module.css';

export const GameLayout = ({
	statusText,
	field,
	winningCombo,
	handleCellClick,
	handleRestart,
}) => {
	return (
		<div className={styles.game}>
			<h1 className={styles.title}>🎮 Крестики-Нолики (Redux)</h1>
			<Information statusText={statusText} />
			<Field
				field={field}
				winningCombo={winningCombo}
				handleCellClick={handleCellClick}
			/>
			<button className={styles.restartButton} onClick={handleRestart}>
				🔄 Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	statusText: PropTypes.string.isRequired,
	field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
	winningCombo: PropTypes.array.isRequired,
	handleCellClick: PropTypes.func.isRequired,
	handleRestart: PropTypes.func.isRequired,
};
