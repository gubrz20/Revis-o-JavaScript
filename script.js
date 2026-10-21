function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

const media = calcularMedia(8, 7, 6);

if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

function verificarTipo(variavel) {
  console.log(`A variavel é do tipo ${typeof variavel}`);
}

verificarTipo("Ola, mundo!");
verificarTipo(42);
verificarTipo(true);

const idade = 20;
const status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);

const numero = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

const diaSemana = 3;
const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

console.log(dias[diaSemana - 1] || "Dia invalido");

const calcularArea = (base, altura) => base * altura;

console.log(calcularArea(5, 10));

const listaDeCompras = ['Arroz', 'Feijão', 'Batata'];

listaDeCompras.push('Macarrão');
listaDeCompras.unshift('Suco');
listaDeCompras.pop();

console.log(listaDeCompras);

const alunos = [
  { nome: 'Ana', nota: 8.5, idade: 20 },
  { nome: 'João', nota: 6.7, idade: 22 },
  { nome: 'Maria', nota: 9.3, idade: 19 },
  { nome: 'Carlos', nota: 5.0, idade: 21 },
  { nome: 'Beatriz', nota: 7.8, idade: 20 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);
const nomesAlunos = alunos.map(aluno => aluno.nome);
const mediaIdade = alunos.reduce((soma, aluno) => soma + aluno.idade, 0) / alunos.length;
const alunoNotaBaixa = alunos.find(aluno => aluno.nota < 6);

console.log(aprovados);
console.log(nomesAlunos);
console.log(mediaIdade);
console.log(alunoNotaBaixa);