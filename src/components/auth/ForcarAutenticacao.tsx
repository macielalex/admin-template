import Image from 'next/image'
import route from 'next/router'
import loading from '../../../public/images/loading4.gif'
import useAppData from '../../data/hook/useAppData'
import useAuth from '../../data/hook/useAuth'


export default function ForcarAutenticacao(props){

    const {usuario, carregando} = useAuth()
    const {tema} = useAppData()
    


    function renderizarConteudo(){
        return (
            <>
                {props.children}
            </>
        )
    }
    
    function renderizarCarregando(){
        return (
            <div className={` 
            bg-white
            flex justify-center items-center h-screen
            `}>
                <Image src={loading} />
                <p>{tema}</p>
            </div>
        )
    }
    
    if(!carregando && usuario?.email){
        return renderizarConteudo()
    } else if(carregando){
        return renderizarCarregando()
    }else{
        route.push('/autenticacao')
        return null
    }
  

    return(
        <div className={` flex justify-center items-center h-screen`} >
            
        </div>

    )

}