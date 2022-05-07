import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './OurServices.css'

export default function OurServices() {
    
    const options = {
        loop: true,
        margin: 0,
        nav: false,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: false,
        autoplay: true,
        smartSpeed: 700,
   
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      };


    return(
        <div className='ourServices'>
            <div className='ourServicesContainer'>
          <h1 className="designTitle">Our Services</h1>
         
          
         
          <OwlCarousel className='theCarousal'{...options}>
              <div className='One'>
                  <img src={'https://i.ibb.co/CnhJ6QC/Floor.png'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/BfmCw6w/Floor-4.png'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/3vtZSJH/Floor-2.png'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/S5bPmhV/Floor-3.png'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/BftLgTy/Floor-5.png'} alt = 'no interet'/>
              </div>
              <div className='One'>
                  <img src={'https://i.ibb.co/h1dqGz6/Floor-7.png'} alt = 'no interet'/>
              </div>
             
</OwlCarousel>
</div>
        </div>
    )
}