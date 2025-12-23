import PropTypes from 'prop-types';
import styles from './Information.module.css';

const InformationLayout = ({ statusText }) => {
	return (
		<div className={styles.information}>
			<h2 className={styles.status} key={statusText}>
				{statusText}
			</h2>
		</div>
	);
};

InformationLayout.propTypes = {
	statusText: PropTypes.string.isRequired,
};

export default InformationLayout;
