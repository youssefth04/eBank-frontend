 import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar"
import Dashboard from "../components/Summary/Dashboard";
import Footer from "../components/Footer/Footer";

class DashboardPage extends Component {
    render() {
    return(
        <div>
            <Navbar/>
            <body className='bodysend'>
            <Dashboard/>
            </body>
            <Footer/>
        </div>

    );
}}
export default DashboardPage