import React from "react";
import './listRedacoes.scss';

import itemPesquisa from '../../core/assets/icons/item__pesquisa.png';


const ListRedacoes = () => {

    const list = require('./list.json');

    console.log(list);

    return(
        <>

            <div>
                <input type='text'
                    placeholder="Buscar redação: Tema, titulo, aluno, etc..." />
                <img src={itemPesquisa} />
            </div>
                
            <button>Publicar nova redação</button>

           <h1>Redações</h1>

           {list.map((redacao)=>{

               return( 
                    <article>
                        <h2>{redacao.titulo}</h2>
                        <p>{redacao.text}</p>

                        {redacao.tema.map((tema)=><span> {tema} </span>)}

                        <div>Autor(a): {redacao.aluno}</div>
                        <div>Idade:{redacao.idade} anos</div>
                        <div>Turma:{redacao.turma}</div>
                        
                    </article>
                );
           })}




            
            
        </>
    );
}

export {ListRedacoes};
