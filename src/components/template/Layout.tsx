import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
// import ForcarAutenticacao from '../auth/ForcarAutenticacao'
import useAppData from '../../data/hook/useAppData'
import forcarAutenticacao from '../../functions/forcarAut'

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {

    const {tema} = useAppData()
    return  forcarAutenticacao(        

        <div className={` ${tema}  flex h-screen w-screen`}>
            <MenuLateral />
            <div className={` 
                flex flex-col p-7
                bg-gray-300 dark:bg-gray-800
                w-full h-screen
            `}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
        
    )
}