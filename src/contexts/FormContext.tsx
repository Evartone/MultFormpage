// Context, Reducer, Provider, Hook
import { ReactNode, createContext, useContext, useReducer } from "react";

 type State = {

    currentStep:number; 
    name:string; 
    level: 0 | 1; 
    email:string; 
    github:string; 

 }

 type Action = {

    type: FormActions; 
    payload: any; 
    
 }

 type FormProviderProps = { 

    children:ReactNode 
 }; 

const inicialData: State = {
     
    currentStep: 0,
    name:'',
    level:0 ,
    email:'',
    github:''    
}

type contextType = {

    state: State; 
    dispatch:(action: Action)=>void; 
}

// creating Context

const FormContext = createContext<contextType | undefined>(undefined)

// Reducer 

export enum FormActions {

    setCurrentStep, 
    setName, 
    setLevel, 
    setEmail, 
    setGithub, 
}

const FormReducer =(state: State, action:Action)=> {

    // switch to identify the actions 

    switch(action.type) {

        case FormActions.setCurrentStep: 
           return {...state, currentStep:action.payload}

        case FormActions.setName: 
           return {...state, name:action.payload}   

        case FormActions.setLevel: 
          return {...state, level:action.payload}   
        case FormActions.setEmail: 
            return {...state, email:action.payload}  

        case FormActions.setGithub: 
            return {...state, github:action.payload}    

        default: 
             return state;     
    }

}

// Provider 

export const FormProvider =({children}:FormProviderProps)=> {

    const [state, dispatch] = useReducer(FormReducer, inicialData);
    const value = {state, dispatch } 

    return ( 

    <FormContext.Provider value={value}>

        {children}

    </FormContext.Provider>

    ); 
 
}

// Context Hook 

export const useForm =()=> {

    const context = useContext(FormContext); 

    if(context === undefined) {

        throw new Error ('useForm precisa ser usado dentro do provider')
    }

    return context; 

}