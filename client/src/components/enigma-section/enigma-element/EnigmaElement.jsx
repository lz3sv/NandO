
import { useContext } from 'react'



import './catalog.css'
import { useAuthContext } from '../../../context/AuthContext'
export default function EnigmaElement({
    enigma,
    onEnigmaDetailsClick,
    onEnigmaDeleteClick,
    onEnigmaEditClick,
    onEnigmaLikeClick,

}) {
    const { isAuthenticated, userId } = useAuthContext()
    //console.log(enigma)

    return (


        <tr>
            <td>{enigma.enigma}</td>
            <td>{enigma.date}</td>
            <td>{enigma.time}</td>
            <td>{enigma.freq}</td>
            <td>{enigma.content.substr(0, 12) + '...'}</td>
            <td>{enigma.comments.length}</td>


            <td className="actions">
                <button className="btn info-btn" title="Info" onClick={() => onEnigmaDetailsClick(enigma._id, enigma.owner)}><i className="fa fa-info-circle"></i></button>
                {isAuthenticated
                    ?
                    <>
                        {enigma.owner === userId
                            ?
                            <>
                                <button className="btn edit-btn" title="Edit" onClick={() => onEnigmaEditClick(enigma._id)}><i className="fa fa-edit"></i></button>
                                <button className="btn delete-btn" title="Delete" onClick={() => onEnigmaDeleteClick(enigma._id)}><i className="fa fa-trash"></i></button>
                                
                            </>
                            :
                            <button className="btn like-btn" title="Like/Comment" onClick={() => onEnigmaLikeClick(enigma._id)}><i className="fa fa-thumbs-up"></i></button>
                        }
                    </>
                    :
                    <>
                    </>
                }


            </td>
        </tr>
    )
}

