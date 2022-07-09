import React, { useState } from "react";
import {Outlet, Link, NavLink} from 'react-router-dom';
import './dashboard.scss';

import logo from '../../core/assets/icons/logo__header-dash.png';

import TostDash from "../../components/TostDash";

const Dashboard = ()=>{

    
    const user=JSON.parse(localStorage.getItem('user'));

    const [trigger, setTrigger] = useState(false);
    
    

    return(
        <>
            <div className="dashboard">

                <header className="dashboard__header">

                    <nav className="dashboard__nav">
                        <ul className="dashboard__nav__ul">
                            <li>
                                <img src={logo}  width='90px' height='68.76px'/>
                            </li>

                            <li>
                                <NavLink to='redacoes'
                                className={({ isActive }) =>
                                isActive ? 'dashboard__nav__redacoes--active' :
                                           'dashboard__nav__redacoes--deactive'
                                } >
                                    Redações
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='ilustracoes'
                                className={({ isActive }) =>
                                isActive ? 'dashboard__nav__ilustracoes--active' :
                                           'dashboard__nav__ilustracoes--deactive'
                                } >
                                    Ilustrações
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="dashboard__user">
                        
                        <details open={trigger} className="dashboard__user__details" >
                            <summary onClick={()=>setTrigger(true)}>
                                Olá, {user.username}
                            </summary>

                            <TostDash trigger={trigger} setTrigger={setTrigger} />

                        </details>

                    </div>

                </header>


                <Outlet/>
            
            
            </div>
            
        </>
    );
}

export {Dashboard};
