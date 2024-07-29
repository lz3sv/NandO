import { Link } from 'react-router-dom'
import './Login.css'

import { useNavigate } from "react-router-dom"
import { useLogin } from '../hooks/useAuth'
import { useForm } from '../hooks/useForm'


const initialValues = { email: '', password: '' }

export default function Login(){

    const login = useLogin()
    const navigate = useNavigate()
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password)
            navigate('/')
        } catch (err) {
            alert (err.message)
        }
    }
    const { 
        values, 
        changeHandler, 
        submitHandler 
    } = useForm(initialValues, loginHandler)


    return (
        <>
            <div className="login-box">
            <h1>Вписване</h1>
            <form id="login" onSubmit={submitHandler}>
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder="Email..." 
                    name="email" 
                    onChange={changeHandler}
                    value={values.email}
                    />
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Password..." 
                    name="password" 
                    onChange={changeHandler}
                    value={values.password}
                    />
                <input type="submit" value="Впиши ме!" />
            </form>
            <p>Нямате регистрация? <Link to="/register" className='bold'>Регистрация</Link></p>
            </div>
        </>
    )
}