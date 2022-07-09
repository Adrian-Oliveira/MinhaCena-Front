import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './tostDash.scss';

import Button from '../Button';
import CardGradientBorder from '../CardGradientBorder/';
import { useNavigate } from 'react-router-dom';

const TostDash = ({trigger, setTrigger})=>{

    const user=JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();
    
    const logout = ()=>{
        localStorage.removeItem('user');
        navigate('/', {replace: true})
    }

    if(!trigger){
        return(<></>);
    }
    
    
    return(
        <div onClick={()=>setTrigger(false)} className='tostDash' >
            <div className='tostDash__card'>
                

                <h3 className='tostDash__card__username' >{user.username}</h3>


                
                    
                <div className='tostDash__card__buttons' onClick={logout}>
                    Sair
                </div>

                
                
             </div>
    
        </div>

    );

   
}

TostDash.defaultProps = {
    trigger:false,
}

TostDash.propTypes={
    trigger: PropTypes.bool.isRequired,
    setTrigger: PropTypes.func.isRequired,
    
}


export {TostDash};