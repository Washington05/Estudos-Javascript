function calcularTriangulo(){
    let base = parseFloat(prompt("Digite um numero base: "));
    let altura = parseFloat(prompt("Digite a altura do numero: "));
    return (base * altura) / 2
}

function calcularRetangulo(){
    let base = parseFloat(prompt("Digite um numero base: "));
    let altura = parseFloat(prompt("Digite a altura do numero: "));
    return base * altura   
}

function calcularQuadrado(){
    let lado = parseFloat(prompt("Digite o valor do lado do quadrado: "));
    return lado * lado 
}

function calcularTrapezio(){
    let baseMaior = parseFloat(prompt("Digite a base maior do trapezio: "));
    let baseMenor = parseFloat(prompt("Digite a base menor do trapezio: "));
    return (baseMaior + baseMenor) * altura / 2;
}

function calcularCirculo(){
    let raio = parseFloat(prompt("Digite o valor do raio: "));
    let pi = 3.14;
    return (pi * raio * raio);
}

function exibirMenu(){

   return prompt(
      "Calcular Geometria\n" +
      "\n1 - Calcular Triangulo" +
      "\n2 - Calcular Retângulo" +
      "\n3 - Calcular Quadrado" + 
      "\n4 - Calcular Trapézio" + 
      "\n5 - Calcular Circulo" +
      "\n6. Sair" 
   )
}

function executar(){
    do {
     opcao = exibirMenu()

     let resultado

     switch (opcao) {
       case "1": 
         resultado = calcularTriangulo();
       break;
       case "2":
         resultado = calcularRetangulo();
       break;
       case "3": 
         resultado = calcularQuadrado();
       break;
       case "4": 
         resultado = calcularTrapezio();
       break;
       case "5":
         resultado = calcularCirculo();
       break;
       case "6": 
         alert("Saindo...") 
        break;
        default: 
           alert("Opção Invalida!")
        break;
    }

    if (resultado){
        alert("Resultado: " + resultado);
    }

   } while(opcao !== "6");
}

executar();
