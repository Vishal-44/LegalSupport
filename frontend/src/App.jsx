import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import DocumentGeneration from './Pages/DocumentGeneration';
import NDA from './Pages/DPages/NDA';
import PA from './Pages/DPages/PA';
import RFA from './Pages/DPages/RFA';
import RA from './Pages/DPages/RA';
import SBA from './Pages/DPages/SBA';
import DocumentSimplification from './Pages/DocumentSimplification';


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
      <Route path='/document-simplification' exact element={<DocumentSimplification/>}/>
      <Route path='/NDA' exact element={<NDA/>}/>
      <Route path='/PA' exact element={<PA/>}/>
      <Route path='/RFA' exact element={<RFA/>}/>
      <Route path='/RA' exact element={<RA/>}/>
      <Route path='/SBA' exact element={<SBA/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
