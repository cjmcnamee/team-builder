import React, { useState, useEffect } from 'react';

const Form = ({members, addToList, idCount, setIdCount, memberToEdit, isEditing, editFalse}) => {
  const [member, setMember] = useState({name: "", email: "", role: ""});

  const inputHandler = (e) => {
    setMember({...member, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    addToList(member)
    setIdCount(idCount + 1)
    setMember({name: "", email: "", role: ""})
  }

  const editHandler = (e) => {
    e.preventDefault()
    let copy = members
    let index = member.id - 1
    copy.splice(index, 1, member)
    addToList(copy)
    setMember({name: "", email: "", role: ""})
    editFalse()
  }

  useEffect(() => {
    if (isEditing) {
      const member2Edit = members.filter(m => m.id === memberToEdit)[0]
      setMember(member2Edit)
    }
  }, [isEditing, members, memberToEdit])

  return (
      <form onSubmit={isEditing ? editHandler : submitHandler}>
        <input type="text" placeholder="name" name="name" value={member.name} onChange={inputHandler}/>
        <input type="email" placeholder="email" name="email" value={member.email} onChange={inputHandler}/>
        <input type="text" placeholder="role" name="role" value={member.role} onChange={inputHandler}/>
        <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
      </form>
  )
}

export default Form;
