import { UserContext } from '../context/UserProvider'
import { NavLink } from "react-router-dom"
import React, { useContext } from "react"

const Navbar = () => {
    const {user, signOutUser} = useContext(UserContext);
    const handleClickSignOut = async () => {
        try {
            await signOutUser();

        } catch (error) {
            console.log("Error en cerrar sesión: ", error.code)
        }
    }
  return (
    <>
      <div>
        {
            //Si el usuario existe
            user?(
                <>
                    <NavLink to='/'>| Home |</NavLink>
                    <button onClick={handleClickSignOut}>| Logout |</button>
                </>  
            ):(
                <>
                    <NavLink to='/login'>| Login |</NavLink>
                    <NavLink to='/register'>| Register |</NavLink>
                </>   
            )

        }
      </div>
    </>
  )
}

export default Navbar
