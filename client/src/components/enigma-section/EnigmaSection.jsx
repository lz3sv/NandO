import { useState, useEffect } from "react";

import enigmasAPI from "../../api/enigmas-api";
import Catalog from "./enigma-list/catalog";
import { useAuthContext } from "../../context/AuthContext";



export default function EnigmaSection() {
  const { userId } = useAuthContext()
  const [enigmas, setEnigma] = useState([])



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
        onEnigmaLikeClick={enigmaLikeClickHandler}
      />

    </section>

  )
}

