alert("Bem-vindo!"); 
let nome = prompt("Informe o nome");
let sexo = prompt("Informe o sexo");

if((sexo.toLowerCase() == "masculino")){
   alert(`Ilmo. Sr. ${nome}`);

}else{
   alert(`Ilma. Sra. ${nome}`);


}