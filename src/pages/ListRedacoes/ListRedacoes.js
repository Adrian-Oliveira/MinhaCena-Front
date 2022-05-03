import React from "react";
import {useNavigate, NavLink, Navigate } from "react-router-dom";
import './listRedacoes.scss';

import { CardGradientBorder } from "../../components/CardGradientBorder/CardGradientBorder";
import itemPesquisa from '../../core/assets/icons/item__pesquisa.png';


const ListRedacoes = () => {

    const list = require('./list.json');

    const navigate = useNavigate();



    return(
        <div className="listRedacoes">

            <div className="listRedacoes__pesquisar">
                <input type='text'
                    placeholder="Buscar redação: Tema, titulo, aluno, etc..." />
                <img src={itemPesquisa} />
            </div>
                
            <button onClick={()=>navigate('./publicar')} className="listRedacoes__publicar">
                Publicar nova redação
            </button>


          <div className="listRedacoes__cards" >

            {list.map((redacao)=>{
               
               return( 

                <CardGradientBorder borderRadius={32}>


                        <article className="listRedacoes__cards__card">
                            <h2 className="listRedacoes__cards__card__title
                                            listRedacoes__cards__card__title--typography">
                                {redacao.titulo}
                            </h2>
                            <p className="listRedacoes__cards__card__text
                                          listRedacoes__cards__card__text--typography">
                                {`${redacao.text.slice(0,478)}...`}    
                            </p>
                            <div className="listRedacoes__cards__card__tags
                                            listRedacoes__cards__card__tags--typography">
                                {redacao.tema.map((tema)=><span> {tema} </span>)}
                            </div>

                            <div className="listRedacoes__cards__card__info--typography">
                                <div>Autor(a): {redacao.aluno}</div>
                                <div>Idade:{redacao.idade} anos</div>
                                <div>Turma:{redacao.turma}</div>
                            </div>

                            <NavLink to='./editar' 
                                     className='listRedacoes__cards__card__editar
                                                listRedacoes__cards__card__editar--typography'>
                                Editar
                            </NavLink>

                            <div className='listRedacoes__cards__card__excluir
                                            listRedacoes__cards__card__excluir--typography'>Excluir</div>

                            
                            
                        </article>

                </CardGradientBorder>
                   
                );
            })}


            </div>
        </div>
    );
}

export {ListRedacoes};
