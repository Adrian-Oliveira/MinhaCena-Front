import React,{ Fragment } from "react";
import { Outlet } from "react-router-dom";

const Professor = ()=>{

    return(
        <Fragment>
            <div>
                Cadastro professor
                <Outlet/>
            </div>
        </Fragment>
    );

}

export default Professor