import React,{ Fragment } from "react";
import { useNavigate } from "react-router-dom";


import { FormCadastroActions, useCadastro } from "../../core/utils/contextCadastro";

const ProfessorStep3 = ()=>{

    const navigate = useNavigate();

    const {state,dispatch} = useCadastro();


    const handleClickStep3 = () =>{
        alert("nome:")
        navigate('../../..')
    }

    return(
        <Fragment>
            <div>
                Step3
                <button onClick={handleClickStep3}>Voltar para home</button>
            </div>
        </Fragment>
    );

}

export default ProfessorStep3