import { useAuthContext } from "../../context/AuthContext"
import {Navigate} from "react-router-dom"
export default function RouteGuard({children}){
    const{isAuthenticated}=useAuthContext()
    if(!isAuthenticated){
        return <Navigate to="/login" />
    }
    return (
        <>
            {children}
        </>
        
    )
} 