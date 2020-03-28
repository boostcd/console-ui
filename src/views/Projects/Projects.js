import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ConfirmToast from '../../components/ConfirmToast/ConfirmToast';
import DataFallback from '../../components/DataFallback/DataFallback';
import Loader from '../../components/Loader/Loader';
import PageHeading from '../../components/PageHeading/PageHeading';
import Table from '../../components/Table/Table';
import projectsType from '../../types/projects';
import t from '../../utils/translate';
import * as Styles from './Projects.styled';
import { startPollingProjects, stopPollingProjects } from './state/actions';

const mapStateToProps = (state) => ({
  data: state.projects.data,
  loading: state.projects.loading,
  polling: state.projects.polling,
});

const mapDispatchToProps = (dispatch) => ({
  startPolling: () => dispatch(startPollingProjects()),
  stopPolling: () => dispatch(stopPollingProjects()),
});

@connect(mapStateToProps, mapDispatchToProps)
class Projects extends React.PureComponent {
  confirmToastId = null;

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
      render: (project) => {
        const { namespace } = project;

        return (
          <Styles.TableActions>
            <Link to={`/projects/${namespace}/edit`}>
              <Button variant='secondary'>{t('common.edit')}</Button>
            </Link>
            <Button variant='secondary' onClick={this.handleDelete.bind(this, namespace)}>
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

  handleDelete = (namespace) => {
    this.confirmToastId = toast(
      <ConfirmToast
        onConfirm={this.handleDeleteConfirm.bind(null, namespace)}
        onCancel={this.handleDeleteCancel}
      >
        {t('projects.actions.delete.confirm', { namespace })}
      </ConfirmToast>,
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
      }
    );
  };

  handleDeleteConfirm = async (namespace) => {
    toast.dismiss(this.confirmToastId);
    const infoToastId = toast.info(t('projects.actions.delete.pending', { namespace }), {
      autoClose: false,
    });

    await gatewayApi.deleteProject(namespace);
    toast.dismiss(infoToastId);
    toast.success(t('projects.actions.delete.success', { namespace }));
  };

  handleDeleteCancel = () => {
    toast.dismiss(this.confirmToastId);
  };

  render() {
    const { data, loading, polling } = this.props;
    const { count } = polling;

    if (loading && !count) return <Loader />;
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
  polling: PropTypes.shape({
    count: PropTypes.number,
  }),
  startPolling: PropTypes.func,
  stopPolling: PropTypes.func,
};

export default Projects;
