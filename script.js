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

function playRound(p1, p2){
    let h1 = hands[p1.getHandMethod()];
    let h2 = hands[p2.getHandMethod()];
    console.log(`${p1.name} played ${h1}. `, `${p2.name} played ${h2}.`)
    if((h1 === "rock" && h2 === "paper")||(h1 === "paper" && h2 === "scissors") || (h1==="scissors" && h2 === "rock")){
        console.log(`${h2} beats ${h1}, ${p2.name} wins!`)
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

function playGame(){
    playButton.style.display = "none"

}

playButton.addEventListener("click", playGame)

playGame()

function createPlayerContainers(){
    let player1Container = document.createElement("div")
    player1Container.classList.add("player1-container")
    document.querySelector(".game-container").appendChild(player1Container)
    let player2Container = document.createElement("div")
    player2Container.classList.add("player2-container")
    document.querySelector(".game-container").appendChild(player2Container)
}
createPlayerContainers()


let rock1 = document.createElement("p")
rock1.innerHTML = "Rock"
rock1.classList.add("rock")
let paper1 = document.createElement("p")
paper1.innerHTML = "Paper"
paper1.classList.add("paper")
let scissors1 = document.createElement("p")
scissors1.innerHTML = "Scissors"
scissors1.classList.add("scissors")

let rock2 = document.createElement("p")
rock2.innerHTML = "Rock"
rock2.classList.add("rock")
let paper2 = document.createElement("p")
paper2.innerHTML = "Paper"
paper2.classList.add("paper")
let scissors2 = document.createElement("p")
scissors2.innerHTML = "Scissors"
scissors2.classList.add("scissors")

document.querySelector(".player1-container").appendChild(rock1)
document.querySelector(".player2-container").appendChild(rock2)


