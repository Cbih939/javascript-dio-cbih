/*
1 - como funciona a tipagem em JS
2 - o que sao variaveis e como declarar
3 - diferenças entre atribuicao, comparação e comparação identica
4 - operadores aritmeticos, relacionais e lógicos

a tipagem funciona como uma regra de uso de dados, quando mais forte for a tipagem,
mais obrigatório é a declaração do tipo de dado.
a tipagem em jscript é fraca, a declaração dos dados acontece de modo dinâmico.
ex: ao criarmos uma variável com valor entre aspas ("valor 1")
javascript já converte o dado para o tipo String.

ex: var numero = 1;
o jscript converte o valor 1 para o tipo Number.

TIPOS PRIMITIVOS
as variaveis em jscript podem guardar tipos de dados que chamamos de tipos primitivos.
variaveis podem guardar valores dos tipos: 
Boolean; 
null;
undefined;
Number;
String;
Array;
Object;
Funcion.
*/

//boolean
/* var vOuF = false;
console.log(vOuF);
console.log(typeof(vOuF);

//number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

//string
var nome = "Cbih939";
console.log(nome);
console.log(typeof(nome));
*/
/*
O que são variáveis
São dados que variam.
Imagina uma caixa, tu pode colocar quase qualquer coisa
dentro dela, pode ser uma lista de nomes, cartões com números,
objetos no geral...
variáveis funcionam dessa forma
como uma caixa que guarda valores.

var - escopo global e local, pode ter seu valor alterado, se nao 
tiver um valor inicial será tradado como null.

let - escopo local de bloco, pode ter seu valor alterado, se não
tiver um valor inicial será tratado como null.

const - escopo de bloco, somente leitura, o valor inicial
obrigatório e não pode ser alterado.
*/

var variavel;
console.log(variavel);

var variavel2 = "nome";
console.log(variavel2);

let variavel3 = 'cbih';
console.log(variavel3);

const variavel4 = 'treino';
console.log(variavel4);

/*
ESCOPO
o escopo em jscript define a limitação e visibilidade de um bloco de código.

escopo global - quando a variável é declarada fora de qualquer bloco,
sua visibilidade fica disponível em todo o código.
escopo local - quando a variável é declarada dentro de um bloco,
sua visibilidade pode ficar disponível ou não.
*/

