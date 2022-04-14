import React from "react";
import './publiRedacoes.scss';


const PubliRedacoes = () => {

    return(
        <>
            <div>
                <h3>Publicar redação</h3>
                <label >
                    Título
                    <input 
                        type='text'
                        placeholder="Digite o título da redação"   

                        />
                </label>

                <label >
                    Redação
                    <input 
                        type='text'
                        placeholder="Digite a redação"   

                        />
                </label>

                <label >
                    Aluno(a)
                    <input 
                        type='text'
                        placeholder="Digite o nome do aluno(a)"   

                        />
                </label>

                <label >
                    Idade
                    <input 
                        type='number'
                        min={0}
                        max={100}
                        placeholder="Digite a idade do aluno(a)"   

                        />
                </label>

                <label >
                    Turma
                    <input 
                        type='text'
                        placeholder="Digite a turma do aluno(a)"   

                        />
                </label>

                <label >
                    Tema da redação
                    <input 
                        type='text'
                        placeholder="Digite aqui o tema da redação.
                                    Ex: Fantasia, Faroeste, Suspense, etc..."   

                        />
                </label>

                <button>Cancelar</button>
                <button>Publicar redação</button>

            </div>





            
            
        </>
    );
}

export {PubliRedacoes};
