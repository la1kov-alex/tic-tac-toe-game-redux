import PropTypes from 'prop-types';
import Information from '../Information/Information';
import Field from '../Field/Field';
import styles from './Game.module.css';

const GameLayout = ({ handleRestart }) => {
	return (
		<div className={styles.game}>
			<h1 className={styles.title}>🎮 Крестики-Нолики (Redux)</h1>
			<Information />
			<Field />
			<button className={styles.restartButton} onClick={handleRestart}>
				🔄 Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	handleRestart: PropTypes.func.isRequired,
};

export default GameLayout;
