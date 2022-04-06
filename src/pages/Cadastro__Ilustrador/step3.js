import React,{ Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FormCadastroActions, useCadastro } from "../../core/utils/contextCadastro";

const IlustradorStep3 = ()=>{

    const navigate = useNavigate();

    const {state,dispatch} = useCadastro();

    useEffect(()=>{
        if(state.portfolio === '' || state.socialnetwork === '' || state.contact === ''){
            navigate('../step2')
        }
    },[])

    const handleClickNextStep = () =>{
        navigate('/', {replace:true})
    }

    return(
        <Fragment>
            <div>
                Step3
                <button onClick={handleClickNextStep}>Voltar para home</button>
            </div>
        </Fragment>
    );

}

export default IlustradorStep3