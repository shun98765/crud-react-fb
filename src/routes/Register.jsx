import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { formValidate } from '../utiles/formValidate';
import {erroresFirebase} from '../utiles/erroresFirebase';


import FromInput from '../componentes/FromInput';
import FormError from '../componentes/FormError';
import Titulo from '../componentes/Titulo';
import Button from '../componentes/Button';

const Register = () => {
    // const [email, setEmail] = useState("carlos.valero@uao.edu.co");
    // const [password, setPassword] = useState("Carlos 12");
    const {registerUser} = useContext(UserContext);

    const navegate = useNavigate();
    const {register, handleSubmit, formState : {errors}, getValues, } = useForm();
    const {required, patternEmail, minLength, validateTrim, validateEquals} = formValidate();

    const onSubmit = async ({email, password}) =>{
        console.log("Form?", email, password)
        try {
            await registerUser(email, password);
            console.log("User registrado")
            
        } catch (error) {
            console.log(error.code)
        }
    }

    /*
    const handleSubmit = async (e) =>{
        e.preventDefault(); //e.preventDefault(); previene que se recargue todo el sitio
        console.log("Enviando datos ", email," ", password)
        try {
            await registerUser(email, password);
            
        } catch (error) {
            console.log(error.code)
        }
    }
    */
  return (
    <>
        <Titulo text="{Register}"/>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <FromInput 
            type="email" 
            name="" 
            id="" 
            placeholder='email'
            
            {...register(
                "email", {
                    required,
                    pattern : patternEmail, 
                }
            )}

            label = "Ingresa tu correo"
            error = {errors.email}
            
            >
                <FormError error={errors.email}/>

            </FromInput>

            <FromInput 
                type="password" 
                name="" 
                id="" 
                placeholder='password'
                
                {...register(
                    "password", {
                        required,
                        minLength,
                        validate : validateTrim
                    }
                )}
                label = "Ingresa tu password"
                error = {errors.password}
            >
                <FormError error={errors.password}/>

            </FromInput>

            <FromInput
                type="password" 
                name="" 
                id="" 
                placeholder='password'
                
                {...register(
                    "password2", {
                        validate : validateEquals(getValues("password2")),
                    }
                )}
                label = "Repite tu password"
                error = {errors.password2}
                >
                    <FormError error={errors.password}/>

                </FromInput>

            <button type="submit">Register</button>
        </form>
    </>
  )
}

export default Register
