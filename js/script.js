// código javascrip externo
//configurar a cor do titulo 1 - h1

//pega o elemento pela mesma regra de seletores do css
const elmH1 = document.querySelector("h1")
const elmBody = document.querySelector("body")
//pegando o elemeneto pela tag html - retorna uma lista
const listaTodosP = document.getElementsByTagName("p")

elmBody.style.backgroundColor = "#000000"
elmH1.style.color = "#ac0707"
listaTodosP[0].style.color = "#ffffff"

//fazer uma conta e apresentar o resultado na pagina e no console

let num01 = Number( prompt("digite o primeiro valor para a soma"))
let num02 = Number(prompt("digite o segundo valor para a soma"))

/*
apresentar o resultudo para o usuario
*/
alert(`a soma dos valores ${num01} + ${num02} é ${num01+num02}`)

console.log(elmH1.innerText)