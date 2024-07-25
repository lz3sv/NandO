import companyLogo from '../assets/logo.png'
import './Nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {

    const hasUser = true
    

    return (
        <>

            <div className="navigation">
                <nav>
                    <img src={companyLogo} alt="societe logo" />
                    <ul>
                        {/*All users*/}
                        <li><Link to="/about">Относно</Link></li>
                        <li><Link to="/catalog">Последни публикации</Link></li>

                        {hasUser
                            ?
                            <>
                                <li><Link to="/create">Създай публикация</Link></li>
                                <li><Link to="/logout">Отписване</Link></li>

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
