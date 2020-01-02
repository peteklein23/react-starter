import React from 'react';

import UserForm from './UserForm';

const SignUpUserForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    role: 'subscriber',
    bio: ''
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="sign-up-form">
      <h1>New User Sign Up</h1>
      <UserForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default SignUpUserForm;
