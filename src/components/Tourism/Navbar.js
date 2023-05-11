import React from 'react'
import Logo from './images/Logo.png'
import './Navbar.css'
import Tabs from './Tabs'

export default function Navbar() {
    
    return (
        
       <>
        <div className='container-fluid' style = {{padding: 4}}>
               <img id = "imglogo" src={Logo} alt="logo" />
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search place to visit" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>            
        </div>
        <Tabs/>
        <div id = 'box' ></div>
       
       </>
    )
}
