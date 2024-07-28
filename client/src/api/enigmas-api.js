import requester from './requester'

const BASE_URL='http://localhost:3030/jsonstore/enigmas/enigma'
export const getAll = async () => {
    const response= await requester.get(BASE_URL)
    const enigmas=Object.values(response)
    //console.log(enigmas)
    return enigmas
}

export const getOne= (enigmaId) => requester.get(`${BASE_URL}/${enigmaId}`)

export const create= (enigmaData) => requester.post(`${BASE_URL}`,enigmaData)
    


const enigmasAPI={
    getAll,
    getOne,
    create
}

export default enigmasAPI