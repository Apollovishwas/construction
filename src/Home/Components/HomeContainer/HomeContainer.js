import React from "react";
//importing all necessary home components;
import TopBar from "../TopBar/TopBar";
import HomeBanner from "../HomeBanner/HomeBanner";
import OurServices from "../OurServices/OurServices";
import HowItWorks from '../HowItWorks/HowItWorks';
import ContactUs from "../ContactUs/ContactUs";
import './HomeContainer.css';


export default function HomeContainer(){
    return (
        <div className="HomeContainer">
<TopBar/>
<HomeBanner/>
<OurServices/>
<HowItWorks/>
<ContactUs/>
        </div>
    )
}