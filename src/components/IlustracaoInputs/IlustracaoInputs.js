import React,{useState} from "react";
import PropTypes from 'prop-types';

import ReactTagInput from "@pathofdev/react-tag-input";
import './ilustracaoInputs.scss'

import uploadImg from '../../core/assets/icons/upload_img.png'

const IlustracaoInputs =({redacao,ilustrador, className})=>{

    const [tags,setTags] = useState(redacao.tema);

    const [image, setImage] = useState(null);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
        }
    } 


    return(

        <>
            <div className="ilustracaoInputs__inputs ilustracaoInputs__inputs--typography">

                <label className="ilustracaoInputs__inputs__title">
                    <h4>Título</h4>
                    <input 
                        type='text'
                        placeholder="Digite o título da redação"   
                        readOnly={true}
                        defaultValue={redacao.titulo}
                        />

                </label>

                <div className="ilustracaoInputs__inputs__entrada">
                    <h4>Ilustração</h4>

                    <label for="ilustracao">
                        {(image===null) && 
                                <>
                                <img src={uploadImg}  />
                                <u> Anexar ilustração </u>
                                </>
                        }
                        
                        <img className="ilustracaoInputs__inputs__entrada__imageUpload"
                             src={image}
                        />
                        
                    </label>

                    <input  type="file"
                            onChange={onImageChange}
                            id="ilustracao" name="ilustracao"
                            accept="image/png, image/jpeg"/>

                </div>

                <label className="ilustracaoInputs__inputs__ilustrador">
                    <h4>Ilustrador</h4>
                    <input 
                        type='text'
                        placeholder="Digite o título da redação"   
                        readOnly={true}
                        defaultValue={ilustrador}
                        />

                </label>


                <label className="ilustracaoInputs__inputs__tema" >
                    <h4>Tema da redação</h4>
                    <div className="ilustracaoInputs__inputs__tema__container">

                        <ReactTagInput
                            tags={tags}
                            onChange={(newTags) => {setTags(newTags)}}
                            placeholder="Digite aqui o tema da redação.
                            Ex: Fantasia, Faroeste, Suspense, etc..." 
                            
                            readOnly={true}
                            />
                    </div>
                    

                </label>


            </div>

        </>
    );
}

IlustracaoInputs.defaultProps = {
    redacao:{
        titulo: '',
        text: '',
        aluno: '',
        tema:  [],
        idade: 0,
        turma:''
    },
    className:'',
}

IlustracaoInputs.propTypes={
    redacao:PropTypes.shape({
        titulo: PropTypes.string,
        text: PropTypes.string,
        aluno: PropTypes.string,
        tema: PropTypes.arrayOf(PropTypes.string),
        idade: PropTypes.number,
        turma:PropTypes.string
        }).isRequired,
    className:PropTypes.string,
    ilustrador:PropTypes.string.isRequired
}


export {IlustracaoInputs};