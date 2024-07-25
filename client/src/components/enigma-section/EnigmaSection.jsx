
//import Search from "../search/Search";
//import UserAdd from "./user-add/UserAdd";
import EnigmaAdd from "./enigma-add/EnigmaAdd";
import EnigmaDetails from "./enigma-details/EnigmaDetails";
import EnigmaEdit from "./enigma-edit/EnigmaEdit";
import Catalog from "./enigma-list/catalog";
import { useState, useEffect } from "react";

const baseUrl = 'http://localhost:3030/jsonstore'
let owner=""

export default function EnigmaSection() {
  const [enigmas, setEnigma] = useState([])
  const [showAddEnigma,setShowAddEnigma]=useState(false)
  const [showEditEnigma,setShowEditEnigma]=useState(null)
  const [showEnigmaDetailsById,setShowEnigmaDetailsById]=useState(null)
  useEffect(() => {
    try {
      (async function getEnigma() {
        const response = await fetch(`${baseUrl}/enigmas/enigma`)
        const result = await response.json()
        const enigmas=Object.values(result)
        setEnigma(enigmas)
        //console.log(enigmas) 
      })() //iife !!!     
    } catch (error) {
      alert(error.message)
    }
  }, [])


  const addEnigmaClickHandler=()=>{
      setShowAddEnigma(true)
  }

  const addEnigmaCloseHandler=()=>{
    setShowAddEnigma(false)
  }


  const editEnigmaSave= async (e)=>{
    //prevent reload
    e.preventDefault()
    const formData= new FormData(e.currentTarget)
    const enigmaData={
      ...Object.fromEntries(formData),
    }
//get Enigma data
    const response1 = await fetch(`${baseUrl}/enigmas/enigma/${enigmaData._id}`)
    const result = await response1.json()
    console.log(result)


    

//Update Data

      result['enigma']= enigmaData.enigma,
      result['date']= enigmaData.date,
      result['time']= enigmaData.time,
      result['content']= enigmaData.content
    

      const response= await fetch(`${baseUrl}/enigmas/enigma/${enigmaData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result),
      })

      const updatedResponse=await response.json()
     console.log(updatedResponse)

     const response2 = await fetch(`${baseUrl}/enigmas/enigma`)
     const result2 = await response2.json()
     const enigmas=Object.values(result2)
     setEnigma(enigmas)

     setShowEditEnigma(false)


  }

  const addEnigmaSave= async (e)=>{
    //prevent reload
    e.preventDefault()

    //get Enigma data
    const formData= new FormData(e.currentTarget)
    const enigmaData={
      ...Object.fromEntries(formData),
      comments: [],
      owner: "4fccdb3a-59c9-4e45-a28f-870fe5d1d8be"
    }
//console.log(enigmaData)

    //make post request
    const response= await fetch(`${baseUrl}/enigmas/enigma`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(enigmaData),
    })

    const createdEnigma=await response.json()
    //console.log(responseData)

    //update local state
    setEnigma(oldEnigma => [createdEnigma, ...oldEnigma])

    //close modal
    setShowAddEnigma(false)
  }


  const enigmaDetailsClickHandler=(enigmaId, enigmaOwner)=>{
        //console.log(enigmaOwner)
        try {
          (async function getEnigma() {
            //console.log(`${baseUrl}/enigmas/enigma/${enigmaId}`)
            const response = await fetch(`${baseUrl}/enigmas/profiles/${enigmaOwner}`)
            const result = await response.json()

            //console.log(result.username + "," + result.email)
            
            owner = await (result.username + " , " + result.email)
            //console.log(owner)
            setShowEnigmaDetailsById(enigmaId,owner)

          })() //iife !!!     
        } catch (error) {
          alert(error.message)
        }

        
        

        
  }

  const enigmaEditClickHandler=(enigmaId)=>{
    //console.log(enigmas)
    setShowEditEnigma(enigmaId)

  }
  const enigmaLikeClickHandler=(enigmaId)=>{

  }

  const enigmaDeleteClickHandler= async (enigmaId)=>{
        //console.log(enigmaId)
        if(confirm("Желаете ли да изтриете записа?\nИзберете OK или Cancel.")== false){
          return
        }
        //delete request to server
    const response= await fetch(`${baseUrl}/enigmas/enigma/${enigmaId}`, {
      method: 'DELETE',

    })
        //delete from local state
    setEnigma(oldEnigmas => oldEnigmas.filter(enigma=>enigma._id !== enigmaId))
      
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

      {showAddEnigma && <EnigmaAdd 
        onClose={addEnigmaCloseHandler}
        onSave={addEnigmaSave}

      />}

      {showEditEnigma && (<EnigmaEdit
        onClose={()=>setShowEditEnigma(null)}
        onUpdate={editEnigmaSave}
        enigma={enigmas.find(enigma=>enigma._id===showEditEnigma)}
      />)}


     {showEnigmaDetailsById && (
          <EnigmaDetails 
            enigma={enigmas.find(enigma=>enigma._id===showEnigmaDetailsById)}
            owner={owner}
            onClose={()=>setShowEnigmaDetailsById(null)}
      />)}

      {/*<!-- New user button  */}
      <button className="btn-add btn" onClick={addEnigmaClickHandler}>Add new Enigma</button>

     
    </section>

  )
} 


