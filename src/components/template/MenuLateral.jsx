import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
import BotaoAlternarTema from "./BotaoAlternarTema"
import useAppData from "../../data/hook/useAppData"



export default function MenuLateral() {
    const {tema , alternarTema} = useAppData()

    return (

        <aside className={`
            flex flex-col
            dark:bg-gray-900 dark:text-gray-200
            bg-gray-200 text-gray-700
        `}>
            <div className={`
                flex flex-col items-center justify-center
                dark:bg-gray-900 dark:text-gray-200
                bg-gray-200 text-gray-700
                h-20 w-20 
            `} >
                <Logo />
                <p className={`text-xs p-1`}>WMS Expert</p>
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>

            <ul className={`sm:flex justify-center lg:hidden`} >
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
            </ul>
            <ul>

                <MenuItem 
                texto="Sair" icone={IconeSair}
                onClick={() => alert("Logout!!")}
                className={`
                    text-red-600
                    hover:bg-gray-800 hover:text-white
                    dark:text-red-400
                    dark:hover:bg-red-600 dark:hover:text-white`}
                />
            </ul>
        </aside>
    )
}