import { Link } from 'react-router-dom'
import './EnigmaDetails.css'
export default function EnigmaDetails(

) {
    const enigma={}
    console.log(enigma)
    return (

        

            <div className="details-box ">

                
                    <div className="detail-container">
                        <header className="headers">
                            <h2>Подробни данни за записа</h2>

                        </header>
                        <div className="content">

                            <div className="enigma-details">
                                <p>Enigma Id: <strong>{enigma._id}</strong></p>
                                <p>Станция: <strong>  {enigma.enigma}</strong></p>
                                <p>Дата: <strong>{enigma.date}</strong></p>
                                <p>Време: <strong>{enigma.time} UTC</strong></p>
                                <p>Честота: <strong>{enigma.freq} kHz</strong></p>
                                <p>Съобщение: <strong> {enigma.content}</strong></p>
                                <p>Създател: <strong>{enigma.creator}</strong></p>
                                <p>харесвания: <strong>{enigma.comments}</strong></p>
                            </div>
                        </div>
                    </div>
                    <div  className="buttons">
                        <Link to="/catalog" className='bold'>
                            <button className="btn-return" id="action-return"> НАЗАД </button>
                        </Link>
                    </div>
            </div>
    
        

    )
}