import React, { useState } from "react";
import {Outlet, Link} from 'react-router-dom';
import './dashboard.scss';

import logo from '../../core/assets/icons/logo__header-dash.png';

const Dashboard = ()=>{

    
    const user=JSON.parse(localStorage.getItem('user'));
    
    const logout = ()=>{
        localStorage.removeItem('user');
    }
    

    return(
        <>

            <header>

                <nav>
                    <ul>
                        <li>
                            <img src={logo}  width='90px' height='68.76px'/>
                        </li>

                        <li><Link to='redacoes/listar' >Redações</Link></li>
                        <li>Ilustrações</li>
                    </ul>
                </nav>

                <div>
                    Olá, {user.username}
                </div>


                <button onClick={logout}>
                    Logout
                 </button>

            </header>


            <Outlet/>
            
            
            
        </>
    );
}

export {Dashboard};
