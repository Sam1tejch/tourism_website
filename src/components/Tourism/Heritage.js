import React ,{ useState } from 'react'
import Sites from './Sitedata'
import Site_props from './Site_props';


export default function Heritage() {
  const [sitesdata, setsitesdata] =  useState(Sites);
  return (
    <>
    <h1 style = {{margin: 30}}>Discover Top Destinations</h1>
     <Site_props sites = {Sites}/>
    </>
  )
}
