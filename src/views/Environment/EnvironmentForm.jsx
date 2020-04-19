import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import environmentType from '../../types/environment';
import usersType from '../../types/users';
import t from '../../utils/translate';
import * as Styles from './EnvironmentForm.styled';

const EnvironmentForm = (props) => {
  const { environment, users, isEditing, onSubmit } = props;

  const formik = useFormik({
    initialValues: {
      title: environment.title || '',
      namespace: environment.namespace || '',
      owner: environment.owner || '',
      test: environment.test || false,
    },
    onSubmit,
    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = t('environment.form.errors.title');
      }

      if (!values.owner) {
        errors.owner = t('environment.form.errors.owner');
      }

      return errors;
    },
  });

  const isSubmitDisabled = formik.isSubmitting || !formik.isValid;

  return (
    <Styles.Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <Styles.InputGroup>
          <Styles.InputLabel htmlFor='title'>{t('environment.form.title')}</Styles.InputLabel>
          <Input
            id='title'
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            hasError={!!formik.errors.title}
          />
          {formik.errors.title && <Styles.InputError>{formik.errors.title}</Styles.InputError>}
        </Styles.InputGroup>
        {isEditing && (
          <Styles.InputGroup>
            <Styles.InputLabel htmlFor='namespace'>
              {t('environment.form.namespace')}
            </Styles.InputLabel>
            <Input
              id='namespace'
              name='namespace'
              value={formik.values.namespace}
              onChange={formik.handleChange}
              readOnly
            />
          </Styles.InputGroup>
        )}
        <Styles.InputGroup>
          <Styles.InputLabel htmlFor='owner'>{t('environment.form.owner')}</Styles.InputLabel>
          <Select
            id='owner'
            name='owner'
            value={formik.values.owner}
            onChange={formik.handleChange}
            hasError={!!formik.errors.owner}
            readOnly={isEditing}
          >
            <option value=''>&nbsp;</option>
            {users.map((user) => (
              <option key={user.name} value={user.name}>
                {user.name}
              </option>
            ))}
          </Select>
          {formik.errors.owner && <Styles.InputError>{formik.errors.owner}</Styles.InputError>}
        </Styles.InputGroup>
        <Styles.InputGroup>
          <Checkbox
            id='test'
            name='test'
            checked={formik.values.test}
            onChange={formik.handleChange}
            readyOnly={isEditing}
          />
          <Styles.CheckboxLabel htmlFor='test'>{t('environment.form.test')}</Styles.CheckboxLabel>
        </Styles.InputGroup>
        <Styles.InputGroup>
          <Button type='submit' variant='primary' isDisabled={isSubmitDisabled}>
            {t('common.submit')}
          </Button>
        </Styles.InputGroup>
      </form>
    </Styles.Wrapper>
  );
};

EnvironmentForm.propTypes = {
  environment: PropTypes.shape(environmentType),
  users: usersType,
  isEditing: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

EnvironmentForm.defaultProps = {
  environment: {},
  users: [],
};

export default EnvironmentForm;
