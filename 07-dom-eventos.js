/* Funções de acesso e manipulação fo DOM

querySelector() é uma função para selecionar um ÚNICO elemento na página (DOM).

querySelectorAll() é uma função para selecionar VÁRIOS elementos na página (DOM).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no CSS.

*/

/* Exemplos */
const titulo = document.querySelector("h1");
const textoDom = document.querySelector(".texto-dom");

const subtitulos = document.querySelectorAll("h2");
const varios = document.querySelectorAll("p, img, button");
console.log(varios);

/* Modificando elementos do DOM */
titulo.textContent = "Olá JavaScript!";
textoDom.innerHTML = "<i>O Márcio será reprovado!</i>";

/* Selecionar todos os links da lista de referências e colocar neles o atributo target valendo _blank. */
const links = document.querySelectorAll(".lista-de-referencias a");
console.log(links);

// Se fosse um por um...
// links[0].setAttribute("target", "_blank");

for( const link of links ){

    // Versão 1 (moderna, vale para qualquer atributo)
    link.setAttribute("target", "_blank");

    /* Versão 2 (usando atributo via propriedade)
    Mais antiga, vale para atributos nativos do HTML */
    // link.target = "_blank";
}

/* Manipulando Eventos */
const ex1 = document.querySelector("#exemplo01");

/* Poderíamos também usar a função getElementById em vez do querySelector. A diferença é que ela só funciona para seleção através do ID. Obs: ao usá-la NÃO COLOQUE #. */
//const msg = document.getElementById("mensagem");

const msg = document.querySelector("#mensagem");
const pagina = document.querySelector("body");


/* Função Ouvinte de Evento (Event Listener)
aplicado ao elemento ALVO do evento desejado ("click") e uma função para executar as ações a partir do evento. Obs.: esta função é considerada do tipo "anônima" e é conhecida como "callback". */
ex1.addEventListener("click", function(){
    /* Acessamos o parágrafo vazio e colocamos
    um conteúdo dentro dele */
    msg.innerHTML = "Te amo Sunoo 💋!";

    /* Modificar a página alterando a fonte (CSS via JS) */
    pagina.style.fontFamily = "Verdana";
});

/* OUvinte de evento para voltar ao normal (sem texto no parágrafo e com fonte padrão na página). O evento ocorrerá ao clicar DUAS VEZES no parágrafo da mensagem. */
msg.addEventListener("dblclick", function(){
    msg.innerHTML = ""; // removendo o conteúdo do parágrafo
    pagina.style.fontFamily = "initial"; // voltando pra fonte
})


/* Exemplo 02: modo noturno */
const botaoAtivar = document.querySelector("#ativar");
botaoAtivar.addEventListener("click", function(){
    /* Usamos o toggle do classList para alternar a aplicação/remoção da classe "noturno".
    Na prática, vira um liga/desliga. */
    pagina.classList.toggle("noturno");

    if (pagina.classList.contains("noturno")){
        botaoAtivar.textContent = "Desativar";
    }
    else {
        botaoAtivar.textContent = "Ativar";
    }
})

/* Sobre o duplo e o triplo sinal de igual */
let a = "10"; // texto
let b = 10; // número
let resultado = a == b; // true
// let resultado = a === b; false
console.log(resultado);

// == comapara VALORES
// === compara VALORES E TIPO DE DADO










