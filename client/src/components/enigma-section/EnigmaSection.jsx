import { useState, useEffect } from "react";

import enigmasAPI from "../../api/enigmas-api";
import EnigmaDetails from "./enigma-details/EnigmaDetails";
import EnigmaEdit from "./enigma-edit/EnigmaEdit";
import Catalog from "./enigma-list/catalog";
import { useAuthContext } from "../../context/AuthContext";



export default function EnigmaSection() {
  const { userId } = useAuthContext()
  const [enigmas, setEnigma] = useState([])
  const [showEditEnigma, setShowEditEnigma] = useState(null)
  const [showEnigmaDetailsById, setShowEnigmaDetailsById] = useState(null)

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

    result['enigma'] = enigmaData.enigma,
      result['date'] = enigmaData.date,
      result['time'] = enigmaData.time,
      result['freq'] = enigmaData.freq,
      result['content'] = enigmaData.content

    const updatedResponse= await enigmasAPI.update(enigmaData._id, result)

    const enigmas = await enigmasAPI.getAll()
    setEnigma(enigmas)

    setShowEditEnigma(false)


  }



//DETAILS 
  const enigmaDetailsClickHandler = async (enigmaId) => {

        setShowEnigmaDetailsById(enigmaId)
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
    if (result['comments'].includes(userId)){
      alert ("Вече сте харесали тази публикация.")
      return
    }
    result['comments'].push(userId)
    // console.log('liked')
    // console.log(result)
    const updatedResponse= await enigmasAPI.update(enigmaId, result)
    console.log(updatedResponse)
    const enigmas = await enigmasAPI.getAll()
    setEnigma(enigmas)
  }


  //DELETE ENIGMA
  const enigmaDeleteClickHandler = async (enigmaId) => {
    //console.log(enigmaId)
    if (confirm("Желаете ли да изтриете записа?\nИзберете OK или Cancel.") == false) {
      return
    }
    //delete request to server

    const response = await enigmasAPI.del(enigmaId)
    //delete from local state
    setEnigma(oldEnigmas => oldEnigmas.filter(enigma => enigma._id !== enigmaId))

  }

  return (
    <section className="card enigmas-container">


      {/*<!-- Table component */}
      <Catalog
        enigmas={enigmas}
        onEnigmaDetailsClick={enigmaDetailsClickHandler}
        onEnigmaDeleteClick={enigmaDeleteClickHandler}
        onEnigmaEditClick={enigmaEditClickHandler}
        onEnigmaLikeClick={enigmaLikeClickHandler}
      />


      {showEditEnigma && (<EnigmaEdit
        onClose={() => setShowEditEnigma(null)}
        onUpdate={editEnigmaSave}
        enigma={enigmas.find(enigma => enigma._id === showEditEnigma)}
      />)}


      {showEnigmaDetailsById && (
        <EnigmaDetails
          enigma={enigmas.find(enigma => enigma._id === showEnigmaDetailsById)}
          onClose={() => setShowEnigmaDetailsById(null)}
        />)}



    </section>

  )
}

