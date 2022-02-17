import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo, IconeLock, IconeLockOpen } from "../icons";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
    

}
export default function Tabela(props: TabelaProps) {

    const exibirAcoes  = props.clienteExcluido || props.clienteSelecionado

    

    function renderizarCabecalho() {

        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Status</th>
                { exibirAcoes?  <th className="p-4">Ações</th> : false}
                <button className={`bg-gradient-to-r from-gray-400 to-gray-700
            text-white px-4 py-2 rounded-md md-4`}
            onClick={()=>alert('tabela')}
            >Teste</button>
            </tr>
        )
    }

    function renderizarDados() {

        return props.clientes?.map((cli, i) => {
            return (
                <tr key={cli.id}
                    className={`${i % 2 === 0 ? 'bg-blue-100' : ' bg-blue-200 '}`}>
                    <td className={`text-left p-4 ${cli.textFormatActive} `}>{cli.id}</td>
                    <td className={cli.textFormatActive}>{cli.nome}</td>
                    <td className={cli.textFormatActive}>{cli.email}</td>
                    <td className={cli.textFormatActive}>{cli.activeDesc}</td>
                    {exibirAcoes ?  rederizarAcoes(cli) : false}
                </tr>
            )
        })
    }

    function rederizarAcoes(cliente: Cliente) {
        return (
            <td className={`flex justify-center`}>
                {
                    props.clienteSelecionado 
                    ? (
                        <button onClick={()=> props.clienteSelecionado?.(cliente)} 
                        className={`
                            flex justify-center items-center
                            text-green-600 rounded-full p-2 m-1
                            hover:bg-gray-400 `} >{IconeEdicao}</button>
                    ) 
                    : false
                }

                {
                    props.clienteExcluido 
                    ? (
                        <button onClick={()=> props.clienteExcluido?.(cliente)} 
                        className={`
                        flex justify-center items-center
                        ${ cliente.active ? 'text-red-600 rounded-full p-2 m-1' : 'text-blue-600 rounded-full p-2 m-1'}
                        hover:bg-gray-400 `} >{cliente.active ?IconeLock : IconeLockOpen}</button>
                        ) : false
                    }

            </td>
        )
    }


    return (
        <table className={` w-full rounded-xl overflow-hidden`}>
            <thead className={` text-gray-100 bg-gradient-to-r from-blue-500 to to-blue-400 `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>

        </table>
    )

}