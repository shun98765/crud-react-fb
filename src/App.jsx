import { useContext, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import { UserContext } from './context/UserProvider'
import Navbar from './componentes/Navbar'
import RequireAuth from './componentes/RequireAuth'
import Register from './routes/Register'

function App() {
  const [count, setCount] = useState(0)
  const {user} = useContext(UserContext)

  if(user === false){
    return <p>Cargando...</p>
  }else{

  }
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