var escopoGlobal = 'global';
console.log(escopoLocal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();

/*
REGRAS DE USO DE VARIAVEIS
iniciar com letras, underline ou cifrao;
nao iniciar com numero.
    ex: var 1nome (errado)
        var nome || var_nome (correto)

não usar espaços (use o camelCase ou _)
    ex: var nome completo (errado)
        var nomeCompleto || var nome_completo (correto)
        
não usar palavras reservadas
    ex: var function (errado)
    
declarar variáveis no topo do bloco de código.    

ATRIBUIÇÃO
o sinal de igualdade "=" em jscript, significa atribuição.

    ex: como declarar: var nome = "meu nome";
        como ler: variavel nome recebe o valor meu mome;       

COMPARACAO
para fazermos uma comparacao de valores em jscript usamos o sinal "==".

    ex: como declarar: "0" == 0;
        como ler: "0" tem o valor igual a 0?
    nesse caso retorna true

para fazermos uma comparação de valores e tipos em jscript usamos "==="
    ex: como declarar: "0" === 0;
        como ler: "0" tem o valor e o tipo idêntico a 0?
    nesse caso retorna false, pois um é uma string e outro caracter numerico

*/

//atribuição
var atribuicao = "ana";
console.log(atribuicao);

//comparacao
var comparacao = "0" == 0;
console.log(comparacao);

//comparacao identica
var comparacao2 = "0" === 0;
console.log (comparacao2);

/* 
OPERADORES ARITMETICOS
sao tipos de operadores matematicos com valor numerico:

+  ADIÇÃO
- SUBTRAÇÃO
* MULTIPLICAÇÃO
/ DIVISÃO REAL
% DIVISAO INTEIRA
** POTENCIAÇÃO
*/

//ADICAO
var adicao = 1 + 1;
console.log(adicao);

//SUBTRACAO
var subtrair = 1 - 1;
console.log(subtrair);

//MULTIPLICAÇÃO
var multiplicar = 1 * 1;
console.log(multiplicar);

//DIVISAO REAL
var divisaoReal = 1 / 30;
console.log(divisaoReal);

//DIVISAO INTERNA 
var divisaoInterna = 1 / 30;
console.log(divisaoInterna);

//POTENCIACAO
var potencia = 1 ** 3;
console.log(potencia);

/* OPERADORES RELACIONAIS 
sao tipos de operadores que consultam a relação entre valores:

> MAIOR QUE
< MENOR QUE
>= MAIOR OU IGUAL A
<= MENOR OU IGUAL A
*/

// MAIOR QUE " > "
var maiorQue = 1 > 2;
console.log(maiorQue);

// MENOR QUE " < "
var menorQue = 1 > 2;
console.log(menorQue);

// MAIOR OU IGUAL A " >= "
var maiorOuIgualA = 20 >= 13;
console.log(maiorOuIgualA);

// MENOR OU IGUAL A " <= "
var menorOuIgualA = 10 <= 18;
console.log(menorOuIgualA);

/* OPERADORES LOGICOS
sao tipos de operadores que consultam valores logicos:

&& - "e"  - considera que todos os valores sejam true (verdadeiro)
|| - "ou" - considera que qualquer valor seja true (verdadeiro);
!  - "nao" - inverte o valor de true (verdadeiro) para false (falso) ou vice-versa;
*/

// AND " && "
var comparacaoLogica1 = 1 > 2 &&  3;
console.log(comparacaoLogica1);

// OR " || "
var comparacaoLogica2 = 1 > 2 ||  3;
console.log(comparacaoLogica2);

// vetores ou arrays
/* tipo de lista ou matriz de variaveis, onde cada
variavel possui um indice. 
    ex: let array = ['string', 1, true, false, ['array1']];

let array = ['1', 1, true];
console.log(array);


MANIPULANDO ARRAYS
ao ser declarado, o array traz consigo uma serie de metodos para manipulá-lo.

forEach() - itera um array;
push()    - add item no final do array;
pop()     - remove item no final do array;
shift()   - remove item no inicio do array;
unshift() - add item no inicio do array;
indexOf() - retorna o indice de um valor;
splice()  - remove ou substitui um item pelo indice;
slice()   - retorna uma parte de um array existente;
*/

let array = ['string', 1, true, ['array1'], 3, false, ['array5']];
//forEach
array.forEach(function(item, index){console.log(item, index)});
//push
array.push('novo item');
console.log(array);
//pop
array.pop();
console.log(array);
//shift
array.shift();
console.log(array);
//unshift
array.unshift('novo item no inicio');
console.log(array);
//indexOf
console.log(array.indexOf(true));
//splice
array.splice(0, 3);
console.log(array);
//slice
let novoArray = array.slice(0, 3);
console.log(novoArray);

/*
OBJETOS
dados que possuem propriedades e valores que definem suas
caracteristicas. deve ser declarado entre chaves " {} "
    ex: imagine uma xicara azul. ela tem cor, pode ter varios 
    tamanhos e funcoes (quero cafeeee). pode ser declarada assim:

        var xicara = {
            cor: 'azul',
            tamanho: 'p',
            funcao: tomarCafe()
        }

MANIPULANDO OBJETOS
as propriedades de objetos podem ser atribuidas a variaveis, facilitando a 
manipulação do objeto. chamamos isso de desestruturação.

        ex: var xicara = {
            cor:     'azul',
            tamanho: 'p',
            funcao:  tomarCafe()
        }

        var cor     = xicara.cor;
        var tamanho = xicara.tamanho;
        var funcao  = tomarCafe();

        */

let object = {
    string: 'string', 
}

