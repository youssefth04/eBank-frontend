import React,{Component} from "react";
 
class Sidebar extends Component{
	render(){
    return(
        <section id="sidebar">
        <div className="inner">
            <nav>
                <ul>
                    <li><a href="index.html"><img alt="logoo" src="../../../img/hh.png" style={{ height: "10em", width: "20em", marginBottom: "2em", marginTop: "-2.2em", marginRight: "4em", marginLeft: "2em" }} /></a></li>
                    <li><a href="#intro">Home</a></li>
                    <li><a href="#two">Why us</a></li>
                    <li><a href="#one">about</a></li>
                    <li><a href="#three">contact</a></li>
                    <li style={{ marginLeft: "20em" }}><a href="#three">help</a></li>
                    <li><a href="#three">what's new</a></li>
                    <li><a href="#three"><button style={{ backgroundColor: "#00457C", fontSize: "0.8em" }}> language</button></a></li>
                </ul>
            </nav>
        </div>
    </section>


    );
}
}
 export default Sidebar