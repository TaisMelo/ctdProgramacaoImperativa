//Micro desafios

let minhasCompras = ["Maçã","Banana","Laranja","Kiwi","Uva","Morango"]; //criação da array
let SeparadosPorTraço= minhasCompras.join("-") //Junta os elemntos da array usando um separador
console.log(SeparadosPorTraço) //Resultado do Join
console.log(minhasCompras)

let ultimaFruta = minhasCompras.pop() //Elimina o ultimo elemento da array
console.log(ultimaFruta) //Resultado do pop
console.log(minhasCompras)

minhasCompras.push("Cereja") //Adiciona um ou mais elementos ao final array
console.log(minhasCompras) //resultado do push

let primeiraFruta = minhasCompras.shift() //Elimina o primeiro elemento do array
console.log(minhasCompras)
console.log(primeiraFruta)//resultado do shift

minhasCompras.unshift("Maçã","Morango")//Adiciona um ou mais elementos no início do array
console.log(minhasCompras)//resultado do unshift


