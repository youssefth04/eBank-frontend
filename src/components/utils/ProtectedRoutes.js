import React, { Component } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Service from "../services/Service";

class ProtectedRoutes extends Component {
    constructor(props){
        super(props);
        this.state={
            isauthenticated:''
        }
    this.Service= new Service;
    }
    handlesession=()=>{
    const response= this.Service.checkCredentialCall(localStorage.getItem('session token'))
    if(response=='Authenticated'){
        <Outlet/> 
    }
    else{}
}

 }
    


  
export default ProtectedRoutes;