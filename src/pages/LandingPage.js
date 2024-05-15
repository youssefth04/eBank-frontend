import React, { Component } from "react";
import IntroSection from "../components/IntroSection/IntroSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import MissionSection from "../components/MissionSection/MissionSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";




class LandingPage extends Component {
    render() {
    return(
        <div>
        <Navbar a="Home" b=" Why Us" c="About" d="Contact" btn=" Language" img1="none" img2="2" e="help" f="What's New" />
        <IntroSection/>
        <FeaturesSection/>
        <MissionSection/>
        <ContactSection/>
        <Footer/>
        </div>

    );
}}
 export default LandingPage