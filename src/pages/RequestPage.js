import React,{Component} from "react";
import Footer from "../components/App/Footer/Footer";
import Navbar from "../components/App/Navbar/Navbar";
import Request from "../components/App/Request/Request";
import CurrencyConverter from "../components/App/CurrencyConverter/CurrencyConverter";

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