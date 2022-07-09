import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './editRedacoes.scss';

import closeIcon from '../../core/assets/icons/close.png';

import CardGradientBorder from "../../components/CardGradientBorder";
import RedacaoInputs from "../../components/RedacaoInputs";
import Button from "../../components/Button";
import TostEdit from "../../components/TostEdit";


const EditRedacoes = () => {

    const redacao =  require('./redacao.json');
    const navigate = useNavigate();


    const [trigger, setTrigger] = useState(false);


    return(
        <>
            <div className="editRedacoes">

                <CardGradientBorder >

                    <div className="editRedacoes__card">
                        
                        <img className="editRedacoes__card__closeIcon"
                                src={closeIcon}
                                onClick={()=>navigate('..')} />

                        <h3 className="editRedacoes__card__title">Editar redação</h3>
                        
                        <RedacaoInputs readOnly={false} redacao={redacao}/>


                        <span className="editRedacoes__card__buttons">
                            <div className="editRedacoes__card__buttons__containerCancelar">
                                    <Button theme="grey" label="Cancelar"/>
                            </div>

                            <Button theme="blue"
                                    label="Gravar"
                                    onClick={()=>setTrigger(true)}
                                    />
                        </span>

                    </div>

                </CardGradientBorder>
            </div>

            <TostEdit redacao={redacao}
                      trigger={trigger}
            />

        </>
    );
}

export {EditRedacoes};
