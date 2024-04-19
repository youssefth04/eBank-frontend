import React, { Component } from "react";

import LoginPopup from "../components/LoginPopup/LoginPopup";
import Footer from "../components/Footer/Footer";


class LoginPage extends Component {
    render() {
    return(
        <div>
          
            <LoginPopup/>
            <Footer/>
        </div>

    );
}}
export default LoginPage