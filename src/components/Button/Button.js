import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({label, theme, onClick, className})=>{

    return(
        <button className={`${className} buttonComponent buttonComponent--${theme}`}
                onClick={()=>onClick} >
            {label}
        </button>
    );
}

Button.defaultProps = {
    label:'',
    theme:'blue',
    onClick:()=>{},
    className:''
}

Button.propTypes={
    label: PropTypes.string,
    theme: PropTypes.oneOf(['blue','purple','grey','red']),
    onClick:PropTypes.func,
    className:PropTypes.string
}


export {Button};