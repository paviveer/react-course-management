import React from 'react'

 

const AddItems = ({course2,setcourse2,fees2,setfees2,handlecreate}) => {
  return (
    <div>
        <form onSubmit={handlecreate}>
            <input 
            value={course2}
            placeholder='enter ur course...'
            onChange={(k)=>setcourse2(k.target.value)}
            />

              <input 
            value={fees2}
            placeholder='enter ur fees...'
            onChange={(j)=>setfees2(j.target.value)}
            />
            <button type='submit'>save</button>
        </form>
      
    </div>
  )
}

export default AddItems