import React from "react";
import { useNavigate } from "react-router-dom";
import './publiRedacoes.scss';

import closeIcon from '../../core/assets/icons/close.png';

import CardGradientBorder from "../../components/CardGradientBorder";
import RedacaoInputs from "../../components/RedacaoInputs";
import Button from "../../components/Button";


const PubliRedacoes = () => {

    
    const navigate = useNavigate();


    return(
        <>
            <div className="publiRedacoes">

                <CardGradientBorder >

                    <div className="publiRedacoes__card">
                        
                        <img className="publiRedacoes__card__closeIcon"
                                src={closeIcon}
                                onClick={()=>navigate('..')} />

                        <h3 className="publiRedacoes__card__title">Publicar redação</h3>
                        
                        <RedacaoInputs readOnly={false}/>


                        <span className="publiRedacoes__card__buttons">
                            <div className="publiRedacoes__card__buttons__containerCancelar">
                                    <Button theme="grey" label="Cancelar"/>
                            </div>

                            <Button theme="blue" label="Publicar redação"/>
                        </span>

                    </div>

                </CardGradientBorder>
            </div>

        </>
    );
}

export {PubliRedacoes};
