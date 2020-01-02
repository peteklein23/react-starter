import React from 'react';

import FormComponent from '../../Form/FormComponent';
import SelectField from '../../Form/SelectField';
import TextField from '../../Form/TextField';
import CheckboxField from '../../Form/CheckboxField';
import ToggleButtons from '../../Form/ToggleButtons';
import ToggleButton from '../../Form/ToggleButton';
import ButtonComponent from '../../Form/ButtonComponent';

const initialValues = {
  column: 'name',
  search: '',
  test: false,
  showDeletedContacts: 'hide'
};

const AdvancedSearch = () => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <FormComponent initialValues={initialValues} onSubmit={onSubmit}>
      <h1>Filter By</h1>
      <SelectField name="column">
        <option value="name">Name</option>
        <option value="email">Email</option>
      </SelectField>

      <TextField name="search" placeholder="search" />
      <CheckboxField name="test" label="checkbox" />

      <ToggleButtons name="showDeletedContacts">
        <ToggleButton label="Show" value="show" />
        <ToggleButton label="Hide" value="hide" />
      </ToggleButtons>

      <ButtonComponent type="submit">Search</ButtonComponent>
      <ButtonComponent type="reset">Reset All Filters</ButtonComponent>
    </FormComponent>
  );
};

export default AdvancedSearch;
