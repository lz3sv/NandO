import { useEffect, useState } from "react"
import enigmasAPI from "../api/enigmas-api"



export function useGetAllEnigmas(){
    const [enigmas,setEnigmas]=useState ([])
    
    useEffect(()=> {

        enigmasAPI.getAll()
            .then(result=>setEnigmas(result))
    },[])

    return [enigmas, setEnigmas]
}

export function useGetOneEnigmas(enigmaId){
const [enigma, setEnigma]=useState({})

    useEffect(()=>{
        (async ()=>{
            const result= await enigmasAPI.getOne(enigmaId)
            //console.log(game.comments)
            setEnigma(result)
        })()
    },[enigmaId])

    return [
        enigma, 
        setEnigma,
    ]

}

export function useCreateEnigma(){
    const enigmaCreateHandler = (enigmaData)=> enigmasAPI.create(enigmaData)
    return enigmaCreateHandler
}