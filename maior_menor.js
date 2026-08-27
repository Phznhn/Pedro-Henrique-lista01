var numero = [7,8,9,1,4];

var maior = numero[0];

var menor = numero[0];

for (var i=0;i<5;i++){
    if (numero[i]>maior){
        maior = numero[i];
    }
   if (numero[i]<menor){
        menor = numero[i];
    }   
}

console.log("o maior e:"+maior);
console.log("o menor e:"+menor);
