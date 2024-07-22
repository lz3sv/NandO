import { Link } from 'react-router-dom'
import './Login.css'
export default function Login(){
    return (
        <>
            <div className="login-box">
            <h1>Вписване</h1>
            <form method="post">
                <label>Email</label>
                <input type="text" placeholder="Email..." name="email" />
                <label>Password</label>
                <input type="password" placeholder="Password..." name="password" />
                <input type="submit" value="Впиши ме!" />
            </form>
            <p>Нямате регистрация? <Link to="/register" className='bold'>Регистрация</Link></p>
            </div>
        </>
    )
}