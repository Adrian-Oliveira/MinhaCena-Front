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
    city:'',
    contact: ''
};

//Reducer 
export const FormCadastroActions = {
    setProfession: 'profession',
    setRg: 'rg',
    setName: 'name',
    setBirthday: 'birthday',
    setEmail: 'email',
    setSchoolname: 'schoolname',
    setCity: 'city',
    setContact: 'contact'
};


const cadastroReducer = (state, action) =>{

    switch(action.type){
        
        case FormCadastroActions.setProfession:
            return {...state, profession:action.payload};
        
        case FormCadastroActions.setRg:
            return {...state, rg:action.payload};

        case FormCadastroActions.setName:
            return {...state, name:action.payload};

        case FormCadastroActions.setBirthday:
            return {...state, birthday:action.payload};

        case FormCadastroActions.setEmail:
            return {...state, email:action.payload};

        case FormCadastroActions.setSchoolname:
            return {...state, schoolname:action.payload};

        case FormCadastroActions.setCity:
            return {...state, city:action.payload};

        case FormCadastroActions.setContact:
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
