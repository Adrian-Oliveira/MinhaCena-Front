import React,{ Fragment } from "react";
import { useNavigate } from "react-router-dom";

import {FormCadastroActions, useCadastro } from '../../core/utils/contextCadastro'


const ProfessorStep1 = ()=>{

    const navigate = useNavigate();

    const {state, dispatch} = useCadastro();


    const handleClickStep1 = () =>{
        navigate('../step2')
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
            payload: event.target.value
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
            <div>
                <label>
                    Nome
                    <input 
                        type='text' 
                        onChange={handleChangeNome}
                        />
                </label>
                <label>
                    R.G
                    <input 
                    type='text' 
                    onChange={handleChangeRg}
                    />
                </label>
                <label>
                    Data de nascimento
                    <input 
                    type='date' 
                    onChange={handleChangeBirthday}
                    />
                </label>
                <label>
                    Email
                    <input 
                    type='email'
                    onChange={handleChangeEmail}
                    />
                </label>
                <button onClick={handleClickStep1}>Próximo</button>
            </div>
        </Fragment>
    );

}

export default ProfessorStep1