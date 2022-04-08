import React,{ Fragment,useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

import backArrow from '../../core/assets/icons/backArrow.png';
import imgStep1 from '../../core/assets/icons/cadastro__professor__step1.png';

import {FormCadastroActions, useCadastro } from '../../core/utils/contextCadastro'


const ProfessorStep1 = ()=>{

    const navigate = useNavigate();

    const {state, dispatch} = useCadastro();


    useEffect(()=>{
        if(!(state.profession === 'professor')){
            navigate('/cadastro', {replace: true})
        }

    }, [])

    const handleClickNextStep = () => {
        
       
        if(state.name === '' || state.rg === '' || state.birthday === ''  ||  state.email === ''){

            alert(`Preencha todos os campos`);
        }
        else{
            navigate('../step2')
        }
    }

    const handleChangeNome = (event) => {
        dispatch({
            type: FormCadastroActions.setName,
            payload: event.target.value
        });
    };

    const handleChangeRg = (event) => {
        dispatch({
            type: FormCadastroActions.setRg,
            payload: event.target.value.replace(/\D/ig, "")
       });
    };

    const handleChangeBirthday = (event) => {
        dispatch({
            type: FormCadastroActions.setBirthday,
            payload: event.target.value
        });
    };

    const handleChangeEmail = (event) => {
        dispatch({
            type: FormCadastroActions.setEmail,
            payload: event.target.value
        });
    };

    return(
        <Fragment>
            
            <Link className="cadastro__professor__backArrow" to='/cadastro'>
                    <img src={backArrow} />
            </Link>
            
            
            <img className="cadastro__professor__image" 
                 src={imgStep1}
                 width='342' height='54'  />

            <label className="cadastro__professor__label">
                Nome
                <input 
                    type='text' 
                    placeholder="Digite seu nome"
                    value={state.name}
                    onChange={handleChangeNome}
                    />
            </label>

            <label className="cadastro__professor__label">
                R.G
                <input 
                type='text'
                placeholder="Digite seu RG" 
                pattern="\d{7}"
                maxLength={7}
                onChange={handleChangeRg}
                />
            </label>

            <label className="cadastro__professor__label">
                Data de nascimento
                <input 
                type='date' 
                placeholder="Digite sua data de nascimento"
                value={state.birthday}
                onChange={handleChangeBirthday}
                />
            </label >

            <label className="cadastro__professor__label">
                Email
                <input 
                type='email'
                placeholder="Digite seu e-mail"
                value={state.email}
                onChange={handleChangeEmail}
                />
            </label>

            <button className='cadastro__professor__button' onClick={handleClickNextStep}>Próximo</button>
            
        </Fragment>
    );

}

export default ProfessorStep1