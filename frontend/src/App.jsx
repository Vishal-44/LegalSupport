import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import DocumentGeneration from './Pages/DocumentGeneration';
import NDA from './Pages/DPages/NDA';


function App() {

  return (
    <>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce
      />
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/register' exact element={<Register/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/document-generation' exact element={<DocumentGeneration/>}/>
      <Route path='/NDA' exact element={<NDA/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
