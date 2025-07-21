import React from 'react'
import LandingPage from './Pages/LandingPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupEmp from './Pages/Signup1/SignupEmp.jsx'
import SignupCom from './Pages/Signup2/SignupCom.jsx'
import Login from './Pages/Login/Login.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/signupEmp' element={<SignupEmp />}></Route>
        <Route path='/signupCom' element={<SignupCom />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
