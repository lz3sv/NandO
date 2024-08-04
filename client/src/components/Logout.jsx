import { useNavigate } from "react-router-dom"
import {  useLogout } from '../hooks/useAuth'



export default async function Logout(){
    const navigate = useNavigate()
    //await usersAPI.getLogout()
    //useLogout()
    //navigate('/')
    //localStorage.removeItem("accessToken");
    return (
        <>

        <p>Otpiswane!</p>
        </>
    )
}