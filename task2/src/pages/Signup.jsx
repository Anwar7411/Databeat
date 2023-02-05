import React,{ useContext } from 'react'
import { AppContext } from '../components/AppContextProvider'
import { Alert, Snackbar } from '@mui/material'
import{Link} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import "./Login.css"

const Signup = () => {
    const {handlesignupSubmit,handlesignupchange,signupData,openerror,opensuccess,handleClose  } = useContext(AppContext)
    
  return (
    <div className='loginForm'>
        <div className='form-parent-div'>
        <h1>Sign Up</h1>
        <form className='user-form' onSubmit={(e)=>handlesignupSubmit(e)}>
            <div className='input-group'>
                <div className='input-field'>
                  <PersonIcon className='input-icons' />
                  <input type="text" 
                        placeholder='Name' 
                        name="name" 
                        value={signupData.name}
                        onChange={(e)=>handlesignupchange(e)}
                    />
                </div>
                <div className='input-field'>
                  <EmailIcon className='input-icons' />
                  <input type="email" 
                         placeholder='Email' 
                         name="email" 
                         value={signupData.email} 
                         onChange={(e)=>handlesignupchange(e)}
                  />
                </div>
                <div className='input-field'>
                  <LockIcon className='input-icons' />
                  <input type="password" 
                         placeholder='Password' 
                         name="password" 
                         value={signupData.password}
                         onChange={(e)=>handlesignupchange(e)}
                   />
                </div>
                <div>
                  <p className='loginOption'>Already have an account <Link to="/login">LogIn</Link></p>
                </div>
            </div>
            <div className="btn-field">
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

export default Signup