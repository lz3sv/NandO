import { useContext } from "react"
import { login, register } from "../api/auth-api"
import { AuthContext } from "../context/AuthContext"

export const useLogin=()=>{
    const {changeAuthState}= useContext(AuthContext)

    const loginHandler=async (email, password)=> {
        const {password: _, ...authData}  = await login(email, password)
            changeAuthState(authData)
            //console.log(authData)
            return authData
    }
    return loginHandler
}

export const useLogout=()=>{
    const {changeAuthState}= useContext(AuthContext)
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
    return authData
}

export const useRegister=()=>{
    const {changeAuthState}= useContext(AuthContext)
    
    const registerHandler=async (email, password)=> {
            const {password: _, ...authData} = await register(email, password)
            changeAuthState(authData)
            //console.log(result)
            return authData
    }
    return registerHandler
}