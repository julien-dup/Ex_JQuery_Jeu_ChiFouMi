const pierreFeuilleCiseaux = ["pierre", "feuille", "ciseaux"];
$('.button').click(function () {
    let computerChoice = pierreFeuilleCiseaux[Math.floor(Math.random() * 3)]
    console.log("ordi : " + computerChoice)
    $("#computerChoice").html("computerChoice")
    let playerChoice = $(this).data("button")
    console.log("joueur :" + playerChoice)
    if ((computerChoice=="pierre") && (playerChoice == "feuille")) {
        console.log("you Win")
    } else {
    if ((computerChoice=="pierre") && (playerChoice == "pierre")) {
        console.log("Draw")
    } else{
   
    if ((computerChoice=="feuille") && (playerChoice == "ciseaux")) {
        console.log("you Win")
    } else {
    if ((computerChoice=="feuille") && (playerChoice == "feuille")) {
        console.log("Draw")
    } else {
    
    if ((computerChoice=="ciseaux") && (playerChoice == "pierre")) {
        console.log("you Win")
    } else {
    if ((computerChoice=="ciseaux") && (playerChoice == "ciseaux")) {
        console.log("Draw")
    }else {
        console.log("you Loose")
    }}}}}}
})