import React from 'react';

import FormField from './FormField';

const TextField = ({ ...props }) => {
  return (
    <div className="text-field">
      <FormField type="text" {...props} />
    </div>
  );
};

export default TextField;
