// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import { useEffect, useState } from 'react';
import AddItems from './AddItems';

function App() {

        const[my,setmy]=useState(()=>{
          try{
            const total3=localStorage.getItem("lakshmi")
            return total3?JSON.parse(total3):[]
          }
          catch(e){
            console.log("localstorage error....",e)
          }
        })  

        const[course2,setcourse2]=useState("")
        const[fees2,setfees2]=useState("")

        function handlecreate(e){
          e.preventDefault()

          const total={
            id:Date.now(),
            course:course2,
            fees:fees2
          }
          setmy([...my,total])  
          alert("add succs")
          setcourse2("")
          setfees2("")

        }
    
        useEffect(()=>{
          const total2=JSON.stringify(my)
          localStorage.setItem("lakshmi",total2)
        },[my])

    function handledelete(h){
        console.log(h)

        const total=my.filter((j)=>{
            return j.id!==h
        })
        setmy(total)


        
    }

    

  return (
    <div className="App">
      <Header />
      <AddItems 
      course2={course2}
      setcourse2={setcourse2}
      fees2={fees2}
      setfees2={setfees2}
      handlecreate={handlecreate}
      />
      <Content 
      my23={my}
      handledelete={handledelete}
      />
    </div>
  );
}

export default App;