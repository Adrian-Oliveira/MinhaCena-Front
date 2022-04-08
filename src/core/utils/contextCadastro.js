import React,{ createContext, useContext, useReducer } from 'react';


//Context
const FormCadastro = createContext({});

const initialData = {
    profession: '',
    rg:'',
    name: '',
    birthday: '',
    email: '',
    schoolname: '',
    city:'',
    contact: '',
    portfolio: '',
    socialnetwork: '',
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
    setContact: 'contact',
    setPortfolio: 'portfolio',
    setSocialNetwork: 'socialNetwork'
};


const cadastroReducer = (state, action) =>{

    switch(action.type){
        
        case FormCadastroActions.setProfession:
            return {...state, profession:action.payload};
        
        case FormCadastroActions.setRg:
            if (action.payload.match(/\d{7}/)){
                return {...state, rg:action.payload};
            }
            else{
                return state;
            }

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

        case FormCadastroActions.setPortfolio:
            return {...state, portfolio:action.payload};

        case FormCadastroActions.setSocialNetwork:
            return {...state, socialnetwork:action.payload};
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
