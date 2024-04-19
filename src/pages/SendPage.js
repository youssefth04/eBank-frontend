import React, { Component } from "react";
 import Navbar from "../components/App/Navbar/Navbar";
import Transfer from "../components/App/Transfer/Transfer";
import Footer from "../components/App/Footer/Footer";
import CurrencyConverter from "../components/App/CurrencyConverter/CurrencyConverter";



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