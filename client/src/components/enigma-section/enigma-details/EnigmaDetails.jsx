import './EnigmaDetails.css'
export default function EnigmaDetails(
   { enigma,
    onClose,
   }
) {
    console.log(enigma)
    return (

        

            <div className="overlay">
                <div className="backdrop" onClick={onClose}></div>
                <div className="modal">
                    <div className="detail-container">
                        <header className="headers">
                            <h2>Подробни данни за записа</h2>
                            <button className="btn close" onClick={onClose}>
                                <i className="glyphicon glyphicon-remove"></i>
                            </button>
                        </header>
                        <div className="content">

                            <div className="enigma-details">
                                <p>Enigma Id: <strong>{enigma._id}</strong></p>
                                <p>Станция: <strong>  {enigma.enigma}</strong></p>
                                <p>Дата: <strong>{enigma.date}</strong></p>
                                <p>Време: <strong>{enigma.time}</strong></p>
                                <p>Честота: <strong>{enigma.freq}</strong></p>
                                <p>Съобщение: <strong> {enigma.content}</strong></p>
                                <p>Създател: <strong>{enigma.creator}</strong></p>
                                <p>харесвания: <strong>{enigma.comments.length}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        

    )
}