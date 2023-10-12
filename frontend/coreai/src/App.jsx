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

// import './fonts/SFPRODISPLAYREGULAR.OTF';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RecoilRoot>
    <Router>
      <Appbar></Appbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </RecoilRoot>
    </>
  )
}

export default App
