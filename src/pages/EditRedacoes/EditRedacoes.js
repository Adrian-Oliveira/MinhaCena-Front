import React from "react";
import './editRedacoes.scss';


const EditRedacoes = () => {

    const redacao =  require('./redacao.json');

    return(
        <>
            <div>
                <h3>Editar redação</h3>
                <label >
                    Título
                    <input 
                        type='text'
                        placeholder="Digite o título da redação" 
                        defaultValue={redacao.titulo}  

                        />
                </label>

                <label >
                    Redação
                    <input 
                        type='text'
                        placeholder="Digite a redação"   
                        defaultValue={redacao.text}  

                        />
                </label>

                <label >
                    Aluno(a)
                    <input 
                        type='text'
                        placeholder="Digite o nome do aluno(a)"   
                        defaultValue={redacao.aluno}  

                        />
                </label>

                <label >
                    Idade
                    <input 
                        type='number'
                        min={0}
                        max={100}
                        placeholder="Digite a idade do aluno(a)"   
                        defaultValue={redacao.idade}  

                        />
                </label>

                <label >
                    Turma
                    <input 
                        type='text'
                        placeholder="Digite a turma do aluno(a)"   
                        defaultValue={redacao.turma}  

                        />
                </label>

                <label >
                    Tema da redação
                    <input 
                        type='text'
                        placeholder="Digite aqui o tema da redação.
                                    Ex: Fantasia, Faroeste, Suspense, etc..."   
                        defaultValue={redacao.tema}  

                        />
                </label>

                <button>Cancelar</button>
                <button>Gravar</button>

            </div>

        </>
    );
}

export {EditRedacoes};
