/**
Funcões 
    Bloco de código que pode ser executado e reutilizado.
Valores podem ser passados por uma funcão e a mesma retorna
outro valor.

function areaQuadrada(lado){
    return lado * lado;
}


##
areaQuadrada(4);
areaQuadrada(6);
areaQuadrada(2);
## Chamada de function declaration
*/


function areaQuadrada(lado){
    return lado * lado;
}

console.log(areaQuadrada(4));
areaQuadrada(6);
areaQuadrada(2)

addEventListener('click', function closs() {console.log('Oi')});


function imc(peso, altura) {
    var imc = peso / (altura * altura); 
    console.log(imc);
} 

imc(80, 1.8)