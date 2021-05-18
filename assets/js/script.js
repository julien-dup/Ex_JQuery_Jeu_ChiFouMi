const pierreFeuilleCiseaux = ["pierre", "feuille", "ciseaux"];
let compteur = 0
let pointDefaite = 0

$('.button').click(function () {
    setTimeout (function() {
        $('#chi').removeClass("chi chi p").addClass('shi').html("CHI")
    },1000)
    setTimeout (function() {
        $('#chi').html("")
    },2000)
    setTimeout (function() {
        $('#chi').removeClass('chi').addClass('fou').html("FOU")
    },3000)
    setTimeout (function() {
        $('#chi').html("")
    },4000)
    setTimeout (function() {
        $('#chi').removeClass("fou").addClass("mi").html("MI")
    },5000)
    setTimeout (function() {
        $('#chi').html("").removeClass("mi shi").addClass("chi").addClass("chi,p")
    },6000)
    
    let computerChoice = pierreFeuilleCiseaux[Math.floor(Math.random() * 3)]
    console.log("ordi : " + computerChoice)
    // $('.computerChoice').html(computerChoice)
    let playerChoice = $(this).data("button")
    
    console.log("joueur :" + playerChoice)
    if ((computerChoice=="pierre") && (playerChoice == "feuille")) {
        setTimeout (function() {
        $('.result').html("YOU WIN").removeClass("Draw YouLoose").addClass("YouWin")
        compteur ++
        $('.victoire').html("victoire : " + compteur)
        },6000)
        setTimeout (function() {
            $('.result').removeClass("YouWin").html("")
        },12000)
    } else {
    if ((computerChoice=="pierre") && (playerChoice == "pierre")) {
        setTimeout (function() {
        $('.result').html("DRAW").removeClass("YouWin YouLoose").addClass("Draw")
        },6000)
        setTimeout (function() {
            $('.result').removeClass("Draw").html("")
        },12000)
    } else{
   
    if ((computerChoice=="feuille") && (playerChoice == "ciseaux")) {
        setTimeout (function() {
        $('.result').html("YOU WIN").removeClass("Draw YouLoose").addClass("YouWin")
        compteur ++
        $('.victoire').html("victoire: " + compteur)
        },6000)
        setTimeout (function() {
            $('.result').removeClass("YouWin").html("")
        },12000)
    } else {
    if ((computerChoice=="feuille") && (playerChoice == "feuille")) {
        setTimeout (function() {
        $('.result').html("DRAW").removeClass("YouWin YouLoose").addClass("Draw")
        },6000)
        setTimeout (function() {
            $('.result').removeClass("Draw").html("")
        },12000)
    } else {
    
    if ((computerChoice=="ciseaux") && (playerChoice == "pierre")) {
        setTimeout (function() {
        $('.result').html("YOU WIN").removeClass("Draw YouLoose").addClass("YouWin")
        compteur ++
        $('.victoire').html("victoire: " + compteur)
        },6000)
        setTimeout (function() {
            $('.result').removeClass("YouWin").html("")
        },12000)
    } else {
    if ((computerChoice=="ciseaux") && (playerChoice == "ciseaux")) {
        setTimeout (function() {
        $('.result').html("DRAW").removeClass("YouWin YouLoose").addClass("Draw")
        },6000)
        setTimeout (function() {
            $('.result').removeClass("Draw").html("")
        },12000)
    }else {
        setTimeout (function() {
        $('.result').html("YOU LOOSE").removeClass("YouWin Draw").addClass("YouLoose")
        pointDefaite ++
        $('.defaite').html("défaites : " + pointDefaite)
        },6000)
        setTimeout (function() {
            $('.result').removeClass("YouLoose").html("")
        },12000)
    }}}}}}
    switch (playerChoice) {
        case "pierre" :
            setTimeout (function() {
            $('.playerChoice').removeClass("feuille ciseaux").addClass("pierre")
            },6000)
            setTimeout (function() {
                $('.playerChoice').removeClass("pierre")
            },12000)
            break
        case "feuille" :
            setTimeout (function () {
            $('.playerChoice').removeClass("pierre ciseaux").addClass("feuille")
            },6000)
            setTimeout (function() {
                $('.playerChoice').removeClass("feuille")
            },12000)
            break
        case "ciseaux" :
            setTimeout (function () {
            $('.playerChoice').removeClass("feuille pierre").addClass("ciseaux")
            },6000)
            setTimeout (function() {
            $('.playerChoice').removeClass("ciseaux")
            },12000)
            break
    }
    switch (computerChoice) {
        case "pierre" :
            setTimeout (function() {
            $('.computerChoice').removeClass("feuille ciseaux").addClass("pierre")
            },6000)
            setTimeout (function() {
                $('.computerChoice').removeClass("pierre")
            },12000)
            break
        case "feuille" :
            setTimeout (function() {
            $('.computerChoice').removeClass("pierre ciseaux").addClass("feuille")
            },6000)
            setTimeout (function() {
                $('.computerChoice').removeClass("feuille")
            },12000)
            break
        case "ciseaux" :
            setTimeout (function() {
            $('.computerChoice').removeClass("feuille pierre").addClass("ciseaux")
            },6000)
            setTimeout (function() {
            $('.computerChoice').removeClass("ciseaux")
            },12000)
            break
    }
})
