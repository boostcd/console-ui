import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './Table.styled';

class Table extends React.PureComponent {
  renderHeading = (column, index) => {
    return <Styles.Th key={index}>{column.header}</Styles.Th>;
  };

  extractRowData(dataItem) {
    const { columns } = this.props;

    return columns
      .map((column) => dataItem[column.accessor])
      .filter((columnData) => columnData !== undefined);
  }

  renderRow = (dataItem, index) => {
    const rowData = this.extractRowData(dataItem);

    return <Styles.Tr key={index}>{rowData.map(this.renderCell)}</Styles.Tr>;
  };

  renderCell = (cell, index) => {
    return <Styles.Td key={index}>{cell}</Styles.Td>;
  };

  render() {
    const { data, columns } = this.props;

    return (
      <Styles.Table>
        <Styles.TableHead>
          <Styles.Tr>{columns.map(this.renderHeading)}</Styles.Tr>
        </Styles.TableHead>
        <tbody>{data.map(this.renderRow)}</tbody>
      </Styles.Table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      accessor: PropTypes.string,
    })
  ).isRequired,
};

export default Table;
