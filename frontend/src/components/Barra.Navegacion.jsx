import { BsPlusCircle } from 'react-icons/bs';
import { GoHome } from 'react-icons/go'
import { BsPinMap } from 'react-icons/bs'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { BsHeart } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';
export default function Nav() {
    const { user,logOut } = useAuth();
    const navigate = useNavigate();

    const handleClickPerfil = () => {
        navigate("/perfil")
    }
    const handleClickInicio = () => {
        navigate("/inicio")
    }
    const handleClickQueja = () => {
        navigate("/queja")
    }
    const handleClickMapa = () => {
        navigate("/mapa")
    }
    return (
        <>
            <div className=' bg-white fixed w-full h-20 top-0 md:hidden text-center justify-between flex p-5'>
                <div>
                <p className='mx-5 font-PTSerif text-2xl cursor-pointer fixed'onClick={handleClickInicio}>¡Quej-Up!</p>
                </div>
                <AiOutlinePoweroff className='mx-5 mt-2 w-6 h-6 text-red-500' onClick={logOut}/>
            </div>

            <div className="bg-white fixed w-full h-16 flex bottom-0 left-0 justify-evenly items-center md:h-full md:w-12 md:flex-col lg:w-2/12 border-2 lg:justify-between border-gray-300 z-50">


                <div className='cursor-pointer rounded md:flex hidden w-full lg:mt-10 md:justify-center lg:justify-start' onClick={handleClickInicio}>
                    <img src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1699554522/resources/sqjg04rk2maydinoc5gh.png" className='lg:hidden w-auto h-7 '/>
                    <img src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1699554059/resources/lc9kwvzsioeizhgcpyzn.png" className='lg:flex hidden w-2/3 h-full ml-3'/>
                </div>

                <div className='w-full h-full flex items-center justify-around md:h-3/4 md:flex-col lg:h-2/3'>
                

                        <div className='lg:py-2 cursor-pointer flex hover:bg-blue-500 hover:text-white lg:w-11/12 rounded group hover:scale-105 ' onClick={handleClickInicio}>
                            <GoHome className='text-blue-500 h-1/2 w-auto md:h-6 lg:m-2 transition-transform transform scale-100 group-hover:scale-110 group-hover:text-orange-400' />
                            <p className='hidden lg:block mt-2'>Inicio</p>
                        </div>

                        <div className=' lg:py-2 cursor-pointer flex hover:bg-blue-500 hover:text-white lg:w-11/12 rounded group hover:scale-105' onClick={handleClickMapa}>
                            <BsPinMap className='text-blue-500 h-1/2 w-auto md:h-7 lg:m-2 transition-transform transform scale-100 group-hover:scale-110 group-hover:text-orange-400' />
                            <p className='hidden lg:block mt-2'>Mapa</p>
                        </div>

                        <div className=' lg:py-2 cursor-pointer flex hover:bg-blue-500 hover:text-white lg:w-11/12 rounded group hover:scale-105' onClick={handleClickQueja}>
                            <BsPlusCircle className='text-blue-500 h-1/2 w-auto md:h-7 lg:m-2 transition-transform transform scale-100 group-hover:scale-110 group-hover:text-orange-400' />
                            <p className='hidden lg:block mt-2'>Queja</p>
                        </div>

                        <div className=' lg:py-2 cursor-pointer flex  hover:bg-blue-500 hover:text-white lg:w-11/12 rounded group hover:scale-105'>
                            <BsHeart className='text-blue-500 h-1/2 w-auto md:h-7 lg:m-2 transition-transform transform scale-100 group-hover:scale-110 group-hover:text-orange-400' />
                            <p className='hidden lg:block mt-2'>Notificaciones</p>
                        </div>

                        <div className=' lg:py-2 cursor-pointer flex  hover:bg-blue-500 hover:text-white lg:w-11/12 rounded group hover:scale-105' onClick={handleClickPerfil}>
                            <div className="w-6 h-6 rounded-full overflow-hidden md:w-9 md:h-9 lg:ml-1 transition-transform transform scale-100 group-hover:scale-110">
                                <img
                                    src={user.img_perfil}
                                    alt="Foto de perfil del usuario"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className='hidden lg:block my-1 ml-1'>Perfil</p>
                        </div>


                </div>
                <button className=' lg:py-2 cursor-pointer hover:bg-blue-500 hover:text-white lg:w-11/12 rounded md:flex hidden mb-3 hover:scale-105 group' onClick={logOut}>
                    <AiOutlinePoweroff className='text-blue-500 h-1/2 w-auto md:h-7 lg:m-2 transition-transform transform scale-100 group-hover:scale-110 group-hover:text-orange-400' />
                    <p className='hidden lg:block mt-2'>Cerrar sesión</p>
                </button>


            </div>
        </>
    )
}