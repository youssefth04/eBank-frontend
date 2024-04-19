import React, { Component } from "react";

import LoginPopup from "../components/App/LoginPopup/LoginPopup";
import Footer from "../components/App/Footer/Footer";


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