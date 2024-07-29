import { useNavigate } from "react-router-dom"
import {  useLogout } from '../hooks/useAuth'


export default function Logout(){
    const navigate = useNavigate()
    useLogout()
    navigate('/')
    return 
}