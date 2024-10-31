import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'

const Register = () => {
    const [email, setEmail] = useState("carlos.valero@uao.edu.co");
    const [password, setPassword] = useState("Carlos 12");
    const {registerUser} = useContext(UserContext);

    const handleSubmit = async (e) =>{
        e.preventDefault(); //e.preventDefault(); previene que se recargue todo el sitio
        console.log("Enviando datos ", email," ", password)
        try {
            await registerUser(email, password);
            
        } catch (error) {
            console.log(error.code)
        }
    }

  return (
    <>
        <div>Register</div>
        
        <form onSubmit={handleSubmit}>
            <input type="email" name="" id="" placeholder='correo' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" name="" id="" placeholder='contraseña' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">Register</button>
        </form>
    </>
  )
}

export default Register
