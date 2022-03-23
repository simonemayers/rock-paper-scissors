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
    console.log(`There you have it guys! World Wide Rock Paper Scissors Champion ${winner.name}! Congratulations!`)
    return winner
}

console.log(playTournament(simone, sue, sandra, sara));