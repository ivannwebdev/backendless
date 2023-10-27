import React, { useState } from 'react'
import './dummyList.css'

const DummyList = () => {
  const [items] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Jill' },
    { id: 4, name: 'Frank' },
    { id: 5, name: 'Margot' },
    { id: 6, name: 'Kate' },
    { id: 7, name: 'Jorge' },
  ])

  return (
    <div className="list-wrapper">
      <h2>Dummy List</h2>
      <ul className='list'>
        {
          items.map(({ id, name }) =>
            <li key={`${id}`}>
              {name}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default DummyList
