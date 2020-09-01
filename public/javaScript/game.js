var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var stripe = document.querySelector(".stripe");
var h1 = document.querySelector("h1");
var userScoreDisplay = document.querySelector("#yourScore"),us=0;
var CPUscoreDisplay = document.querySelector("#CPUscore"),cs=0;
var reset = document.querySelector("#reset");
var back  = document.querySelector("#return");
var resultDisplay = document.querySelector("#result")
var CPUchoice,choice;
var result;
var UserChoice;
var gameOver = false;
//To compute what the user has selected!!
rock.addEventListener("click",function(){
    UserChoice =  "rock";
    randomSelect();
    result = checkWhoWon(UserChoice,CPUchoice);
    changeToPurple(CPUchoice);
    displayResult(result);
})
paper.addEventListener("click",function(){
    UserChoice =  "paper";
    randomSelect();
    result = checkWhoWon(UserChoice,CPUchoice);
    changeToPurple(CPUchoice);
    displayResult(result);
})
scissors.addEventListener("click",function(){
    UserChoice =  "scissors";
    randomSelect();
    result = checkWhoWon(UserChoice,CPUchoice);
    changeToPurple(CPUchoice);
    displayResult(result);
})

//========================To create the animations of the selected option.==============================
rock.style.transition = "all 0.5s";
paper.style.transition = "all 0.5s";
scissors.style.transition = "all 0.5s";
//For the rock button
rock.addEventListener("mouseover",function(){
    rock.style.backgroundColor = "pink";
}) 
rock.addEventListener("mouseout",function(){
    rock.style.backgroundColor = "white";
})
//For the paper button
paper.addEventListener("mouseover",function(){
    paper.style.backgroundColor = "pink";
}) 
paper.addEventListener("mouseout",function(){
    paper.style.backgroundColor = "white";
})
//For the scissors button
scissors.addEventListener("mouseover",function(){
    scissors.style.backgroundColor = "pink";
}) 
scissors.addEventListener("mouseout",function(){
    scissors.style.backgroundColor = "white";
})
//For reset button and back button
reset.addEventListener("mouseover",function(){
    reset.classList.add("hovered2");
})
reset.addEventListener("mouseout",function(){
    reset.classList.remove("hovered2");
})
back.addEventListener("mouseover",function(){
    back.classList.add("hovered2");
})
back.addEventListener("mouseout",function(){
    back.classList.remove("hovered2");
})

//Triggers when the reset button is clicked
reset.addEventListener("click",function(){
    h1.style.backgroundColor = "black";
    userScoreDisplay.textContent = 0;us=0;
    CPUscoreDisplay.textContent = 0;cs=0;
    resultDisplay.textContent = "";
    gameOver = false;
})

//===========functions That will be used==============

//function to toggle colors 
function changeToPurple(target){
    document.querySelector(target).style.backgroundColor = "purple";
    setTimeout(changeToWhite(target),1000);
}
function changeToWhite(target){
    setTimeout(function(){
        document.querySelector(target).style.backgroundColor = "white";
    },1000)
}
//To compute what has CPU chosen
function randomSelect(){
    choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1){
        CPUchoice = ".rock";
    }else if(choice == 2){
        CPUchoice = ".paper";
    }else if(choice == 3){
        CPUchoice = ".scissors";
    }else{
        alert("something went wrong!");
    }
}
//To Compute the results
function checkWhoWon(uc,cc){
    if(uc == "rock" && cc == ".paper"){
        return "lose";
    }else if(uc == "rock" && cc == ".scissors"){
        return "win";
    }else if(uc == "paper" && cc == ".scissors"){
        return "lose";
    }else if(uc == "paper" && cc == ".rock"){
        return "win";
    }else if(uc == "scissors" && cc == ".paper"){
        return "win";
    }else if(uc == "scissors" && cc == ".rock"){
        return "lose";
    }else{
        return "tie";
    }
}
//To change the animation based on win or lose
function displayResult(result){
    if(!gameOver){
        if(result == "lose"){  
            cs++;
        }else if(result == "win"){
            us++;
        }
        userScoreDisplay.textContent = us;
        CPUscoreDisplay.textContent = cs;
    }

    //Triggers when one wins the match
    if(us == 5 && cs == 5){
        resultDisplay.textContent = "It's a tie";
        h1.style.backgroundColor = "steelblue";
        gameOver = true;
    }
    else if(cs == 5){  
        resultDisplay.textContent = "You Lost!!";
        h1.style.backgroundColor = "red";
        gameOver = true;
    }else if(us == 5){
        resultDisplay.textContent = "You Win!!";
        h1.style.backgroundColor = "green";
        gameOver = true;
    }
}