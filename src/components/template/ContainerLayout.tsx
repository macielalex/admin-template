import TituloContainer from "./TituloContainer";


interface ContainerLayoutProps{
    titulo?: string
    children: any
}

export default function ContainerLayout(props: ContainerLayoutProps){

    return (
        <div className={` 
        flex flex-col w-2/2  
        bg-white text-gray-800 rounded-md`} >

            <TituloContainer>{props.titulo}</TituloContainer>
            <div className={` p-6`}>
            {props.children}
            </div>

        </div>
    )
}