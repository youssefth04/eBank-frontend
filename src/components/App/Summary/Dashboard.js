import React,{Component} from "react";
 
class Dashboard extends Component{
	render(){
    return(
        <div>
      
        <div className="container">
          <div className="item">
            <h2>Balance</h2>
            <h1>0,00 USD</h1>
            <h5>available</h5>
            <button>transfer funds</button>
          </div>
          
          <div className="item">
            <a href="transfer"><button className="sendbtn">Send</button></a>
            <a href="request"><button className="requestbtn">Request</button></a>
            <br />
      
            <a href="wallet" className="image-link">
              <img src="../../../img/addcard.png" style={{ height: "5em" }} alt="Add card or bank" />
              <h4>add card or bank</h4>
            </a>
      
            <a href="aa" className="image-link">
              <img src="../../../img/invoice.png" style={{ height: "5em" }} alt="Create an invoice" />
              <h4>create an invoice</h4>
            </a>
          </div>
      
          <div className="item">
            <h2>Recent activity</h2>
            <h3>See when money comes in, and when it goes out. You’ll find your recent activity here.</h3>
            <a href="activiy.html">show all</a>
          </div>
      
          <div className="item">
            <a href="wallet"><h3>Banks and cards</h3>
            <img src="../../../img/cardlink.png" alt="img"></img></a>
            <h4>send payments more securely. Link your credit card now.</h4>
            <a href="wallet">Link a card or Bank</a>
          </div>
        </div>
        
      </div>

    );
}
}
export default Dashboard