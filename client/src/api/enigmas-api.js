import requester from './requester'

const BASE_URL='http://localhost:3030/jsonstore/enigma'

export const getAll = async () => {
    const response= await requester.get(BASE_URL)
    const enigmas=Object.values(response).reverse()
    //console.log(enigmas)
    return enigmas
}

export const getOne= (enigmaId) => requester.get(`${BASE_URL}/${enigmaId}`)

export const create= (enigmaData) => requester.post(`${BASE_URL}`,enigmaData)
    
export const del= (enigmaId) => requester.del(`${BASE_URL}/${enigmaId}`)

export const update= (enigmaId,enigmaData) => requester.put(`${BASE_URL}/${enigmaId}`,enigmaData)

const enigmasAPI={
    getAll,
    getOne,
    create,
    del,
    update
}

export default enigmasAPI