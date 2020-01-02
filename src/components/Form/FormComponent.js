import React from 'react';
import { Formik, Form } from 'formik';

const FormComponent = ({
  initialValues,
  onSubmit,
  validationSchema,
  children
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

export default FormComponent;
