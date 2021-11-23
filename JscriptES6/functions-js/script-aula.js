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

imc(80, 1.8);


function terceiraIdade(idade) {
    if ( typeof idade !== 'number') {
        return 'Por favor preencha com número'
    }else if (idade >= 60) {
        return true ;
    } else {
        return false ;
    }
}

console.log(terceiraIdade('oi'));

/*
 Variáveis e funcões definidas dentro de um bloco ' {} ', não são visíveis
fora dele.

function precisoVisitar(paisesVisitados){
    var totalPaises = 193 ;
    return `Ainda Faltam ${totalPaises - paisesVisitados} paises`;
}

console.log(totalPaises) ;  // Erro totalPaises não definido.

*/


function precisoVisitar(paisesVisitados){
    var totalPaises = 193 ;
    return `Ainda Faltam ${totalPaises - paisesVisitados} paises`;
}

/**
Escopo léxico, funões conseguem acessar variáveis que foram criadas no contexto pai.


var profissao = 'Design' ;


function dados() {
    var nome = 'André' ;
    var idade = 18 ;
    function outroDados(){
        var endereco = 'Rio de Janeiro' ; 
        var idade = 29 ;
        return `${nome}, ${idade}, ${endereco}, ${profissao}` ;
    }
    return outroDados();
}


 */



var profissao = 'Design' ;


function dados() {
    var nome = 'André' ;
    var idade = 18 ;
    function outroDados(){
        var endereco = 'Rio de Janeiro' ; 
        var idade = 29 ;
        return `${nome}, ${idade}, ${endereco}, ${profissao}` ;
    }
    return outroDados();
}

console.log(dados()); // retorna os dados
// outrosDados(); // Retorna erro


/*
Hoisting : 
 Antes de executar uma funcão, o JScript 'move' todas as funcões declaradas para a memória


 imc(80, 1.80) // imc aparece no console

 function imc(peso, altura) {
     const imc = peso / (altura ** 2);
     console.log(imc)
 }
*/