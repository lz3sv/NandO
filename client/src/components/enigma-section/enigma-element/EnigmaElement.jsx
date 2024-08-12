
import { Link } from 'react-router-dom'

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
            <td>{enigma.content?.substr(0, 12) + '...'}</td>
            <td>{enigma.likes?.length}</td>


            <td className="actions">
                    <Link to ={`/catalog/${enigma._id}/details`}>
                        <button className="btn info-btn" title="Details"><i className="fa fa-info-circle"></i></button>
                    </Link>
                {isAuthenticated
                    ?
                    <>
                        {enigma.owner === userId
                            ?
                            <>
                                <Link to ={`/catalog/${enigma._id}/edit`}>
                                    <button className="btn edit-btn" title="Edit"><i className="fa fa-edit"></i></button>
                                </Link>
                                <Link to ={`/catalog/${enigma._id}/delete`}>
                                    <button className="btn delete-btn" title="Delete"><i className="fa fa-trash"></i></button>
                                </Link>
                            </>
                            :
                            <button className="btn like-btn" title="Like" onClick={() => onEnigmaLikeClick(enigma._id)}><i className="fa fa-thumbs-up"></i></button>
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

