/*
 Variáveis :
 	Responsáveis por guardar dados na memória.
 	Inicia com a palavra var, let ou const.
 
 	var : Pode ser alterada no decorrer do código
 		// Exemplo :
 			
 			var time = 'Flamento';
 			console.log(time);
 			
 			time = 'Vasco';
 			console.log(time);
 	
 	
 	let : Não permite repetir a palavra reservada 'let' 
 para redeclarar um valor na mesma variável.
 		// Exemplo  :
 			let time = 'Flamento';
 			console.log(time);
 			
	 		time = 'Vasco'; // Correto
	 		let time = 'Botafogo'	// Uncaught SyntaxError
	 			
	 
	 const : Uma variável constante que nunca será alterada no código
	 		// Exemplo : 
	 			
	 			
	 			const time = 'Flamengo';
	 			time = 'Vasco';
	 			
	 			console.log(time);		// Uncaught TypeError
*/
var nome = "André";
var idade = 30;
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade, nome);

var preco = 25; 
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = 'Rafael', cidade = 'rio';	

console.log(sobrenome, cidade);