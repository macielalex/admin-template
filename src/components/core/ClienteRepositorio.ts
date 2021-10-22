import Cliente from "./Cliente";

export default interface ClienteRepositorio {

    salvar(cliente: Cliente): Promise<Cliente>
    ativar(cliente: Cliente): Promise<void>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}