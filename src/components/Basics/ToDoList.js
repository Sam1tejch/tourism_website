import React from 'react'

export default function ToDoList(props) {
 
  return (
         <>
         <div>
         <li>{props.text}  
         <button onClick={ () => props.onSelect(props.id)}>X</button></li>
         
         </div>
         </>
  )
};
