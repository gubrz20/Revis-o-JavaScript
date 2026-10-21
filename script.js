function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

const media = calcularMedia(8, 7, 6);

if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}