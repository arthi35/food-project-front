import axios from "axios"

export const registerUser = (user) => async dispatch => {

    dispatch({ type: 'USER_REGISTER_REQUEST' })

    try {
        //https://hellofood001.onrender.com
        const response = await axios.post('https://foodcart001.onrender.com/api/users/register', user)
        console.log(response)
        dispatch({ type: 'USER_REGISTER_SUCCESS' })
        window.location.href="/login"


    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error })

    }
}
export const loginUser=(user)=> async dispatch => {

    dispatch({ type: 'USER_LOGIN_REQUEST' })

    try {
        //https://foodcart001.herokuapp.com
        const response = await axios.post('https://foodcart001.onrender.com/api/users/login', user)
        console.log(response)
        dispatch({ type:'USER_LOGIN_SUCCESS', payload:response.data })
        localStorage.setItem('currentUser' ,JSON.stringify(response.data))
        window.location.href='/'

    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error })

    }
}

export const logoutUser=()=>dispatch=>{

    localStorage.removeItem('currentUser')
    window.location.href='/login'

}
//get user list
export const getAllUsers=()=>async dispatch=>{

    dispatch({type:'GET_USERS_REQUEST'}) 

    try {   
        
        const response=await axios.get('https://foodcart001.onrender.com/api/users/usersall') 
        console.log(response)
        dispatch({type:'GET_USERS_SUCCESS', payload : response.data})
       

    } catch (error) {
        dispatch({type:'GET_USERS_FAILED', payload : error})
    }
}