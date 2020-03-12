import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import t from '../../utils/translate';
import logo from './logo.png';
import * as Styles from './Page.styled';

class Page extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <>
        <Styles.Header>
          <Styles.HeaderContainer>
            <NavLink to='/'>
              <Styles.Logo src={logo} alt='Estafet' />
              <Styles.Slogan>{PRODUCT_DESCRIPTION}</Styles.Slogan>
            </NavLink>
            <Styles.Navigation>
              <Styles.NavigationItem to='/features'>
                {t('features.pageTitle')}
              </Styles.NavigationItem>
              <Styles.NavigationItem to='/microservices'>
                {t('microservices.pageTitle')}
              </Styles.NavigationItem>
              <Styles.NavigationItem to='/environments'>
                {t('environments.pageTitle')}
              </Styles.NavigationItem>
            </Styles.Navigation>
          </Styles.HeaderContainer>
        </Styles.Header>
        <Styles.Content>{children}</Styles.Content>
      </>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
