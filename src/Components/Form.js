import React, { useState } from 'react';

function Form( {name, email, role, teamMember, teamList, nameChangeHandler, emailChangeHandler, roleChangeHandler, submitHandler} ) {

  return (
    <div className="App">
      <form onSubmit={event => submitHandler(event)}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => nameChangeHandler(event)} />
          <br />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={event => emailChangeHandler(event)} />
          <br />
        </label>
        <label>
          Role:
          <input type="text" value={role} onChange={event => roleChangeHandler(event)} />
          <br />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
