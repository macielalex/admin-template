import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"

export default function MenuLateral() {

    return (

        <aside className={`flex flex-col `}>
            <div className={`
            flex flex-col items-center justify-center
            bg-white
            h-20 w-20 `} >
                <Logo />
                <p className={`text-xs p-1`}>WMS Expert</p>
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
            <ul>
                <MenuItem 
                texto="Sair" icone={IconeSair}
                onClick={() => alert("Logout!!")}
                className={`text-red-600`}
                />
            </ul>
        </aside>
    )
}