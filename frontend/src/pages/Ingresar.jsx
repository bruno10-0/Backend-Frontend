import Ingresar from "../components/Formulario.Ingreso"
import { Footer } from "../components/Footer"
export default function Login_Logo() {
    return(
        <>
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
            <Ingresar/>
            </div>
            <div className="hidden lg:flex h-full w-1/2 bg-white items-center justify-center">
                <img 
                src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1699554059/resources/lc9kwvzsioeizhgcpyzn.png" 
                alt="imagen" 
                className="mr-20"/>
            </div>
        </div>
        <Footer/>
        </>
    )
}