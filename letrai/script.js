alert("Bem-vindo!"); 
let valor1 = Number(prompt("Insira o valor A"));
let valor2 = Number(prompt("Insira o valor B"));
let valor3 = Number(prompt("Insira o valor C"));
let valor4 = Number(prompt("Insira o valor D"));
let valor5 = Number(prompt("Insira o valor E"));
let menor,maior;

if((valor1 >= valor2) && (valor1 >= valor3) && (valor1 >= valor4) && (valor1 >= valor5)){
   maior = valor1
}
if((valor1 < valor2) && (valor1 < valor3) && (valor1 < valor4) && (valor1 < valor5)){
   menor = valor1
}


if((valor2 >= valor1) && (valor2 >= valor3) && (valor2 >= valor4) && (valor2 >= valor5)){
maior = valor2
}
if((valor2 < valor1) && (valor2 < valor3) && (valor2 < valor4) && (valor2 < valor5)){
   menor = valor2
}

if((valor3 >= valor1) && (valor3 >= valor2) && (valor3 >= valor4) && (valor3 >= valor5)){
maior = valor3
}
if((valor3 < valor1) && (valor3 < valor2) && (valor3 < valor4) && (valor3 < valor5)){
   menor = valor3
}

if((valor4 >= valor1) && (valor4 >= valor2) && (valor4 >= valor3) && (valor4 >= valor5)){
maior = valor4
}
if((valor4 < valor1) && (valor4 < valor2) && (valor4 < valor3) && (valor4 < valor5)){
   menor = valor4
}

if((valor5 >= valor1) && (valor5 >= valor2) && (valor5 >= valor3) && (valor5 >= valor4)){
maior = valor5
}
if((valor5 < valor1) && (valor5 < valor2) && (valor5 < valor3) && (valor5 < valor4)){
   menor = valor5
}

alert(`${menor},${maior}`);





