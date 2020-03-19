import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import PageHeading from '../../components/PageHeading';
import Table from '../../components/Table';
import projectsType from '../../types/projects';
import t from '../../utils/translate';
import { fetchProjects } from './state/actions';

const columns = [
  {
    header: t('projects.tableColumns.title'),
    accessor: 'title',
  },
  {
    header: t('projects.tableColumns.owner'),
    accessor: 'owner',
  },
  {
    header: t('projects.tableColumns.namespace'),
    accessor: 'namespace',
  },
];

const mapStateToProps = (state) => ({
  data: state.projects.data,
  loading: state.projects.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

@connect(mapStateToProps, mapDispatchToProps)
class Projects extends React.PureComponent {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { data, loading } = this.props;

    if (loading) return <Loader />;

    return (
      <>
        <Helmet title={t('projects.pageTitle')} />
        <PageHeading title={t('projects.pageTitle')}>
          <Link to='/projects/add'>
            <Button type='primary'>{t('projects.actions.add')}</Button>
          </Link>
        </PageHeading>
        <Card>
          <Table columns={columns} data={data} />
        </Card>
      </>
    );
  }
}

Projects.propTypes = {
  data: projectsType,
  loading: PropTypes.bool,
  fetchProjects: PropTypes.func,
};

export default Projects;
