import React,{ Fragment } from "react";
import { useNavigate } from "react-router-dom";

import {FormCadastroActions, useCadastro } from '../../core/utils/contextCadastro'


const ProfessorStep2 = ()=>{

    const navigate = useNavigate();

    const {state, dispatch} = useCadastro();

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
            <div>

                <div onClick={()=> navigate('../step1')}>
                    Anterior
                </div>
                Step2

                <label>
                    Nome da escola 
                    <input 
                        type='text' 
                        value={state.schoolname}
                        onChange={handleChangeSchoolname}
                        />
                </label>

                <label>
                    Cidade 
                    <input 
                        type='text' 
                        value={state.city}
                        onChange={handleChangeCity}
                        />
                </label>

                <label>
                    Contato 
                    <input 
                        type='text' 
                        value={state.contact}
                        onChange={handleChangeContact}
                        />
                </label>

                <button onClick={handleClickNextStep}>Cadastrar</button>
            </div>
        </Fragment>
    );

}

export default ProfessorStep2