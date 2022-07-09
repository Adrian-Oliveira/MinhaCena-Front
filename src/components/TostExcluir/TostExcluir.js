import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './tostExcluir.scss';

import Button from '../Button';
import CardGradientBorder from '../CardGradientBorder/';
import { useNavigate } from 'react-router-dom';

const TostExcluir = ({trigger, setTrigger, redacao})=>{
    const navigate = useNavigate();
    const [exclude, setExclude] = useState(false);

    if(!trigger){
        return(<></>);
    }
    
    
    if(exclude){
        return(
            <div className='tostExcluir' >
                <CardGradientBorder className='tostExcluir__card'>
                    <h4 className='tostExcluir__card__atencao' >ATENÇÃO</h4>


                    <div className='tostExcluir__card__info'>
                        <h4>
                            A redação:
                        </h4>   
                        Titúlo: {redacao.titulo}<br/>
                        Aluno(a): {redacao.aluno} <br/>
                        Idade: {redacao.idade} <br/>
                        Turma {redacao.turma}

                        <h4>
                            Foi excluida.
                        </h4>   
                    </div>

                    <div className='tostExcluir__card__buttons' >
                    
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

    return(
        
        <div className='tostExcluir' >
            <CardGradientBorder className='tostExcluir__card'>
                <h4 className='tostExcluir__card__atencao' >ATENÇÃO</h4>


                <div className='tostExcluir__card__info'>
                    <h4>
                        Você tem certeza que quer excluir a redação:
                    </h4>   
                    Titúlo: {redacao.titulo}<br/>
                    Aluno(a): {redacao.aluno} <br/>
                    Idade: {redacao.idade} <br/>
                    Turma {redacao.turma}
                </div>

                <div className='tostExcluir__card__buttons' >
                    
                    <Button label='Quero excluir' onClick={()=>setExclude(true)} />
                    <Button label='Cancelar' 
                            onClick={()=>setTrigger(false)} 
                            theme='grey' />
                </div>
                
            </CardGradientBorder>
        
        </div>
        
    );
   
}

TostExcluir.defaultProps = {
    trigger:false,
}

TostExcluir.propTypes={
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


export {TostExcluir};