import { useAuthContext } from "../../context/AuthContext"
import {Navigate, Outlet} from "react-router-dom"

export default function PrivateGuard(){
    const{isAuthenticated}=useAuthContext()

    return isAuthenticated
            ? <Outlet />
            : <Navigate to="/login" />
} 


export function LogedGuard(){
    const{isAuthenticated}=useAuthContext()

    return isAuthenticated
            ? <Navigate to="/catalog" />
            : <Outlet />
} 