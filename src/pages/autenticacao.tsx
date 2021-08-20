import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import Image from "next/image";
import wallpaper from '../../public/inverter.jpg'
import { IconeExclamacao } from "../components/icons";
import useAuth from "../data/hook/useAuth";



export default function Autenticacao() {
    
    const {usuario, loginGoogle} = useAuth()

    const [erro, setErro] = useState(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    function exibirErro(msg, tempoEmSegundos = 5){
        setErro(msg)
        setTimeout(() => {
           setErro(null) 
        }, tempoEmSegundos * 1000);
    }

    function submeter() {
        if(modo === 'login'){
            exibirErro('Ocorreu um erro no login!')
        }else{
            exibirErro('Ocorreu um erro no cadastro!')
        }
    }

    return (
        <div className={`flex h-screen items-center justify-center `}>

            <div className={` hidden md:block w-1/2 lg:w-2/3`} >
                <img
                    //src="https://source.unsplash.com/random"
                    src="https://firebasestorage.googleapis.com/v0/b/smart-loja.appspot.com/o/WMS%20Expert%20Tela%20apresenta%C3%A7%C3%A3o.jpg?alt=media&token=16dfdacb-45e4-4e96-846e-fddc33d86715"
                    alt="Imagem da tela de autenticação"
                    className={`h-screen w-full object-cover`}
                />
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
                <h1 className={`text-2xl font-bold mb-5 `}>
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
                </h1>
                {erro ? (<div className={`
                    flex items-center justify-center
                    bg-red-400 text-white py-3 px-5 my-2 
                    border border-red-700 rounded-lg
                `}>
                    {IconeExclamacao()}
                    <span className={`ml-3`}>{erro}</span>
                </div>): (
                    <div></div>
                )}
                <AuthInput
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthInput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                />
                <AuthInput
                    label="Confirmação de senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                    naoRenderizarQuando={true}
                />
                <button onClick={submeter} className={`
                w-full bg-blue-500 hover:bg-blue-700 
                text-white rounded-lg px-4 py-3 mt-6
            `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className={`my-6 border-gray-300 w-full `} />

                <button onClick={loginGoogle} className={`
                w-full bg-red-500 hover:bg-red-400 
                text-white rounded-lg px-4 py-3
            `}>
                    Entrar com Google
                </button>

                {modo === 'login' ? (
                    <p className={`mt-8`}>
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Criar uma conta gratuitamente</a>
                    </p>
                ) : (
                    <p className={`mt-8`}>
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Entre com suas credencias</a>
                    </p>
                )}
            </div>


        </div>
    )

}