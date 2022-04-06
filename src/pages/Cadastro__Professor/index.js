import React,{ Fragment } from "react";
import { Outlet } from "react-router-dom";

import './professor.scss'

const Professor = ()=>{

    return(
        <Fragment>
            <div className="cadastro__professor">
                <h3 >
                    Cadastro - Professor/Escola
                </h3>
                
                <Outlet/>
            </div>
        </Fragment>
    );

}

export default Professor