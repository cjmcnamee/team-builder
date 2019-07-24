import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Card from './Components/Card';

function App() {

  let [teamMember, setTeamMember] = useState({});
  const [teamList, setTeamList] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

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
        setTeamMember({name, email, role});
        setTeamList([...teamList, teamMember]);
        setName('');
        setEmail('');
        setRole('');
        console.log(teamList);
  }

  return(
    <div>
      <Form
        name={name}
        email={email}
        role={role}
        teamMember={teamMember}
        teamList={teamList}
        nameChangeHandler={nameChangeHandler}
        emailChangeHandler={emailChangeHandler}
        roleChangeHandler={roleChangeHandler}
        submitHandler={submitHandler}
      />
      <div>
        <Card
          name={name}
          email={email}
          role={role}
          teamList={teamList}
        />
      </div>
    </div>
  )
}

export default App;
