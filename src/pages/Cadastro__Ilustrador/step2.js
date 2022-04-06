import React,{ Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
            <div>
                <div onClick={()=> navigate('../step1')}>
                    Anterior
                </div>

                <label>
                    Link do portfólio 
                    <input 
                        type='text' 
                        value={state.portfolio}
                        onChange={handleChangePortfolio}
                        />
                </label>

                <label>
                    Redes sociais 
                    <input 
                        type='text' 
                        value={state.socialnetwork}
                        onChange={handleChangeSocialNetwork}
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

export default IlustradorStep2