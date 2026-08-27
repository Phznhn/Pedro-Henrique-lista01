var carros = [
    { marca: "toyota", modelo: "corolla", ano: 2014 },
    { marca: "honda", modelo: "civic", ano: 2019 },
    { marca: "ford", modelo: "focus", ano: 2021 }
];
for (var i=0;i<3;i++){
    if (carros[i].ano>2015){
        console.log(carros[i].marca+" "+carros[i].modelo+" "+carros[i].ano);
}
}
