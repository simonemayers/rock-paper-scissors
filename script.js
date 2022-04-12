const hands = ["rock", "paper", "scissors"]; 

function getHand(){
    return parseInt(Math.random()*10)%3; 
}

// let simone = {
//     name:"Simone", 
//     getHandMethod: getHand
// }
// let sue = {
//     name:"Sue", 
//     getHandMethod: getHand
// }
// let sandra = {
//     name:"Sandra", 
//     getHandMethod: getHand
// }
// let sara = {
//     name:"Sara", 
//     getHandMethod: getHand
// }

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

    let containerContainer = document.createElement("div")
    containerContainer.classList.add("game-container-container")
    document.querySelector(".game-container").appendChild(containerContainer)

    let scoreContainer = document.createElement("div")
    scoreContainer.classList.add("score-container")
    let playerScoreContainer = document.createElement("div")
    playerScoreContainer.classList.add("player-score-container")
    let apiScoreContainer = document.createElement("div")
    apiScoreContainer.classList.add("api-score-container")
    let playerScore = document.createElement("h3")
    playerScore.classList.add("player-score")
    playerScore.innerHTML = 0
    let scoreDescription = document.createElement("h2")
    scoreDescription.classList.add("score-description")
    scoreDescription.innerHTML = "SCORE"
    let apiScore = document.createElement("h3")
    apiScore.classList.add("api-score")
    apiScore.innerHTML = 0
    containerContainer.appendChild(scoreContainer)
    scoreContainer.appendChild(playerScoreContainer)
    playerScoreContainer.appendChild(playerScore)
    scoreContainer.appendChild(scoreDescription)
    scoreContainer.appendChild(apiScoreContainer)
    apiScoreContainer.appendChild(apiScore)
    
    let gamePlayContainer = document.createElement("div")
    gamePlayContainer.classList.add("game-play-container")
    containerContainer.appendChild(gamePlayContainer)

    let player1Container = document.createElement("div")
    player1Container.classList.add("player1-container")
    gamePlayContainer.appendChild(player1Container)

    let playButton = document.createElement("button")
    playButton.classList.add("btn"); 
    playButton.classList.add("play-game-button"); 
    playButton.innerHTML = "Play Game"
    gamePlayContainer.appendChild(playButton)

    let player2Container = document.createElement("div")
    player2Container.classList.add("player2-container")
    gamePlayContainer.appendChild(player2Container)

    return gameContainer
}

function createGameScreenContent(){
    let player1Container = document.querySelector(".player1-container")
    let p1NameInput = document.createElement("input")
    player1Container.appendChild(p1NameInput)
    p1NameInput.placeholder = "Enter Your Name"
    p1NameInput.id = "p1-name-input"

    let player2Container = document.querySelector(".player2-container")
    let p2NameInput = document.createElement("input")
    player2Container.appendChild(p2NameInput)
    p2NameInput.placeholder = "Enter Your Name"
    p2NameInput.id = "p2-name-input"
    p2NameInput.value = "API"
    

    let goBackButton = document.createElement("button")
    goBackButton.innerHTML = "Go Back"
    goBackButton.classList.add("go-back-button")
    goBackButton.classList.add("btn")
    document.querySelector(".game-container").prepend(goBackButton)

    Array.from(document.querySelectorAll(".game-container-container input")).map(i => {
        if(i.value !== "API"){
            let weaponIntro = document.createElement("p")
            weaponIntro.id = "weapon-intro"; 
            weaponIntro.innerHTML = "Choose A Weapon"
            i.parentNode.appendChild(weaponIntro)

            let weaponContainer = document.createElement("div")
            weaponContainer.classList.add("weapon-container")
            i.parentNode.appendChild(weaponContainer)

            let rockButton = document.createElement("button")
            weaponContainer.appendChild(rockButton)
            let rockIcon = document.createElement("img")
            rockIcon.src = "images/rock.svg"
            rockIcon.id = "rock-icon"
            rockButton.classList.add("rock-button")
            rockButton.classList.add("btn")
            rockButton.appendChild(rockIcon)

            let paperButton = document.createElement("button")
            weaponContainer.appendChild(paperButton)
            let paperIcon = document.createElement("img")
            paperIcon.src = "images/paper.svg"
            paperIcon.id = "paper-icon"
            paperButton.classList.add("paper-button")
            paperButton.classList.add("btn")
            paperButton.appendChild(paperIcon)

            let scissorsButton = document.createElement("button")
            weaponContainer.appendChild(scissorsButton)
            let scissorsIcon = document.createElement("img")
            scissorsIcon.src = "images/scissors.svg"
            scissorsIcon.id = "scissors-icon"
            scissorsButton.classList.add("scissors-button")
            scissorsButton.classList.add("btn")
            scissorsButton.appendChild(scissorsIcon)

            weaponContainer.addEventListener("click", (e) => {
                if(e.target.id.includes("rock")){
                    e.target.parentNode.style.backgroundColor = "#7fb800"
                    let nots = Array.from(document.querySelectorAll(".weapon-container .btn img")).filter(b => {return !b.id.includes("rock")})
                    // console.log("rock")
                    nots.map(not => not.parentNode.remove())
                    return nots.map(b => b.remove())
                } else if(e.target.id.includes("paper")){
                    e.target.parentNode.style.backgroundColor = "#7fb800"
                    let nots = Array.from(document.querySelectorAll(".weapon-container .btn img")).filter(b => {return !b.id.includes("paper")})
                    nots.map(not => not.parentNode.remove())
                    return nots.map(b => b.remove())
                } else if(e.target.id.includes("scissors")){
                    e.target.parentNode.style.backgroundColor = "#7fb800"
                    let nots = Array.from(document.querySelectorAll(".weapon-container .btn img")).filter(b => {return !b.id.includes("scissors")})
                    nots.map(not => not.parentNode.remove())
                    return nots.map(b => b.remove())
                }
            })
        }
    })

}

