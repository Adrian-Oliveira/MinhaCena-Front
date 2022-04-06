import React,{ Fragment, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import backArrow from '../../core/assets/icons/backArrow.png';
import imgStep2 from '../../core/assets/icons/cadastro__professor__step2.png';

import {FormCadastroActions, useCadastro } from '../../core/utils/contextCadastro'


const ProfessorStep2 = ()=>{

    const navigate = useNavigate();

    const {state, dispatch} = useCadastro();

    useEffect(()=>{
        if(state.name === '' || state.rg === '' || state.birthday === ''  ||  state.email === ''){
            navigate('../step1')
        }

    }, [])

    
    const handleClickNextStep = () =>{
        if(state.schoolname === '' || state.city === '' || state.contact === ''){

            alert(`Preencha todos os campos`);
        }
        else{
            
            navigate('../step3')
        }
    }

    const handleChangeSchoolname = (event) => {
        dispatch({
            type: FormCadastroActions.setSchoolname,
            payload: event.target.value
        });
    };

    const handleChangeCity = (event) => {
        dispatch({
            type: FormCadastroActions.setCity,
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
        
            <Link className="cadastro__professor__backArrow" to='../step1'>
                <img src={backArrow} />
            </Link>

            <img className="cadastro__professor__image" src={imgStep2} />

            <labe className='cadastro__professor__label'>
                Nome da escola 
                <input 
                    type='text'
                    placeholder="Digite o nome da escola" 
                    value={state.schoolname}
                    onChange={handleChangeSchoolname}
                    />
            </labe>

            <label className="cadastro__professor__label" >
                Cidade 
                <input 
                    type='text'
                    placeholder="Digite em qual cidade a escola está localizada" 
                    value={state.city}
                    onChange={handleChangeCity}
                    />
            </label>

            <label className="cadastro__professor__label" >
                Contato 
                <input 
                    type='text'
                    placeholder="Pode ser número de telefone, whatsapp ou e-mail" 
                    value={state.contact}
                    onChange={handleChangeContact}
                    />
            </label>

            <button className='cadastro__professor__button' onClick={handleClickNextStep}>Cadastrar</button>
        </Fragment>
    );

}

export default ProfessorStep2