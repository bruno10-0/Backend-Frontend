import Registrar from '../components/Fromulario.Registro'
import { Footer } from '../components/Footer'
export default function Register() {
    return (
        <>
            <div className="flex w-full h-auto justify-evenly">
                <div className="w-full flex items-center justify-center lg:w-1/2">
                    <Registrar />
                </div>
                <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
                    <img 
                    src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1699554059/resources/lc9kwvzsioeizhgcpyzn.png" 
                    alt="imagen" 
                    className='mt-80 p-11'
                    />
                    
                </div>
            </div>
            <Footer />
        </>
    )
}