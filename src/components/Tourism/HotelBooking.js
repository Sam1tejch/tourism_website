import React from 'react'
import './Hotelbooking.css'

export default function HotelBooking() {
  return (
    <>
      <div className='body'>
        <div className='head'>
          <h2>Hotel Booking</h2>
          <h5>Experience something new every moment </h5>
        </div>
        <div id='form123'>
          <form>
            <div className="row">
              <label for="inputEmail4">Name</label>
              <div className="col">
                <input type="text" className="form-control form-control1" placeholder="First name" />
              </div>
              <div className="col">
                <input type="text" className="form-control form-control1" placeholder="Last name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control form-control1" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" className="form-control form-control1" id="inputPassword4" placeholder="Password" />
              </div>
            </div>

            <div className="form-row">

              <div className="form-group col-md-4">
                <label for="inputState">Room Type</label>
                <select id="inputState" className="form-control form-control1">
                  <option value="volvo">Standard Room (1 to 2 People)</option>
                  <option value="saab">Standard Room (1 to 2 People)</option>
                  <option value="fiat">Private Room (1 to 3 People)</option>
                  <option value="audi">Mix Dorm Room (6 People)</option>
                  <option value="audi">Female Dorm Room (6 People) </option>
                  <option value="audi">Male Dorm Room (6 People) </option>
                  <option>
                  </option>
                </select>
              </div>
              <div className="form-outline form-control1">
                <label className="form-label " for="typeNumber">Number of Guests</label>
                <input min="1" max="20" type="number" id="typeNumber" class="form-control guests" placeholder="1" />
              </div>
              <div className="form-group col-md-6 form-control1">
                <label for="inputPassword4">Arrival Date & Time</label>
                <input type="datetime-local" className="form-control form-control1" />
              </div>
              <div className="form-group col-md-6 form-control1">
                <label for="inputPassword4">Departure Date</label>
                <input type="date" className="form-control form-control1" />
              </div>
              <div className="form-group form-control1">
                <label for="exampleFormControlTextarea1">Special Requests</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="form-group form-control1">
              </div>
              <button type="submit" className="btn btn-primary form-control1 center">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
