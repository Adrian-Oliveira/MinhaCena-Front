import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './tostEdit.scss';

import Button from '../Button';
import CardGradientBorder from '../CardGradientBorder/';
import { useNavigate } from 'react-router-dom';

const TostEdit = ({trigger, redacao})=>{
    const navigate = useNavigate();

    if(!trigger){
        return(<></>);
    }
    
    
    return(
        <div className='tostEdit' >
            <CardGradientBorder className='tostEdit__card'>
                <h3 className='tostEdit__card__atencao' >CONCLUÍDO!</h3>


                <div className='tostEdit__card__info'>
                    <strong>
                        A redação:
                    </strong>   <br/>
                    Titúlo: {redacao.titulo}<br/>
                    Aluno(a): {redacao.aluno} <br/>
                    Idade: {redacao.idade} <br/>
                    Turma {redacao.turma}<br/>

                    <strong>
                        Foi editada com sucesso!
                    </strong>   
                </div>

                <div className='tostEdit__card__buttons' >
                
                    <Button label='Voltar para dashboard' 
                            onClick={()=>{ 
                                            navigate('/escola/dashboard/redacoes',{replace: true });
                                            navigate(0);

                                            }
                                    } />

                </div>
            
        </CardGradientBorder>
    
        </div>

    );

   
}

TostEdit.defaultProps = {
    trigger:false,
}

TostEdit.propTypes={
    trigger: PropTypes.bool.isRequired,
    setTrigger: PropTypes.func.isRequired,
    redacao:PropTypes.shape({
        titulo: PropTypes.string,
        text: PropTypes.string,
        aluno: PropTypes.string,
        tema: PropTypes.arrayOf(PropTypes.string),
        idade: PropTypes.number,
        turma:PropTypes.string
        }).isRequired,
}


export {TostEdit};