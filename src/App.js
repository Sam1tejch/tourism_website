
import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Heritage from './components/Tourism/Heritage'
import Gallery from './components/Tourism/Gallery'
import Home from './components/Tourism/Home'
import Navbar from './components/Tourism//Navbar'
import Footer from './components/Tourism/Footer'
import HotelBooking from './components/Tourism/HotelBooking';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/heritage' element={<Heritage />} />
          <Route path='/hotelbooking' element={<HotelBooking />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
        <Footer/>
      </>
     
    )
  }
}
