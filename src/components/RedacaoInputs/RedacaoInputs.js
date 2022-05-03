import React,{useState} from "react";
import PropTypes from 'prop-types';

import ReactTagInput from "@pathofdev/react-tag-input";
import './redacaoInputs.scss'


const RedacaoInputs =({redacao, className, readOnly})=>{

    const [tags,setTags] = useState(redacao.tema);
    return(

<>
        <div className="redacaoInputs__inputs redacaoInputs__inputs--typography">

            <label className="redacaoInputs__inputs__title">
                <h4>Título</h4>
                <input 
                    type='text'
                    placeholder="Digite o título da redação"   
                    readOnly={readOnly}
                    defaultValue={redacao.titulo}
                    />

            </label>

            <label className="redacaoInputs__inputs__redacao">
                
                <h4>Redação</h4>
                <textarea
                    placeholder="Digite a redação"   
                    readOnly={readOnly}
                    defaultValue={redacao.text}                    

                    >
                </textarea>

            </label>

            <label className="redacaoInputs__inputs__aluno" >
                <h4>Aluno(a)</h4>
                <input 
                    type='text'
                    placeholder="Digite o nome do aluno(a)"   
                    readOnly={readOnly}
                    defaultValue={redacao.aluno}
                    />

            </label>

            <label className="redacaoInputs__inputs__idade" >
                <h4>Idade</h4>
                <input 
                    type='number'
                    min={0}
                    max={100}
                    placeholder="Digite a idade do aluno(a)"   
                    readOnly={readOnly}
                    defaultValue={redacao.idade}
                    />

            </label>

            <label className="redacaoInputs__inputs__turma" >
                <h4>Turma</h4>
                <input 
                    type='text'
                    placeholder="Digite a turma do aluno(a)"   
                    readOnly={readOnly}
                    defaultValue={redacao.turma}
                />

            </label>

            <label className="redacaoInputs__inputs__tema" >
                <h4>Tema da redação</h4>
                {/* <textarea
                    placeholder="Digite aqui o tema da redação.
                    Ex: Fantasia, Faroeste, Suspense, etc..."   
                    readOnly={readOnly}
                    defaultValue={redacao.tema}                    
                >
                
                </textarea> */}
                <div className="redacaoInputs__inputs__tema__container">

                    <ReactTagInput
                        tags={tags}
                        onChange={(newTags) => {setTags(newTags)}}
                        placeholder="Digite aqui o tema da redação.
                        Ex: Fantasia, Faroeste, Suspense, etc..." 
                        editable={!readOnly} 
                        readOnly={readOnly}
                        />
                </div>
                

            </label>


        </div>

        </>
    );
}

RedacaoInputs.defaultProps = {
    redacao:{
        titulo: '',
        text: '',
        aluno: '',
        tema:  [''],
        idade: 0,
        turma:''
    },
    className:'',
    readOnly:false
}

RedacaoInputs.propTypes={
    redacao:PropTypes.shape({
        titulo: PropTypes.string,
        text: PropTypes.string,
        aluno: PropTypes.string,
        tema: PropTypes.arrayOf(PropTypes.string),
        idade: PropTypes.number,
        turma:PropTypes.string
        }),
    className:PropTypes.string,
    readOnly:PropTypes.bool
}


export {RedacaoInputs};