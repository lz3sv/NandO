import { useNavigate } from "react-router-dom"
import {  useLogout } from '../hooks/useAuth'
import usersAPI from "../api/users-api"


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