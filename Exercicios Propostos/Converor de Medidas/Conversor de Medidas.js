let metros = parseFloat(prompt("Digite o valor em metros: "));

let opcao = prompt(
    "Escolha a unidade para conversão: \n" +
    "1 - Milímetro (mm)\n" +
    "2 - Centrimetro (cm)\n" +
    "3 - Decimetro (dm)\n" + 
    "4 - Decâmetro (dam)\n" +
    "5 - Hectômetro (hm)\n" +
    "6 - Quilômetro (km)"
);

switch(opcao){
    case "1": 
      alert(`${metros} metros são ${metros * 1000} milímetros.`);
    break;
    case "2":
      alert(`${metros} metros são ${metros * 100} centímetros.`);
    break;
    case "3":
      alert(`${metros} metros são ${metros * 10} centímetros.`);
    break;
    case "4":
       alert(`${metros} metros são ${metros / 10} decâmetros.`);
    break;
    case "5": 
       alert(`${metros} metros são ${metros / 100} hectômetros.`);
    break;
    case "6":
        alert(`${metros} metros são ${metros / 1000} quilômetros.`);
    break;
    default: 
        alert("Opção Inválida");
        break;
}