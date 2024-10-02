// Exemplo 1: objeto com dados de uma pessoa
const pessoa = {
    nome: "Jungwon",
    idade: 20,
    cidade: "Seoul",
    país: "KR"
};

// Exibindo a estrutura do objeto
console.log(pessoa);

// Acessando determinadas propriedades
console.log(`O ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade}.`);

// Exemplo 2: objeto com array
const livro = {
    titulo: "O Povo do Ar",
    autor: "Holly Black",
    volumes: [
        "O Príncipe Cruel",
        "O Rei Perverso",
        "A Rainha do Nada"
    ]
};

// Exibindo a estrutura
console.log(livro);

// Acesso usando nome da prop. e índice do array desta prop.
console.log(livro.volumes[1]);

// Exemplo 3: array de objetos
const livros = [
    {
        titulo: "Pessoas Normais",
        autor: "Sally Rooney"
    },
    {
        titulo: "O Peso do Pássaro Morto",
        autor: "Aline Bei"
    },
    {
        titulo: "Cleópatra e Frankenstein",
        autor: "Coco Mellors"
    }
];

// Acessando através do índice a prop.
console.log(livros[1].autor);


/* Crie um objeto chamado "aluno" contendo os seguintes dados:
Nome Completo
Data de Nascimento
Lista de telefones (fixo e celular)
(DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente): 
rua
número
bairro
Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */

const aluno = {
    nome: "Kai Kamal Huening",
    data: "14/08/2002",
    telefones: [
        "4002-8922",
        "11 99397-7998"
    ],
    endereço: {
        rua: "Doutor Ismael Dias",
        número: "696",
        bairro: "Guaiauna"
    }
};

console.log(aluno.nome);
console.log(aluno.telefones[1]);
console.log(aluno.endereço.bairro);

