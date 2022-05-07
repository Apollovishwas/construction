import React from 'react';
import './ContactUs.css';


export default function ContactUs() {
    return (
        <div>
            <h1 className='cuTitle'>Contact Us</h1>
        <div className='ContactUsContainer'>

<div className="Address">
    <p className="addressText">Vega contstructions,</p>
    <p className="addressText">77 huntley St,</p>
    <p className="addressText">Toronto,</p>
    <p className="addressText">Ontario, Canada.</p>
    </div>
    <div className='PhoneNumbers'>
        <p className='phoneText'>Ivan Galicica : Gay's Phone number</p>
        <p className='phoneText'>Vishwas : +16475740281</p>
        </div>


        <div className='PhoneNumbers'>
        <p className='phoneText'>Ivan Galicica :ivancoronel962@gmail.com</p>
        <p className='phoneText'>Vishwas : apollovishwas@gmail.com</p>
        </div>
        </div>
        </div>
    )
}