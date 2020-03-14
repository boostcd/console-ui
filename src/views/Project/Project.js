import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

class Project extends React.PureComponent {
  render() {
    const {
      match: { params },
    } = this.props;
    const { namespace } = params;

    return (
      <>
        <Helmet title={namespace} />
        <div>Project: To be implemented</div>
      </>
    );
  }
}

Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      namespace: PropTypes.string,
    }),
  }),
};

export default Project;
