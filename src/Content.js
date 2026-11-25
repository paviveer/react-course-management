import React from 'react'

const Content = ({my23, handledelete}) => {
  return (
    <div>
      <h2>Course Details</h2>

      {my23.map((item) => (
        <div key={item.id}>
          <h3>Course: {item.course}</h3>
          <p>Fees: {item.fees}</p>

          <button onClick={() => handledelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Content