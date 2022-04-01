const hands = ["rock", "paper", "scissors"]; 

function getHand(){
    return parseInt(Math.random()*10)%3; 
}

let simone = {
    name:"Simone", 
    getHandMethod: getHand
}
let sue = {
    name:"Sue", 
    getHandMethod: getHand
}
let sandra = {
    name:"Sandra", 
    getHandMethod: getHand
}
let sara = {
    name:"Sara", 
    getHandMethod: getHand
}

let singleButton = document.querySelector("#single")
let tournamentButton = document.querySelector("#tournament")

function addActiveStatus(element){
    return element.classList.add("active")
}
function removeActiveStatus(element){
    return element.classList.remove("active")
}
singleButton.addEventListener("click", function(e){
    addActiveStatus(this)
    removeActiveStatus(tournamentButton)
})
tournamentButton.addEventListener("click", function(e){
    addActiveStatus(this)
    removeActiveStatus(singleButton)
})

let getStartedButton = document.querySelector("#get-started")

function selectPlayType(){
    let singleButtonClassList = Array.from(singleButton.classList)
    let tournamentButtonClassList = Array.from(tournamentButton.classList)
    if(singleButtonClassList.includes("active")){
        console.log("Let's play a single game")
    } else if(tournamentButtonClassList.includes("active")){
        console.log("Start the tournament!")
    } else {
        console.log("Please select a play type")
    }
}

getStartedButton.addEventListener("click", selectPlayType)
getStartedButton.addEventListener("click", clearScreen)

function clearScreen(){
    document.querySelector(".intro-container").style.display = "none"
}
clearScreen()

function createGameScreen(){
    let gameContainer = document.createElement("div")
    gameContainer.classList.add("container")
    gameContainer.classList.add("game-container")
    document.querySelector(".app-container").appendChild(gameContainer)
    let playButton = document.createElement("button")
    playButton.classList.add("btn"); 
    playButton.classList.add("play-game-button"); 
    playButton.innerHTML = "Play Game"
    document.querySelector(".game-container").appendChild(playButton)
    return gameContainer
}
createGameScreen()
let playButton = document.querySelector(".play-game-button")

function startGame(){
    playButton.style.display = "none"

}

playButton.addEventListener("click", startGame)

startGame()

function createPlayerContainers(){
    let player1Container = document.createElement("div")
    player1Container.classList.add("player1-container")
    document.querySelector(".game-container").appendChild(player1Container)
    let player2Container = document.createElement("div")
    player2Container.classList.add("player2-container")
    document.querySelector(".game-container").appendChild(player2Container)
}
createPlayerContainers()




let rpsText1 = document.createElement("p")
rpsText1.classList.add("rps-text")
rpsText1.id = "rps-text1"
let player1Container = document.querySelector(".player1-container")

let rpsText2 = document.createElement("p")
rpsText2.classList.add("rps-text")
rpsText2.id = "rps-text2"
let player2Container = document.querySelector(".player2-container")

player1Container.appendChild(rpsText1)
player2Container.appendChild(rpsText2)

let displayRPS = (weapon) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Array.from(document.querySelectorAll(".rps-text")).map(m => m.innerHTML = weapon)
            resolve()
        }, 2000)
    })
}

displayRPS("Rock")
.then(() => displayRPS("Paper"))
.then(() => displayRPS("Scissors"))
.then(() => displayRPS(""))
.then(() => {
    // let shootText = document.createElement("h2")
    // document.querySelector(".game-container").prepend(shootText)
    // shootText.classList.add("shoot-text")
    // shootText.innerHTML = "SHOOT"
    let roundResult = playRound(simone, sue)
})

console.log(roundResult)

let p1RoundResult = document.createElement("p")
p1RoundResult.classList.add("round-result")
document.querySelector(".player1-container").appendChild(p1RoundResult)

function playRound(p1, p2){
    let h1 = hands[p1.getHandMethod()];
    let h2 = hands[p2.getHandMethod()];
    console.log(`${p1.name} played ${h1}. `, `${p2.name} played ${h2}.`)
    if((h1 === "rock" && h2 === "paper")||(h1 === "paper" && h2 === "scissors") || (h1==="scissors" && h2 === "rock")){
        p1RoundResult.innerHTML = `${h2} beats ${h1}, ${p2.name} wins!`
        return p2; 
    } else if((h2 === "rock" && h1 === "paper")||(h2 === "paper" && h1 === "scissors") || (h2==="scissors" && h1 === "rock")){
        console.log(`${h1} beats ${h2}, ${p1.name} wins!`)
        return p1; 
    } else {
        console.log("It's a tie"); 
        return null; 
    }
}
// playRound(simone, sue)

let p1Wins = 0; 
let p2Wins = 0; 
function playGame(player1, player2, playUntil=0){
    let result = playRound(player1, player2)
    if(result === player1){
        p1Wins += 1; 
    } else if(result === player2){
        p2Wins += 1; 
    } 
    if(p1Wins === 5 || p2Wins === 5){
        playUntil = 5
        p1Wins = 0; 
        p2Wins = 0; 
        return result;
    }
    return playGame(player1, player2)

    }
// playGame(simone, sue)

function playTournament(player1, player2, player3, player4, playUntil = 0){
    let champ1 = playGame(player1, player2);
    console.log(`Wow! What a game! ${champ1.name} won this round and made it to the finals!`)
    let champ2 = playGame(player3, player4);
    console.log(`Wow! What a game! ${champ2.name} won this round and made it to the finals!`)
    let winner = playGame(champ1, champ2);
    console.log(`There you have it guys! World Wide Rock Paper Scissors Champion ${winner.name}! Congratulations! ${winner.name} is the world champion.`)
    return winner
}
