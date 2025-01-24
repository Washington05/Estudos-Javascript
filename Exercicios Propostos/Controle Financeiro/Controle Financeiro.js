let quantidadeDinheiro = parseFloat(prompt("Informe a quantidade de dinheiro disponivel:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + quantidadeDinheiro +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      quantidadeDinheiro += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      quantidadeDinheiro -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida.")
      break
  }
} while (opcao !== "3");
