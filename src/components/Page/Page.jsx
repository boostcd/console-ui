import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { PRODUCT_DESCRIPTION, TASK_MANAGEMENT_TITLE } from '../../constants/env';
import t from '../../utils/translate';
import logo from './logo.png';
import * as Styles from './Page.styled';

class Page extends React.PureComponent {
  isLandingPageActive = (match, location) => {
    if (!match) return false;
    return location.pathname === '/';
  };

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
              <Styles.NavigationItem to='/' isActive={this.isLandingPageActive}>
                {TASK_MANAGEMENT_TITLE || t('features.pageTitle')}
              </Styles.NavigationItem>
              <Styles.NavigationItem to='/microservices'>
                {t('microservices.pageTitle')}
              </Styles.NavigationItem>
              <Styles.NavigationItem to='/environments'>
                {t('environments.pageTitle')}
              </Styles.NavigationItem>
              {/* <Styles.NavigationItem to='/libraries'>
                {t('libraries.pageTitle')}
              </Styles.NavigationItem> */}
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
