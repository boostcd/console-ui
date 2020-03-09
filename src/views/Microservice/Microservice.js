import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

class Microservice extends React.PureComponent {
  render() {
    const {
      match: { params },
    } = this.props;
    const { appName } = params; // environment

    return (
      <>
        <Helmet title={appName} />
        <div>Microservice: To be implemented</div>
      </>
    );
  }
}

Microservice.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      environment: PropTypes.string,
      appName: PropTypes.string,
    }),
  }),
};

export default Microservice;
