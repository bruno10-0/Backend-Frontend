import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/authContext"

export default function RutaProtegida() {
  
  const { isAuthenticated,cargando } = useAuth()

  if(cargando) return <h1>cargando...</h1>

  if (!cargando && !isAuthenticated) {
    return <Navigate to='/' replace/>
  }

  return (
    <Outlet />
  )
}