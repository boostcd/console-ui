import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button';
import Card from '../../components/Card';
import DataFallback from '../../components/DataFallback';
import Loader from '../../components/Loader';
import PageHeading from '../../components/PageHeading';
import Table from '../../components/Table';
import projectsType from '../../types/projects';
import t from '../../utils/translate';
import * as Styles from './Projects.styled';
import { startPollingProjects, stopPollingProjects } from './state/actions';

const mapStateToProps = (state) => ({
  data: state.projects.data,
  loading: state.projects.loading,
});

const mapDispatchToProps = (dispatch) => ({
  startPolling: () => dispatch(startPollingProjects()),
  stopPolling: () => dispatch(stopPollingProjects()),
});

@connect(mapStateToProps, mapDispatchToProps)
class Projects extends React.PureComponent {
  columns = [
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
    {
      header: t('projects.tableColumns.actions'),
      // eslint-disable-next-line react/display-name
      render: (itemData) => {
        return (
          <Styles.TableActions>
            <Link to={`/projects/${itemData.namespace}/edit`}>
              <Button variant='secondary'>{t('common.edit')}</Button>
            </Link>
            <Button variant='secondary' onClick={this.handleDelete.bind(this, itemData.namespace)}>
              {t('common.delete')}
            </Button>
          </Styles.TableActions>
        );
      },
    },
  ];

  componentDidMount() {
    this.props.startPolling();
  }

  componentWillUnmount() {
    this.props.stopPolling();
  }

  handleDelete = async (namespace) => {
    await gatewayApi.deleteProject(namespace);
    toast.success(t('projects.deleteSuccess', { namespace }));
  };

  render() {
    const { data, loading } = this.props;

    if (loading) return <Loader />;
    if (data && !data.length) return <DataFallback title={t('projects.dataFallback')} />;

    return (
      <>
        <Helmet title={t('projects.pageTitle')} />
        <PageHeading title={t('projects.pageTitle')}>
          <Link to='/projects/add'>
            <Button variant='primary'>{t('projects.actions.add')}</Button>
          </Link>
        </PageHeading>
        <Card>
          <Table columns={this.columns} data={data} />
        </Card>
      </>
    );
  }
}

Projects.propTypes = {
  data: projectsType,
  loading: PropTypes.bool,
  startPolling: PropTypes.func,
  stopPolling: PropTypes.func,
};

export default Projects;
