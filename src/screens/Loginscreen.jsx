import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'


export default function Loginscreen() {


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const loginstate=useSelector(state =>state.loginUserReducer)
  const {loading,error}=loginstate
  const dispatch = useDispatch()

  useEffect(() => {

    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }

  }, [])


  function login() {
    const user = { email, password }
    dispatch(loginUser(user))
  }


  return (
    <div className='container'>

      <div className="row justify-content-center mt-5">
        <div className="col-md-4 mt-5 text-left shadow-lg p-3 mx-5 mb-5 bg-white rounded">
          <h2 className='text-center m-2' style={{ fontSize: "35px" }} >LOGIN</h2>

            {loading && (<Loading/>)}        
            {error && (<Error error='Wrong Email id or Password'/>)}        
           
          <div>
            <input type="text" required placeholder='email' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
            <input type="password" required placeholder='password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <button onClick={login} className='btn my-3 '>LOGIN</button>
            <br />
            <a style={{color:'black'}}  href="/register">Click Here To Register</a>
            
            
            <p style={{margin:'20px',color:'blue',fontFamily:'monospace'}}>Username: hellouser@gmail.com</p>
            <p style={{marginLeft:'18px',color:'blue',fontFamily:'monospace'}}>Password: hellouser123</p>
          </div>
        </div>

      </div>

    </div>
  )
}

