//Define la verificacion de la contraseña 
function Verificarcontraseña (contraseña);

//Longitud de la contraseña 

Const CContraseña = [A-Z];                             // Letras que deben contener
Const NContraseña = [0-9];                            // Numeros que debe tener la contraseña 
Const CEspecialesC = [!@#$^&*()_+{}[]:;<>,.?~\-];    // Carácter especial
Const LongContra =  ^[8];                           // Longitud de la contraseña 
{
    if (!CContraseña.test(contraseña))
        return "Debe tener alguna letra"
    if (!NContraseña.test(contraseña))
        return "Debe tener algun numero"
    if (!CEspecialesC.test(contraseña))
        Return "Debe tener algun caracter especial"
}


//Si cumple con los requisitos

    return "Si cumple con los requisitos";

Const Contrasena = prompt("ingreso de contraseña");

const resultado = prompt("Se muestra el resultado")

alert(resultados);