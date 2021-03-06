import React, {Fragment} from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";

import imgCadastro from '../../core/assets/img/imagem_cadastro.png'
import backArrow from '../../core/assets/icons/backArrow.png';
import logoCadastro from '../../core/assets/icons/logo_cadastro.png';

import './cadastro.scss';

import Professor from "../Cadastro__Professor";
import Ilustrador from "../Cadastro__Ilustrador";


import { FormCadastroActions, useCadastro } from "../../core/utils/contextCadastro";

const Cadastro = () => {

    const location = useLocation();

    const navigate = useNavigate();
    
    const {state, dispatch } = useCadastro();

    const handleClickCadastro = () =>{

        if(state.profession === 'professor'){
            
            navigate('professor/step1')
        }
        else if(state.profession === 'ilustrador'){
            navigate('ilustrador/step1')
        }
        else{
            alert('Escolha uma opção para continuar')
        }

    };

    const handleChange = (event) => {
        dispatch({
            type: FormCadastroActions.setProfession,
            payload: event.target.value
        });
    };

    return (
        <Fragment>
            <div className="cadastro" >

                <div className="cadastro__banner">
                    <img width='681' height='454' className="banner__img" src={imgCadastro}/>
                    <h2>
                        Redação ilustrada
                    </h2>
                    <p>
                        Bem-vindo(a), o MinhaCena.Org é uma organização sem fins lucrativos,
                        que conecta professores de Português e Artes à Ilustradores voluntários.
                    </p>
                </div>

                <div className="cadastro__form">

                   {(location.pathname === "/cadastro") &&
                        <div className="cadastro__form__inicialStep">

                            <Link className="cadastro__form__backArrow" to='/'>
                                <img src={backArrow} />
                            </Link>

                            <div className="form">
                                <img width='178' height='136' className="logo" src={logoCadastro} />
                                
                                <h2>
                                    Fazer cadastro como:
                                </h2>
                                    

                                <label className="checkedProfessor">
                                    Professor(a):
                                    
                                    
                                    <input 
                                        className="professor"
                                        type="radio" 
                                        value="professor" 
                                        checked = {state.profession === "professor"}
                                        onChange={handleChange} 
                                        /> 
                                    <span className="checkmark"></span>
                                </label>
                                
                                <label className="checkedIlustrador">

                                    Ilustrador(a):    
                                    <input 
                                        type="radio"
                                        value="ilustrador"
                                        checked = {state.profession === "ilustrador"}
                                        onChange={handleChange} 
                                        />
                                    <span className="checkmark"></span> 

                                </label>


                                <button style={state.profession === "professor"?
                                                {background:"#0D25B9"}
                                                :state.profession === "ilustrador"?
                                                {background:"#A84E97"}:
                                                {background:"##C6C5CE"}
                                                }
                                        onClick={handleClickCadastro}>

                                    Próximo
                                </button>
                                
                            </div>
                            
                            
                        </div>    
                    }
                     
                    <Outlet/>

                </div>
            </div>
        </Fragment>
    );
}

export default Cadastro