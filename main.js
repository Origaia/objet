//Criação dos elemenotos (h1; h2; p)
const h1 = document.createElement("h1")
const h2 = document.createElement("h2")
const p = document.createElement("p")
//Trazendo a Div principal para o Js
const divprin = document.getElementById("principal")
//Colocando os elementos criados na Div principal
divprin.appendChild(h1)
divprin.appendChild(h2)
divprin.appendChild(p)
//Alterando os elementos
h1.innerText = "Bem vindo ao JS"
h2.innerText = "Criando elementos de forma dinâmica"
p.innerText = "Esse é um exemplo clássico de geração de HTML com Javascript"
//Adicionando classes
h1. classList. add('tituloPrincipal');
h2. classList. add('tiruloSec');
p. classList. add('texto');
/*Atividade 2*/
//Criando os objetos
let main= document.getElementById("secundaria")
for(let cont=0;cont<1;cont++){
    //objeto
    let aluno={
        nome: prompt("Digite o nome do"+cont+"° aluno:"),
        email: prompt("Digite seu email:"),
        materia: prompt("Digite a máteria favorita:")
    }
    let name = document.createElement("p")
    let email = document.createElement("p")
    let materia = document.createElement("p")

    main.appendChild(name)
    main.appendChild(email)
    main.appendChild(materia)

    //adicionando o objeto a main
   
}