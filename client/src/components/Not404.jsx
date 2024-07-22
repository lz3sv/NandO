import { Link } from 'react-router-dom'
import './Not404.css'
export default function Not404(){
    return (
        <>
        <section id="not-found-page">
        <div className="not-found-page-container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Страницата, която търсите не съществува, или е възникнал проблем. Идете към <Link to="/catalog"
                    >Последни публикации</Link>.
            </p>
        </div>
        </section>
    </>


    )
}