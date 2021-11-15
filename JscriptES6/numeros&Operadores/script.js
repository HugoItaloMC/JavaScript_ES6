/* Números
     var idade = 28
     var gols = 1000
     var pi = 3.14 // ponto decimal
     var exp = 2e10 // 20000000000
     - Precisão para até 15 digitos
*/

var idade = 3;
console.log(idade);

/* Operadores aritiméticos
     var soma = 100 + 50; // 150
     var subtracao = 100 - 50; // 50
     var multiplicacao = 100 * 2; // 200
     var divisao = 100 / 2; // 50
     var expoente = 2 ** 4; // 16
     var modulo = 14 % 5; // 4

     Lembrando que soma '+' em String serve para concatenar
*/

var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5;

console.log(soma, subtracao, divisao, multiplicacao, expoente, modulo)

/* Operadores aritiméticos
     var soma = '100' + 50; // 10050
     var subtracao = '100' - 50; // 50
     var multiplicacao = '100' * '2'; // 200
     var divisao = 'Comprei 10 / 2; // NaN (Not a Number)

     É possível verificar se uma variável é NaN ou não com a funcão ' isNaN() '
     console.log(isNaN(divisao)); // True
*/

/* A ordem importa

var total1 = 20 + 5 * 2 ; // 30
var total2 = (20 + 5) * 2 ; // 50
var total3 = 20 / 2 * 5 ; // 50
var total4 = 10 + 10 * 2 + 20 / 2 ; // 40

parenteses para priorizar uma expressão
*/

var total1 = 20 + 5 * 2 ; // 30
var total2 = (20 + 5) * 2 ; // 50
var total3 = 20 / 2 * 5 ; // 50
var total4 = 10 + 10 * 2 + 20 / 2 ; // 40

console.log(total1, total2, total3, total4)

/* Operadores aritiméticos unários :
    Incrementando e Decrementando valores

var incremento = 4;

console.log(incremento++) ; // 4
console.log(incremento) ; // 5

console.log(++incremento) ; // 6

var decremento = 100 ;

console.log(decremento--) ; // 100
console.log(decremento) ; // 99

console.log(--decremento) ; // 98

*/

var incremento = 4;
console.log(incremento++) ; // Atribuicão na próxima chamada
console.log(incremento) ; // Retorno do incremento anterior

console.log(++incremento) ; // Atribuicão local



var decremento = 100 ;

console.log(decremento--) ; // 100
console.log(decremento) ; // 99

console.log(--decremento) ; // 98

/* operadores aritiméticos unários :
    Gerando números a partir de strings


var frase = 'Isso é um teste'

+frase; // NaN
-frase; // NaN

console.log(+frase, -frase)


var idade = '30' ;
+idade ; // 30
-idade ; // -30

console.log(+idade + 5)

// No retorno de um boolean, 0 = False & 1 ou mais = True.

var possuiFaculdade = true ;
console.log(+possuiFaculdade)

*/

var frase = 'Isso é um teste'

+frase; // NaN
-frase; // NaN

console.log(+frase, -frase)


var idade = '30' ;
+idade ; // 30
-idade ; // -30

console.log(+idade + 5)

var possuiFaculdade = true ;
console.log(+possuiFaculdade)
