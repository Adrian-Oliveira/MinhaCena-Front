import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom';

import Dashboard from '../../pages/Dashboard';

import ListRedacoes from '../../pages/ListRedacoes';
import PubliRedacoes from '../../pages/PubliRedacoes';
import EditRedacoes from '../../pages/EditRedacoes';
import ViewRedacoes from '../../pages/ViewRedacoes';

import ListIlustracoes from '../../pages/ListIlustracoes';
import ViewIlustracoes from '../../pages/ViewIlustracoes';

const useTypeAccountEscola=()=>{
    const user= JSON.parse(localStorage.getItem('user'));

    if(user.typeAccount === "escola"){
        return true ;
    } else {
        return false
    }
}



const ProfessorTree=(props) =>{

    const typeAccountEscola = useTypeAccountEscola();

    
    return typeAccountEscola?<Outlet/>:<Navigate to="/login"/>;

}

export default ProfessorTree;