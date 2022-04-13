import React, { useState } from "react";
import './dashboard.scss';

import logo from '../../core/assets/icons/logo_cadastro.png';
import itemPesquisa from '../../core/assets/icons/item__pesquisa.png'

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

                        <li>Redações</li>
                        <li>Ilustrações</li>
                    </ul>
                </nav>

                <div>
                    Olá, {user.username}
                </div>


            </header>

            <div>

                <input type='text'
                    placeholder="Buscar redação: Tema, titulo, aluno, etc..." />
                <img src={itemPesquisa} />
            </div>
                
            <button>Publicar nova redação</button>

            <button onClick={logout}>
                Logout
            </button>

            <h1>Dashboard</h1>

            
            
        </>
    );
}

export {Dashboard};
