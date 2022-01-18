import React,{Fragment} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";



import Home from './pages/Home'
import Cadastro from './pages/Cadastro';

const App = () => (
    <Fragment>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
            </Routes>
        </Router>
    </Fragment>
)

export default App
