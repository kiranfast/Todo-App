import React from 'react'

function User({name,age,email,phone}) {
  return <div>
    <h2> {name}</h2>
    <h1>{age}</h1>
    <h4>{email}</h4>
    <h3> {phone} </h3>
  </div>
  }

export default User;
