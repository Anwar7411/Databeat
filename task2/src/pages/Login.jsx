import React, { useContext } from 'react'
import { AppContext } from '../components/AppContextProvider'
import { Alert, Snackbar } from '@mui/material'

const Login = () => {
  const { loginData, openerror,openlogin,
          handleChange, handleSubmit,handleClose }=useContext(AppContext)

  return (
    <div>
        <label>
          Email
          <input 
              type="email" 
              value={loginData.email} 
              name="email" 
              placeholder='Enter Your Email'
              onChange={(e)=>handleChange(e)} 
          />
        </label><br />
        <label>
          Password
          <input 
              type="password" 
              value={loginData.password} 
              placeholder='Enter Password'
              name="password" 
              onChange={(e)=>handleChange(e)} 
          />
        </label><br />
        <button onClick={()=>handleSubmit()}>Submit</button>
        <Snackbar open={openerror} autoHideDuration={1000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
           Enter All Details!
        </Alert>
      </Snackbar>
      <Snackbar open={openlogin} autoHideDuration={1000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
           Please Login!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Login