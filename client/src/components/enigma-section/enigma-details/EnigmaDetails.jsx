import './EnigmaDetails.css'
export default function EnigmaDetails(
   { enigma,
    owner,
    onClose,
   }
) {
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
                                <p>Enigma: <strong>  {enigma.enigma}</strong></p>
                                <p>Date: <strong>{enigma.date}</strong></p>
                                <p>Time: <strong>{enigma.time}</strong></p>
                                <p>Message: <strong> {enigma.content}</strong></p>
                                <p>Creator: <strong>{owner}</strong></p>
                                <p>likes: <strong>{enigma.comments.length}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        

    )
}