import { useContext } from "react"
import { login, logout, register } from "../api/auth-api"
import { AuthContext, useAuthContext } from "../context/AuthContext"

export const useLogin=()=>{
    const {changeAuthState}= useAuthContext()

    const loginHandler=async (email, password)=> {
        const {password: _, ...authData}  = await login(email,password)
            changeAuthState(authData)
            console.log(authData)
            return authData
    }
    return loginHandler
}

export const useLogout=()=>{
    const {changeAuthState}= useAuthContext()
     const logoutHandler= async ()=>{
         await logout()
         
     }
    const authData={
        userId:'',
        username:'',
        email: '',
        accessToken: '',
        isAuthenticated: false,
       
    }
    //changeAuthState: (authState={})=> null,
    changeAuthState(authData)
    //console.log(authData)
    return 
}

export const useRegister=()=>{
    const {changeAuthState}= useAuthContext()
    
    const registerHandler=async (email, username, password)=> {
            const {password: _, ...authData} = await register(email, username, password)
            changeAuthState(authData)
            //console.log(result)
            return authData
    }
    return registerHandler
}