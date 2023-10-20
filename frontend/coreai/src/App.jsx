import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Appbar from './Appbar';
import Signup from './Signup';
import Login from './Login';
import { RecoilRoot } from 'recoil';
import Seeallcourses from './Seeallcourses';
import Init from './init';
import Selectedcourse from './Selectedcourse';
import Belowbar from './Belowbar';
import Plan from './Plan';
import Register from './Register';

// import './fonts/SFPRODISPLAYREGULAR.OTF';

function App() {

  return (
    <>
    <RecoilRoot>
    <Router>
      <Appbar></Appbar>
      <Init></Init>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/courses' element={<Seeallcourses/>}/>
        <Route path='/course/:courseId' element={<Selectedcourse/>}/>
        <Route path='/plan' element={<Plan/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Belowbar></Belowbar>
    </Router>
    </RecoilRoot>
    </>
  )
}

export default App
