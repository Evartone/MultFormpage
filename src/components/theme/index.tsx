import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import * as C from './styles'
import { ReactNode } from 'react';


type Props = {

    children: ReactNode
}

export const Theme = ({children}: Props) =>{

    return (

        <C.Container>

            <C.Area>

                <Header />

                <C.Steps>

                    <C.Sidebar>

                            <SidebarItem 
                            title ="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            
                            />


                           <SidebarItem 
                            title ="Profissional"
                            description="Se identifique"
                            icon="book"
                            path="/page2"
                            
                            />     


                        <SidebarItem 

                            title ="Contactos"
                            description="Como te achar"
                            icon="mail"
                            path="/page3"
                            
                            />
                        
                    </C.Sidebar>

                    <C.Page>

                        {children}
                    
                    </C.Page>
    

                </C.Steps>

               
            </C.Area>

        </C.Container>

    ); 
}