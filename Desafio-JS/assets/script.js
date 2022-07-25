//variaveis numero e numero2 onde recebem valores decimais
var numero = 111;
var numero2 = 10;
//variavel soma que retorna um resultado
var somar = numero + numero2;


//Teste lógico
if (numero === numero2 && somar > 20) {
    console.log ("Os números são iguais, sua soma é " + somar + " que é maior que 20");
}else if (numero === numero2 && somar <= 20){
    console.log("Os números são iguais, sua soma é " + somar + " que é menor que 20");
}else if (somar >= 20){
    console.log("Os números não são iguais, sua soma é " + somar + " que é maior que 20");
}else{
    console.log("Os números não são iguais, sua soma é " + somar + " que é menor que 20");
}

