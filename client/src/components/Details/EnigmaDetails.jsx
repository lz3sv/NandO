import { Link, useParams } from 'react-router-dom'

import './EnigmaDetails2.css'
import { useGetOneEnigmas } from '../../hooks/useEnigmas'

export default function EnigmaDetails() {
    const { enigmaId } = useParams()
    const [enigma] = useGetOneEnigmas(enigmaId)
    return (




        <>

            <div className="detail-container">
                <header className="DetailHeaders">
                    <h1>Подробни данни за записа</h1>
                </header>
                <hr />
                <div className="content">

                    <div className="enigma-details">
                        <p>Enigma Id: <strong>{enigma._id}</strong></p>
                        <p>Станция: <strong>  {enigma.enigma}</strong></p>
                        <p>Дата: <strong>{enigma.date}</strong></p>
                        <p>Време: <strong>{enigma.time} UTC</strong></p>
                        <p>Честота: <strong>{enigma.freq} kHz</strong></p>
                        <p>Съобщение: <strong> {enigma.content}</strong></p>
                        <p>Създател: <strong>{enigma.creator}</strong></p>
                        <p>Брой харесвания: <strong>{enigma.likes?.length}</strong></p>
                    </div>
                </div>
                <br/>
                <div className="buttons">
                <Link to="/catalog" className='bold'>
                    <button className="btn-return" id="action-return"> НАЗАД </button>
                </Link>
            </div>
            </div>



        </>

    )
}