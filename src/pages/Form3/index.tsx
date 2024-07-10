import * as C from './styles'
import { useNavigate, Link} from 'react-router-dom';
import { Theme } from '../../components/theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const Form3 =()=> {

    const navigate =useNavigate(); 

    const {state, dispatch} = useForm(); 

    const handleNextStep =()=>{
      
        if(state.email !== "" && state.github !== "") {

            console.log(state)

        } else {
            
            alert("Preencha os dados!")
        }
      
    }

    useEffect(()=>{

        if (state.name === "") {

            navigate('/'); 
        } else {
              dispatch({
            type:FormActions.setCurrentStep, 
            payload:3
        })
        }  

      

    }, [])

    const HandleEmailchange =(e:ChangeEvent<HTMLInputElement>)=>{

        dispatch({
         type:FormActions.setEmail,
         payload:e.target.value
        })
    }


    const HandleGithubchange =(e:ChangeEvent<HTMLInputElement>)=>{

        dispatch({
         type:FormActions.setGithub,
         payload:e.target.value
        })
    }

    return (
    
        <Theme>

            <C.Container>

                <p>Passo  3/3 </p>
                <h1>Muito bom, {state.name}, onde te achamos? </h1>
                <p>Preencha com os seus contactos, por favor!</p>

                <hr />

                <label>

                   Qual é o seu email ? 
                  <input type="email" 
                   value={state.email}
                   onChange={HandleEmailchange}
                  />

                </label>

                 <label>

                   Qual é o seu Github? 
                  <input type="url" 
                   value={state.github}
                   onChange={HandleGithubchange}
                  />

                </label>
                 

                <Link to= "/page2" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar cadastro</button>

            </C.Container>

        </Theme>
    ); 
}