import React from 'react';

import './App.css';
import SignUpUserForm from './components/Examples/UserForm/SignUpUserForm';
import AdvancedSearch from './components/Examples/AdvancedSearch/AdvancedSearch';
import Todo from './components/Examples/Todo';
import UserList from './components/Examples/UserList';

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
