import React from 'react'

const MemberCard = ({member, editTrue}) => {
  return (
    <div>
      <h3>{member.name}</h3>
      <p>{member.email}</p>
      <p>{member.role}</p>
      <p>{member.id}</p>
      <button onClick={() => editTrue(member.id)}>Edit</button>
    </div>
  )
}

export default MemberCard;
