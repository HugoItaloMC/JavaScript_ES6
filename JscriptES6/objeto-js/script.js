/**
 * Objetos : 
 *  Conjunto de variáveis e funcões, que são chamadasa
 * propriedades e métodos.
 *  Propriedades e métodos consistem em :
 * chave: valor.
 
var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    graduado: true,
}

*/ 

var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    graduado: true,
}

/**
 * Métodos :
 * É uma propriedade que possui uma funcão no local do seu valor


var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro: function(lado) {
        return this.lados * lado
    },
}

 */
var quadrado = {

    lados: 4,
    area(lado) {
        return `${lado * lado} M`
    },
    perimetro(lado) {
        return this.lados * lado
    },
}


/**
 *  Orgaganizar o código : 
 *  Objeto servem para organizar o código em pequenas partes
 * reutilizáveis
 *  Math é um objeto nativo de JavaScript. já percebeu
 * que console é um objeto e .log() é um método?
 
 
 Math.PI; // 3.14
 Math.random(); // número aleatório

 var pi = Math.PI;
 console.log(pi); // 3.14
*/
 
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
 console.log(pi); // 3.14

 /**
  * Dot Notation Get :
  *  Acessar uma propriedade de um objeto
  * ultilizando o ponto ' . '
  
 var menu = {
     width: 800,
     height: 50,
     backgroundColor: '#84E'
 }
 
 */ 
 var menu = {
     width: 800,
     height: 50,
     backgroundColor: '#84E'
 }

console.log(menu.backgroundColor) // '#84E'

 /**
 * Dot Notation Set : 
 *  Substitua o valor de uma propriedade ultilizando ' . '
 * e o ' = ' após o nome da mesma
*/


menu.backgroundColor = '#000' ;
 var bg = menu.backgroundColor; // ' #000 '