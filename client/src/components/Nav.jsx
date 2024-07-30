import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Nav.css'
import companyLogo from '../assets/logo.png'
import { AuthContext } from '../context/AuthContext'



export default function Nav() {
    const {changeAuthState}= useContext(AuthContext)
    const navigate = useNavigate()
    const { isAuthenticated } = useContext(AuthContext)

    const onClickLogout = async() => {
        
        const accessToken=localStorage.getItem('accessToken')
        await fetch('http://localhost:3030/users/logout',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': accessToken
                },
                method: 'GET',
            })
            .then(() => {  
                localStorage.removeItem('accessToken')
                const authData={
                    userId:'',
                    username:'',
                    email: '',
                    accessToken: '',
                    isAuthenticated: false,
                }
                changeAuthState(authData)
                navigate('/')
            })
    }

    return (
        <>

            <div className="navigation">
                <nav>
                    <img src={companyLogo} alt="societe logo" />
                    <ul>
                        {/*All users*/}
                        <li><Link to="/about">Относно</Link></li>
                        <li><Link to="/catalog">Публикации</Link></li>

                        {isAuthenticated
                            ?
                            <>
                                <li><Link to="/create">Създай публикация</Link></li>
                                <li><Link  onClick={onClickLogout}to="/logout" id="logoutBtn">Отписване</Link></li>
                            </>
                            :
                            <>

                                <li><Link to="/login">Вписване</Link></li>
                                <li><Link to="/register">Регистрация</Link></li>
                            </>
                        }

                    </ul>
                </nav>
            </div>
        </>

    )
}


//"In God we trust and everything else we check."
