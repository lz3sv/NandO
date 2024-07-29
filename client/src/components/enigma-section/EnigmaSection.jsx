import { useState, useEffect } from "react";
import { useContext } from 'react'

import enigmasAPI from "../../api/enigmas-api";
import usersAPI from "../../api/users-api";
import { useGetAllEnigmas, useGetOneEnigmas } from "../../hooks/useEnigmas";
import EnigmaAdd from "./enigma-add/EnigmaAdd";
import EnigmaDetails from "./enigma-details/EnigmaDetails";
import EnigmaEdit from "./enigma-edit/EnigmaEdit";
import Catalog from "./enigma-list/catalog";
import { AuthContext } from "../../context/AuthContext";



const baseUrl = 'http://localhost:3030/jsonstore'
let owner = ""

export default function EnigmaSection() {
  const { userId } = useContext(AuthContext)
  const [enigmas, setEnigma] = useState([])
  const [showAddEnigma, setShowAddEnigma] = useState(false)
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


  const addEnigmaClickHandler = () => {
    setShowAddEnigma(true)
  }

  const addEnigmaCloseHandler = () => {
    setShowAddEnigma(false)
  }

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
      result['content'] = enigmaData.content

    const updatedResponse= await enigmasAPI.update(enigmaData._id, result)

    const enigmas = await enigmasAPI.getAll()
    setEnigma(enigmas)

    setShowEditEnigma(false)


  }


  //CREATE
  const addEnigmaSave = async (e) => {
    //prevent reload
    e.preventDefault()
    //get Enigma data
    const formData = new FormData(e.currentTarget)
    const enigmaData = {
      ...Object.fromEntries(formData),
      comments: [],
      owner: "4fccdb3a-59c9-4e45-a28f-870fe5d1d8be"
    }
    //console.log(enigmaData)
    //make post request
    const response = await fetch(`${baseUrl}/enigmas/enigma`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(enigmaData),
    })
    const createdEnigma = await response.json()
    //console.log(responseData)
    //update local state
    setEnigma(oldEnigma => [createdEnigma, ...oldEnigma])
    //close modal
    setShowAddEnigma(false)
  }

//DETAILS 
  const enigmaDetailsClickHandler = async (enigmaId, enigmaOwner) => {
        const user =  await usersAPI.getUserDetails(enigmaOwner)
        owner =  (user.username + " , " + user.email)
        setShowEnigmaDetailsById(enigmaId, owner)
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

    const response2 = await fetch(`${baseUrl}/enigmas/enigma`)
    const result2 = await response2.json()
    const enigmas = Object.values(result2)
    setEnigma(enigmas)

  }


  //DELETE ENIGMA
  const enigmaDeleteClickHandler = async (enigmaId) => {
    //console.log(enigmaId)
    if (confirm("Желаете ли да изтриете записа?\nИзберете OK или Cancel.") == false) {
      return
    }
    //delete request to server
    // const response = await fetch(`${baseUrl}/enigmas/enigma/${enigmaId}`, {
    //   method: 'DELETE',

    // })

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

      {showAddEnigma && <EnigmaAdd
        onClose={addEnigmaCloseHandler}
        onSave={addEnigmaSave}

      />}

      {showEditEnigma && (<EnigmaEdit
        onClose={() => setShowEditEnigma(null)}
        onUpdate={editEnigmaSave}
        enigma={enigmas.find(enigma => enigma._id === showEditEnigma)}
      />)}


      {showEnigmaDetailsById && (
        <EnigmaDetails
          enigma={enigmas.find(enigma => enigma._id === showEnigmaDetailsById)}
          owner={owner}
          onClose={() => setShowEnigmaDetailsById(null)}
        />)}

      {/*<!-- New user button  */}
      <button className="btn-add btn" onClick={addEnigmaClickHandler}>Add new Enigma</button>


    </section>

  )
}

