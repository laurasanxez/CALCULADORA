//Declaración de variables globales.
let valorEnPantalla = "";
let operando1 = null;
let operando2 = null;
let operador = ""; //Puede ser +, -, *, /

//Función que se ejecuta al pulsar el botón "C". Se resetean las variables y el display
function resetearCalculadora() {
    resetearVariables();
    actualizarDisplay();
}

//Función que reinicializa los valores de las variables a su estado original.
function resetearVariables() {
 
    valorEnPantalla = "";
    
    operando1 = null;
   
    operando2 = null;
 
    operador = ""; //Puede ser +, -, *, /
}

//Función que actualiza el display (pantalla) de la calculadora.
function actualizarDisplay() {
    document.getElementById("display").value= valorEnPantalla;
}

//Función que se ejecuta cuando se pulsa en un número. Agrega el número pulsado al número que hay en el display
function agregarNumero(symbol) {
     valorEnPantalla = valorEnPantalla + symbol;
       actualizarDisplay();
}

//Función que se ejecuta cuando pulsa en un operador (+, -, *, /). Copia lo que hay en el display a la variable `operador1` y se prepara para pedir el operador2
function operadorPulsado(symbol) {
    operando1 = parseInt(valorEnPantalla);
      operador = symbol;
        valorEnPantalla ="";
}

//Función que se ejecuta cuando se pulsa el botón calcular (=). Muestra el resultado en el display
function calcular() {
    if (operador != ""){
      operando2 = parseInt(valorEnPantalla);
       switch(operador) {
             case "+":
               valorEnPantalla = operando1 + operando2;
                 break;
             case "-":
                valorEnPantalla = operando1 - operando2;
                 break;
             case "*":
                 valorEnPantalla = operando1 * operando2;
                 break;
             case "/":{
                 valorEnPantalla = operando1 / operando2;
                 
                if (operando2 == 0){
           valorEnPantalla = "No se puede dividir entre 0";
                    }
                 break;
             }
            }
               actualizarDisplay();
               resetearVariables();
                }
       }
     

