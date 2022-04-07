import React,{ Fragment, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import backArrow from '../../core/assets/icons/backArrow.png';
import imgStep2 from '../../core/assets/icons/cadastro__ilustrador__step2.png';

import {FormCadastroActions, useCadastro } from '../../core/utils/contextCadastro'


const IlustradorStep2 = ()=>{

    const navigate = useNavigate();

    const {state, dispatch} = useCadastro();

    useEffect(()=>{
        if(state.name === '' || state.rg === '' || state.birthday === ''  ||  state.email === ''){
            navigate('../step1')
        }

    }, [])

    
    const handleClickNextStep = () =>{
        if(state.portfolio === '' || state.socialnetwork === '' || state.contact === ''){

            alert(`Preencha todos os campos`);
        }
        else{
            
            navigate('../step3')
        }
    }

    const handleChangePortfolio = (event) => {
        dispatch({
            type: FormCadastroActions.setPortfolio,
            payload: event.target.value
        });
    };

    const handleChangeSocialNetwork = (event) => {
        dispatch({
            type: FormCadastroActions.setSocialNetwork,
            payload: event.target.value
        });
    };

    const handleChangeContact = (event) => {
        dispatch({
            type: FormCadastroActions.setContact,
            payload: event.target.value
        });
    };

    return(
        <Fragment>   

            <Link className="cadastro__ilustrador__backArrow" to='../step1'>
                <img src={backArrow} />
            </Link>

            <img className="cadastro__ilustrador__image" 
                src={imgStep2}
                width='342' height='54'  />

            <label className="cadastro__ilustrador__label">
                Link do portfólio 
                <input 
                    type='text'
                    placeholder="Coloque o link do seu portfólio" 
                    value={state.portfolio}
                    onChange={handleChangePortfolio}
                    />
            </label>

            <label className="cadastro__ilustrador__label">
                Redes sociais 
                <input 
                    type='text'
                    placeholder="Coloque o link de suas redes sociais" 
                    value={state.socialnetwork}
                    onChange={handleChangeSocialNetwork}
                    />
            </label>

            <label className="cadastro__ilustrador__label">
                Contato 
                <input 
                    type='text'
                    placeholder="Pode ser número de telefone, whatsapp ou e-mail" 
                    value={state.contact}
                    onChange={handleChangeContact}
                    />
            </label>

            <button className='cadastro__ilustrador__button'
                    onClick={handleClickNextStep}>
                Cadastrar
            </button>

        </Fragment>
    );

}

export default IlustradorStep2