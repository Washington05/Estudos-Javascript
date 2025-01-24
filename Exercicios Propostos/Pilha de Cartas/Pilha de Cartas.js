let cartas = [];
let opcao = "";

do {
    opcao = prompt (
       "Pilha de Cartas: " + cartas.length + 
       "\n1 - Adicionar Cartas" +
       "\n2 - Puxar uma Carata" + 
       "\n3 - Sair"
    )
    switch (opcao) {
    case "1": 
        let adicionarCarta = prompt("Digite um nome para carta: ");
        cartas.push(adicionarCarta)
    break;
    case "2": 
        let puxarCarta = cartas.shift()
        if (!puxarCarta) {
           alert("Não há carta para puxar no baralho.")
        }  else {
            alert(puxarCarta + " foi removida do baralho")
        }
    break;
    case "3": 
        window.alert("Saindo...")
    break;
    default: 
        alert("Opção Invalida");
    break;
 }
} while(opcao !== "3");