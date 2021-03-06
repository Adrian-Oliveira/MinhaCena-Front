import React,{Fragment} from 'react';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

import Professor from './pages/Cadastro__Professor';
import ProfessorStep1 from './pages/Cadastro__Professor/step1';
import ProfessorStep2 from './pages/Cadastro__Professor/step2';
import ProfessorStep3 from './pages/Cadastro__Professor/step3';

import Ilustrador from './pages/Cadastro__Ilustrador';
import IlustradorStep1 from './pages/Cadastro__Ilustrador/step1';
import IlustradorStep2 from './pages/Cadastro__Ilustrador/step2';
import IlustradorStep3 from './pages/Cadastro__Ilustrador/step3';

import { CadastroProvider } from './core/utils/contextCadastro';


const RouterApp = ()=>{

    return(

        <CadastroProvider>
            <HashRouter>
                <Routes>

                    <Route path="/" element={<Home/>}/>
                    
                    <Route path="login" element={<Login/>}/>
                    
                    <Route path="cadastro" element={<Cadastro/>} >
                        
                        <Route path="professor" element={<Professor/>}>
                            <Route path="step1" element={<ProfessorStep1/>} />
                            <Route path="step2" element={<ProfessorStep2/>} />
                            <Route path="step3" element={<ProfessorStep3/>} />
                        </Route>
                        
                        <Route path="ilustrador" element={<Ilustrador/>}>
                            <Route path="step1" element={<IlustradorStep1/>} />
                            <Route path="step2" element={<IlustradorStep2/>} />
                            <Route path="step3" element={<IlustradorStep3/>} />
                        </Route>
                    </Route>   

                    
                    <Route path="*" element={<Navigate to="/" />} />
                    

                </Routes>
            </HashRouter>
        </CadastroProvider>
        
    );
}

export default RouterApp;

