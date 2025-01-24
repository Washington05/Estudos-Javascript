const nomeVeiculo1 = prompt("Digite o nome do Veiculo 1: ");
const velocidade1 = parseInt(prompt("Digite a velocidade do primeiro veiculo: "));

const nomeVeiculo2 = prompt("Digite o nome do Veiculo2: ");
const velocidade2 = parseFloat(prompt("Digite a velocidade do segundo veiculo: "));

if (velocidade1 > velocidade2) {
    alert(`${nomeVeiculo1} é o mais rapido!`);
} else if (velocidade1 < velocidade2) {
    alert(`${nomeVeiculo2} é o mais rapido!`)
} else {
    alert(`Os dois são mais rapido!`)
}