import { useState } from "react"
import { useNavigate } from "react-router-dom";

import {useAuthContext } from "../context/AuthContext";
import EnigmaAdd from "./enigma-section/enigma-add/EnigmaAdd"
import { formValidation } from "../util/formValidation";


export default function Create() {
    const navigate=useNavigate()
    const { userId, username,email } = useAuthContext()
    const [showAddEnigma, setShowAddEnigma] = useState(true)
    const baseUrl = 'http://localhost:3030/jsonstore'

    //setShowAddEnigma(true)
    const addEnigmaCloseHandler = () => {
        const modal=document.getElementById('overlay')
        modal.style.display = "none";
        navigate('/catalog')
    }


    const addEnigmaSave = async (e) => {
        //prevent reload
        e.preventDefault()

        //get Enigma data
        const creator= username + ' , '+ email
        const formData = new FormData(e.currentTarget)
        const enigmaData = {
            ...Object.fromEntries(formData),
            creator: creator,
            comments: [],
            owner: userId
        }


        const invalid=formValidation(enigmaData)
        if(invalid){
          alert(invalid)
          return
        }


        console.log('nowata enigma:')
        console.log(enigmaData)

        //make post request
        const response = await fetch(`${baseUrl}/enigma`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enigmaData),
        })

        const createdEnigma = await response.json()
        //console.log(responseData)

        //update local state
        //setEnigma(oldEnigma => [createdEnigma, ...oldEnigma])

        //close modal
        setShowAddEnigma(false)
        navigate('/catalog')
    }

    return (
        <>
            <section className="card enigmas-container">
                {showAddEnigma && <EnigmaAdd
                    onClose={addEnigmaCloseHandler}
                    onSave={addEnigmaSave}
                />}
            </section>
    
        </>

    )
} 