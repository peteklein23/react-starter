import React from 'react';
import './App.css';
import SignUpForm from './components/Form/Examples/SignUpForm';
import Todo from './components/Form/Examples/Todo';
import UserList from './components/Navigation/Examples/UserList/UserList';

function App() {
  return (
    <div className="App">
      <SignUpForm onSubmit={() => alert('submit')} initialValues={{}}>
        <div>What's up?</div>
        <button type="submit">Submit</button>
      </SignUpForm>
      <Todo />
      <UserList />
    </div>
  );
}

export default App;
