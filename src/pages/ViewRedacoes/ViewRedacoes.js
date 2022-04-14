import React from "react";
import './viewRedacoes.scss';


const ViewRedacoes = () => {

    const redacao =  require('./redacao.json');

    return(
        <>
            <div>
                <h3>Redação</h3>
                <label >
                    Título
                    <input 
                        type='text'
                        placeholder="Digite o título da redação" 
                        value={redacao.titulo} 
                        readOnly

                        />
                </label>

                <label >
                    Redação
                    <input 
                        type='text'
                        placeholder="Digite a redação"   
                        value={redacao.text}  
                        readOnly
                        />
                </label>

                <label >
                    Aluno(a)
                    <input 
                        type='text'
                        placeholder="Digite o nome do aluno(a)"   
                        value={redacao.aluno}  
                        readOnly
                        />
                </label>

                <label >
                    Idade
                    <input 
                        type='number'
                        min={0}
                        max={100}
                        placeholder="Digite a idade do aluno(a)"   
                        value={redacao.idade}  
                        readOnly
                    />
                </label>

                <label >
                    Turma
                    <input 
                        type='text'
                        placeholder="Digite a turma do aluno(a)"   
                        value={redacao.turma}  
                        readOnly
                        />
                </label>

                <label >
                    Tema da redação
                    <input 
                        type='text'
                        placeholder="Digite aqui o tema da redação.
                                    Ex: Fantasia, Faroeste, Suspense, etc..."   
                        value={redacao.tema}  
                        readOnly
                        />
                </label>

                <button>Excluir</button>
                <button>Editar redação</button>

            </div>

        </>
    );
}

export {ViewRedacoes};
