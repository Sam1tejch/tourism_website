import React from 'react'
import "./Square.css"

export default function Square(props) {
 
  return (
    <div onClick={props.onClick} className='Square' >
        <h1 >{props.value}</h1>
    </div>
  )
}

