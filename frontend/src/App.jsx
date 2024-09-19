import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/authcontext'

function App() {

  const {authUser}=useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center' >
    {/* <Login/> */}
    {/* <Signup/> */}
    {/* <Homepage/> */}
    <Routes>
       <Route path='/' element={authUser?<Homepage/>:<Navigate to="/login"/>}/>
        <Route path='/login' element={authUser?<Navigate to="/"/>:<Login/>}/>
        <Route path='/signup' element={authUser?<Navigate to="/"/>:<Signup/>}/>
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App
