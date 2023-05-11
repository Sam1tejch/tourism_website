import React, { useState } from 'react'

export default function Prac() {
    const [text,textval] = useState('');
    const [arr, arrval] = useState([]);

    const Add = () =>{
        
        if(text.length == 0)
        {
            alert("input lenght must be greater than 0");
        }
        else
        {
            arrval((val) =>{
        
                return [...val,text];
              })
        }
      textval('');
    }
    const Change = (event) =>{
        textval(event.target.value);
    }

    const del = (id) => {
        console.log(id);
        arrval((val) => {
            return val.filter ((value,index )=>{
                return id !== index;
            })
        });  
    }
  return (
    <>
    
    <input type="text" placeholder='Enter item' value = {text} onChange = {Change} />
    <button onClick={Add}>Add </button>

    <ol>
        {
            arr.map((val,index) =>{
                return <li key = {index}>  {val} <button id = {index} onClick = {() => del(index)}>del</button></li>
         })
        }
    </ol>
    </>
  )
}
