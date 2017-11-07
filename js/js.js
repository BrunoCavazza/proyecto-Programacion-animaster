function Suma(){
    var Numero1;
    var Numero2;
    
    
    Numero1 = parseInt(document.getElementById('N1').value);
    Numero2 = parseInt(document.getElementById('N2').value);
    document.getElementById('lblResultado').innerHTML = Numero1 + Numero2;
}

function Resta(){
    var numero1;
    var numero2;
    
    Numero1 = document.getElementById('N1').value;
    Numero2 = document.getElementById('N2').value;
    document.getElementById('lblResultado').innerHTML = Numero1 - Numero2;
   }

function Multiplicacion(){
    var numero1;
    var numero2;
    
    Numero1 = document.getElementById('N1').value;
    Numero2 = document.getElementById('N2').value;
    document.getElementById('lblResultado').innerHTML = Numero1 * Numero2;
   }

function Division(){
    var numero1;
    var numero2;
    
    Numero1 = document.getElementById('N1').value;
    Numero2 = document.getElementById('N2').value;
    document.getElementById('lblResultado').innerHTML = Numero1 / Numero2;
   }

function sumar(sum1, sum2){
    var resultado;
    resultado = sum1 + sum2;
    return resultado;
}