import React from 'react'
import {Navigate, Outlet, Route} from 'react-router-dom';

const useTypeAccountIllustrator=()=>{
    const user= JSON.parse(localStorage.getItem('user'));

    if(user.typeAccount === "ilustrador"){
        return true ;
    } else {
        return false;
    }
}


const IllustratorTree=(props) =>{

    const typeAccountIllustrator = useTypeAccountIllustrator();

    
    return typeAccountIllustrator?<Outlet/>:<Navigate to="/login"/>;

}

export default IllustratorTree;