import { createContext, useState } from "react";

type Tema = 'dark' | '' 

interface AppContextProps {
    tema?: string, 
    alternarTema?: ()=> void

}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props){

    const [tema, setTema] = useState<Tema>('dark')
    
    function alternarTema(){
        setTema(tema == '' ? 'dark' :'')
    }

    return (
        <AppContext.Provider value={{
            tema: tema,
            alternarTema
        }}>
            {props.children}

        </AppContext.Provider>
    )
}


export default AppContext
export const AppConsumer = AppContext.Consumer