import React,{Fragment} from 'react'

import bannerHome from '../../core/assets/img/bannerHome.png'
import logo from '../../core/assets/icons/logo.png'
import './home.scss'

const Home = () => (
    <Fragment>  

        <header>
            <img className='logo' src={logo} />

            <a> Inicio </a>
            <a> Quem Somos</a>
            <a> Quero Fazer Parte</a>
            
            <button>Entrar</button>
        </header>

        <div className='banner'>

            <img className='banerImage' src={bannerHome}/>

            <div className='title'>
                MinhaCena.org
            </div>
            
            <div className='subtitle'>
                Dando vida à redações através de ilustrações
            </div>

            <button>Quero fazer parte</button>

        </div>

        <div className='test' >


        </div>
    

    </Fragment>
)

export default Home