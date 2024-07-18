import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'


function App() {

  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/register' exact element={<Register/>}/>
      <Route path='/login' exact element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
