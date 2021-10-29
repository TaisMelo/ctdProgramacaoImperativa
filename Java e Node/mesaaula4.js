var nome = "Aline Ferreira"; 
var idade = 33; 
var peso = 63.7;
var altura = 1.53;
var plano = False;
var IMC = null;

IMC = peso/(altura*altura);

console.log(nome , "tem",  idade , "anos e seu indice de massa corporal é de", IMC.toFixed(2));