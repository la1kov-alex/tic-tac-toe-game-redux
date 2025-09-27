import { PropTypes } from 'prop-types';
import { Information } from '../Information/Information';
import { Field } from '../Field/Field';
import styles from './Game.module.css';

export const GameLayout = ({
	statusText,
	field,
	handleCellClick,
	handleRestart,
	winningCombo,
}) => {
	return (
		<div className={styles.game}>
			<h1 className={styles.title}>🎮 Крестики-Нолики</h1>
			<Information statusText={statusText} />
			<Field
				field={field}
				handleCellClick={handleCellClick}
				winningCombo={winningCombo}
			/>
			<button className={styles.restartButton} onClick={handleRestart}>
				🔄 Начать заново
			</button>
		</div>
	);
};

GameLayout.PropTypes = {
	statusText: PropTypes.string.isRequired,
	field: PropTypes.arrayOf(PropTypes.oneOf(['', 'X', '0'])).isRequired,
	handleCellClick: PropTypes.func.isRequired,
	handleRestart: PropTypes.func.isRequired,
};
