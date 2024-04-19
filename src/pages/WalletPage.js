import React,{Component} from "react";
import Navbar from "../components/App/Navbar/Navbar";
import Wallet from "../components/App/Wallet/Wallet";
import Footer from "../components/App/Footer/Footer";

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