import React,{Component} from "react";
import Navbar from "../components/Navbar/Navbar";
import Wallet from "../components/Wallet/Wallet";
import Footer from "../components/Footer/Footer";

class WalletPage extends Component{
    render(){
        return(
            <div>
            <Navbar/>
            <Wallet/>
            <Footer/>
            </div>

        );
    }
}
export default WalletPage