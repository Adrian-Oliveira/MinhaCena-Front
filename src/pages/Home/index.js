import React,{Fragment} from 'react';   

import logo from '../../core/assets/icons/logo.png';
import logo1 from '../../core/assets/icons/logo1.png';
import logo2 from '../../core/assets/icons/logo_minhacena2.png';
import emailImg from '../../core/assets/icons/email.png';
import instaImg from '../../core/assets/icons/instagram.png';

import './home.scss'

import { Link, useNavigate } from 'react-router-dom';
import {useCadastro, FormCadastroActions} from  '../../core/utils/contextCadastro';


const Home = () => {

    const navigate = useNavigate();
    
    const {state, dispatch} = useCadastro();

    const handleClickCadastro = (typeProfession)=>{
        dispatch({
            type: FormCadastroActions.setProfession,
            payload:typeProfession
        });
        navigate(`cadastro/${typeProfession}/step1`);
    }

    /* Proproção da imagem de fundo é 679/1366*/
    let heightBanner = (679/1366)*screen.availWidth;

    return( 

        <Fragment>  
        <div className='banner' style={{
            height: heightBanner
        }}>
            

            <header>
                <img className='logo' src={logo} />

                <a> Inicio </a>
                <a> Quem Somos</a>
                <a> Quero Fazer Parte</a>
                
                <button onClick={()=> navigate('login')}> 
                    Entrar 
                </button>
            </header>

            <div className='bannerContent'>

                <h1 className='title'>
                    MinhaCena.Org
                </h1>
                
                <div className='subtitle'>
                    Dando vida à redações através de ilustrações
                </div>

                <Link to="cadastro">
                    <button>Quero fazer parte</button>
                </Link>
                
            </div>

        </div>

        <section className='aboutUs'>

          
            <div className='upLine'></div>
            <h2>Quem somos</h2>
            <div className='downLine'></div>


            <p >
            O MinhaCena.Org é uma ferramenta gratuita de impacto social e educacional,
             que propõe estímulo para melhora na escrita, leitura e produção de arte por parte de 
             alunos de escolas publicas, privadas e ONGs de contraturno escolar. A plataforma 
             conecta professores de Portugues e Artes, que cadastram redações de seus alunos que 
             são revisadas e adaptadas em quadrinhos por nossa comunidade de ilustradores voluntarios, 
             trazendo visibilidade aos artistas e dando suporte a forma pedagogica que o professor 
             leciona em seus projetos. O MinhaCena.Org é uma das metodologias ativas voltadas ao ensino 
             hibrido e tecnologia, fazendo do aluno o protagonista no seu aprendizado.Faça Parte!
            </p>

            <div className='logo'>
                <img src={logo1}/>
            </div>

        </section>

        <section className='helpUs'>

            <div className='upLine'></div>
            <h2>Como fazer parte</h2>
            <div className='downLine'></div>


            <div className='illustrator'>
                <h3 >Ilustrador</h3>
                
                <p>Como ilustrador, você pode contribuir adotando uma redação para criar suas
                    ilustrações incríveis, gerarando conteúdo para seu portfolio e dar vida a
                    redação de um aluno(a).
                </p>
                
                <button onClick={()=>handleClickCadastro('ilustrador')}>
                    Quero ilustrar
                </button>    
                
            </div>
            
            <div className='verticalBar'></div>

            <div className='professor'>
                <h3>Professor</h3>
                <p>Como professor, você seleciona as melhores redações de seus alunos(as) e 
                    compartilha com os nossos ilustradores parceiros, eles daram vida a está 
                    redação, assim incentivando os alunos a lerem e escreverem ainda mais.</p>

                <button onClick={()=>handleClickCadastro('professor')}>
                    Quero publicar redações
                </button>    
            </div>
        </section>
        
        <footer>


            <p>Venha fazer parte deste movimento</p>
            <button> <div>    Quero fazer parte   </div> </button>

            <a className='logoFooter'> <img src={logo2} /></a>
            <a className='emailFooter'> <img src={emailImg} /></a>
            <a className='instaFooter' target='_blank' href='https://www.instagram.com/projetominhacena/'> <img src={instaImg} /></a>
        </footer>

    </Fragment>
    );
}

export default Home