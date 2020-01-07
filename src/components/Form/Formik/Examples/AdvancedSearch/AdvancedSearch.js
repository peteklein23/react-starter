import React from 'react';

import FormComponent from '../../FormComponent';
import SelectField from '../../SelectField';
import TextField from '../../TextField';
import CheckboxField from '../../CheckboxField';
import ToggleButtons from '../../ToggleButtons';
import ToggleButton from '../../ToggleButton';
import ButtonComponent from '../../../../Shared/ButtonComponent';
import DateField from '../../DateField';
import DateTimeField from '../../DateTimeField';
import TimeField from '../../TimeField';

const initialValues = {
  column: 'name',
  search: '',
  test: false,
  showDeletedContacts: 'hide',
  lastContactDate: '',
  testTime: '',
  testDateTime: ''
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

      <DateField name="lastContactDate" label="Last Contact Date" />
      <DateTimeField name="testDateTime" label="Test Date Time Field" />
      <TimeField name="testTime" label="Test Time Field" />

      <ButtonComponent type="submit">Search</ButtonComponent>
      <ButtonComponent type="reset">Reset All Filters</ButtonComponent>
    </FormComponent>
  );
};

export default AdvancedSearch;
