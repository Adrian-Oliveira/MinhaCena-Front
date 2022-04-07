import React,{ Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import imgStep3 from '../../core/assets/icons/cadastro__professor__step3.png';

import { FormCadastroActions, useCadastro } from "../../core/utils/contextCadastro";

const ProfessorStep3 = ()=>{

    const navigate = useNavigate();

    const {state,dispatch} = useCadastro();

    useEffect(()=>{
        if(state.schoolname === '' || state.city === '' || state.contact === ''){
            navigate('../step2')
        }
    },[])

    const handleClickNextStep = () =>{
        navigate('/', {replace:true})
    }

    return(
        <Fragment>
            <img className="cadastro__professor__image"
                 src={imgStep3}
                 width='342' height='54'  />

            <section className="professor__step3__section">

                <h3>Parabéns!</h3>

                <p>Você concluíu seu cadastro com sucesso!
                </p>
                <p>
                Agora é com a gente, nossa equipe irá confirmar suas informações 
                e em breve você receberá um email confirmando seu cadastro.
                </p>
            </section>

            <button className='cadastro__professor__button' onClick={handleClickNextStep}>Voltar para home</button>
        </Fragment>
    );

}

export default ProfessorStep3