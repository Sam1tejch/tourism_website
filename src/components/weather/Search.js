import React, { useState } from 'react'
import './Search.css'

export default function Search() {
    const [city, cityval] = useState("");
    const itemEvent = (event) => {
        cityval(event.target.value);
        console.log(city);

    }
    return (
        <>
            <div className='search'>
                <input type="text" placeholder='Enter City ' value={city} onChange={itemEvent} />
                <button className='button my-3'>Search</button>
            </div>
           <div className='result text-center '>
            <div className='shadow rounded resultbox '>
               <h2 className='city'>Varanshi</h2>
               <h1 className='temp'>25</h1>
            </div>
           </div>
        </>
    )
}
