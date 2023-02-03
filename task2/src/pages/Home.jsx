import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../components/AppContextProvider'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { MutatingDots } from 'react-loader-spinner'
import EachCard from '../components/EachCard'
import { Alert, Snackbar } from '@mui/material'


const Home = () => {
    const[page,setPage]=useState(1);
    const[limit,setlimit]=useState(9);
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);

    const {loginData,isAuth,opensuccess,setOpenLogin,handleClose,}=useContext(AppContext);
    const navigate=useNavigate();

    const getData=()=>{
       axios.get(`https://mistore-backend.onrender.com/phones?page=${page}&limit=${limit}`)
       .then((res)=>
           {
            setData((prev) => [...prev, ...res.data.data]);
            setLoading(false)
           }
            )
    }

    const handelInfiniteScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          setPage((prev) => prev + 1);
          setLoading(true)
        }
      } 
    
      useEffect(()=>{
        if(!isAuth){
          setOpenLogin(true)
          navigate("/login")
        }
      })

    useEffect(()=>{
      getData()
    },[page])
    
    useEffect(() => {
      window.addEventListener("scroll", handelInfiniteScroll);
      return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);

  return (
    <div>
      <div>
      {
        data && data.map((el)=>(
          <EachCard el={el}/>
        ))
        
      }
      </div>
      <div>
        {
          loading ? <MutatingDots 
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor= '#4fa94d'
          radius='12.5'
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{marginLeft:"45%"}}
          wrapperClass=""
          visible={true}
         />:""
        }
      </div>
      <Snackbar open={opensuccess} autoHideDuration={1000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%',backgroundColor: "#4d9a51" }}>
           Login Successfull
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Home