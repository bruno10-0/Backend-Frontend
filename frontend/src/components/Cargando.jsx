import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Cargando = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-90 backdrop-blur-lg z-50'>
      <div className='flex items-center px-8 py-3 bg-black rounded-lg'>
        <AiOutlineLoading3Quarters className='w-10 h-10 animate-spin text-sky-400 mr-6' />
        <p className='text-slate-100 text-4xl'>Cargando...</p>
      </div>
    </div>
  );
}

export default Cargando;
