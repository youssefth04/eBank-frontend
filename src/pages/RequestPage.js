import React,{Component} from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Request from "../components/Request/Request";
import CurrencyConverter from "../components/CurrencyConverter/CurrencyConverter";

class RequestPage extends Component{
    render(){
        return(
            <div>
                       <Navbar/>
               <div className=" bodysend">
                    <div className="container">
                        <div className="item">
                            <Request/>
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
export default RequestPage