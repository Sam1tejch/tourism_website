import React, { useState } from 'react'
export default function Todo() {
    
  const [inputList, setInputList] = useState('');
  const [Items, setLists] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);

  };
  const handleonAdd = () =>{
    
    setLists((oldi) => {
      return[...oldi,inputList];
    }) 

    aa((val) =>{
      return[...val,10];
    })
  };
  console.log(a);

  return (
    <>
    <h2>Todo List</h2>
    <br />
    <input type="text" placeholder='Add item' value={inputList} onChange={itemEvent} />
    <span className="buttons mx-3">
    <button  onClick={handleonAdd}>+</button>
    </span>
        <ul>
        {
            Items.map((p) => {
            return <li key = {p.toString()}>{p}</li>
         })}
        </ul>
    </>
  )
}
