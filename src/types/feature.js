import PropTypes from 'prop-types';

export default {
  featureId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  // Optional
  promoted: PropTypes.bool.isRequired,
  waitingSince: PropTypes.string,
  description: PropTypes.string,
};
