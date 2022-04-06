import React,{ Fragment } from "react";
import { Outlet } from "react-router-dom";

const Ilustrador = ()=>{

    return(
        <Fragment>
            <div>
                Cadastro Ilustrador
                <Outlet/>
            </div>
        </Fragment>
    );

}

export default Ilustrador