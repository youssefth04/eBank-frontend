import React, { Component } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import IntroSection from "../components/IntroSection/IntroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import MissionSection from "../components/MissionSection/MissionSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";




class LandingPage extends Component {
    render() {
    return(
        <div>
        <Sidebar/>
        <IntroSection/>
        <FeaturesSection/>
        <MissionSection/>
        <ContactSection/>
        <Footer/>
        </div>

    );
}}
 export default LandingPage