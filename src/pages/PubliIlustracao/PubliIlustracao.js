import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import './publiIlustracao.scss';

import closeIcon from '../../core/assets/icons/close.png';

import CardGradientBorder from "../../components/CardGradientBorder";
import RedacaoInputs from "../../components/RedacaoInputs";
import Button from "../../components/Button";
import TostExcluir from "../../components/TostExcluir";


import IlustracaoInputs from "../../components/IlustracaoInputs";

const PubliIlustracao = () => {

    const user= JSON.parse(localStorage.getItem('user'));

    const redacao =  require('./redacao.json');
    const navigate = useNavigate();

    const [trigger, setTrigger] = useState(false);

   

    return(
        <>
            
            <div className="publiIlustracao">

                <CardGradientBorder >

                    <div className="publiIlustracao__card">
                        
                        <img className="publiIlustracao__card__closeIcon"
                                src={closeIcon}
                                onClick={()=>navigate('..')} />

                        <h3 className="publiIlustracao__card__title">Redação</h3>
                        
                        <IlustracaoInputs ilustrador={user.username} redacao={redacao}/>


                        <span className="publiIlustracao__card__buttons">
                            <div className="publiIlustracao__card__buttons__containerCancelar">

                                <Button onClick={()=>navigate('../..')} 
                                        theme="grey"
                                        label="Fechar"/>
                            </div>

                            <Button onClick={()=>{}}
                                    theme="purple" 
                                    label="Publicar ilustração"/>
                        </span>

                    </div>

                </CardGradientBorder>
            </div>
            
            <TostExcluir trigger={trigger} redacao={redacao} setTrigger={setTrigger} />
        </>
    );
}

export {PubliIlustracao};
