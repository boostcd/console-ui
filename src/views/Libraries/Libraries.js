import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import DataFallback from '../../components/DataFallback/DataFallback';
import Loader from '../../components/Loader/Loader';
import PageHeading from '../../components/PageHeading/PageHeading';
import Table from '../../components/Table/Table';
import librariesType from '../../types/libraries';
import ToastService from '../../utils/ToastService';
import t from '../../utils/translate';
import { fetchLibraries } from './state/actions';

const mapStateToProps = (state) => ({
  data: state.libraries.data,
  loading: state.libraries.loading,
  polling: state.libraries.polling,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLibraries: () => dispatch(fetchLibraries()),
});

@connect(mapStateToProps, mapDispatchToProps)
class Libraries extends React.PureComponent {
  confirmToastId = null;
  columns = [
    {
      header: t('libraries.tableColumns.name'),
      accessor: 'name',
    },
    {
      header: t('libraries.tableColumns.actions'),
      render: (library) => {
        const { name } = library;

        return (
          <Button variant='secondary' onClick={this.handleRelease.bind(this, name)}>
            {t('common.release')}
          </Button>
        );
      },
    },
  ];

  componentDidMount() {
    this.props.fetchLibraries();
  }

  componentWillUnmount() {
    ToastService.dismiss(this.confirmToastId);
  }

  handleReleaseCancel = () => {
    ToastService.dismiss(this.confirmToastId);
  };

  handleRelease = (name) => {
    this.confirmToastId = ToastService.confirm({
      text: t('libraries.actions.release.confirm', { name }),
      onConfirm: this.handleReleaseConfirm.bind(null, name),
      onCancel: this.handleReleaseCancel,
    });
  };

  handleReleaseConfirm = async (name) => {
    ToastService.dismiss(this.confirmToastId);
    const infoToastId = ToastService.info(t('libraries.actions.release.pending', { name }));

    try {
      await gatewayApi.releaseLibrary(name);
      ToastService.success(t('libraries.actions.release.success', { name }));
    } finally {
      ToastService.dismiss(infoToastId);
    }
  };

  render() {
    const { data, loading } = this.props;

    if (loading) return <Loader />;
    if (data && !data.length) return <DataFallback title={t('libraries.dataFallback')} />;

    return (
      <>
        <Helmet title={t('libraries.pageTitle')} />
        <PageHeading title={t('libraries.pageTitle')} />
        <Card>
          <Table columns={this.columns} data={data} />
        </Card>
      </>
    );
  }
}

Libraries.propTypes = {
  data: librariesType,
  loading: PropTypes.bool,
  fetchLibraries: PropTypes.func,
};

export default Libraries;
