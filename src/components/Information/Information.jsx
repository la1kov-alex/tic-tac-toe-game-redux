import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const Information = ({ statusText }) => {
	return <InformationLayout statusText={statusText} />;
};

Information.propTypes = {
	statusText: PropTypes.string.isRequired,
};
