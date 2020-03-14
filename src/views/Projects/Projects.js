import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import t from '../../utils/translate';

class Projects extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet title={t('projects.pageTitle')} />
        <div>Projects: To be implemented</div>
        <Link to='/projects/add'>
          <Button type='primary'>Add project</Button>
        </Link>
      </>
    );
  }
}

export default Projects;
