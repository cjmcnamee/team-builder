import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form';
import MemberList from './Components/MemberList';

function App() {
  const [members, setMembers] = useState([{id: 1, name: "Connor", email: "cjmc@email.com", role: "black mage" }])
  const [idCount, setIdCount] = useState(2);
  const [memberToEdit, switchMember] = useState()
  const [isEditing, setEdit] = useState(false)

  const addToList = (member) => {
    if (isEditing) {
      setMembers(member)
    } else {
      setMembers([...members, {...member, id: idCount}])
    }
  }

  const editTrue = (id) => {
    setEdit(true)
    switchMember(id)
  }

  const editFalse = () => {
    setEdit(false)
    switchMember(null)
  }
  return(
    <div className="App">
      <Form members={members} addToList={addToList} idCount={idCount} setIdCount={setIdCount} memberToEdit={memberToEdit} isEditing={isEditing} editFalse={editFalse}/>
      <MemberList members={members} editTrue={editTrue}/>
    </div>
  );
}

export default App;
