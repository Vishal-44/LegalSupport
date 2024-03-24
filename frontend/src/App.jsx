import './App.css'
import Home from './Pages/Home'
import Features from './Pages/Features'
import Testimonials from './Pages/Testimonials'
import Blog from './Pages/Blog'
import LoginRegister from './Pages/LoginRegister'
import DocumentGeneration from './Pages/DocumentGeneration'
import DocumentSimplification from './Pages/DocumentSimplification'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/features'  element={<Features/>}/>
      <Route path='/testimonials'  element={<Testimonials/>}/>
      <Route path='/blog'  element={<Blog/>}/>
      <Route path='/login-register'  element={<LoginRegister/>}/>
      <Route path='/document-generation'  element={<DocumentGeneration/>}/>
      <Route path='/document-Simplification'  element={<DocumentSimplification/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
