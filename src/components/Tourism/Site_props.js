import React from 'react'
import './Heritage.css'
import kashi_vishwanath from './images/kashi-vishwanath.jpg'


export default function site_props({ sites }) {
 
  return (
    <>
     <div className='box1'>
      {sites.map((currelm) => {       
        return (
          <>
            <div className="cards" key = "currelm.id">
              <img id = "imgs" src= {currelm.image}   alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{currelm.name_}</h5>
                  <p className="card-text">{currelm.desc}</p>
                  <a href={currelm.link} target="_blank" ><button type="button" class="btn btn-success">Explore</button></a>
                </div>
            </div>
          </>

        );

      })}
      </div>
    </>
  )
}
