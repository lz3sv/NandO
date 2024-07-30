import requester from './requester'

const BASE_URL='http://localhost:3030/users'

export const getLogout = async () => {
    const url=`${BASE_URL}/logout`
    //console.log(url)
    await requester.get(url)
    return 
}



const usersAPI={
    getLogout,

}

export default usersAPI