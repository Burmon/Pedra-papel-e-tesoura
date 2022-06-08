// DADOS DO USUÁRIO

const getUserChoice = (userInput) => {

    if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {

        return userInput
    } else {
        alert('Desculpa, não entendi. Pode digitar norvamente?')
    }

}

// DADOS DO COMPUTADOR 

const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3)

    if (random == 0) {
        return 'rock'
    } else if (random == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }


}

//DETERMINAR VENCEDOR

const determineWinner = (getUserChoice, getComputerChoice) => {

    if (getUserChoice == getComputerChoice) {
        alert("empate")
    }
    else if (getUserChoice == "rock" && getComputerChoice == "paper") {
        alert("voce perdeu, ruim")
    }
    else if (getUserChoice == "rock" && getComputerChoice == "scissors") {
        alert("voce ganhou, nada mais que sua obrigação")
    }
    else if (getUserChoice == "paper" && getComputerChoice == "rock") {
        alert("voce ganhou, nada mais que sua obrigação")
    }
    else if (getUserChoice == "paper" && getComputerChoice == "scissors") {
        alert("voce perdeu")
    }
    else if (getUserChoice == "scissors" && getComputerChoice == "rock") {
        alert("voceperdeu")
    }
    else if (getUserChoice == "scissors" && getComputerChoice == "paper"){
        alert("voce ganhou")
    }


}

const playGame = () => {
    let userInput = prompt('Olar, jogador! Escolha uma opção: rock, paper ou scissors').toLowerCase()
    let userChoice = getUserChoice(userInput)
    let computerChoice = getComputerChoice()

    determineWinner(userChoice, computerChoice)
    console.log(userChoice, computerChoice)



}
playGame()