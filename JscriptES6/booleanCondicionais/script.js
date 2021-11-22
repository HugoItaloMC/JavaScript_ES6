// Verificar se a sua idade é maior do que a de algum parente
// Dependendo do resultado no console retorne condicional

var minhaIdade = 28 ; 
var idadeParente = 30 ;

if (minhaIdade > idadeParente) {
    console.log('Maior');
}else if(minhaIdade === idadeParente) {
    console.log('igual');
}else {
    console.log('menor')
}

// Qual valor é retornado na expressão seguinte :

var expressao = (5 - 2) && (5 - ' ') && (5 - 2) ; 
console.log(expressao);

// Veririfique se as seguintes variáveis são Truthy ou Falsy

var nome = 'André';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade,!!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total das variáveis seguintes : 
var brasil = 207 ;
var china = 1340 ; 

if (brasil > china) {
    console.log('Brasil tem mais habitantes');
}else{
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console? :


if(('Gato' === 'gato')&&(5 > 2)){
    console.log('True');
}else{
    console.log('False');
}


// O que irá aparecer no console ?



if(('gato' === 'gato')&&(5 > 2)){
    console.log('Gato' && 'Cão');
}else{
    console.log('False');
}