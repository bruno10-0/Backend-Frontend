import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Cargando = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-500 bg-opacity-60 backdrop-blur-lg z-50'>
      <div className='flex items-center px-8 py-3 bg-orange-500 rounded-lg'>
        <AiOutlineLoading3Quarters className='w-10 h-10 animate-spin text-blue-500 mr-6' />
        <p className='text-white text-4xl'>Cargando...</p>
      </div>
    </div>
  );
}

export default Cargando;
