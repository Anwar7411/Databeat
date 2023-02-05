import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../components/AppContextProvider'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { MutatingDots } from 'react-loader-spinner'
import EachCard from '../components/EachCard'
import "./Home.css";

const Home = () => {
    const[page, setPage]=useState(1);
    const[limit, setlimit]=useState(9);
    const[data, setData]=useState([]);
    const[loading, setLoading]=useState(true);

    const { loginData,isAuth, setOpenError }=useContext(AppContext);
    const navigate=useNavigate();

    const getData=()=>{
       axios.get(`https://mistore-backend.onrender.com/phones?page=${page}&limit=${limit}`)
       .then((res)=>
           {
            setData((prev) => [...prev, ...res.data.data]);
            setLoading(false);
           }
            )
    }

    const handelInfiniteScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          setPage((prev) => prev + 1);
          setLoading(true);
        }
      } 
    
    useEffect(() => {
        if(!isAuth){
          setOpenError({bool:true,mssg:"Please Login!"});
          navigate("/login");
        }
    },[])

    useEffect(() => {
      getData();
    },[page])
    
    useEffect(() => {
      window.addEventListener("scroll", handelInfiniteScroll);
      return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);

  return (
    <div>
      <div className='homePage-cardContainer'>
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
    </div>
  )
}

export default Home