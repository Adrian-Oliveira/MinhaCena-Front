import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({label, theme, onClick})=>{

    return(
        <button className={`buttonComponent buttonComponent--${theme}`}
                onClick={()=>onClick} >
            {label}
        </button>
    );
}

Button.defaultProps = {
    label:'',
    theme:'blue',
    onClick:()=>{}
}

Button.propTypes={
    label: PropTypes.string,
    theme: PropTypes.oneOf(['blue','purple','grey']),
    onClick:PropTypes.func
}


export {Button};