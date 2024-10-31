import React, {useContext, useState} from 'react'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("carlos.valero@uao.edu.co");
    const [password, setPassword] = useState("Carlos 12");
    const {loginUser} = useContext(UserContext);
    const navegate = useNavigate(); //Cambia de sitio de pagina, no desde el retorno sino de una función
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            await loginUser(email, password)
            console.log("User Logueado")
        } catch (error) {
            console.log(error.code)
        }
    }
  return (
    <>
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmitLogin}>
                <input type="email" name="" id="" placeholder='correo' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" name="" id="" placeholder='contraseña' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    </>
  )
}

export default Login
