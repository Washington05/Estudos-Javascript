let fila = [];
let opcao = "";

do{
    opcao = prompt (
        "Fila de Espera: " + fila.length +     
        "\n1 - Adicionar Paciente" +
        "\n2 - Consultar Paciente" + 
        "\n3 - Sair"
    )

    switch(opcao){
        case "1":
          let novoPaciente = prompt("Digite o nome do paciente: ");
          fila.push(novoPaciente);
        break;
        case "2": 
           let pacienteConsultado = fila.shift()
           if (!pacienteConsultado){
               alert("Não há paciente na fila!") 
           } else {
             alert(pacienteConsultado + " foi removido da fila.")
           }
        break;
        case "3":
            alert("Saindo...")
        break;
        default: 
           alert("Opção Invalida");
        break;
    }
 
} while(opcao !== "3")