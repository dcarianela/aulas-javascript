// Declarando um array
let alunos = ["Sunoo", "Jungwon", "Ni-ki", "Jake"];

// Exibindo a estrutura do array
console.log(alunos);

// Acessando um elemento específico do array
console.log(`${alunos[0]} has my whole heart! 💗`);


/* Mini-exercício

1) Crie um novo array contendo o nome de 7 coisas que você gosta (artista, música, livro, comida... sei la, inventa!)

2) Em seguida, mostre no console uma frase personalizada indicando o nome do segundo, quinto e do sétimo elemento do array. Use concatenação OU template string. */

let ilysm = ["k-pop", "books", "guitar", "sleep", "taehyung", "games", "music"];

console.log(ilysm);

console.log(`i can't live without: ${ilysm[4]}, ${ilysm[1]} and ${ilysm[6]}.`);

console.log(`. . ${ilysm[6]} is EXTREMELY NECESSARY in my life !🎵`);
console.log(`🤍 ${ilysm[4]} is the loml *-* `);
console.log(`i really LOVE reading ${ilysm[1]} 📚`);



/* Array como Matriz de 2 dimensões */
const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express", ["Apache", "IIS"]]
];

console.log(tecnologias);

// console.log(tecnologias);
console.log( tecnologias [2][4][0] ); // Apache
console.log( tecnologias[0][2] ); // JavaScript
console.log( tecnologias[1][0] ); // Figma
console.log( tecnologias[2][3] ); // Express
console.log( tecnologias[0][0] ); // HTML5






