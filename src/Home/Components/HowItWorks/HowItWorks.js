import React from 'react';
import './HowItWorks.css';


export default function HowItWorks() {
    return(
        <div>
        <h1 className="hiwTitle">How it Works</h1>
        <div className='howItWorksContainer'>
           
            <div className="content">
               <h1>1</h1>
               <h2>Understanding your requirements</h2>
               <p>Renovation is not a straightjacket formula. Understanding your in-depth renovation requirements is the first step towards creating a dream place!</p>
                </div>
                <div className="content">
               <h1>2</h1>
               <h2>Assessment and planning</h2>
               <p>We sharpen the axe before cutting the tree. Our professionals make a well-defined plan, including budget, deadlines, colour scheme, materials and style</p>
                </div>

                <div className="content">
               <h1>3</h1>
               <h2>Action and
warranties!</h2>
               <p>Providing you with international standard renovation within a timeframe with warranties and excellent after-sale services! Our clients says, our after work services are the best</p>
                </div>

        </div>
        </div>
    ) 
}