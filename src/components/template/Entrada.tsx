
interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor:any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void

}

export default function Entrada (props : EntradaProps){
    return (
        <div className={`flex flex-col`}>
            <label className={`mb-2 dark:text-gray-50`}>
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'}
            value={props.valor} 
            readOnly={props.somenteLeitura}
            className={`
                border border-blue-500 rounded-lg 
                focus:outline-none bg-gray-100 px-4 py-2  dark:bg-gray-400 text-gray-600
                ${props.somenteLeitura ? '': 'focus:bg-white dark:focus:bg-gray-200 text-gray-50'}
            `}
            onChange={e => props.valorMudou?.(e.target.value)}
            />
        </div>
    )
}