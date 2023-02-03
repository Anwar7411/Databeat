import { useState, useEffect, createContext } from 'react'
import {useNavigate} from 'react-router-dom'

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [isAuth, setIsAuth] = useState(false);
  const [openerror,setOpenError] =useState(false);
  const [opensuccess,setOpenSuccess] =useState(false);
  const [openlogin,setOpenLogin]=useState(false);

  const navigate=useNavigate();

  const handleChange = (e) => {

    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
    setOpenSuccess(false);
    setOpenLogin(false)
  };

  const handleSubmit = () => {
    if (loginData.email && loginData.password) {
      console.log(loginData)
        navigate("/")
        setOpenSuccess(true)
        setIsAuth(true);
    } else {
      setOpenError(true);
      setLoginData({ email: "", password: "" })
    }
  }

  return (
    <AppContext.Provider
      value={
        {
          loginData,
          isAuth,
          openerror,
          opensuccess,
          openlogin,
          setOpenLogin,
          handleChange,
          handleSubmit,
          handleClose
        }
      }
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider