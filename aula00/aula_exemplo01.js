//Exemplo 01
//Usando var (escopo global/função)

var nome = "Rafael";
console.log(nome);

if(true){
    var nome = "Maria";
    console.log(nome)
}

console.log(nome);

// Variaveis com let

let idade = 35;
console.log(idade);

if(true){
    let idade = "Maria";
    console.log(idade)
}

console.log(idade);

//Variaveis com const

const pi = 3.14

console.log(pi);

if(true){
    const pi = 3.14159;
    console.log(pi);
}

console.log(pi);