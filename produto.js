var produtinho = {
    nome: "camisa",
    preco: 70,
    estoque: 15
};

for (var propriedade in produtinho){
    console.log(propriedade+ ":"+produtinho[propriedade]);
}
