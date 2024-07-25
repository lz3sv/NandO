import { useState } from "react"
import EnigmaAdd from "./enigma-section/enigma-add/EnigmaAdd"

export default function Create() {
    const [showAddEnigma, setShowAddEnigma] = useState(false)
    const baseUrl = 'http://localhost:3030/jsonstore'

    console.log('Wlizam tuk!')
        setShowAddEnigma(true)


    const addEnigmaCloseHandler = () => {
        setShowAddEnigma(false)
    }



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
        //setEnigma(oldEnigma => [createdEnigma, ...oldEnigma])

        //close modal
        setShowAddEnigma(false)
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