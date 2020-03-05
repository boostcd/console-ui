import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Test = styled.div`
  color: darkgrey;
`;

class Microservices extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet title='Microservices' />
        <Test>Microservices: To be implemented</Test>
      </>
    );
  }
}

export default Microservices;
