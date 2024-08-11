import { Link, Navigate, useParams } from 'react-router-dom'

import './EnigmaDelete.css'
import { useGetOneEnigmas } from '../../hooks/useEnigmas'
import enigmasAPI from '../../api/enigmas-api'

export default function EnigmaDelete() {
    const { enigmaId } = useParams()
    const [enigma] = useGetOneEnigmas(enigmaId)

    const enigmaDeleteClickHandler = async () => {
        //delete request to server
        const response = await enigmasAPI.del(enigmaId)
         return <Navigate to="/catalog"/>
    }


    return (




        <>

            <div className="detail-container">
                <header className="DetailHeaders">
                    <h1>Изтриване на запис</h1>
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
                <br />
                <div className="buttons">
                        <Link to="/catalog" className='bold'>
                            <button className="floated" id="action-return"> НАЗАД </button>
                        </Link>
                        <Link to="/catalog" className='bold'>
                            <button className="floated" id="action-delete" onClick={enigmaDeleteClickHandler}> ПОТВЪРЖДАВАМ </button>
                        </Link>
                </div>
            </div>



        </>

    )
}