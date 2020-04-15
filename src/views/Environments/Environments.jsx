import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import DataFallback from '../../components/DataFallback/DataFallback';
import Loader from '../../components/Loader/Loader';
import PageHeading from '../../components/PageHeading/PageHeading';
import Table from '../../components/Table/Table';
import ENVIRONMENT_STATUS from '../../constants/environmentStatus';
import environmentsType from '../../types/environments';
import ToastService from '../../utils/ToastService';
import t from '../../utils/translate';
import * as Styles from './Environments.styled';
import { startPollingEnvironments, stopPollingEnvironments } from './state/actions';

const mapStateToProps = (state) => ({
  data: state.environments.data,
  loading: state.environments.loading,
  polling: state.environments.polling,
});

const mapDispatchToProps = (dispatch) => ({
  startPolling: () => dispatch(startPollingEnvironments()),
  stopPolling: () => dispatch(stopPollingEnvironments()),
});

@connect(mapStateToProps, mapDispatchToProps)
class Environments extends React.PureComponent {
  confirmToastId = null;

  columns = [
    {
      header: t('environments.tableColumns.title'),
      render: (environment) => {
        const { title, status } = environment;
        const isTerminating = status === ENVIRONMENT_STATUS.TERMINATING;

        return (
          <div>
            <span>{title}</span>
            {isTerminating && <Styles.TerminatingIcon title={t('environments.terminating')} />}
          </div>
        );
      },
    },
    {
      header: t('environments.tableColumns.owner'),
      accessor: 'owner',
    },
    {
      header: t('environments.tableColumns.namespace'),
      accessor: 'namespace',
    },
    {
      header: t('environments.tableColumns.actions'),
      render: (environment) => {
        const { namespace, status } = environment;
        const isTerminating = status === ENVIRONMENT_STATUS.TERMINATING;
        const editButton = (
          <Button variant='secondary' isDisabled={isTerminating}>
            {t('common.edit')}
          </Button>
        );

        return (
          <Styles.TableActions>
            <Button
              variant='secondary'
              isDisabled={isTerminating}
              onClick={this.handleRebuild.bind(this, namespace)}
            >
              {t('common.rebuild')}
            </Button>
            {isTerminating ? (
              editButton
            ) : (
              <Link to={`/environments/${namespace}/edit`}>{editButton}</Link>
            )}
            <Button
              variant='secondary'
              isDisabled={isTerminating}
              onClick={this.handleDelete.bind(this, namespace)}
            >
              {t('common.delete')}
            </Button>
          </Styles.TableActions>
        );
      },
    },
  ];

  componentDidMount() {
    const { startPolling } = this.props;
    startPolling();
  }

  componentWillUnmount() {
    const { stopPolling } = this.props;
    stopPolling();
    ToastService.dismiss(this.confirmToastId);
  }

  handleConfirmCancel = () => {
    ToastService.dismiss(this.confirmToastId);
  };

  handleRebuild = (namespace) => {
    this.confirmToastId = ToastService.confirm({
      text: t('environments.actions.rebuild.confirm', { namespace }),
      onConfirm: this.handleRebuildConfirm.bind(null, namespace),
      onCancel: this.handleConfirmCancel,
    });
  };

  handleDelete = (namespace) => {
    this.confirmToastId = ToastService.confirm({
      text: t('environments.actions.delete.confirm', { namespace }),
      onConfirm: this.handleDeleteConfirm.bind(null, namespace),
      onCancel: this.handleConfirmCancel,
    });
  };

  handleRebuildConfirm = async (namespace) => {
    ToastService.dismiss(this.confirmToastId);
    const infoToastId = ToastService.info(t('environments.actions.rebuild.pending', { namespace }));

    try {
      await gatewayApi.rebuildEnvironment(namespace);
      ToastService.success(t('environments.actions.rebuild.success', { namespace }));
    } finally {
      ToastService.dismiss(infoToastId);
    }
  };

  handleDeleteConfirm = async (namespace) => {
    const { startPolling, stopPolling } = this.props;

    ToastService.dismiss(this.confirmToastId);
    const infoToastId = ToastService.info(t('environments.actions.delete.pending', { namespace }));

    try {
      await gatewayApi.deleteEnvironment(namespace);
      ToastService.success(t('environments.actions.delete.success', { namespace }));

      // Restarting the polling
      stopPolling();
      startPolling();
    } finally {
      ToastService.dismiss(infoToastId);
    }
  };

  render() {
    const { data, loading, polling } = this.props;
    const { count } = polling;

    if (loading && !count) return <Loader />;
    if (data && !data.length) return <DataFallback title={t('environments.dataFallback')} />;

    return (
      <>
        <Helmet title={t('environments.pageTitle')} />
        <PageHeading title={t('environments.pageTitle')}>
          <Link to='/environments/add'>
            <Button variant='primary'>{t('environments.actions.add')}</Button>
          </Link>
        </PageHeading>
        <Card>
          <Table columns={this.columns} data={data} />
        </Card>
      </>
    );
  }
}

Environments.propTypes = {
  data: environmentsType,
  loading: PropTypes.bool,
  polling: PropTypes.shape({
    count: PropTypes.number,
  }),
  // eslint-disable-next-line react/require-default-props
  startPolling: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  stopPolling: PropTypes.func,
};

Environments.defaultProps = {
  data: [],
  loading: true,
  polling: {},
};

export default Environments;
