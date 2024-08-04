import { Link } from 'react-router-dom'

import './Nav.css'
import companyLogo from '../assets/logo.png'
import { useAuthContext } from '../context/AuthContext'



export default function Nav() {

    const { isAuthenticated } = useAuthContext()

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
                                <li><Link  to="/logout" id="logoutBtn">Отписване</Link></li>
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


