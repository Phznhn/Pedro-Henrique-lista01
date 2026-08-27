var numero = [7,5,3,9,7];

function medianumero(numero){
    let soma=0
    
    for (let i=0;i<5;i++){
        soma+=numero[i];
    }
    let media= soma/5
    return media;
}

let resultado = medianumero(numero);
console.log("a media dos numeros e: " + resultado);
