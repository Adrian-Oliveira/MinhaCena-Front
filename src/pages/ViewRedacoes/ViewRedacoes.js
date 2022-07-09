import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import './viewRedacoes.scss';

import closeIcon from '../../core/assets/icons/close.png';

import CardGradientBorder from "../../components/CardGradientBorder";
import RedacaoInputs from "../../components/RedacaoInputs";
import Button from "../../components/Button";
import TostExcluir from "../../components/TostExcluir";

const ViewRedacoes = () => {

    const redacao =  require('./redacao.json');
    const navigate = useNavigate();

    const [trigger, setTrigger] = useState(false);


    return(
        <>
            

            <div className="viewRedacoes">

                <CardGradientBorder >

                    <div className="viewRedacoes__card">
                        
                        <img className="viewRedacoes__card__closeIcon"
                                src={closeIcon}
                                onClick={()=>navigate('..')} />

                        <h3 className="viewRedacoes__card__title">Redação</h3>
                        
                        <RedacaoInputs readOnly={true} redacao={redacao}/>


                        <span className="viewRedacoes__card__buttons">
                            <div className="viewRedacoes__card__buttons__containerCancelar">

                                <Button onClick={()=>setTrigger(true)} 
                                        theme="red"
                                        label="Excluir"/>
                            </div>

                            <Button theme="blue" 
                                    label="Editar redação"/>
                        </span>

                    </div>

                </CardGradientBorder>
            </div>
            
            <TostExcluir trigger={trigger} redacao={redacao} setTrigger={setTrigger} />
        </>
    );
}

export {ViewRedacoes};
