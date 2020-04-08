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
import ENVIRONMENT_STATUS from '../../constants/environmentStatus';
import environmentsType from '../../types/environments';
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
        {t('environments.actions.delete.confirm', { namespace })}
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
    const infoToastId = toast.info(t('environments.actions.delete.pending', { namespace }), {
      autoClose: false,
    });

    try {
      await gatewayApi.deleteEnvironment(namespace);
      toast.success(t('environments.actions.delete.success', { namespace }));

      // Restarting the polling
      this.props.stopPolling();
      this.props.startPolling();
    } finally {
      toast.dismiss(infoToastId);
    }
  };

  handleDeleteCancel = () => {
    toast.dismiss(this.confirmToastId);
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
  startPolling: PropTypes.func,
  stopPolling: PropTypes.func,
};

export default Environments;
