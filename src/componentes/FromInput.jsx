import { forwardRef } from "react";
import React from 'react'

const FromInput = forwardRef((
    {type, placeholder, onChange, onBlur, name, label, error, children}, ref
)=>{
    // error?"" = Qué ocurre si hay un "error"? Si hay un error mostrar:
    const errorClassLabel = error?"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" : "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400";
    const errorClassInput = error?"p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" : "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400";

    return(
        <div className="mb-6">
            <label className={errorClassLabel} htmlFor="email">{label}</label>
            <input className={errorClassInput} type={type} placeholder={placeholder} ref={ref} onChange={onChange} onBlur={onBlur} name={name}/>
            {children}
        </div>
    )
})

export default FromInput