getStartedButton.addEventListener("click", selectPlayType)
getStartedButton.addEventListener("click", clearScreen)
getStartedButton.addEventListener("click", createGameScreen)
getStartedButton.addEventListener("click", createGameScreenContent)


function displayRPS (weapon) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector(".player2-container .weapon-container img").src = `images/${weapon}.svg`
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
    let p1Container = document.querySelector(".player1-container")
    let p2Container = document.querySelector(".player2-container")
    let playerScore = parseInt(document.querySelector(".player-score").innerHTML)
    let apiScore = parseInt(document.querySelector(".api-score").innerHTML)

    
    let h1 = document.querySelector(".player1-container .weapon-container img").id.split("-")[0]
    let h2 = hands[p2.getHandMethod()];
    document.querySelector(".player2-container .weapon-container .api-icon").src = `images/${h2}.svg`
    console.log(`${p1.name} played ${h1}. `, `${p2.name} played ${h2}.`)
    if((h1 === "rock" && h2 === "paper")||(h1 === "paper" && h2 === "scissors") || (h1==="scissors" && h2 === "rock")){
        let result = `${h2} beats ${h1}, ${p2.name} wins!`
        winnerText.innerHTML = "Winner"
        document.querySelector(".api-score-container").append(winnerText);
        document.querySelector(".api-score").innerHTML = apiScore + 1
        return p2; 
    } else if((h2 === "rock" && h1 === "paper")||(h2 === "paper" && h1 === "scissors") || (h2==="scissors" && h1 === "rock")){
        console.log(`${h1} beats ${h2}, ${p1.name} wins!`)
        winnerText.innerHTML = "Winner"
        document.querySelector(".player-score-container").append(winnerText);
        document.querySelector(".player-score").innerHTML = playerScore + 1
        return p1; 
    } else {
        console.log("It's a tie"); 
        tieText1.innerHTML = "Tie!"
        tieText2.innerHTML = "Tie!"
        document.querySelector(".player-score-container").append(tieText1);
        document.querySelector(".api-score-container").append(tieText2);
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
    else if(document.querySelector(".tie-text")){
        Array.from(document.querySelectorAll(".tie-text")).map(m => m.innerHTML = "")
        
    }
}

function resetSelection(){
    setTimeout(() => {
        playerWeaponContainer = document.querySelector(".player1-container .weapon-container")
        playerWeaponContainer.querySelector(".btn").remove()
    
        let rockButton = document.createElement("button")
        rockButton.classList.add("rock-button")
        rockButton.classList.add("btn")
        let rockIcon = document.createElement("img")
        rockIcon.id = "rock-icon"
        rockIcon.src = "images/rock.svg"
        playerWeaponContainer.appendChild(rockButton)
        rockButton.appendChild(rockIcon)
    
        let paperButton = document.createElement("button")
        paperButton.classList.add("paper-button")
        paperButton.classList.add("btn")
        let paperIcon = document.createElement("img")
        paperIcon.id = "paper-icon"
        paperIcon.src = "images/paper.svg"
        playerWeaponContainer.appendChild(paperButton)
        paperButton.appendChild(paperIcon)
    
        let scissorsButton = document.createElement("button")
        scissorsButton.classList.add("scissors-button")
        scissorsButton.classList.add("btn")
        let scissorsIcon = document.createElement("img")
        scissorsIcon.id = "scissors-icon"
        scissorsIcon.src = "images/scissors.svg"
        playerWeaponContainer.appendChild(scissorsButton)
        scissorsButton.appendChild(scissorsIcon)

        document.querySelector(".player2-container .weapon-container").remove()

    }, 2000)
    
}

