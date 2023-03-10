import React,{useContext} from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AllRoutes = () => {
 
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
    </Routes>
  )
}

export default AllRoutes