import Image from 'next/image'
import logo from '../../../public/images/logo.png'

export default function Logo(){
    return(
        <div className={`
            h-10 w-10 rounded-full
            bg-white
        `}>
            <Image src={logo} alt="Picture"></Image>
            

        </div>
    )
}