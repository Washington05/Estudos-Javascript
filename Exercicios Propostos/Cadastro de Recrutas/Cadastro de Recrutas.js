let nomeRecruta = prompt("Digite o seu primeiro nome: ");
let sobreNome = prompt("Digite o seu sobrenome: ");
let campoDeEstudo = prompt("Digite o campo de Estudo: ");
let anoDeNascimento = prompt("Ano de Nascimento: ");

alert(
    "Cadastro de Recrutas\n"  + 
    "\nNome Completo: " + nomeRecruta + " " + sobreNome +
    "\nCampo de estudo: " + campoDeEstudo +  
    "\nIdade: " + (2025 - anoDeNascimento)
)