//Nível I

//1-Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.

//2-Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function Adicionar(x, y){
    
    return (x+y);
}

//3-Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtracao(x, y){
  
  return (x-y);
}

//4-Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao(x, y){
  
  return (x*y);
}

//5-Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao(x, y){
  
  return (x/y);
}

//Nível II

//1-No seu arquivo calculadora.js, a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo: console.log ("-------------- Teste de Operações / Calculadora --------------")

//2-Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.

  console.log(Adicionar(10, 5));

  console.log(subtracao(10, 5));

//3-Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.

console.log(multiplicacao(100, 2));

//4-Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.

console.log(divisao(100, 2));


//5-Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.

console.log(divisao(100, 0));


//Nivel III

//1-Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.

function quadradoDoNumero (x){
    
    return multiplicacao(x, x)
}

console.log(quadradoDoNumero(2));

//2-Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.

function mediaDeTresNumeros(x, y, z){
    var a = divisao(Adicionar(Adicionar(x, y), z), 3);
    return a;
}

console.log(mediaDeTresNumeros(5, 10, 20));

//3-Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.

function calculoDePorcentagem(x, y){
    var a = divisao(multiplicacao(x, y), 100);
    return a;
}

console.log(calculoDePorcentagem(50, 10));

//4-Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.

function geradorDePorcentagem(x, y){
    var a = divisao(multiplicacao(x, 100), y);
    return a;
}

console.log(geradorDePorcentagem(10, 200));