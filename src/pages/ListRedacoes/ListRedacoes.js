import React from "react";
import './listRedacoes.scss';

import itemPesquisa from '../../core/assets/icons/item__pesquisa.png';


const ListRedacoes = () => {

    const list = require('./list.json');


    return(
        <div className="listRedacoes">

            <div className="listRedacoes__pesquisar">
                <input type='text'
                    placeholder="Buscar redação: Tema, titulo, aluno, etc..." />
                <img src={itemPesquisa} />
            </div>
                
            <button className="listRedacoes__publicar">
                Publicar nova redação
            </button>


          <div className="listRedacoes__cards" >

            {list.map((redacao)=>{
               
               return( 
                   <div className="listRedacoes__cards__gradient-box">

                        <article className="listRedacoes__cards__card">
                            <h2>{redacao.titulo}</h2>
                            <p>{`${redacao.text.slice(0,478)}...`}</p>

                            {redacao.tema.map((tema)=><span> {tema} </span>)}

                            <div>Autor(a): {redacao.aluno}</div>
                            <div>Idade:{redacao.idade} anos</div>
                            <div>Turma:{redacao.turma}</div>
                            
                        </article>

                   </div>
                );
            })}


            </div>
        </div>
    );
}

export {ListRedacoes};
