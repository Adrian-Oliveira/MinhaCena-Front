import React,{Fragment} from 'react'

import bannerHome from '../../core/assets/img/bannerHome.png'
import logo from '../../core/assets/icons/logo.png'
import './home.scss'

const Home = () => (
    <Fragment>
        <header>
            <img className='logo' src={logo} />


            
            <div> Inicio </div>
            <div> Quem Somos</div>
            <div> Quero Fazer Parte</div>
            
            <button>Entrar</button>
            
        </header>

        <img className="banerHome" src={bannerHome}/>
    </Fragment>
)

export default Home