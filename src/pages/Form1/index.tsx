import * as C from './styles'
import { useNavigate} from 'react-router-dom';
import { Theme } from '../../components/theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const Form1 =()=> {

    const navigate =useNavigate(); 

    const {state, dispatch} = useForm(); 

    const handleNextStep =()=>{

        if(state.name !== "") {

              navigate("/page2")
        } else {
            alert("Preencha os seus dados!")
        }

      

    }

    useEffect(()=>{

        dispatch({
            type:FormActions.setCurrentStep, 
            payload:1
        })

    }, [])

    const Handlenamechange =(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
         type:FormActions.setName,
         payload:e.target.value
        })
    }

    return (
    
        <Theme>

            <C.Container>

                <p>Passo  1/3 </p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha abaixo com o seu nome completo.</p>

                <hr />

                <label>

                   Seu nome completo
                  <input type="text" autoFocus
                   value={state.name}
                   onChange={Handlenamechange}
                  />

                </label>

                <button onClick={handleNextStep}>Próximo</button>

            </C.Container>

        </Theme>
    ); 
}