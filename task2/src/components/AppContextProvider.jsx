import { useState, useEffect, createContext } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [signupData,setSignupData]=useState({name:"",email:"",password:""})
  const[data,setData]=useState([])
  const [isAuth, setIsAuth] = useState(false);
  const [openerror,setOpenError] =useState({bool:false,mssg:""});
  const [opensuccess,setOpenSuccess] =useState({bool:false,mssg:""});

  useEffect(()=>{
  axios.get("http://localhost:8080/user")
  .then((res)=>{setData(res.data)})
  .catch((err)=>console.log(err))
  },[])
   
  const navigate=useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  const handlesignupchange=(e)=>{
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
    setOpenSuccess(false);
  };

  const handleSubmit = (event) => {
   event.preventDefault();
    if (loginData.email && loginData.password) {
     const verify= data && data?.filter((el)=>{
         if(el.email==loginData.email && el.password==loginData.password){
          return el
         }
      })
      if(verify.length>0){
         setOpenSuccess({bool:true,mssg:"Login Successfull!"})
          setIsAuth(true);
          setTimeout(()=>{
            navigate("/");
          },1000)

      }else{
        setOpenError({bool:true,mssg:"User Not Exist Please Signup"});
        setLoginData({ email: "", password: "" })
      }
    } else {
      setOpenError({bool:true,mssg:"Enter All Details!"});
      setLoginData({ email: "", password: "" })
    }
  }

  const handlesignupSubmit=(event)=>{
    event.preventDefault();
    if(signupData.name && signupData.email && signupData.password){
      console.log("signup",signupData)
      axios.post("http://localhost:8080/user",signupData)
      .then(()=>{
        setOpenSuccess({bool:true,mssg:"Signup Successfull!"})
        setIsAuth(true);
          setTimeout(()=>{
            navigate("/");
          },1000)
      })
    }else {
      setOpenError({bool:true,mssg:"Enter All Details!"});
      setSignupData({name:"", email: "", password: "" })
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
          signupData,
          setOpenError,
          handleChange,
          handleSubmit,
          handleClose,
          handlesignupchange,
          handlesignupSubmit
        }
      }
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider