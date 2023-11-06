let num = parseInt(prompt("Hola, por favor digita un número entero positivo"));

let multiplicacion = 1
for (let i = 1; i < num; i++) {
    multiplicacion *= (i+1);
    
} alert ("El producto de todos los numero enteros positivos anteriores al numero que digitaste es " + multiplicacion)
