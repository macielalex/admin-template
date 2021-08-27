import { useEffect, useState } from 'react'
import Cliente from '../components/core/Cliente'
import ContainerLayout from '../components/template/ContainerLayout'
import Layout from '../components/template/Layout'
import Tabela from '../components/template/Tabela'



// interface ResponseProps {
//   id: number
//   nome: string
//   obs: string
//   composition: any[]
// }


export default function Home() {

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


  const clientes = [

    new Cliente('1', 'Alex', 'alexmaciel.mail@gmail.com',''),
    new Cliente('2', 'Maciel', 'alexmaciel@logtech.com.br',''),
    new Cliente('3', 'Emerson', 'emersonlopes@logtech.com',''),
    new Cliente('4', 'Suporte', 'suporte@logtech.com.br ',''),
  ]


  return (
    <Layout titulo="Página Inicial" subtitulo={"Construção do tamplate admin"}>

      <ContainerLayout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </ContainerLayout>
    </Layout>
  )
}
