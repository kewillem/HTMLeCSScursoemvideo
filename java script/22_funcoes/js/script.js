function primeiraFuncao(){
    console.log('hello world das funções');
}

primeiraFuncao();

function dizerNome(nome){
    console.log('o nome é: '+ nome);
}

dizerNome('nikoly');

var nomeDoBD = 'jao';

dizerNome(nomeDoBD);

function soma(a, b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);

console.log(somaUm);

var somaDois = soma(5, 5);

console.log(somaDois);

console.log(soma(4, 5));