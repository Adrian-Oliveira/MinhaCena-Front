import React from "react";
import { useNavigate } from "react-router-dom";

import './viewIlustracoes.scss';

import ilutracaoExp from './img/imgExp.png';

import closeIcon from '../../core/assets/icons/close.png';

import CardGradientBorder from "../../components/CardGradientBorder";
import Button from "../../components/Button";

const ViewIlustracoes = () => {

    const ilustracao =  require('./ilustracao.json');
    const navigate = useNavigate();


    return(
        <>
            <div>

                <div className="viewIlustracoes">

                    <CardGradientBorder >

                        <div className="viewIlustracoes__card">
                            
                            <img className="viewIlustracoes__card__closeIcon"
                                    src={closeIcon}
                                    onClick={()=>navigate('..')} />

                            <h3 className="viewIlustracoes__card__title">Ilustração</h3>

                            <label className="viewIlustracoes__redacaoLabel">
                                <h4 className="viewIlustracoes__redacaoLabel__title">Título</h4>
                                <input 
                                    type='text' 
                                    readOnly={true}
                                    defaultValue={ilustracao.titulo}
                                    />

                            </label>

                            <img className="viewIlustracoes__redacaoLabel__img" src={ilutracaoExp} />

                            <label className="viewIlustracoes__redacaoLabel
                                              viewIlustracoes__redacaoLabel__ilustrador">
                                <h4 className="viewIlustracoes__redacaoLabel__title">
                                    Ilustrador(a)
                                </h4>
                                <input 
                                    type='text' 
                                    readOnly={true}
                                    defaultValue={ilustracao.ilustrador}
                                    />

                            </label>

                            <label className="viewIlustracoes__redacaoLabel
                                              viewIlustracoes__redacaoLabel__aluno">
                                <h4 className="viewIlustracoes__redacaoLabel__title">Aluno(a)</h4>
                                <input 
                                    type='text' 
                                    readOnly={true}
                                    defaultValue={ilustracao.aluno}
                                    />

                            </label>


                            <span className="viewIlustracoes__card__buttons">
                                <div className="viewIlustracoes__card__buttons__containerCancelar">
                                        <Button theme="grey"
                                                label="Fechar"
                                                onClick={()=>navigate('..')}/>
                                </div>

                                <Button theme="purple" label="Baixar ilustração"/>
                            </span>

                        </div>

                    </CardGradientBorder>
                </div>
            </div>

        </>
    );
}

export {ViewIlustracoes};
