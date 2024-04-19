import React, { Component } from "react";

import Sidebar from "../components/App/Sidebar/Sidebar";
import IntroSection from "../components/App/IntroSection/IntroSection";
import FeaturesSection from "../components/App/FeaturesSection/FeaturesSection";
import MissionSection from "../components/App/MissionSection/MissionSection";
import ContactSection from "../components/App/ContactSection/ContactSection";
import Footer from "../components/App/Footer/Footer";




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