import React,{ Fragment } from "react";
import { Outlet } from "react-router-dom";

import './ilustrador.scss';

const Ilustrador = ()=>{

    return(
        <Fragment>
            <div className="cadastro__ilustrador">
                <h3>
                    Cadastro - Ilustrador
                </h3>
                <Outlet/>
            </div>

        </Fragment>
    );

}

export default Ilustrador