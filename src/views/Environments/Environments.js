import React from 'react';
import Helmet from 'react-helmet';

import t from '../../utils/translate';

class Environments extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet title={t('environments.pageTitle')} />
        <div>Environments: To be implemented</div>
      </>
    );
  }
}

export default Environments;
