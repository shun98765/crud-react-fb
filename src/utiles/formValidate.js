export const formValidate = (getValidate) => {

    return{
        required : {
            value : true,
            message : "Campo obligatorio",
        },
        
        // Todos los caracteres que puede recibir unn Email:
        patternEmail : {
            value : /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message : "Formato de email inválido",
        },

        minLength : {
            value : 8,
            message : "Mínimo 8 caracteres"
        },

        validateTrim : {
            trim : (v)=>{
                if (!v.trim()) {
                    return "No se aceptan espacios como caracteres"
                }
                return true;
            }
        },

        validateEquals(value){
            return {
                equals : (v)=> v=== value || "Coinciden las contraseñas"
            }
        }
    }
  
}

