import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import ReactTagInput from "@pathofdev/react-tag-input";

import './listRedacoesToIllustrator.scss';

import TostExcluir from "../../components/TostExcluir";
import { CardGradientBorder } from "../../components/CardGradientBorder/CardGradientBorder";
import itemPesquisa from '../../core/assets/icons/item__pesquisa.png';


const ListRedacoesToIllustrator = () => {

    const list = require('./list.json');

    const navigate = useNavigate();

    return(
        <div className="listRedacoesToIllustrator">

            <div className="listRedacoesToIllustrator__pesquisar">
                <input type='text'
                    placeholder="Buscar redação: Tema, titulo, aluno, etc..." />
                <img src={itemPesquisa} />
            </div>

          <div className="listRedacoesToIllustrator__cards" >

            {list.map((redacao,index)=>{

               
               return( 
                   
                <div key={index}>
                    <CardGradientBorder borderRadius={32}>

                            <article className="listRedacoesToIllustrator__cards__card">
                                <h2 className="listRedacoesToIllustrator__cards__card__title
                                                listRedacoesToIllustrator__cards__card__title--typography">
                                    {redacao.titulo.slice(0,25)}
                                </h2>
                                <p className="listRedacoesToIllustrator__cards__card__text
                                            listRedacoesToIllustrator__cards__card__text--typography">
                                    {`${redacao.text.slice(0,478)}...`}    
                                </p>
                                <div className="listRedacoesToIllustrator__cards__card__tags
                                                listRedacoesToIllustrator__cards__card__tags--typography">
                                    
                                    <ReactTagInput
                                        tags={redacao.tema}
                                        editable={false} 
                                        readOnly={true}
                                        />
                                </div>

                                <div className="listRedacoesToIllustrator__cards__card__info--typography">
                                    <div>Autor(a): {redacao.aluno}</div>
                                    <div>Idade:{redacao.idade} anos</div>
                                    <div>Turma:{redacao.turma}</div>
                                </div>


                                <div onClick={()=>{navigate('visualizar')}} 
                                    className='listRedacoesToIllustrator__cards__card__ver
                                                listRedacoesToIllustrator__cards__card__ver--typography'>
                                    <u>Ver redação</u>
                                </div>
                                
                            </article>

                    </CardGradientBorder>
                    
                </div>   
                );
            })}


            </div>
        </div>
    );
}

export {ListRedacoesToIllustrator};
