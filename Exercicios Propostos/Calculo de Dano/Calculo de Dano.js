const nomePersonagem1 = prompt("Digite o nome do personagem: ");
const poderDeAtaque = parseFloat(prompt("Digite quantidade de poder de Ataque: "));

const nomePersonagem2 = prompt("Digite o segundo nome do personagem: ");
let quantidadePontos = parseFloat(prompt("Digite a quantidade de pontos de vida: "));
const poderDeDefesa = prompt("Digite quantos pontos de poder de defesa possui: ");
const possuiEscudo = prompt("Possui Escudo (sim/nao): ");

let danoCausado = 0;

if (poderDeAtaque > poderDeAtaque && possuiEscudo === "nao"){
     danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim"){
     danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

quantidadePontos -= danoCausado 

alert(nomePersonagem1 + " causou " + danoCausado + " pontos de dano em " + nomePersonagem2)
alert(
  nomePersonagem1 + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  nomePersonagem2 + "\nPontos de vida: " + quantidadePontos +
  "\nPoder de defesa: " + nomePersonagem2 + "\nPossui escudo: " + possuiEscudo
)
