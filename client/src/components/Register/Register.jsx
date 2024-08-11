import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { useForm } from '../../hooks/useForm'
import { useState } from 'react'
import { useRegister } from '../../hooks/useAuth'


const initialValues = { email: '', username: '', password: '', repass: '' }

export default function Register(){


    const [error, setError] = useState('')
    const register = useRegister()
    const navigate = useNavigate()
    const registerHandler = async ( values ) => {

        if (values.password.length<6) {
            setError('Weak password!')
            alert('Паролата трябва да съдържа поне 6 символа!')
            return
        }

        if (values.password !== values.repass) {
            setError('Password mismatch!')
            alert('Няма съвпадение при паролите!')
            return
        }

        try {
            await register(values.email, values.username, values.password)
            navigate('/')
        } catch (err) {
            console.log(err.message)
            alert('Моля, попълнете всички полета!')
            setError(err.message)
        }
    }
    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, registerHandler)

    return (

        <div className ="register-box">
        <h1>Регистриране</h1>
        <form id="register" onSubmit={submitHandler}>
            <label>Username</label>
            <input 
                type="text" 
                placeholder="Username.." 
                name="username"
                onChange={changeHandler}
                value={values.username}
                />
            <label>Email</label>
            <input 
                type="text" 
                placeholder="Email.." 
                name="email" 
                onChange={changeHandler}
                value={values.email}
            />
            <label>Password</label>
            <input 
                type="password" 
                placeholder="Password.." 
                name="password" 
                onChange={changeHandler}
                value={values.password}
            />
            <label>Confirm Password</label>
            <input 
                type="password" 
                placeholder="Confirm Password.." 
                name="repass" 
                onChange={changeHandler}
                value={values.repass}
                />
            <input type="submit" value="Регистриране" />
        </form>
        <p> Имате регистрация? <Link to="/login" className='bold'>Вписване</Link></p>
        </div>


    )
}