import React, { useState } from 'react'
import './dummyTable.css'

const DummyTable = () => {
  const [users] = useState([
    { id: 1, name: 'Iven', email: 'vlablabla@gmail.com' },
    { id: 2, name: 'Andrew', email: 'hehehebla@gmail.com' },
    { id: 3, name: 'Jordan', email: 'haaaaaai@gmail.com' },
    { id: 4, name: 'Viniamin', email: 'lolitsme@gmail.com' },
    { id: 5, name: 'Kiera', email: 'supdude@gmail.com' }
  ])

  return (
    <table className='table'>
      <caption>Dummy Table</caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(({ id, name, email }) =>
            <tr key={`${id}`}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default DummyTable
