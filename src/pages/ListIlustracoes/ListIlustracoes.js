import React from "react";
import {useNavigate, NavLink, Navigate } from "react-router-dom";
import ReactTagInput from "@pathofdev/react-tag-input";

import './listIlustracoes.scss';

import { CardGradientBorder } from "../../components/CardGradientBorder/CardGradientBorder";
import itemPesquisa from '../../core/assets/icons/item__pesquisa.png';


import imagemExemplo from './img/ilustracao.png'

const ListIlustracoes = () => {

    const list = require('./list.json');

    const navigate = useNavigate();



    return(
        <div className="listIlustracoes">

            <div className="listIlustracoes__pesquisar">
                <input type='text'
                    placeholder="Buscar ilustração: Tema, titulo, aluno, etc...  " />
                <img src={itemPesquisa} />
            </div>
                


          <div className="listIlustracoes__cards" >

            {list.map((redacao)=>{
               
               return( 

                <CardGradientBorder borderRadius={32}>


                        <article className="listIlustracoes__cards__card">
                            <h2 className="listIlustracoes__cards__card__title
                                            listIlustracoes__cards__card__title--typography">
                                {redacao.titulo}
                            </h2>

                            <img src={imagemExemplo} />
                          
                            <div className="listIlustracoes__cards__card__tags
                                            listIlustracoes__cards__card__tags--typography">
                                
                                <ReactTagInput
                                    tags={redacao.tema}
                                    editable={false} 
                                    readOnly={true}
                                    />
                            </div>

                            <div className="listIlustracoes__cards__card__info--typography">


                                <div>Ilustrador(a):{redacao.ilustrador}</div>
                                

                                <div>Autor(a): {redacao.aluno}</div>
                                <div>Idade:{redacao.idade} anos</div>
                                <div>Turma:{redacao.turma}</div>
                            </div>

                            <NavLink  to='.'
                                     className='listIlustracoes__cards__card__editar
                                                listIlustracoes__cards__card__editar--typography'>
                                Baixar ilustração
                            </NavLink>

                            <div className='listIlustracoes__cards__card__excluir
                                            listIlustracoes__cards__card__excluir--typography'>
                                Ver
                            </div>

                            
                            
                        </article>

                </CardGradientBorder>
                   
                );
            })}


            </div>
        </div>
    );
}

export {ListIlustracoes};
