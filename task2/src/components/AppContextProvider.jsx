import { useState, useEffect, createContext } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const[data,setData]=useState([])
  const [isAuth, setIsAuth] = useState(false);
  const [openerror,setOpenError] =useState(false);
  const [opensuccess,setOpenSuccess] =useState(false);
  const [openlogin,setOpenLogin]=useState(false);

  useEffect(()=>{
  axios.get("http://localhost:8080/user")
  .then((res)=>{setData(res.data);console.log(res.data)})
  .catch((err)=>console.log(err))
  },[])
   
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
     let verify= data && data?.filter((el)=>{
         if(el.email==loginData.email && el.password==loginData.password){
          return el
         }
      })
      if(verify.length>0){

        console.log(loginData)
          navigate("/")
          setOpenSuccess(true)
          setIsAuth(true);
      }else{
        navigate("/signup");
        setOpenError(true);
      }
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