import EnigmaElement from '../enigma-element/EnigmaElement'
import './catalog.css'
export default function Catalog({
    enigmas,              //destructurirame props
    onEnigmaDetailsClick,
    onEnigmaDeleteClick,
    onEnigmaEditClick,
    onEnigmaLikeClick,
}){
    //console.log(enigmas)
    
    return (
        <div className="table-wrapper">
        <table className="table">
            <thead>
                <tr>
                    <th>Enigma</th>
                    <th>Дата</th>
                    <th>Час</th>
                    <th>Съобщение</th>
                    <th>Брой коментари</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tbody>
                {/*Table row component*/}

                {enigmas.map(e => 
                
                <EnigmaElement 
                key={e._id}
                enigma={e}
                onEnigmaDetailsClick={onEnigmaDetailsClick}
                onEnigmaDeleteClick={onEnigmaDeleteClick}   
                onEnigmaEditClick={onEnigmaEditClick}
                onEnigmaLikeClick={onEnigmaLikeClick}                 
                />)}


                    
  
            </tbody>
        </table>
    </div>
    )
} 