import React,{ createContext, useContext, useReducer } from 'react';


//Context
const FormCadastro = createContext({});

const initialData = {
    profession: '',
    rg: 0,
    name: '',
    birthday: '',
    email: '',
    schoolname: '',
    contact: ''
};

//Reducer 
export const FromCadastroActions = {
    setProfession: 'profession',
    setRg: 'rg',
    setName: 'name',
    setBirthday: 'birthday',
    setEmail: 'email',
    setSchoolname: 'schoolname',
    setContact: 'Contact'
};


const cadastroReducer = (state, action) =>{

    switch(action.type){
        
        case FromCadastroActions.setProfession:
            return {...state, profession:action.payload};
        
        case FromCadastroActions.setRg:
            return {...state, rg:action.payload};

        case FromCadastroActions.setName:
            return {...state, name:action.payload};

        case FromCadastroActions.setBirthday:
            return {...state, birthday:action.payload};

        case FromCadastroActions.setEmail:
            return {...state, email:action.payload};

        case FromCadastroActions.setSchoolname:
            return {...state, schoolname:action.payload};

        case FromCadastroActions.setContact:
            return {...state, contact:action.payload};

        default:
            return state;
    }
};


//Provider
export const CadastroProvider = ({children}) => {
    const [state, dispatch] = useReducer(cadastroReducer, initialData);
    const value = {state, dispatch};
    return(
        
        <FormCadastro.Provider value = {value} >
            {children}
        </FormCadastro.Provider>

    );
};



//Hook
export const useCadastro = () => {
    const context = useContext(FormCadastro);
    if(context === undefined){
        throw new Error('Hook useCadastro sendo usado fora do CadastroProvider');
    }

    return context;
};
