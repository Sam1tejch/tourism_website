import React, { useState } from 'react'
import ToDoList from './ToDoList';

export default function Todo2() {
    const [list,uselist] = useState('');
    const [all,useall] = useState([]);

    const fun1 = (event)=>{
        uselist(event.target.value);
    }
    const handleonAdd = ()=>{
        useall((val) => {
            return [...val,list];
            
        });
        uselist("");
    }
    const del = (id) =>{
         console.log(id);

         
         useall((val) => {
            return val.filter ((value,index )=>{
                return id != index;
            })
        });
         
         
     }

  return (
    <>
    <h2>Todo list</h2>
    <br />
    <input type="text" placeholder='Add item' value = {list} onChange = {fun1} />
    <button onClick = {handleonAdd}> + </button>
    <ol>
        {
            all.map((p,index)=>{
              return <ToDoList key = {index}
              id = {index}
               text = {p} 
               onSelect = {del}
               
               />
            })
        }
    </ol>
    </>
  )
}
