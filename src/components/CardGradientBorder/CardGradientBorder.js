import React from "react";
import PropTypes from 'prop-types';
import './cardGradientBorder.scss';

const CardGradientBorder = ({children, className, borderRadius})=>{

    const styleGradientBox = {
        'borderRadius': borderRadius
    }
    const styleCard = {
        'borderRadius': borderRadius -1
    }
    
    return(

        <div style={styleGradientBox} className={`cardGradientBorder__gradient-box ${className}`}>
            <div style={styleCard} className={`cardGradientBorder__card ${className}`}>
                {children}
            </div>
        </div>
    );

}

CardGradientBorder.propTypes={
    children: PropTypes.element,
    className: PropTypes.string,
    borderRadius:PropTypes.number
}

CardGradientBorder.defaultProps = {
    children:<></>,
    className:'',
    borderRadius:32
}

export {CardGradientBorder};