async function runGame(){
    await resetGame()
    await displayRPS("rock")
    await displayRPS("paper")
    await displayRPS("scissors")
    await displayRPS("scissors")
    await playRound(p1Object, p2Object)
    await resetSelection()

}
function runValidGame(){
    let player1Container = document.querySelector(".player1-container")
    let player2Container = document.querySelector(".player2-container")

    let apiWeaponContainer = document.createElement("div")
    apiWeaponContainer.classList.add("weapon-container")
    player2Container.appendChild(apiWeaponContainer)
    apiIcon = document.createElement("img")
    apiIcon.classList.add("api-icon")
    apiIcon.classList.add("btn")
    apiIcon.style.backgroundColor = "#7fb800"
    apiWeaponContainer.appendChild(apiIcon)
    

    runGame()
    if(document.querySelector("#p1-name-input")){
        let p1Name = document.querySelector("#p1-name-input").value
        let p2Name = document.querySelector("#p2-name-input").value
        document.querySelector("#p1-name-input").remove()
        document.querySelector("#p2-name-input").remove()
        let p1NameDisplay = document.createElement("div")
        p1Object = {
            name: p1Name, 
            getHandMethod: getHand
        }
        p1NameDisplay.innerHTML = p1Name
        document.querySelector(".player1-container").prepend(p1NameDisplay)
        p1NameDisplay.id = "p1-name"
        let p2NameDisplay = document.createElement("div")
        p2Object = {
            name: p2Name, 
            getHandMethod: getHand
        }
        p2NameDisplay.innerHTML = p2Name
        document.querySelector(".player2-container").prepend(p2NameDisplay)
        p2NameDisplay.id = "p2-name"
        p1NameDisplay.classList.add("player-name")
        p2NameDisplay.classList.add("player-name")
    }
}

function keepScore(){

}

let player1Container = document.querySelector(".player1-container")
let player2Container = document.querySelector(".player2-container")
document.querySelector(".app-container").addEventListener("click", function(e){
    if(e.target.className.includes("play-game-button")){
        document.querySelector(".play-game-button").classList.add("disabled")
        setTimeout(() => {
            document.querySelector(".play-game-button").className = "btn play-game-button"
        }, 6000)

        if(document.querySelector("#p1-name-input")){

            if(!document.querySelector("#p1-name-input").value){
                document.querySelector("#p1-name-input").style.borderColor = "red"
                alert("Please Enter Your Name")
                setTimeout(() => {
                    document.querySelector("#p1-name-input").style.borderColor = "transparent"
                }, 3000)
            }
            else if(document.querySelectorAll(".player1-container .weapon-container .btn").length === 3){
                let weaponContainer = document.querySelector(".player1-container .weapon-container")
                weaponContainer.style.borderColor = "red"
                weaponContainer.style.borderWidth = "3px"
                weaponContainer.style.borderStyle = "solid"
                alert("Please Choose A Weapon")
                setTimeout(() => {
                    weaponContainer.style.borderWidth = "0px"
    
                },1000)
            } else{
                runValidGame()
            }  
        } else {
            if(document.querySelectorAll(".player1-container .weapon-container .btn").length === 3){
                let weaponContainer = document.querySelector(".player1-container .weapon-container")
                weaponContainer.style.borderColor = "red"
                weaponContainer.style.borderWidth = "3px"
                weaponContainer.style.borderStyle = "solid"
                alert("Please Choose A Weapon")
                setTimeout(() => {
                    weaponContainer.style.borderWidth = "0px"
    
                },3000)
            } else{
                runValidGame()             
            }
        }
    }
})

function goBack(){
    document.querySelector(".game-container").style.display = "none"; 
    document.querySelector(".intro-container").style.display = "block"
}

document.querySelector(".app-container").addEventListener("click", function (e){
    if(e.target.className.includes("go-back-button")){
        goBack()
    }
})