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

function clearScreen(){
    document.querySelector(".intro-container").style.display = "none"
}

function createGameScreen(){
    let gameContainer = document.createElement("div")
    gameContainer.classList.add("container")
    gameContainer.classList.add("game-container")
    document.querySelector(".app-container").appendChild(gameContainer)
    
    let player1Container = document.createElement("div")
    player1Container.classList.add("player1-container")
    document.querySelector(".game-container").appendChild(player1Container)

    let playButton = document.createElement("button")
    playButton.classList.add("btn"); 
    playButton.classList.add("play-game-button"); 
    playButton.innerHTML = "Play Game"
    document.querySelector(".game-container").appendChild(playButton)


    let player2Container = document.createElement("div")
    player2Container.classList.add("player2-container")
    document.querySelector(".game-container").appendChild(player2Container)

    return gameContainer
}

function createGameScreenContent(){
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
    
    let p1RoundResult = document.createElement("p")
    p1RoundResult.classList.add("round-result")
    document.querySelector(".player1-container").appendChild(p1RoundResult)

    let p2RoundResult = document.createElement("p")
    p2RoundResult.classList.add("round-result")
    document.querySelector(".player2-container").appendChild(p2RoundResult)


}

getStartedButton.addEventListener("click", selectPlayType)
getStartedButton.addEventListener("click", clearScreen)
getStartedButton.addEventListener("click", createGameScreen)
getStartedButton.addEventListener("click", createGameScreenContent)







function displayRPS (weapon) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Array.from(document.querySelectorAll(".rps-text")).map(m => m.innerHTML = weapon)
            resolve()
        }, 1000)
    })
}

let winnerText = document.createElement("h3")
winnerText.classList.add("winner-text")

let tieText1 = document.createElement("h3")
tieText1.classList.add("tie-text")

let tieText2 = document.createElement("h3")
tieText2.classList.add("tie-text")

function playRound(p1, p2){
    let p1RoundResult = document.querySelector(".player1-container").querySelector(".round-result")
    let p2RoundResult = document.querySelector(".player2-container").querySelector(".round-result")
    
    
    let p1Container = document.querySelector(".player1-container")
    let p2Container = document.querySelector(".player2-container")
    
    let h1 = hands[p1.getHandMethod()];
    let h2 = hands[p2.getHandMethod()];
    console.log(`${p1.name} played ${h1}. `, `${p2.name} played ${h2}.`)
    if((h1 === "rock" && h2 === "paper")||(h1 === "paper" && h2 === "scissors") || (h1==="scissors" && h2 === "rock")){
        let result = `${h2} beats ${h1}, ${p2.name} wins!`
        p1RoundResult.innerHTML = h1.toUpperCase()
        p2RoundResult.innerHTML = h2.toUpperCase();
        winnerText.innerHTML = "Winner"
        p2Container.prepend(winnerText);
        return p2; 
    } else if((h2 === "rock" && h1 === "paper")||(h2 === "paper" && h1 === "scissors") || (h2==="scissors" && h1 === "rock")){
        p1RoundResult.innerHTML = h1.toUpperCase()
        p2RoundResult.innerHTML = h2.toUpperCase()
        console.log(`${h1} beats ${h2}, ${p1.name} wins!`)
        winnerText.innerHTML = "Winner"
        p1Container.prepend(winnerText);
        return p1; 
    } else {
        console.log("It's a tie"); 
        p1RoundResult.innerHTML = h1.toUpperCase()
        p2RoundResult.innerHTML = h2.toUpperCase()
        tieText1.innerHTML = "Tie!"
        tieText2.innerHTML = "Tie!"
        p1Container.prepend(tieText1);
        p2Container.prepend(tieText2);
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

let playButton = document.querySelector(".play-game-button")

function resetGame(){
    if(document.querySelector(".winner-text") && document.querySelector(".tie-text")){
        Array.from(document.querySelectorAll(".round-result")).map(m => m.innerHTML = "")
        document.querySelector(".winner-text").innerHTML = ""
        Array.from(document.querySelectorAll(".tie-text")).map(m => m.innerHTML = "")

    }
    else if(document.querySelector(".winner-text")){
        document.querySelector(".winner-text").innerHTML = ""
    Array.from(document.querySelectorAll(".round-result")).map(m => m.innerHTML = "")
    }
    // else if(document.querySelector(".round-result")){

    // } 
    else if(document.querySelector(".tie-text")){
        Array.from(document.querySelectorAll(".tie-text")).map(m => m.innerHTML = "")
        
    }
}

async function testOut(){
    await resetGame()
    await displayRPS("Rock")
    await displayRPS("Paper")
    await displayRPS("Scissors")
    await displayRPS("")
    await playRound(sue, simone)
}

document.querySelector(".app-container").addEventListener("click", function(e){
    if(e.target.className.includes("play-game-button")){
        testOut()
    }
})