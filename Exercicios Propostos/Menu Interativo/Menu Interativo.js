let opcao = ""

do {
    opcao = prompt(
     "Escolha uma alternativa: \n" +
     "\na) Opção A" +
     "\nb) Opcão B" +
     "\nc) Opção C" + 
     "\nd) Opção D" + 
     "\ne) Opção Sair" 
)

    switch(opcao){
        case "a":
           window.alert("Você Escolheu a Opção A");
        break;
        case "b":
            window.alert("Você Escolheu a Opção B");
        break;
        case "c":
            window.alert("Você Escolheu a Opção C");
        break;
        case "d":
            window.alert("Você Escolheu a Opção D");
        break;
        case "e":
            window.alert("Saindo...");
        break;
        default: 
            window.alert("Opção Invalida")
        break;
    }
} while(opcao !== "e")

