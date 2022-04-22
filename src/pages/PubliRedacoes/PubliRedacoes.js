import React from "react";
import './publiRedacoes.scss';

import CardGradientBorder from "../../components/CardGradientBorder";
import Button from "../../components/Button";

const PubliRedacoes = () => {

    return(
        <>

            <div className="publiRedacoes">

                <CardGradientBorder >

                    <div className='publiRedacoes__card'>


                        <h3 className="publiRedacoes__card__doubleCol" >Publicar redação</h3>

                        <label className="publiRedacoes__card__doubleCol">
                            Título
                            <input 
                                type='text'
                                placeholder="Digite o título da redação"   

                                />
                        </label>

                        <label className="publiRedacoes__card__doubleCol">
                            Redação
                            <textarea
                                placeholder="Digite a redação"   
                                cols="40"
                                rows="5"

                                />
                        </label>

                        <label className="" >
                            Aluno(a)
                            <input 
                                type='text'
                                placeholder="Digite o nome do aluno(a)"   

                                />
                        </label>

                        <label className="" >
                            Idade
                            <input 
                                type='number'
                                min={0}
                                max={100}
                                placeholder="Digite a idade do aluno(a)"   

                                />
                        </label>

                        <label className="" >
                            Turma
                            <input 
                                type='text'
                                placeholder="Digite a turma do aluno(a)"   

                                />
                        </label>

                        <label className="" >
                            Tema da redação
                            <input 
                                type='text'
                                placeholder="Digite aqui o tema da redação.
                                Ex: Fantasia, Faroeste, Suspense, etc..."   

                                />
                        </label>

                        <button>Cancelar</button>
                        <button>Publicar redação</button>

                        <Button theme="blue" label="Publicar redação"/>

                    </div>

                </CardGradientBorder>
            </div>
            
        </>
    );
}

export {PubliRedacoes};
