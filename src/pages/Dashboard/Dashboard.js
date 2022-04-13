import React, { useState } from "react";
import './dashboard.scss';

const Dashboard = ()=>{

    
    const user=JSON.parse(localStorage.getItem('user'));
    
    const logout = ()=>{
        localStorage.removeItem('user');
    }
    

    return(
        <>
            <h1>Dashboard</h1>
            <div>Bem vindo {user.username} </div>
            
            <button onClick={logout}>

                Logout
            </button>
        </>
    );
}

export {Dashboard};
