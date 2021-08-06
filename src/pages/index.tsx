import { useEffect, useState } from 'react'
import Layout from '../components/template/Layout'



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


  return (
    <Layout titulo="Página Inicial" subtitulo={"Construção do tamplate admin"}>
      
      
    </Layout>
  )
}
