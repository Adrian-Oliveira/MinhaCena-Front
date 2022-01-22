import React, {Fragment} from "react";
import { Outlet } from "react-router-dom";

import imgCadastro from '../../core/assets/img/imagem_cadastro.png'
import logoCadastro from '../../core/assets/icons/logo_cadastro.png'

import './cadastro.scss'

import Professor from "../Professor";
import Ilustrador from "../Ilustrador";

const Cadastro = () => {
    
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
                    
                    <Outlet/>

                </div>
            </div>
        </Fragment>
    );
}

export default Cadastro