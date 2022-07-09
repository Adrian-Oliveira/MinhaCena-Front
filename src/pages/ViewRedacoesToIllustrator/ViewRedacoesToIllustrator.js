import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import './viewRedacoesToIllustrator.scss';

import closeIcon from '../../core/assets/icons/close.png';

import CardGradientBorder from "../../components/CardGradientBorder";
import RedacaoInputs from "../../components/RedacaoInputs";
import Button from "../../components/Button";
import TostExcluir from "../../components/TostExcluir";

const ViewRedacoesToIllustrator = () => {

    const redacao =  require('./redacao.json');
    const navigate = useNavigate();

    const [trigger, setTrigger] = useState(false);


    return(
        <>
            
            <div className="viewRedacoesToIllustrator">

                <CardGradientBorder >

                    <div className="viewRedacoesToIllustrator__card">
                        
                        <img className="viewRedacoesToIllustrator__card__closeIcon"
                                src={closeIcon}
                                onClick={()=>navigate('..')} />

                        <h3 className="viewRedacoesToIllustrator__card__title">Redação</h3>
                        
                        <RedacaoInputs readOnly={true} redacao={redacao}/>


                        <span className="viewRedacoesToIllustrator__card__buttons">
                            <div className="viewRedacoesToIllustrator__card__buttons__containerCancelar">

                                <Button onClick={()=>navigate(-1)} 
                                        theme="grey"
                                        label="Fechar"/>
                            </div>

                            <Button onClick={()=>navigate('../publicar')}
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

export {ViewRedacoesToIllustrator};
