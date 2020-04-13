import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import t from '../../utils/translate';
import * as Styles from './NotFound.styled';

const NotFound = () => (
  <Styles.Wrapper>
    <Helmet title={t('notFound.pageTitle')} />
    <Styles.Title>{t('notFound.title')}</Styles.Title>
    <Styles.SubTitle>{t('notFound.subTitle')}</Styles.SubTitle>
    <Link to='/'>
      <Styles.Button variant='primary'>{t('notFound.backButton')}</Styles.Button>
    </Link>
  </Styles.Wrapper>
);

export default NotFound;
