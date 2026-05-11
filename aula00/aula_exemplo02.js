//Exemplo 2
//Funçoes simples
/*
function saudacao(nome){
    return "Olá," + nome + "!";
}

console.log(saudacao("Rafael"));

// Funcao anonima
const soma = function (num1, num2){
    return num1 + num2;
}

console.log(soma(15,32));


// Arrow function (funcao seta)
const multiplicacao = (x,y) => x*z;
console.log(multiplicacao(5,4));
*/

const pessoa = {
    nomeUsuario: "Rafael Marinho",
    idade: 35,
    email: "rafaelmarinho@unipam.edu.br",
    usuario: "professor",
    saudar: function(){
        return "Oi, meu nome é " + this.nomeUsuario + " e eu sou um " + this.usuario + ".";
    }
}
console.log(pessoa.nomeUsuario);
console.log(pessoa.saudar("Rafael"));