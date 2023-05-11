import React from 'react'
import './Tabs.css'

export default function Tabs() {
    return (
        <>
            <div className=''>
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/heritage">Heritage</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/hotelbooking">HotelBooking</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/gallery">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/gallery">How to Reach</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
