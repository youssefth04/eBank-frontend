 import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar"
import Dashboard from "../components/Summary/Dashboard";
import Footer from "../components/Footer/Footer";
import Service from "../components/services/Service";

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
    }

    Logout = () => {
        this.service.Logout();
    };

    render() {
        return (
            <div>
                <Navbar 
                    a="Home" 
                    b="Send" 
                    c="Wallet" 
                    d="Activity" 
                    img1="../../../img/téléchargement-removebg-preview.png"
                    img2="../../../../img/images-removebg-preview.png" 
                    btn="Log Out"
                    e="none" 
                    f="none"
                    onLogout={this.Logout} 
                />

                <body className="bodysend">
                    <Dashboard />
                </body>
                <Footer />
            </div>
        );
    }
}

export default DashboardPage;