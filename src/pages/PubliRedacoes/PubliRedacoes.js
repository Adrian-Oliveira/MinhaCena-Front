import React from "react";
import { useNavigate } from "react-router-dom";
import './publiRedacoes.scss';

import closeIcon from '../../core/assets/icons/close.png';

import CardGradientBorder from "../../components/CardGradientBorder";
import Button from "../../components/Button";

const PubliRedacoes = () => {
    
    const navigate = useNavigate();

    return(
        <>

            <div className="publiRedacoes">

                <CardGradientBorder >

                    <div className='publiRedacoes__card'>

                        <img className="publiRedacoes__card__closeIcon"
                             src={closeIcon}
                             onClick={()=>navigate('..')} />

                        <h3 className="publiRedacoes__card__title" >Publicar redação</h3>


                        <div className="publiRedacoes__inputs publiRedacoes__inputs--typography">
                            <label className="publiRedacoes__inputs__title">
                                <h4>Título</h4>
                                <input 
                                    type='text'
                                    placeholder="Digite o título da redação"   

                                    />
                            </label>

                            <label className="publiRedacoes__inputs__redacao">
                                
                                <h4>Redação</h4>
                                <textarea
                                    placeholder="Digite a redação"   
                                    />
                            </label>

                            <label className="publiRedacoes__inputs__aluno" >
                                <h4>Aluno(a)</h4>
                                <input 
                                    type='text'
                                    placeholder="Digite o nome do aluno(a)"   

                                    />
                            </label>

                            <label className="publiRedacoes__inputs__idade" >
                                <h4>Idade</h4>
                                <input 
                                    type='number'
                                    min={0}
                                    max={100}
                                    placeholder="Digite a idade do aluno(a)"   

                                    />
                            </label>

                            <label className="publiRedacoes__inputs__turma" >
                                <h4>Turma</h4>
                                <input 
                                    type='text'
                                    placeholder="Digite a turma do aluno(a)"   

                                    />
                            </label>

                            <label className="publiRedacoes__inputs__tema" >
                                <h4>Tema da redação</h4>
                                <textarea
                                    placeholder="Digite aqui o tema da redação.
                                    Ex: Fantasia, Faroeste, Suspense, etc..."   
                                    
                                    />
                            </label>

                        </div>

                        <span className='publiRedacoes__card__buttons'>

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
