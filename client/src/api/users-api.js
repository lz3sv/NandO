import requester from './requester'

const BASE_URL='http://localhost:3030/jsonstore/enigmas/profiles'

export const getUserDetails = async (enigmaOwner) => {
    const url=`${BASE_URL}/${enigmaOwner}`
    //console.log(url)
    const response= await requester.get(url)
    //console.log('response')
    //console.log(response)
    const user=await response
    //console.log(user)
    return user
}



const usersAPI={
    getUserDetails,

}

export default usersAPI