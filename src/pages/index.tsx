import { CElement, useEffect, useState } from 'react'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import Cliente from '../components/core/Cliente'
import ClienteRepositorio from '../components/core/ClienteRepositorio'
import Botao from '../components/template/Botao'
import ContainerLayout from '../components/template/ContainerLayout'
import Formulario from '../components/template/Formulario'
import Layout from '../components/template/Layout'
import Tabela from '../components/template/Tabela'
import { CSVLink  } from 'react-csv'


// interface ResponseProps {
//   id: number
//   nome: string
//   obs: string
//   composition: any[]
// }


export default function Home() {


  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

 const headers = [
   {label: "id", key:"id"},
   {label: "nome", key:"nome"},
   {label: "email", key:"email"},
   {label: "active", key:"active"},
 ];

 const csvReport ={
   filename: 'Clientes.csv',
   headers: headers,
   data: clientes

 };

  useEffect(obterTodos, [])


  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })

  }

  function ativar(cliente: Cliente) {
    repo.ativar(cliente)
    obterTodos()
  }


  // const [data, setData] = useState<ResponseProps>()



  // const load = async () => {

  //   try {

  //     await fetch('/api/products/25096')
  //       .then(e => e.json())
  //       .then(e => setData(e))
  //       .catch(e => console.info(e + 'Erro do Catch'))
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // useEffect(() => {

  //   load()
  // }, [])


  /*const clientes = [

    new Cliente('1', 'Alex', 'alexmaciel.mail@gmail.com', ''),
    new Cliente('2', 'Maciel', 'alexmaciel@logtech.com.br', ''),
    new Cliente('3', 'Emerson', 'emersonlopes@logtech.com', ''),
    new Cliente('4', 'Suporte', 'suporte@logtech.com.br ', ''),
  ]*/

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('formulario')
  }
  
  async function clienteExcluido(cliente: Cliente) {
    
    if (cliente.active) {
      await repo.excluir(cliente)
      obterTodos()
    } else {
      await repo.ativar(cliente)
      obterTodos()

    }

    
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('formulario')
  }



  return (
    <Layout titulo="Página Inicial" subtitulo={"Construção do tamplate admin"}>

      <ContainerLayout titulo="Cadastro Simples">
        {visivel === 'tabela'
          ? (
            <>
              <div className={`flex justify-end`} >
                <Botao
                  cor='blue'
                  onClick={()=>alert('Exportar')}
                  className={`mb-4`}> 
                  
                </Botao>
                <CSVLink {...csvReport} >Exportar</CSVLink>
              </div>
              <Tabela clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
                
              />
            </>

          )
          : (
            <Formulario
              cliente={cliente}
              clienteMudou={salvarCliente}
              cancelado={() => setVisivel('tabela')} />
          )}


      </ContainerLayout>
    </Layout>
  )
}
