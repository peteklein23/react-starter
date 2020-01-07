import React from 'react';

import './App.css';
import SignUpUserForm from './components/Form/Formik/Examples/UserForm/SignUpUserForm';
import AdvancedSearch from './components/Form/Formik/Examples/AdvancedSearch/AdvancedSearch';
import Todo from './components/Form/Formik/Examples/Todo';
import UserList from './components/Pagination/Examples/UserList';

function App() {
  return (
    <div className="app">
      <AdvancedSearch />
      <SignUpUserForm />
      <Todo />
      <UserList />
    </div>
  );
}

export default App;
