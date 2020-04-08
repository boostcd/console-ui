import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import projectType from '../../types/project';
import usersType from '../../types/users';
import t from '../../utils/translate';
import * as Styles from './ProjectForm.styled';

const ProjectForm = (props) => {
  const { project, users, isEditing, onSubmit } = props;

  const formik = useFormik({
    initialValues: {
      title: project.title || '',
      namespace: project.namespace || '',
      owner: project.owner || '',
    },
    onSubmit,
    validate: (values) => {
      let errors = {};

      if (!values.title) {
        errors.title = t('project.form.errors.title');
      }

      if (!values.owner) {
        errors.owner = t('project.form.errors.owner');
      }

      return errors;
    },
  });

  const isSubmitDisabled = formik.isSubmitting || !formik.isValid;

  return (
    <Styles.Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <Styles.InputGroup>
          <Styles.InputLabel htmlFor='title'>{t('project.form.title')}</Styles.InputLabel>
          <Input
            type='text'
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
            <Styles.InputLabel htmlFor='namespace'>{t('project.form.namespace')}</Styles.InputLabel>
            <Input
              type='text'
              id='namespace'
              name='namespace'
              value={formik.values.namespace}
              onChange={formik.handleChange}
              readOnly
            />
          </Styles.InputGroup>
        )}
        <Styles.InputGroup>
          <Styles.InputLabel htmlFor='owner'>{t('project.form.owner')}</Styles.InputLabel>
          <Select
            id='owner'
            name='owner'
            value={formik.values.owner}
            onChange={formik.handleChange}
            hasError={!!formik.errors.owner}
            readOnly={isEditing}
          >
            <option value=''></option>
            {users.map((user) => (
              <option key={user.name} value={user.name}>
                {user.name}
              </option>
            ))}
          </Select>
          {formik.errors.owner && <Styles.InputError>{formik.errors.owner}</Styles.InputError>}
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

ProjectForm.propTypes = {
  project: PropTypes.shape(projectType),
  users: usersType,
  isEditing: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ProjectForm.defaultProps = {
  project: {},
  users: [],
};

export default ProjectForm;
