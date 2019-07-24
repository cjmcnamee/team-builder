import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');
  const [role, setRole] = useState('role');

  const nameChangeHandler = event => {
    setName(event.target.value);
  };

  const emailChangeHandler = event => {
    setEmail(event.target.value);
  };

  const roleChangeHandler = event => {
    setRole(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(role);
  }

  return (
    <div className="App">
      <form onSubmit={event => submitHandler(event)}>
        <label>
          Name:
          <input type="text" onChange={event => nameChangeHandler(event)} />
        </label>
        <label>
          Email:
          <input type="text" onChange={event => emailChangeHandler(event)} />
        </label>
        <label>
          Role:
          <input type="text" onChange={event => roleChangeHandler(event)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
