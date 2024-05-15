 import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar"
import Dashboard from "../components/Summary/Dashboard";
import Footer from "../components/Footer/Footer";

class DashboardPage extends Component {
    render() {
    return(
        <div>
            <Navbar a="Home" b="Send" c="Wallet" d="Activity" 
            img1="../../../img/téléchargement-removebg-preview.png"
             img2="../../../../img/images-removebg-preview.png" 
             btn="Log Out"
             e='none' f='none'
             
             />

            <body className='bodysend'>
            <Dashboard/>
            </body>
            <Footer/>
        </div>

    );
}}
export default DashboardPage