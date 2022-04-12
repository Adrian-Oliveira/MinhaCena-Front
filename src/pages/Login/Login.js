import React, { useState } from "react";
import './login.scss';

import backArrow from '../../core/assets/icons/backArrowGrey100.png';
import logo from '../../core/assets/icons/logo1.png'
import { Link } from "react-router-dom";

const Login = ()=>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <div className="login">


                <Link to='home' >
                    <img src={backArrow} className='login__backArrow' />
                </Link>

                <img width='234' height='206' src={logo} />

                <div className="login__form">
                    <h1 className="login__form--title">Seja bem-vindo(a)</h1>
                
                    <label className="login__label">
                        Email
                        <input 
                        type='email'
                        placeholder="Digite seu e-mail"
                        onChange={(e)=> setUsername(e.target.value) }
                        />
                    </label>

                    <label className="login__label">
                        Senha
                        <input 
                        type='password'
                        placeholder="Digite sua senha"
                        onChange={(e)=> setPassword(e.target.value) }
                        />
                    </label>

                    <button className="login__button" disabled={!username || !password} >
                        Entrar
                    </button>

                </div>
            </div>
        </>
    );
}


export {Login};
