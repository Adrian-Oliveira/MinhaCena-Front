import React, {Fragment} from "react";
import { Outlet } from "react-router-dom";

import imgCadastro from '../../core/assets/img/imagem_cadastro.png'
import logoCadastro from '../../core/assets/icons/logo_cadastro.png'

import './cadastro.scss'

import Professor from "../Professor";
import Ilustrador from "../Ilustrador";


import { FromCadastroActions, useCadastro } from "../../core/utils/contextCadastro";

const Cadastro = () => {
    
    const {state, dispatch } = useCadastro();

    const handleChange = (event) => {
        dispatch({
            type: FromCadastroActions.setProfession,
            payload: event.target.value
        });
    };

    return (
        <Fragment>
            <div className="cadastro" >

                <div className="bannerCadastro">
                    <img className="imgCadastro" src={imgCadastro}/>
                    <h2>
                        Redação ilustrada
                    </h2>
                    <p>
                        Bem-vindo(a), o MinhaCena.Org é uma organização sem fins lucrativos,
                        que conecta professores de Português e Artes à Ilustradores voluntários.
                    </p>
                </div>

                <div className="formCadastro">
                    <img className="logoForm" src={logoCadastro} />
                    
                    <h1>Profissão: {state.profession} </h1>

                    <label>
                        <input 
                            type='text'
                            onChange={handleChange}
                        />
                        
                    </label>

                    <Outlet/>

                </div>
            </div>
        </Fragment>
    );
}

export default Cadastro