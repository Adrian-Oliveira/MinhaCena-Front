import React,{Fragment, useEffect, useState} from 'react'

import bannerHomeImage from '../../core/assets/img/bannerHome.png'
import logo from '../../core/assets/icons/logo.png'
import logo1 from '../../core/assets/icons/logo_minhacena1.png'

import './home.scss'

import { Link } from 'react-router-dom'


const Home = () => {

    /* Proproção da imagem de fundo é 679/1366*/
    let heightBanner = (679/1366)*screen.availWidth;

    return( 

        <Fragment>  
        <div className='banner' style={{
            backgroundImage: `url(${bannerHomeImage})`,
            backgroundSize: '100%',
            backgroundRepeat:'no-repeat',
            height: heightBanner
        }}>
            

            <header>
                <img className='logo' src={logo} />

                <a> Inicio </a>
                <a> Quem Somos</a>
                <a> Quero Fazer Parte</a>
                
                <button>Entrar</button>
            </header>

            <div className='bannerContent'>

                <h1 className='title'>
                    MinhaCena.org
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
            <h2> Quem somos </h2>
            <p >
                O MinhaCena.Org propõe ser uma ferramenta de impacto social no desenvolvimento educacional,
               estímulo e melhora na escrita, leitura, criação e produção de arte e cultura por parte dos alunos.
               A plataforma conecta professores, que cadastram redações de seus melhores alunos que serão revisadas
               e adaptadas em quadrinhos, que poderão ser publicadas ou impressas. O intuito do projeto 
               é fazer com que, de forma pedagógica, essas ilustrações estimulem esses jovens a terem mais 
               interesse em leitura, escrita, redação, ilustração e desenvolvimento na interpretação de texto. 
               <br/>
               Bem-vindo ao MinhaCena.Org! 
            </p>

            <div className='logo'>
                <img src={logo1}/>
            </div>

        </section>

        <section className='helpUs'>

            <div></div>
            <h2>Como fazer parte</h2>

            <div className='illustrator'>
                <h3 >Ilustrador</h3>
                
                <p>Como ilustrador, você pode contribuir adotando uma redação para criar suas
                    ilustrações incríveis, gerarando conteúdo para seu portfolio e dar vida a
                    redação de um aluno(a).
                </p>
                
                <button>Quero ilustrar</button>    
                
            </div>
            
            <div className='verticalBar'></div>

            <div className='professor'>
                <h3>Professor</h3>
                <p>Como professor, você seleciona as melhores redações de seus alunos(as) e 
                    compartilha com os nossos ilustradores parceiros, eles daram vida a está 
                    redação, assim incentivando os alunos a lerem e escreverem ainda mais.</p>
                <button>Quero publicar redações</button>    
            </div>
        </section>
        
        <footer>
            <p>Venha fazer parte deste movimento</p>
            <button> Quero fazer parte </button>
            <section className='socialMedia'>
                <a className='home'></a>
                <a className='email'></a>
                <a className='instagram'></a>
            </section>
        </footer>

    </Fragment>
    );
}

export default Home