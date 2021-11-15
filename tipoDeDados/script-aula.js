/* 
 Tipo de dados em JS : 	
 	
 	Dados primitivos do JS:
 	
 		var nome = 'Hugo' // String
 	
 		var idade = 28 // Number
 	
 		var possuiFaculdade = true // Boolean
 	
 		var time; // Undefined
 	
 		var comida = null // Null
 	
 		var simbolo = Symbol() // Symbol
 	    
 	    Esses dados primitivos são imutáveis
 	  
 	O tipo de dado Object não é primitivo:
 	
 	var novoObjeto = {} // Object
*/

var nome = 'Hugo';
var idade = 28 ;
var time ;
var simbolo = Symbol() ;

console.log(typeof simbolo);

// Concatenando Strings : 

var sobrenome = 'Italo' ;

console.log(nome +' '+sobrenome)

// Podemos concatenar strings com number :

var gols = 1000 ;
var frase = 'Romario fez ' + gols + ' gols' ;
console.log(frase, '\n', typeof frase);

// OBS : Sempre que somo um number a uma string no final é tudo string

/*Template String:
 	
 	Voce deve passar expressões/variáveis  dentro de ${}
 		Exemplo : 
 			var gols = 1000 ;
			var frase = `Romario fez ${gols} gols` ;
			console.log(frase);
 
 // OBS : Repare que na declaracão da Template String ultilizamos
 no lugar das aspas  normais ('', "") ultilizamos aspas literais (` `) 
 */

var frase1 = `Romario fez ${gols * 2} Gols`
console.log(frase1)