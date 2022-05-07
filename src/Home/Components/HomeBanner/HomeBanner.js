import React from 'react';
import './HomeBanner.css';
import Typical from "react-typical";

export default function HomeBanner() {
    return(
        <div className='HomeBannerContainer'>
   <div className="titles">

<h1 className='cName'>VEGA</h1>
   <h2 className='typical'>
         <Typical
           loop={Infinity}
           steps={[
             "Drywall Repair",
             1500,
             "Painting",
             1500,
             "Floor Replacement",
             1500,
          
           ]}
         />
       </h2>
      <a href='tel:+16475740281'> <p><button class="btn btn-large">Get Free Estimate</button></p></a>
     </div>
        </div>
    )
}