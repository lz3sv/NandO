import { useState, useEffect } from "react";

import enigmasAPI from "../../api/enigmas-api";
import EnigmaEdit from "./enigma-edit/EnigmaEdit";
import Catalog from "./enigma-list/catalog";
import { useAuthContext } from "../../context/AuthContext";
import { formValidation } from "../../util/formValidation";


export default function EnigmaSection() {
  const { userId } = useAuthContext()
  const [enigmas, setEnigma] = useState([])
  const [showEditEnigma, setShowEditEnigma] = useState(null)


  useEffect(() => {
    try {
       ( async() =>{
        await enigmasAPI.getAll()
            .then(result=>setEnigma(result))
        })() 
    } catch (error) {
      alert(error.message)
    }
  }, [])



//EDIT
  const editEnigmaSave = async (e) => {
    //prevent reload
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const enigmaData = {
      ...Object.fromEntries(formData),
    }
    //get Enigma data
    //const response1 = await fetch(`${baseUrl}/enigmas/enigma/${enigmaData._id}`)
    //const result = await response1.json()
    const result = await enigmasAPI.getOne(enigmaData._id)
    //console.log(result)
    //Update Data


    const invalid=formValidation(enigmaData)
    if(invalid){
      alert(invalid)
      return
    }


      result['enigma'] = enigmaData.enigma,
      result['date'] = enigmaData.date,
      result['time'] = enigmaData.time,
      result['freq'] = enigmaData.freq,
      result['content'] = enigmaData.content
      //result['likes']=[]

    const updatedResponse= await enigmasAPI.update(enigmaData._id, result)

    const enigmas = await enigmasAPI.getAll()
    setEnigma(enigmas)

    setShowEditEnigma(false)


  }


  //Show edit Modal
  const enigmaEditClickHandler = (enigmaId) => {
    //console.log(enigmas)
    setShowEditEnigma(enigmaId)

  }


  //LIKE 
  const enigmaLikeClickHandler = async (enigmaId) => {
    //get Enigma data
    const result = await enigmasAPI.getOne(enigmaId)
    // console.log('unliked')
    // console.log(result)
    //Update Data
    if (result['likes'].includes(userId)){
      alert ("Вече сте харесали тази публикация.")
      return
    }
    result['likes'].push(userId)
    // console.log('liked')
    // console.log(result)
    const updatedResponse= await enigmasAPI.update(enigmaId, result)
    console.log(updatedResponse)
    const enigmas = await enigmasAPI.getAll()
    setEnigma(enigmas)
  }




  return (
    <section className="card enigmas-container">


      {/*<!-- Table component */}
      <Catalog
        enigmas={enigmas}
        onEnigmaEditClick={enigmaEditClickHandler}
        onEnigmaLikeClick={enigmaLikeClickHandler}
      />


      {showEditEnigma && (<EnigmaEdit
        onClose={() => setShowEditEnigma(null)}
        onUpdate={editEnigmaSave}
        enigma={enigmas.find(enigma => enigma._id === showEditEnigma)}
      />)}


    </section>

  )
}

