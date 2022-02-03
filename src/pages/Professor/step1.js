import React,{ Fragment,useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            console.log(state)
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

                <div onClick={()=> navigate('/cadastro', {replace:true})}>
                    Anterior
                </div>

                <label>
                    Nome
                    <input 
                        type='text' 
                        value={state.name}
                        onChange={handleChangeNome}
                        />
                </label>
                <label>
                    R.G
                    <input 
                    type='text' 
                    value={state.rg}
                    onChange={handleChangeRg}
                    />
                </label>
                <label>
                    Data de nascimento
                    <input 
                    type='date' 
                    value={state.birthday}
                    onChange={handleChangeBirthday}
                    />
                </label>
                <label>
                    Email
                    <input 
                    type='email'
                    value={state.email}
                    onChange={handleChangeEmail}
                    />
                </label>
                <button onClick={handleClickNextStep}>Próximo</button>
            </div>
        </Fragment>
    );

}

export default ProfessorStep1