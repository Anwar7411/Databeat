import React, { useContext } from 'react'
import { AppContext } from '../components/AppContextProvider'
import { Alert, Snackbar } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import{Link} from 'react-router-dom'
import "./Login.css"

const Login = () => {
  const { loginData, openerror, opensuccess,
    handleChange, handleSubmit, handleClose } = useContext(AppContext)

  return (
    <div className='loginForm'>
    
    <div className='form-login-div'>
        <h1>Log In</h1>
        <form className='user-form' onSubmit={(e)=>handleSubmit(e)}>
            <div className='input-group'>
                <div className='input-field'>
                  <EmailIcon className='input-icons' />
                  <input 
                    type="email"
                    placeholder='Email'
                    onChange={(e)=>handleChange(e)}
                    value={loginData.email}
                    name="email" 
                  />
                </div>
                <div className='input-field'>
                  <LockIcon className='input-icons' />
                  <input 
                    type="password" 
                    value={loginData.password} 
                    placeholder='Password'
                    name="password" 
                    onChange={(e)=>handleChange(e)}
                  />
                </div>
                <div>
                  <p className='loginOption'>New to an account <Link to="/signup">SignUp</Link></p>
                </div>
            </div>
            <div className="btn-field-login">
              <input type='submit' />
            </div>
        </form>
    </div>

    <Snackbar open={openerror.bool} autoHideDuration={1000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
               {openerror.mssg}
             </Alert>
    </Snackbar>
    <Snackbar open={opensuccess.bool} autoHideDuration={1000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
             <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
               {opensuccess.mssg}
             </Alert>
    </Snackbar>
  </div>
  )
}

export default Login