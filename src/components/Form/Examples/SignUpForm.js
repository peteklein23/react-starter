import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextField from '../TextField';
import EmailField from '../EmailField';
import ButtonComponent from '../ButtonComponent';

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <TextField name="firstName">First Name</TextField>
        <TextField name="lastName">Last Name</TextField>
        <EmailField name="email">Email Address</EmailField>
        <ButtonComponent tag="button" type="submit">
          Submit
        </ButtonComponent>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
