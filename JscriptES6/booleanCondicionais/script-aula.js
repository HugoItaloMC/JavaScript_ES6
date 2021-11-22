/* Boolean possui dois valores :
    false, true

    Estrutura Condicionais if(), else, else if() :



Os valores dentro dos parenteses sempre será avaliado entre false ou true.
*/

var part = true ;
var point = false ;

if(part){
    console.log('part = True') ;
}else if(point){
    console.log('point') ;
} else {
    console.log('The false part') ;
} 

var nome = ''

if(nome) {
    console.log(nome)
} else {
    console.log('The False')
}

/* Existem valores que retornam true e outros que retornam
false quando verificamos em uma expressão booleana.

// Falsy

if(false)
if(0) // ou -0
if(NaN)
if(null)
if(Undefined)
if('') // ou "" ou ``

Todo o resto é truthy

// Truthy

if(true)      //    valor booleano true
if(1)        //     inteiro maior que 0
if(" ")     //      string preenchida
if('Hugo') //       string preenchida com caracteres
if(-5)    //        inteiro negativo
if({})   //         tipo de dado objeto, mesmo vazio



Operador Lógico Negacão '!'

 O operadir lógico '!' nega uma operacão booleana.
Ou seja, !true é igual a false.

//Truthy

if(!true)         // false
if(!1)           //  false
if(!'')         //   true
if(!undefined) //    true
if(!!' ')     //     true
if(!!'')     //      false



 O '!!' serve para verificar se uma expressão
é Truthy ou Falsy
*/
a = 'set' ;
if(!a){
    console.log(a) ;
}else if(!!a) {
    console.log(true) ; 
}

/* Operadores de comparacão : 
    Vão sempre retornar um valor booleanod


   10 > 5          //  true
    5 > 10        //   false
   20 < 10       //    false
   10 <= 10     //     true
   10 >= 11    //      false

    O ' == ' faz uma comparacão não tão estrita e o ' === ' faz uma comparacão estrita
ou seja, o tipo de dado deve ser o mesmo quando usamos o ' ==== '
   
    10 == '10';          //   true
    10 == 10;           //    true
    10 === '10';       //     false
    10 === 10;        //      true
    10 != 15;        //       true
    10 != '10';     //        false
    10 !== '10';   //         true



 O operador ' && ' compara se uma expressão e a outra é verdadeira.
 O operador ' && ' retorna o primeiro valor false que ele encontrar na expressão
se caso não encontre nem um false, ele retorna o último true da expressão. Se algum valor
for false não irá continuar a verificar os próximos.


    true && true;               // true
    true && false;             //  false
    false && true;            //   false
    'Gato' && 'cão'          //    'cão'
   (5 - 5) && (5+ 5);       //     0
   'Gato' && false;        //      false
  (5 >= 5)  && ( 3 > 6);  //       true
*/

var condicional = (5 - 10) && (5 + 5)

if (condicional) {
    console.log('True')
}else {
    console.log('False')
}


/** 
 Operador ' || ' compara se uma expressão ou outra é verdadeira 'true' 
 

true || true;                //     true
true || false;              //      true
false || false;            //       true
'Gato' || 'Cão';          //       'Gato'
(5 - 5) || (5 + 5);      //         10
'Gato' || false ;       //         'Gato'
(5 >= 5) || (3 < 6)    //           true

*/


condicional2 = (5 -5) || (5 + 5) || (10 -2);

console.log(condicional2);


condicional2 = (5 -5) || (5 + 5) && (10 -2);

console.log(condicional2);  // O operador ' && ' retorna o último true




/** 
 
    Operador swith vc pode verificar se uma variável
é igual à diferentes valores ultilzando o case. Caso
ele seja igual, vc pode fazer alguma coisa e ultilizar
a palavra chave break; para cancelar a continuacão. O
valor de default ocorrerá caso nenhum das anteriores
seja true


var corFavorita = 'Azul';

swith (corFavorita){
    case 'Azul':
        console.log('Olhe para o céu' );
    break;

    case 'Vermelho':
        console.log('Olhe para rosas');
    break;

    case 'Amarelo':
        console.log('Olhe para o Sol')
    break;
}

*/

var corFavorita = 'Cripta';

switch (corFavorita)
{
    case 'Azul':
        console.log('Olhe para o céu' );
    break;

    case 'Vermelho':
        console.log('Olhe para rosas');
    break;

    case 'Amarelo':
        console.log('Olhe para o Sol')
    break;
    
    default:
        console.log('Feche os Olhos')
}