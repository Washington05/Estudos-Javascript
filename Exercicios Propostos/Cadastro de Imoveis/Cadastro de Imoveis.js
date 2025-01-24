let imoveis = [];
let opcao = ""

do { 
   opcao = prompt(
    "Cadastro de Imoveis " +
    "\nImoveis Disponiveis " + imoveis.length + 
    "\n1 - Cadastrar Imoveis" +
    "\n2 - Consultar Imoveis" + 
    "\n3 - Sair"
   )

 switch(opcao){
     case "1":
        let imovel = {}

        imovel.proprietarioNome = prompt("Digite o nome do funcionario: ");
        imovel.quantidadeQuartos = prompt("Digite quantidade de Quartos: ");
        imovel.quantidadeBanheiros = prompt("Digite quantidade de Banheiros: ");
        imovel.possuiGaragem = prompt("Possui Garagem (sim/nao): ");
       
        const confirma = (
           "Salvar este imóvel?\n" + 
           "\nProprietario: " + imovel.proprietarioNome + 
           "\nQuartos: " + imovel.quartos + 
           "\nBanheiros: " + imovel.banheiros + 
           "\nPossui Garagem: " + imovel.garagem     
        )
        if (confirma) {
            imoveis.push(imovel)
        }
    break;
    case "2":
      for (let i = 0; i < imoveis.length; i++){
        alert(
            "Imovel " + (i + 1) + 
            "\nProprietario: " + imoveis[i].proprietarioNome +
            "\nQuartos: " + imoveis[i].quartos + 
            "\nBanheiros: " + imoveis[i].banheiros + 
            "\nPossui Garagem? " + imoveis[i].garagem
        )
      }
    break;
    case "3": 
      alert("Saindo...");
    break;
    default: 
      alert("Opção Invalida!")
    break;
  }    
} while(opcao !== "3")