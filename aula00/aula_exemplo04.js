//Função que recebe um objeto como argumento
function exibirInfoProduto(produto){
    return `Produto: ${produto.nome}, Preço: R$ ${produto.preco.toFixed(2)}, 
    Estoque: ${produto.estoque} unidade(s).`;
}

const produto1 = {
    nome: "PC GAMER MASTER",
    preco: 3500.90,
    estoque: 5
};

const produto2 = {
    nome: "RODA ARO 20",
    preco: 5000.00,
    estoque: 20
};

console.log(exibirInfoProduto(produto1));
console.log(exibirInfoProduto(produto2));