//import { formatDate } from "../../../dateUtil";
import './catalog.css'
export default function EnigmaElement({
    enigma,
    onEnigmaDetailsClick,
    onEnigmaDeleteClick,
    onEnigmaEditClick,
    onEnigmaLikeClick,

}){

    
    //const ss=enigma.content.substring(12)
    //console.log ( 'ELEMENT => '+typeof(ss))
    return         (

        
        <tr>
        <td>{enigma.enigma}</td>
        <td>{enigma.date}</td>
        <td>{enigma.time}</td>
        <td>{enigma.content.substr(0,12) + '...'}</td>
        <td>{enigma.comments.length}</td>
       

        <td className="actions">
            <button className="btn edit-btn" title="Edit" onClick={()=>onEnigmaEditClick(enigma._id)}><i className="fa fa-edit"></i></button>         
            
            <button className="btn delete-btn" title="Delete" onClick={()=>onEnigmaDeleteClick(enigma._id)}><i className="fa fa-trash"></i></button>
                
            <button className="btn info-btn" title="Info" onClick={()=>onEnigmaDetailsClick(enigma._id,enigma.owner)}><i className="fa fa-info-circle"></i></button>

            <button className="btn like-btn" title="Info" onClick={()=>onEnigmaLikeClick(enigma._id)}><i className="fa fa-thumbs-up"></i></button>
        </td>
    </tr>
    )
} 