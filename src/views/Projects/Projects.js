import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Loader from '../../components/Loader';
import PageHeading from '../../components/PageHeading';
// import Table from '../../components/Table';
import projectsType from '../../types/projects';
import t from '../../utils/translate';
import { fetchProjects } from './state/actions';

// const columns = [
//   {
//     Header: t('projects.tableColumns.title'),
//     accessor: 'title',
//   },
//   {
//     Header: t('projects.tableColumns.owner'),
//     accessor: 'owner',
//   },
//   {
//     Header: t('projects.tableColumns.namespace'),
//     accessor: 'namespace',
//   },
// ];

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
    const { loading } = this.props; // data

    if (loading) return <Loader />;

    return (
      <>
        <Helmet title={t('projects.pageTitle')} />
        <PageHeading title={t('projects.pageTitle')}>
          <Link to='/projects/add'>
            <Button type='primary'>{t('projects.actions.add')}</Button>
          </Link>
        </PageHeading>
        {/* <Table columns={columns} data={data} /> */}
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
