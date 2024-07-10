import * as C from './styles'
import { useNavigate, Link} from 'react-router-dom';
import { Theme } from '../../components/theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { SelectionOption } from '../../components/SelectOption/Index';

export const Form2 =()=> {

    const navigate =useNavigate(); 

    const {state, dispatch} = useForm(); 



    const handleNextStep =()=>{

        if(state.name !== "") {

              navigate('/page3')
        } else {
            alert("Preencha os seus dados!")
        }

    }


    

    const setLevel =(level:number) =>{


        dispatch ({
            type:FormActions.setLevel, 
            payload:level
        })
    }

    useEffect(()=>{

        if (state.name === "") {

            navigate('/'); 
        } else {
              dispatch({
            type:FormActions.setCurrentStep, 
            payload:2
        })
        }  

      

    }, [])

    return (
    
        <Theme> 

            <C.Container>

                <p>Passo 2/3 </p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com o seu estado actual, profissionalmente.</p>

                <hr />

                <SelectionOption 

                 title="Sou iniciante"
                 description="Comecei a programar há 2 anos"
                 icon= "🎉"
                 selected ={state.level === 0}
                 onClick ={()=>setLevel(0)}
                
                />

                <SelectionOption 

                 title="Sou programdor"
                 description="Comecei a programar há 3 anos ou mais"
                 icon= "🤩"
                 selected ={state.level ===1}
                 onClick ={()=>setLevel(1)}
                
                />
                 

                 <Link to= "/" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>

            </C.Container>

        </Theme>
    ); 
}