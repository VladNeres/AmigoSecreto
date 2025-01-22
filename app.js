//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];


function isStringEmptyOrNull(value) {
    return value === null || value === undefined || value === "";
}
function limparCampoInput(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';

}
function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('h2','Digite o nome dos seus amigos');
}


function adicionarAmigo(){
    let nomeAmigo = document.querySelector("input").value;
    
    
    if(!isStringEmptyOrNull(nomeAmigo)){
       

        let ul = document.getElementById("listaAmigos");
        let li = document.createElement("li");
        li.textContent = nomeAmigo; // Define o texto do item da lista
        ul.appendChild(li); // Adiciona o item na lista
    
        exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
         // Limpa o campo de entrada

         listaDeNomes.push(nomeAmigo);
         limparCampoInput();
         
    }
    else{
        
        exibirTextoNaTela('h2', 'Por favor digite um nome');
        limparCampoInput();     
    }
}


function sortearAmigo(){
    let sorteioDeNome = parseInt(Math.random() * listaDeNomes.length);

    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = '';
    li = document.createElement("li");
    li.textContent = listaDeNomes[sorteioDeNome];
    ul.appendChild(li)
    
}





