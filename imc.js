let peso = 70;

let altura = 1.79;

function imc(peso, altura){
    let conta = peso/(altura*altura);
    
    if (conta >18.5 && conta<24.9){
        console.log(conta + " peso e altura normal");
    } else {
        console.log(conta + "tem que se cuidar meu amigo");
    }
}
imc(peso, altura);
