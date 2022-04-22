import React from "react";
import './cardGradientBorder.scss'

const CardGradientBorder = ({children, className, borderRadius})=>{

    const styleGradientBox = {
        'border-radius': borderRadius
    }
    const styleCard = {
        'border-radius': borderRadius -1
    }
    
    return(

        <div style={styleGradientBox} className={`cardGradientBorder__gradient-box ${className}`}>
            <div style={styleCard} className={`cardGradientBorder__card ${className}`}>
                {children}
            </div>
        </div>
    );

}

CardGradientBorder.defaultProps = {
    children:<></>,
    className:'',
    borderRadius:32
}

export {CardGradientBorder};