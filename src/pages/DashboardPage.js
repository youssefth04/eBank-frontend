import React, { Component } from "react";
import Navbar from "../components/App/Navbar/Navbar"
import Dashboard from "../components/App/Summary/Dashboard";
import Footer from "../components/App/Footer/Footer";

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