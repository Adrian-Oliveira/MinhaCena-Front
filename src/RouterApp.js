import React,{Fragment} from 'react';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Professor from './pages/Professor';
import Ilustrador from './pages/Ilustrador';

import ProfessorStep1 from './pages/Professor/step1';
import ProfessorStep2 from './pages/Professor/step2';
import ProfessorStep3 from './pages/Professor/step3';

import IlustradorStep1 from './pages/Ilustrador/step1';
import IlustradorStep2 from './pages/Ilustrador/step2';
import IlustradorStep3 from './pages/Ilustrador/step3';




const RouterApp = ()=>{

    return(
        <HashRouter>
            <Routes>

                <Route path="/" element={<Home/>}/>

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

            </Routes>
        </HashRouter>

    );
}

export default RouterApp;

{/* <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home/>}/>

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

            </Routes>
        </BrowserRouter> */}
