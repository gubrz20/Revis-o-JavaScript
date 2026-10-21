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