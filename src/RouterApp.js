import React,{Fragment} from 'react';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Outlet
  } from "react-router-dom";


import ProfessorTree from './core/utils/ProfessorTree';
import IllustratorTree from './core/utils/IllustratorTree';


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


import Dashboard from './pages/Dashboard';
import ListRedacoes from './pages/ListRedacoes';
import PubliRedacoes from './pages/PubliRedacoes';
import EditRedacoes from './pages/EditRedacoes';
import ViewRedacoes from './pages/ViewRedacoes';

import ListIlustracoes from './pages/ListIlustracoes';
import ViewIlustracoes from './pages/ViewIlustracoes';


import ListRedacoesToIllustrator  from './pages/ListRedacoesToIllustrator'; 
import ViewRedacoesToIllustrator from './pages/ViewRedacoesToIllustrator';
import PubliIlustracao from './pages/PubliIlustracao';


import { CadastroProvider } from './core/utils/contextCadastro';
import PrivateRoutes from './core/utils/PrivateRoutes';

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

                    {/* Rotas privadas */}
                    <Route element={<PrivateRoutes/>} >

                        <Route path='escola' element={<ProfessorTree/>} >
                            <Route path='dashboard' element={<Dashboard/>}>

                                <Route path='redacoes'>
                                    <Route index  element={<ListRedacoes/>} />
                                    <Route path='publicar' element={<PubliRedacoes/>} />
                                    <Route path='editar' element={<EditRedacoes/>} />
                                    <Route path='visualizar' element={<ViewRedacoes/>} />
                                </Route>
                                <Route path='ilustracoes'>
                                    <Route index element={<ListIlustracoes/>} />
                                    <Route path='visualizar' element={<ViewIlustracoes/>} />
                                </Route> 
                            
                            </Route>
                        </Route>   

                        <Route path='ilustrador' element={<IllustratorTree/>} >

                            <Route path='dashboard' element={<Dashboard/>}>

                                <Route path='redacoes'>

                                    <Route index  element={<ListRedacoesToIllustrator/>} />
                                    <Route path='visualizar' element={<ViewRedacoesToIllustrator/>} />
                                    <Route path='publicar' element={<PubliIlustracao/>} />

                                </Route>
                            
                            </Route>
                        </Route>   

                    </Route> 

                    
                    <Route path="*" element={<Navigate to="/" />} />
                    

                </Routes>
            </HashRouter>
        </CadastroProvider>
        
    );
}

export default RouterApp;

