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