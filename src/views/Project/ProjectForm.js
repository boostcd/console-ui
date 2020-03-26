// import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

// import Button from '../../components/Button/Button';
// import Input from '../../components/Input/Input';
import projectType from '../../types/project';
import usersType from '../../types/users';
// import t from '../../utils/translate';

class ProjectForm extends React.PureComponent {
  render() {
    // const { users, handleSubmit } = this.props;

    return <div>form here</div>;
  }
}

ProjectForm.propTypes = {
  users: usersType,
  project: PropTypes.shape(projectType),
  handleSubmit: PropTypes.func.isRequired,
};

export default ProjectForm;
