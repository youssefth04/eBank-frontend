import React, { Component } from "react";
 import Navbar from "../components/Navbar/Navbar";
import Transfer from "../components/Transfer/Transfer";
import Footer from "../components/Footer/Footer";
import CurrencyConverter from "../components/CurrencyConverter/CurrencyConverter";



class SendPage extends Component {
    render() {
    return(
 <div>
            <Navbar/>
    <div className=" bodysend">
         <div className="container">
             <div className="item">
                 <Transfer/>
             </div>
         <div className="item">
                <CurrencyConverter />
         </div>
      </div>
      </div>
      <Footer/>
      </div>

    );
}
}
export default SendPage