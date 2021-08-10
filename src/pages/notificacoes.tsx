import { useEffect, useState } from 'react'
import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'



export default function Notificaoes() {

  const {alternarTema} = useAppData()

  return (
    <Layout titulo="Notificações" 
    subtitulo="Gestão de notificações">      
      <h3>Notificações</h3>   
      
    </Layout>
  )
}
