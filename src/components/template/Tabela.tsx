import Cliente from "../core/Cliente";

interface TabelaProps {
    clientes: Cliente[]

}
export default function Tabela(props: TabelaProps) {

    function renderizarCabecalho() {

        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Email</th>
            </tr>
        )
    }

    function renderizarDados() {

        return props.clientes?.map((cli, i) => {
            return (
                <tr key={cli.id}
                className={`${i % 2 === 0 ? 'bg-blue-100' : ' bg-blue-200 '}`}>
                    <td className="text-left p-4">{cli.id}</td>
                    <td className="text-left p-4">{cli.nome}</td>
                    <td className="text-left p-4">{cli.email}</td>
                </tr>
            )
        })
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