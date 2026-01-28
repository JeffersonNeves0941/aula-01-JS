//Comentario em linha
/*
    Comentário 
        em
    Bloco
    */
// Permite exibir um conteudo na terminal
    console.log("Testando o JS")

// Permite a criação de uma variável 
    var nome = "Jeffao"


console.log(nome)
//Comcatenação de dados (texto e variável) 
console.log("O nome do usuário é : " + nome)
console.log(`O nome do usuário é : ${nome}`)

// Import da biblioteca do readline
//readline Serve para permitir a entradada de dados via terminal 
var readline = require("readline")

//Cria um objeto especialista em entrada de dados pelo terminal

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Permite a entrada de dados do usuario
//quesrion utiliza uma função de CALLBACK para devolver o valor digitado
//CALLBACK è ima função particular de um metodo que é chamado para 
//encaminhar um conteudo para o desenvolvedor esse cobteudo vem atraves
//da variavel no argumento "NomeUsuario" 
entradaDeDados.question("Digite seu nome: ", function (nomeUsuario){

    console.log("O nome digitado foi: " + nomeUsuario)

    entradaDeDados.question("Digite seu email: ", function(emailUsuario){
        console.log(`O email do usuário:  ${nomeUsuario} é ${emailUsuario}`)
    })
})