import React, { useState } from 'react'
import "./Tictac.css"

import Square from './Square.js'
import Ticbut from './Ticbut.js'



export default function Tictac() {
  const [rows,rowsval] = useState(Array(9).fill(null));
  const [isturn,setisturn] = useState(true);

  const checkwinner  = () =>{
    const winnerlogic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

   for(let logic of winnerlogic)
   {
    const [a,b,c] = logic;
    if(rows[a] === rows[b] && rows[b] === rows[c] && rows[a] !== null)
    return rows[a];
   }
   
   return null;

  }

  const iswinner = checkwinner();

  const playAgain = () =>{
    const copy = Array(9).fill(null);
    rowsval(copy);
  }
 

  const mark = (value) => {
    
    const copy = [...rows];
    if((copy[value] !== null) || ( iswinner !== null))
      console.log("already filled");
    
    else
    {
      copy[value] = isturn ? "X":"0";
      rowsval(copy);
      setisturn(!isturn);
    }
  }
  return (
    <>
      <div className="board">
       {
        iswinner ? (<>
        {iswinner} won the game
        </>):
        (<>
         <div className="row">
          <Square  onClick = {()=> mark(0)} value = {rows[0]} rc = '11' />
          <Square  onClick = {()=> mark(1)} value = {rows[1]} rc = '12' />
          <Square  onClick = {()=> mark(2)} value = {rows[2]} rc = '13' />
        </div>
        <div className="row">
          <Square  onClick = {()=> mark(3)} value = {rows[3]} rc = '21'/>
          <Square  onClick = {()=> mark(4)} value = {rows[4]} rc = '22'/>
          <Square  onClick = {()=> mark(5)} value = {rows[5]} rc = '23' />
        </div>
        <div className="row">
          <Square onClick = {()=> mark(6)} value = {rows[6]} rc = '31'/>
          <Square onClick = {()=> mark(7)} value = {rows[7]} rc = '32'/>
          <Square onClick = {()=> mark(8)} value = {rows[8]} rc =  '33'/>
        </div>
        </>)
       }
      </div>
       <div>
        <Ticbut playAgain = {playAgain}/>
       </div>
    </>
  )
}
