import React from 'react'

export default function Dateex(props) {
  const current = new Date();
  console.log(current);

  const showTime = `${current.getHours()}/${current.getMinutes()}/${current.getSeconds()}`;

  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
   <>
   <h1>Hello, {props.name} {props.caste}  is bad</h1>
   <span>Current date is {date} </span> 
   <br />
   <span>Current time is {showTime} </span> 
   </>
  )
}
