import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import FormComponent from '../../Form/FormComponent';
import TextField from '../../Form/TextField';
import TextAreaField from '../../Form/TextAreaField';
import EmailField from '../../Form/EmailField';
import SelectField from '../../Form/SelectField';
import ButtonComponent from '../../Form/ButtonComponent';

const UserForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required')
  });

  return (
    <FormComponent
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <TextField name="firstName" label="First Name" />
      <TextField name="lastName" label="Last Name" />
      <EmailField name="email" label="Email Address" />

      <SelectField name="role" label="Role">
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="subscriber">Subscriber</option>
        <option value="contributor">Contributor</option>
      </SelectField>

      <TextAreaField name="bio" label="Bio" />

      <ButtonComponent tag="button" type="submit">
        Sign Up
      </ButtonComponent>
    </FormComponent>
  );
};

UserForm.propTypes = {
  initialValues: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default UserForm;
