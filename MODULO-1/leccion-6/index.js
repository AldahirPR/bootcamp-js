function calcularMayoriaDeEdad(edad){
    if (edad >= 18){
        console.log("Eres mayor de edad");
    } else {
        console.log("No eres mayor de edad");
    }
}

calcularMayoriaDeEdad(18);
calcularMayoriaDeEdad(15);

/* return */

function suma(valor1, valor2){
    return valor1 + valor2;
}

const resultado = suma(1,1);
console.log(resultado);